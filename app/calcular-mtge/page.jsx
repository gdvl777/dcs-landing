// app/calcular-mtge/page.jsx
"use client";

import React, { useMemo, useState } from "react";

function fmt(n) {
  return n.toLocaleString("es-EC", { maximumFractionDigits: 2 });
}

export default function CalcularMTGEPage() {
  // Opciones (rangos/puntajes)
  const titularesOptions = [
    { label: "0 a 1.000 titulares", points: 1 },
    { label: "1.001 a 10.000 titulares", points: 2 },
    { label: "10.001 a 100.000 titulares", points: 3 },
    { label: "101.000 o más titulares", points: 4 }
  ];

  const volumenOptions = [
    { label: "Hasta 10 tipos de datos por titular", points: 0.5 },
    { label: "11 a 30 tipos de datos por titular", points: 1 },
    { label: "31 a 100 tipos de datos por titular", points: 2 },
    { label: "101 o más tipos de datos por titular", points: 3 }
  ];

  const categoriasOptions = [
    { label: "Solo datos básicos (no categorías especiales)", points: 0.5 },
    { label: "Incluye 1 categoría especial", points: 2 },
    {
      label:
        "Más de 1 categoría especial / grupos vulnerables / penal o infracciones",
      points: 3
    }
  ];

  const frecuenciaOptions = [
    { label: "Puntual", points: 0.5 },
    { label: "Periódica o recurrente", points: 1 },
    { label: "Continua o en tiempo real", points: 2 }
  ];

  const permanenciaOptions = [
    { label: "Ocasional", points: 0.5 },
    { label: "Temporal", points: 1 },
    { label: "Prolongada", points: 2 }
  ];

  const geografiaOptions = [
    { label: "Local", points: 1 },
    { label: "Nacional", points: 2 },
    { label: "Global o transfronterizo", points: 3 }
  ];

  // Estado (índices)
  const [titularesIdx, setTitularesIdx] = useState(0);
  const [volumenIdx, setVolumenIdx] = useState(0);
  const [categoriasIdx, setCategoriasIdx] = useState(0);
  const [frecuenciaIdx, setFrecuenciaIdx] = useState(0);
  const [permanenciaIdx, setPermanenciaIdx] = useState(0);
  const [geografiaIdx, setGeografiaIdx] = useState(0);

  // ✅ Tooltip / Modal (Calificación directa)
  const [openHelpKey, setOpenHelpKey] = useState(null);

  function openHelp(key) {
    setOpenHelpKey(key);
  }

  function closeHelp() {
    setOpenHelpKey(null);
  }

  // Bloque opcional: calificación directa
  const directCases = [
    { key: "salud_sensible", label: "Tratamientos relativos a la salud / datos sensibles" },
    { key: "perfilamiento", label: "Evaluación automatizada (perfilamiento/predicción) con efectos" },
    { key: "videovigilancia", label: "Vigilancia sistemática en zonas de acceso público" },
    { key: "biometricos_geo", label: "Datos biométricos o geolocalización" },
    { key: "crediticia", label: "Información crediticia/financiera o riesgo económico" },
    { key: "nna", label: "Tratamiento sistemático de datos de NNA" },
    { key: "transferencias", label: "Transferencias sistemáticas dentro o fuera del país" },
    { key: "courier", label: "Mensajería acelerada/expresa/courier" }
  ];

  const directHelp = {
    salud_sensible: {
      what: "Tratamientos que involucran datos sensibles o salud, por su naturaleza requieren mayor nivel de control.",
      examples: [
        "Historias clínicas, diagnósticos, tratamientos, exámenes, recetas.",
        "Datos sobre discapacidad, salud mental, biometría usada con fines médicos."
      ],
      quickCheck: [
        "¿Tu organización presta servicios de salud o gestiona expedientes médicos?",
        "¿Guardas información clínica o de condición médica de personas?"
      ]
    },
    perfilamiento: {
      what: "Evaluación automatizada para analizar o predecir aspectos de una persona y que produce o puede producir efectos relevantes.",
      examples: [
        "Scoring automatizado para aprobar/rechazar servicios (crédito, seguros, becas).",
        "Segmentación automatizada con decisiones que afectan acceso/precios/beneficios."
      ],
      quickCheck: [
        "¿Un sistema decide o influye fuertemente decisiones sobre personas sin revisión humana suficiente?",
        "¿El resultado afecta derechos, acceso a servicios o condiciones económicas?"
      ]
    },
    videovigilancia: {
      what: "Monitoreo sistemático de personas en espacios de acceso público, usualmente con cámaras u otros sensores.",
      examples: [
        "CCTV en entradas, pasillos, parqueaderos, salas de atención.",
        "Monitoreo permanente en zonas públicas de una instalación."
      ],
      quickCheck: [
        "¿Hay cámaras grabando de forma continua o habitual?",
        "¿Se puede identificar directa o indirectamente a personas?"
      ]
    },
    biometricos_geo: {
      what: "Uso de biometría o geolocalización para identificar/validar identidad o rastrear ubicación.",
      examples: [
        "Huella/rostro para control de acceso o asistencia.",
        "Tracking por GPS de personal/usuarios/vehículos asociado a personas."
      ],
      quickCheck: [
        "¿Usas huella/rostro/iris/voz para autenticar o registrar?",
        "¿Capturas ubicación precisa o recorridos vinculados a personas?"
      ]
    },
    crediticia: {
      what: "Tratamiento para evaluar solvencia, riesgo económico o información crediticia/financiera con impacto en decisiones.",
      examples: [
        "Evaluación de riesgo para crédito, seguros, arriendos.",
        "Consulta/gestión de buró, score, historial de pagos."
      ],
      quickCheck: [
        "¿Tu proceso define aprobación/rechazo basado en capacidad de pago o historial?",
        "¿El resultado afecta condiciones económicas (tasa, prima, cupo, etc.)?"
      ]
    },
    nna: {
      what: "Tratamiento sistemático de datos de niñas, niños y adolescentes en contextos institucionales/educativos o plataformas.",
      examples: [
        "Plataformas educativas con registros de rendimiento/asistencia.",
        "Gestión de datos de estudiantes menores y sus representantes."
      ],
      quickCheck: [
        "¿Tus titulares principales son menores de edad?",
        "¿Recolectas datos de comportamiento/actividad de menores en plataformas?"
      ]
    },
    transferencias: {
      what: "Transferencias recurrentes/estructurales de datos como parte del flujo del negocio (internas o internacionales).",
      examples: [
        "Proveedores cloud fuera del país con intercambio continuo.",
        "Matriz-sucursal, call centers, procesadores externos que reciben datos periódicamente."
      ],
      quickCheck: [
        "¿Envías datos a terceros (proveedores) de forma frecuente y no solo puntual?",
        "¿Existen transferencias internacionales como parte normal del servicio?"
      ]
    },
    courier: {
      what: "Tratamiento sistemático propio de mensajería/courier: guías, entregas, tracking, destinatarios, remitentes.",
      examples: [
        "Gestión de envíos con datos de remitente/destinatario y tracking.",
        "Validaciones de entrega, firmas, georreferenciación de entregas."
      ],
      quickCheck: [
        "¿Tu operación principal es entrega/retención de guías y datos de envío?",
        "¿Mantienes tracking vinculado a personas?"
      ]
    }
  };

  const [directSelected, setDirectSelected] = useState({});

  const total = useMemo(() => {
    const t =
      titularesOptions[titularesIdx].points +
      volumenOptions[volumenIdx].points +
      categoriasOptions[categoriasIdx].points +
      frecuenciaOptions[frecuenciaIdx].points +
      permanenciaOptions[permanenciaIdx].points +
      geografiaOptions[geografiaIdx].points;

    return Math.round(t * 100) / 100;
  }, [
    titularesIdx,
    volumenIdx,
    categoriasIdx,
    frecuenciaIdx,
    permanenciaIdx,
    geografiaIdx
  ]);

  const isDirect = useMemo(
    () => Object.values(directSelected).some(Boolean),
    [directSelected]
  );

  const isGranEscala = isDirect || total >= 6;

  function SelectRow({ label, options, valueIdx, onChange }) {
    return (
      <div style={styles.row}>
        <div style={styles.rowLeft}>
          <div style={styles.rowTitle}>{label}</div>
        </div>

        <div style={styles.rowRight}>
          <select
            value={valueIdx}
            onChange={(e) => onChange(Number(e.target.value))}
            style={styles.select}
          >
            {options.map((o, i) => (
              <option key={o.label} value={i}>
                {o.label} — {fmt(o.points)} pts
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  function toggleDirect(key) {
    setDirectSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function resetAll() {
    setTitularesIdx(0);
    setVolumenIdx(0);
    setCategoriasIdx(0);
    setFrecuenciaIdx(0);
    setPermanenciaIdx(0);
    setGeografiaIdx(0);
    setDirectSelected({});
  }

  async function copySummary() {
    const lines = [
      "MTGE – Resumen",
      `Titulares: ${titularesOptions[titularesIdx].label} (${fmt(
        titularesOptions[titularesIdx].points
      )} pts)`,
      `Volumen: ${volumenOptions[volumenIdx].label} (${fmt(
        volumenOptions[volumenIdx].points
      )} pts)`,
      `Categorías: ${categoriasOptions[categoriasIdx].label} (${fmt(
        categoriasOptions[categoriasIdx].points
      )} pts)`,
      `Frecuencia: ${frecuenciaOptions[frecuenciaIdx].label} (${fmt(
        frecuenciaOptions[frecuenciaIdx].points
      )} pts)`,
      `Permanencia: ${permanenciaOptions[permanenciaIdx].label} (${fmt(
        permanenciaOptions[permanenciaIdx].points
      )} pts)`,
      `Geografía: ${geografiaOptions[geografiaIdx].label} (${fmt(
        geografiaOptions[geografiaIdx].points
      )} pts)`,
      `Puntaje total (P): ${fmt(total)} pts`,
      `Resultado: ${isGranEscala ? "CALIFICA como Gran Escala" : "NO califica como Gran Escala"
      }`,
      isDirect ? "Nota: Marcaste al menos un caso de calificación directa." : ""
    ].filter(Boolean);

    await navigator.clipboard.writeText(lines.join("\n"));
    alert("Copiado al portapapeles.");
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.h1}>Calculadora MTGE</h1>
            <p style={styles.sub}>
              Suma de 6 variables → <b>P</b>. Umbral: <b>6 puntos</b>.
            </p>
          </div>

          <div style={styles.headerBtns}>
            <button onClick={copySummary} style={styles.btnGhost}>
              Copiar resumen
            </button>
            <button onClick={resetAll} style={styles.btnGhost}>
              Reset
            </button>
          </div>
        </header>

        <section style={styles.card}>
          <div style={styles.cardTitle}>Variables del MTGE</div>

          <SelectRow
            label="1) Número de titulares (12 meses)"
            options={titularesOptions}
            valueIdx={titularesIdx}
            onChange={setTitularesIdx}
          />
          <SelectRow
            label="2) Volumen de datos (tipos por titular)"
            options={volumenOptions}
            valueIdx={volumenIdx}
            onChange={setVolumenIdx}
          />
          <SelectRow
            label="3) Categorías de datos"
            options={categoriasOptions}
            valueIdx={categoriasIdx}
            onChange={setCategoriasIdx}
          />
          <SelectRow
            label="4) Frecuencia del tratamiento"
            options={frecuenciaOptions}
            valueIdx={frecuenciaIdx}
            onChange={setFrecuenciaIdx}
          />
          <SelectRow
            label="5) Permanencia del tratamiento"
            options={permanenciaOptions}
            valueIdx={permanenciaIdx}
            onChange={setPermanenciaIdx}
          />
          <SelectRow
            label="6) Alcance geográfico"
            options={geografiaOptions}
            valueIdx={geografiaIdx}
            onChange={setGeografiaIdx}
          />
        </section>

        <section style={styles.card}>
          <div style={styles.cardTitle}>Calificación directa — opcional</div>
          <p style={styles.small}>
            Si aplica alguno de estos supuestos, la calificación como gran escala es directa.
          </p>

          <div style={styles.directGrid}>
            {directCases.map((c) => (
              <div key={c.key} style={styles.checkboxItem}>
                <div style={styles.checkboxRow}>
                  <label style={styles.checkboxText}>
                    <input
                      type="checkbox"
                      checked={Boolean(directSelected[c.key])}
                      onChange={() => toggleDirect(c.key)}
                    />
                    <span>{c.label}</span>
                  </label>

                  <button
                    type="button"
                    style={styles.infoBtn}
                    onClick={() => openHelp(c.key)}
                    aria-label={`Más información sobre: ${c.label}`}
                    title="Más información"
                  >
                    i
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>

        <section style={{ ...styles.card, ...styles.resultCard }}>
          <div style={styles.resultTop}>
            <div>
              <div style={styles.resultLabel}>Puntaje total (P)</div>
              <div style={styles.resultValue}>{fmt(total)} pts</div>
              <div style={styles.small}>P = suma de las 6 variables</div>
            </div>

            <div style={styles.badgeWrap}>
              {isGranEscala ? (
                <div style={{ ...styles.badge, ...styles.badgeOk }}>
                  CALIFICA COMO GRAN ESCALA
                </div>
              ) : (
                <div style={{ ...styles.badge, ...styles.badgeNo }}>
                  NO CALIFICA COMO GRAN ESCALA
                </div>
              )}
              {isDirect ? (
                <div style={styles.note}>Marcaste calificación directa.</div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const styles = {
  page: { padding: 24 },
  container: { maxWidth: 980, margin: "0 auto" },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 18
  },
  h1: { margin: 0, fontSize: 30, letterSpacing: -0.3 },
  sub: { margin: "8px 0 0 0", opacity: 0.9 },

  headerBtns: { display: "flex", gap: 10 },
  btnGhost: {
    background: "transparent",
    border: "1px solid rgba(232,238,252,.22)",
    color: "#e8eefc",
    padding: "10px 12px",
    borderRadius: 12,
    cursor: "pointer"
  },

  card: {
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(232,238,252,.12)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    boxShadow: "0 18px 60px rgba(0,0,0,.25)"
  },
  cardTitle: { fontWeight: 700, marginBottom: 10 },

  row: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderTop: "1px solid rgba(232,238,252,.10)"
  },
  rowLeft: { flex: 1, minWidth: 240 },
  rowRight: { width: 420, maxWidth: "100%" },
  rowTitle: { fontWeight: 650 },

  select: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(232,238,252,.20)",
    background: "rgba(11,18,32,.85)",
    color: "#e8eefc",
    outline: "none"
  },

  small: { fontSize: 12, opacity: 0.85, margin: "8px 0 0 0" },

  directGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 10
  },
  checkboxItem: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 14,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)"
  },

  resultCard: { border: "1px solid rgba(232,238,252,.18)" },
  resultTop: {
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  resultLabel: { opacity: 0.9, fontWeight: 650 },
  resultValue: { fontSize: 40, fontWeight: 800, marginTop: 6 },

  badgeWrap: { textAlign: "right", minWidth: 260 },
  badge: {
    display: "inline-block",
    padding: "10px 12px",
    borderRadius: 999,
    fontWeight: 800,
    letterSpacing: 0.3,
    border: "1px solid rgba(232,238,252,.22)"
  },
  badgeOk: { background: "rgba(80, 200, 120, .18)" },
  badgeNo: { background: "rgba(255, 120, 120, .16)" },

  note: { marginTop: 8, fontSize: 12, opacity: 0.9 },

  infoBtn: {
    marginLeft: 10,
    width: 26,
    height: 26,
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.22)",
    background: "rgba(255,255,255,.06)",
    color: "#e8eefc",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    lineHeight: 1
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    zIndex: 9999
  },
  modalCard: {
    width: "min(820px, 100%)",
    background: "rgba(11,18,32,.96)",
    border: "1px solid rgba(232,238,252,.14)",
    borderRadius: 18,
    boxShadow: "0 18px 80px rgba(0,0,0,.55)",
    padding: 16
  },
  modalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 900,
    margin: 0,
    lineHeight: 1.25
  },
  modalClose: {
    background: "transparent",
    border: "1px solid rgba(232,238,252,.20)",
    color: "#e8eefc",
    borderRadius: 12,
    cursor: "pointer",
    padding: "8px 10px",
    fontWeight: 700
  },
  modalBody: {
    marginTop: 10,
    color: "rgba(232,238,252,.88)",
    lineHeight: 1.6,
    fontSize: 14
  },
  modalSectionTitle: {
    margin: "14px 0 6px",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 0.2,
    opacity: 0.95
  },
  modalList: {
    margin: "6px 0 0 18px"
  },
  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12
  },
  checkboxText: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10
  }

};
