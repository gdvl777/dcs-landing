import admin from "firebase-admin";
import fs from "fs";
import path from "path";

let db = null;

// Reusa la misma lógica de initFirebase que ya tienes
function initFirebase() {
  if (db) return db;

  try {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;

    if (!serviceAccountJson) {
      console.error("FIREBASE_SERVICE_ACCOUNT no está definido");
      return null;
    }

    const serviceAccount = JSON.parse(serviceAccountJson);

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }

    db = admin.firestore();
    return db;
  } catch (err) {
    console.error("Error inicializando Firebase Admin:", err);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Método no permitido" });
  }

  const dbInstance = initFirebase();
  if (!dbInstance) {
    return res
      .status(500)
      .json({ error: "Error de configuración del servidor (Firebase)" });
  }

  try {
    const { codigo, dia } = req.body || {};

    if (!codigo || !dia) {
      return res
        .status(400)
        .json({ error: "Faltan parámetros para descargar el archivo." });
    }

    const code = codigo.trim().toUpperCase();

    // Buscar documento por CAMPO "codigo"
    const codigosRef = dbInstance.collection("codigos-materiales");
    const querySnap = await codigosRef
      .where("codigo", "==", code)
      .limit(1)
      .get();

    if (querySnap.empty) {
      return res.status(400).json({ error: "Código inválido." });
    }

    const doc = querySnap.docs[0];
    const data = doc.data();

    // Aquí NO bloqueamos por "usado"; asumimos que ya validaste antes.
    // Si quieres puedes volver a comprobarlo:
    // if (!data.usado) { ... }

    const materialPath = data.material?.[dia];
    if (!materialPath) {
      return res
        .status(404)
        .json({ error: "No existe material configurado para este día." });
    }

    // `materialPath` es algo como "/materiales/masterclass-dia-1.pdf"
    const relativePath = materialPath.startsWith("/")
      ? materialPath
      : `/${materialPath}`;

    const filePath = path.join(process.cwd(), "public", relativePath);

    // Comprobar que el archivo existe
    if (!fs.existsSync(filePath)) {
      console.error("Archivo no encontrado:", filePath);
      return res.status(404).json({ error: "Archivo no encontrado." });
    }

    // Leer y enviar el PDF como descarga
    const stat = fs.statSync(filePath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${path.basename(filePath)}"`
    );
    res.setHeader("Content-Length", stat.size);

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } catch (err) {
    console.error("Error en /api/descargar:", err);
    return res
      .status(500)
      .json({ error: "Error interno al descargar el archivo." });
  }
}
