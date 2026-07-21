import { ImageResponse } from "next/og";
import { arquitecturaPdpProgram as program } from "@/app/data/arquitecturaPdpProgram";

export const runtime = "edge";
export const alt = `${program.editionLabel} de ${program.displayName}`;
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
          background: "#0b1220",
          color: "#f8fafc",
          padding: 72,
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
              borderRadius: 12,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {program.editionLabel}
          </div>
        </div>

        <div>
          <div style={{ color: "#fcd34d", fontSize: 28, fontWeight: 700 }}>
            PANSI · RAT ampliado · MTGE · EIPD
          </div>
          <div
            style={{
              marginTop: 24,
              maxWidth: 980,
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Arquitectura Profesional de Protección de Datos Personales
          </div>
          <div style={{ marginTop: 28, maxWidth: 900, color: "#cbd5e1", fontSize: 30 }}>
            Construye una arquitectura que puedas aplicar, justificar y defender.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#cbd5e1",
            fontSize: 24,
          }}
        >
          <span>{program.enrollment.statusLabel}</span>
          <span>{program.schedule.timeLabel} · Ecuador GMT-5</span>
        </div>
      </div>
    ),
    size
  );
}
