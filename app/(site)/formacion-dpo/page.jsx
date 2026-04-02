import Link from "next/link";

const cursos = [
  {
    slug: "/formacion-avanzada",
    badge: "Programa activo",
    titulo: "Formación Avanzada para el DPO",
    descripcion:
      "Programa práctico para fortalecer capacidades en cumplimiento, documentación, operación real del rol DPO/DPD y evidencia verificable.",
    detalles: [
      "Enfoque aplicado",
      "Plantillas y recursos",
      "Casos prácticos",
      "Orientado a ejecución",
    ],
    cta: "Ver programa",
    destacado: false,
    icon: "📁",
  },
  {
    slug: "/arquitectura-pdp",
    badge: "Nuevo programa",
    titulo: "Arquitectura Profesional de Protección de Datos",
    descripcion:
      "Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP, con criterio técnico y visión ejecutiva.",
    detalles: [
      "PANSI · RAT · MTGE · EIPD",
      "4 sesiones intensivas",
      "10 horas de formación",
      "Aplicación inmediata",
    ],
    cta: "Ver detalles",
    destacado: true,
    icon: "🏛️",
  },
];

export const metadata = {
  title: "Formación DPO | DataConSentido",
  description:
    "Conoce los programas y cursos de DataConSentido para DPO, DPD y equipos de cumplimiento.",
};

export default function FormacionDpoPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "#008080",
        fontFamily: "Tahoma, Verdana, Arial, sans-serif",
        fontSize: "11px",
      }}
    >
      {/* Taskbar top */}
      <div
        style={{
          background: "linear-gradient(to bottom, #1c5fa8 0%, #0a246a 100%)",
          height: "28px",
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          gap: "4px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(to right, #3a7bd5, #245ebc)",
            borderRadius: "2px",
            padding: "2px 8px",
            color: "white",
            fontWeight: "bold",
            fontSize: "11px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            border: "1px solid #6fa3e0",
          }}
        >
          <span style={{ fontSize: "14px" }}>🪟</span> Inicio
        </div>
        <div style={{ flex: 1 }} />
        <div
          style={{
            background: "linear-gradient(to bottom, #1e5ba8 0%, #0a3080 100%)",
            border: "1px inset #0a246a",
            borderRadius: "2px",
            padding: "2px 8px",
            color: "#c0d8f8",
            fontSize: "10px",
          }}
        >
          DataConSentido — Formación DPO
        </div>
        <div style={{ flex: 1 }} />
        <div
          style={{
            color: "white",
            fontSize: "11px",
            fontWeight: "bold",
            padding: "2px 6px",
            background: "rgba(0,0,0,0.2)",
            borderRadius: "2px",
          }}
        >
          {new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Desktop area */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "860px",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Main window */}
        <div
          style={{
            background: "#ece9d8",
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            boxShadow: "2px 2px 0 #000, inset 1px 1px 0 #dfdfdf",
          }}
        >
          {/* Window title bar */}
          <div
            style={{
              background:
                "linear-gradient(to right, #0a246a 0%, #3a6ea5 50%, #0a246a 100%)",
              padding: "3px 6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>🎓</span>
              Formación DPO — DataConSentido
            </div>
            <div style={{ display: "flex", gap: "2px" }}>
              {["_", "□", "✕"].map((btn, i) => (
                <button
                  key={i}
                  style={{
                    width: "16px",
                    height: "14px",
                    background: "#d4d0c8",
                    border: "1px solid",
                    borderColor: "#ffffff #808080 #808080 #ffffff",
                    fontSize: "9px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* Menu bar */}
          <div
            style={{
              background: "#d4d0c8",
              borderBottom: "1px solid #808080",
              padding: "2px 4px",
              display: "flex",
              gap: "0px",
            }}
          >
            {["Archivo", "Editar", "Ver", "Favoritos", "Herramientas", "Ayuda"].map(
              (item) => (
                <button
                  key={item}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "2px 6px",
                    fontSize: "11px",
                    cursor: "pointer",
                    color: "#000",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#0a246a";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#000";
                  }}
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Toolbar */}
          <div
            style={{
              background: "#d4d0c8",
              borderBottom: "1px solid #aca899",
              padding: "3px 6px",
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            {[
              { icon: "◀", label: "Atrás" },
              { icon: "▶", label: "Adelante" },
              { icon: "✕", label: "Detener" },
              { icon: "↺", label: "Actualizar" },
              { icon: "🏠", label: "Inicio" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                title={label}
                style={{
                  background: "#d4d0c8",
                  border: "1px solid transparent",
                  padding: "2px 5px",
                  fontSize: "11px",
                  cursor: "pointer",
                  borderRadius: "2px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "9px",
                  gap: "1px",
                  color: "#000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "#ffffff #808080 #808080 #ffffff";
                  e.currentTarget.style.background = "#ece9d8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.background = "#d4d0c8";
                }}
              >
                <span style={{ fontSize: "14px" }}>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
            <div
              style={{
                width: "1px",
                height: "30px",
                background: "#808080",
                margin: "0 4px",
              }}
            />
            {/* Address bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                flex: 1,
              }}
            >
              <span style={{ fontSize: "11px", color: "#000" }}>
                Dirección:
              </span>
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  border: "1px solid",
                  borderColor: "#808080 #dfdfdf #dfdfdf #808080",
                  padding: "2px 4px",
                  fontSize: "11px",
                  color: "#000080",
                }}
              >
                http://dataconsentido.com/formacion-dpo
              </div>
              <button
                style={{
                  background: "#d4d0c8",
                  border: "1px solid",
                  borderColor: "#ffffff #808080 #808080 #ffffff",
                  padding: "2px 8px",
                  fontSize: "11px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                Ir
              </button>
            </div>
          </div>

          {/* Content area */}
          <div
            style={{
              background: "#ffffff",
              padding: "20px",
              minHeight: "400px",
            }}
          >
            {/* Hero section styled as an info panel */}
            <div
              style={{
                background: "#ece9d8",
                border: "2px solid",
                borderColor: "#ffffff #808080 #808080 #ffffff",
                padding: "12px 16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(to right, #0a246a 0%, #3a6ea5 100%)",
                  padding: "4px 10px",
                  marginBottom: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                📋 Formación DPO — Selección de Programas
              </div>
              <p style={{ color: "#000", fontSize: "12px", margin: 0 }}>
                Programas diseñados para fortalecer capacidades reales en
                protección de datos, cumplimiento, documentación y ejecución
                operativa.
              </p>
            </div>

            {/* Course cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "16px",
              }}
            >
              {cursos.map((curso) => (
                <div
                  key={curso.slug}
                  style={{
                    background: curso.destacado ? "#fffef0" : "#f0f0f0",
                    border: "2px solid",
                    borderColor: "#ffffff #808080 #808080 #ffffff",
                    boxShadow: "inset 1px 1px 0 #dfdfdf",
                  }}
                >
                  {/* Card title bar */}
                  <div
                    style={{
                      background: curso.destacado
                        ? "linear-gradient(to right, #8b0000 0%, #c04040 50%, #8b0000 100%)"
                        : "linear-gradient(to right, #0a246a 0%, #3a6ea5 50%, #0a246a 100%)",
                      padding: "3px 8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "11px",
                    }}
                  >
                    <span>
                      {curso.icon} {curso.titulo}
                    </span>
                    <span
                      style={{
                        fontSize: "9px",
                        background: "rgba(255,255,255,0.2)",
                        padding: "1px 4px",
                        borderRadius: "2px",
                      }}
                    >
                      {curso.badge}
                    </span>
                  </div>

                  <div style={{ padding: "12px" }}>
                    <p
                      style={{
                        color: "#000",
                        fontSize: "11px",
                        lineHeight: "1.6",
                        margin: "0 0 10px 0",
                      }}
                    >
                      {curso.descripcion}
                    </p>

                    {/* Details as checkbox list */}
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid",
                        borderColor: "#808080 #dfdfdf #dfdfdf #808080",
                        padding: "6px 8px",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#000080",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      >
                        Características del programa:
                      </div>
                      {curso.detalles.map((detalle) => (
                        <div
                          key={detalle}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "1px 0",
                            fontSize: "11px",
                            color: "#000",
                          }}
                        >
                          <span style={{ color: "#008000", fontWeight: "bold" }}>
                            ✓
                          </span>
                          {detalle}
                        </div>
                      ))}
                    </div>

                    {/* CTA button */}
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Link
                        href={curso.slug}
                        style={{
                          display: "inline-block",
                          background: "#d4d0c8",
                          border: "2px solid",
                          borderColor: "#ffffff #808080 #808080 #ffffff",
                          padding: "4px 16px",
                          fontSize: "11px",
                          color: "#000",
                          textDecoration: "none",
                          fontWeight: "bold",
                          cursor: "pointer",
                          boxShadow: "1px 1px 0 #000",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor =
                            "#808080 #ffffff #ffffff #808080";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.paddingTop = "5px";
                          e.currentTarget.style.paddingLeft = "17px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor =
                            "#ffffff #808080 #808080 #ffffff";
                          e.currentTarget.style.boxShadow = "1px 1px 0 #000";
                          e.currentTarget.style.paddingTop = "4px";
                          e.currentTarget.style.paddingLeft = "16px";
                        }}
                      >
                        {curso.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Status info */}
            <div
              style={{
                marginTop: "20px",
                padding: "8px 12px",
                background: "#ece9d8",
                border: "1px solid",
                borderColor: "#808080 #dfdfdf #dfdfdf #808080",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                color: "#000",
              }}
            >
              <span style={{ fontSize: "16px" }}>ℹ️</span>
              <span>
                Selecciona un programa para obtener más información. Para
                soporte técnico, contacta con DataConSentido.
              </span>
            </div>
          </div>

          {/* Status bar */}
          <div
            style={{
              background: "#d4d0c8",
              borderTop: "1px solid #808080",
              padding: "2px 8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "10px",
              color: "#000",
            }}
          >
            <div
              style={{
                flex: 1,
                borderRight: "1px solid #808080",
                paddingRight: "8px",
              }}
            >
              Listo
            </div>
            <div style={{ borderRight: "1px solid #808080", paddingRight: "8px" }}>
              📡 Intranet local
            </div>
            <div>100%</div>
          </div>
        </div>

        {/* Desktop icons row */}
        <div style={{ display: "flex", gap: "16px", padding: "8px" }}>
          {[
            { icon: "🗑️", label: "Papelera" },
            { icon: "💾", label: "Mis Documentos" },
            { icon: "🖥️", label: "Mi PC" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
              title={label}
            >
              <span style={{ fontSize: "28px" }}>{icon}</span>
              <span
                style={{
                  color: "#fff",
                  fontSize: "10px",
                  textShadow: "1px 1px 2px #000",
                  textAlign: "center",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom taskbar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to bottom, #245ebc 0%, #1e4fa8 50%, #1a3d8f 100%)",
          height: "30px",
          display: "flex",
          alignItems: "center",
          padding: "0 4px",
          gap: "4px",
          borderTop: "1px solid #6fa3e0",
          zIndex: 100,
        }}
      >
        <button
          style={{
            background:
              "linear-gradient(to bottom, #3d8b3d 0%, #2d6b2d 100%)",
            border: "1px solid #5aaf5a",
            borderRadius: "3px",
            padding: "2px 10px",
            color: "white",
            fontWeight: "bold",
            fontSize: "11px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span style={{ fontSize: "14px" }}>🪟</span> Inicio
        </button>

        <div
          style={{
            width: "1px",
            height: "22px",
            background: "rgba(255,255,255,0.3)",
            margin: "0 4px",
          }}
        />

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "2px",
            padding: "2px 10px",
            color: "#fff",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          🎓 Formación DPO
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            background: "linear-gradient(to bottom, #1c5fa8 0%, #0a3080 100%)",
            border: "1px inset rgba(0,0,0,0.4)",
            padding: "2px 8px",
            color: "#c0d8f8",
            fontSize: "11px",
            fontWeight: "bold",
          }}
        >
          {new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Padding so content isn't hidden behind taskbar */}
      <div style={{ height: "46px" }} />
    </main>
  );
}
