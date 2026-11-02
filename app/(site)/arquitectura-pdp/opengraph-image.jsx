import { ImageResponse } from "next/og";
import { arquitecturaPdpProgram as program } from "@/app/data/arquitecturaPdpProgram";

export const runtime = "edge";
export const alt = "Curso PANSI aplicado a la protección de datos personales de DataConSentido";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#102033",
          color: "#f8fafc",
          padding: 68,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 800 }}>{program.brand.name}</div>
          <div
            style={{
              border: "1px solid rgba(103, 232, 249, 0.45)",
              background: "rgba(103, 232, 249, 0.12)",
              color: "#cffafe",
              padding: "12px 18px",
              borderRadius: 10,
              fontSize: 23,
              fontWeight: 700,
            }}
          >
            Inicio 17 de noviembre de 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#fcd34d", fontSize: 28, fontWeight: 700 }}>
            Del diagnóstico a la evidencia
          </div>
          <div
            style={{
              marginTop: 22,
              maxWidth: 1010,
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.04,
            }}
          >
            Construye tu PANSI con medidas, responsables y evidencias
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#cbd5e1", fontSize: 24 }}>
          <span>6 sesiones · Aproximadamente 15 horas</span>
          <span>DataConSentido</span>
        </div>
      </div>
    ),
    size
  );
}
