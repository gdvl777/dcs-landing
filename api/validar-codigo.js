import admin from "firebase-admin";

let db = null;

// Inicializar Firebase Admin de forma segura (sin romper la función)
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
  // Solo POST
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
    const { codigo } = req.body || {};

    if (!codigo || typeof codigo !== "string") {
      return res.status(400).json({ error: "Debes ingresar un código válido." });
    }

    const code = codigo.trim().toUpperCase();
    if (!code) {
      return res.status(400).json({ error: "El código no puede estar vacío." });
    }

    // 🔹 Buscar por el CAMPO "codigo", no por el ID del documento
    const codigosRef = dbInstance.collection("codigos-materiales");
    const querySnap = await codigosRef
      .where("codigo", "==", code)
      .limit(1)
      .get();

    if (querySnap.empty) {
      return res.status(400).json({
        error: "Código inválido. Verifícalo e inténtalo de nuevo.",
      });
    }

    const doc = querySnap.docs[0];
    const data = doc.data();

    if (data.usado) {
      return res.status(400).json({
        error: "Este código ya fue utilizado para descargar el material.",
      });
    }

    // Marcar como usado
    await doc.ref.update({
      usado: true,
      usadoEn: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Responder con las URLs de materiales
    return res.status(200).json({
      ok: true,
      material: data.material || null,
    });
  } catch (err) {
    console.error("Error en /api/validar-codigo:", err);
    return res
      .status(500)
      .json({ error: "Error interno al validar el código. Intenta nuevamente." });
  }
}
