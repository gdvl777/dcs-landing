// app/calcular-mtge/page.jsx
"use client";

import React, { useMemo, useState } from "react";

function fmt(n) {
  return n.toLocaleString("es-EC", { maximumFractionDigits: 2 });
}

export default function CalcularMTGEPage() {
  // Opciones (rangos/puntajes)
  const titularesOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "0 a 1.000 titulares", points: 1 },
    { label: "1.001 a 10.000 titulares", points: 2 },
    { label: "10.001 a 100.000 titulares", points: 3 },
    { label: "101.000 o más titulares", points: 4 },
  ];

  const volumenOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Hasta 10 tipos de datos por titular", points: 0.5 },
    { label: "11 a 30 tipos de datos por titular", points: 1 },
    { label: "31 a 100 tipos de datos por titular", points: 2 },
    { label: "101 o más tipos de datos por titular", points: 3 },
  ];

  const categoriasOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Solo datos básicos (no categorías especiales)", points: 0.5 },
    { label: "Incluye 1 categoría especial", points: 2 },
    {
      label:
        "Más de 1 categoría especial / grupos vulnerables / penal o infracciones",
      points: 3,
    },
  ];

  const frecuenciaOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Puntual", points: 0.5 },
    { label: "Periódica o recurrente", points: 1 },
    { label: "Continua o en tiempo real", points: 2 },
  ];

  const permanenciaOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Ocasional", points: 0.5 },
    { label: "Temporal", points: 1 },
    { label: "Prolongada", points: 2 },
  ];

  const geografiaOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Local", points: 1 },
    { label: "Nacional", points: 2 },
    { label: "Global o transfronterizo", points: 3 },
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
    { key: "courier", label: "Mensajería acelerada/expresa/courier" },
  ];

  const directHelp = {
    salud_sensible: {
      what: "Tratamientos que involucran datos sensibles o salud, por su naturaleza requieren mayor nivel de control.",
      examples: [
        "Historias clínicas, diagnósticos, tratamientos, exámenes, recetas.",
        "Datos sobre discapacidad, salud mental, biometría usada con fines médicos.",
      ],
      quickCheck: [
        "¿Tu organización presta servicios de salud o gestiona expedientes médicos?",
        "¿Guardas información clínica o de condición médica de personas?",
      ],
    },
    perfilamiento: {
      what: "Evaluación automatizada para analizar o predecir aspectos de una persona y que produce o puede producir efectos relevantes.",
      examples: [
        "Scoring automatizado para aprobar/rechazar servicios (crédito, seguros, becas).",
        "Segmentación automatizada con decisiones que afectan acceso/precios/beneficios.",
      ],
      quickCheck: [
        "¿Un sistema decide o influye fuertemente decisiones sobre personas sin revisión humana suficiente?",
        "¿El resultado afecta derechos, acceso a servicios o condiciones económicas?",
      ],
    },
    videovigilancia: {
      what: "Monitoreo sistemático de personas en espacios de acceso público, usualmente con cámaras u otros sensores.",
      examples: [
        "CCTV en entradas, pasillos, parqueaderos, salas de atención.",
        "Monitoreo permanente en zonas públicas de una instalación.",
      ],
      quickCheck: [
        "¿Hay cámaras grabando de forma continua o habitual?",
        "¿Se puede identificar directa o indirectamente a personas?",
      ],
    },
    biometricos_geo: {
      what: "Uso de biometría o geolocalización para identificar/validar identidad o rastrear ubicación.",
      examples: [
        "Huella/rostro para control de acceso o asistencia.",
        "Tracking por GPS de personal/usuarios/vehículos asociado a personas.",
      ],
      quickCheck: [
        "¿Usas huella/rostro/iris/voz para autenticar o registrar?",
        "¿Capturas ubicación precisa o recorridos vinculados a personas?",
      ],
    },
    crediticia: {
      what: "Tratamiento para evaluar solvencia, riesgo económico o información crediticia/financiera con impacto en decisiones.",
      examples: [
        "Evaluación de riesgo para crédito, seguros, arriendos.",
        "Consulta/gestión de buró, score, historial de pagos.",
      ],
      quickCheck: [
        "¿Tu proceso define aprobación/rechazo basado en capacidad de pago o historial?",
        "¿El resultado afecta condiciones económicas (tasa, prima, cupo, etc.)?",
      ],
    },
    nna: {
      what: "Tratamiento sistemático de datos de niñas, niños y adolescentes en contextos institucionales/educativos o plataformas.",
      examples: [
        "Plataformas educativas con registros de rendimiento/asistencia.",
        "Gestión de datos de estudiantes menores y sus representantes.",
      ],
      quickCheck: [
        "¿Tus titulares principales son menores de edad?",
        "¿Recolectas datos de comportamiento/actividad de menores en plataformas?",
      ],
    },
    transferencias: {
      what: "Transferencias recurrentes/estructurales de datos como parte del flujo del negocio (internas o internacionales).",
      examples: [
        "Proveedores cloud fuera del país con intercambio continuo.",
        "Matriz-sucursal, call centers, procesadores externos que reciben datos periódicamente.",
      ],
      quickCheck: [
        "¿Envías datos a terceros (proveedores) de forma frecuente y no solo puntual?",
        "¿Existen transferencias internacionales como parte normal del servicio?",
      ],
    },
    courier: {
      what: "Tratamiento sistemático propio de mensajería/courier: guías, entregas, tracking, destinatarios, remitentes.",
      examples: [
        "Gestión de envíos con datos de remitente/destinatario y tracking.",
        "Validaciones de entrega, firmas, georreferenciación de entregas.",
      ],
      quickCheck: [
        "¿Tu operación principal es entrega/retención de guías y datos de envío?",
        "¿Mantienes tracking vinculado a personas?",
      ],
    },
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
    geografiaIdx,
  ]);

  const isDirect = useMemo(
    () => Object.values(directSelected).some(Boolean),
    [directSelected]
  );

  const totalFinal = isDirect ? 0 : total;
  const isGranEscala = isDirect || totalFinal >= 6;

  // Evita que el select “mueva” el scroll (mobile/Chrome)
  function keepScrollWhile(fn) {
    const y = window.scrollY;
    fn();
    requestAnimationFrame(() => window.scrollTo(0, y));
  }

  function SelectRow({ label, options, valueIdx, onChange, disabled }) {
    return (
      <div style={{ ...styles.row, ...(disabled ? styles.rowDisabled : null) }}>
        <div style={styles.rowLeft}>
          <div style={styles.rowTitle}>{label}</div>
        </div>

        <div style={styles.rowRight}>
          <select
            value={valueIdx}
            disabled={disabled}
            onChange={(e) => {
              const next = Number(e.target.value);
              keepScrollWhile(() => onChange(next));
              e.target.blur();
            }}
            style={{ ...styles.select, ...(disabled ? styles.selectDisabled : null) }}
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
    setDirectSelected((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      const nextIsDirect = Object.values(next).some(Boolean);

      if (nextIsDirect) {
        // ✅ Encera las 6 variables si hay calificación directa
        setTitularesIdx(0);
        setVolumenIdx(0);
        setCategoriasIdx(0);
        setFrecuenciaIdx(0);
        setPermanenciaIdx(0);
        setGeografiaIdx(0);
      }

      return next;
    });
  }

  function resetAll() {
    setTitularesIdx(0);
    setVolumenIdx(0);
    setCategoriasIdx(0);
    setFrecuenciaIdx(0);
    setPermanenciaIdx(0);
    setGeografiaIdx(0);
    setDirectSelected({});
    setOpenHelpKey(null);
  }

  async function copySummary() {
    const selectedDirectLabels = directCases
      .filter((c) => Boolean(directSelected[c.key]))
      .map((c) => c.label);

    const lines = [
      "MTGE – Resumen",
      "",
      `Calificación directa: ${isDirect ? "SÍ" : "NO"}`,
    ];

    if (isDirect && selectedDirectLabels.length) {
      lines.push("Casos marcados:");
      selectedDirectLabels.forEach((lbl) => lines.push(`- ${lbl}`));
    }

    if (!isDirect) {
      lines.push(
        "",
        `1) Titulares: ${titularesOptions[titularesIdx].label} (${fmt(
          titularesOptions[titularesIdx].points
        )} pts)`,
        `2) Volumen: ${volumenOptions[volumenIdx].label} (${fmt(
          volumenOptions[volumenIdx].points
        )} pts)`,
        `3) Categorías: ${categoriasOptions[categoriasIdx].label} (${fmt(
          categoriasOptions[categoriasIdx].points
        )} pts)`,
        `4) Frecuencia: ${frecuenciaOptions[frecuenciaIdx].label} (${fmt(
          frecuenciaOptions[frecuenciaIdx].points
        )} pts)`,
        `5) Permanencia: ${permanenciaOptions[permanenciaIdx].label} (${fmt(
          permanenciaOptions[permanenciaIdx].points
        )} pts)`,
        `6) Geografía: ${geografiaOptions[geografiaIdx].label} (${fmt(
          geografiaOptions[geografiaIdx].points
        )} pts)`,
        `Puntaje total (P): ${fmt(total)} pts`
      );
    }

    lines.push(
      "",
      `Resultado: ${
        isGranEscala ? "CALIFICA como Gran Escala" : "NO califica como Gran Escala"
      }`
    );

    await navigator.clipboard.writeText(lines.join("\n"));
    alert("Copiado al portapapeles.");
  }

  const variablesDisabled = isDirect;

  function ObligacionesYCTA() {
    return (
      <section style={{ ...styles.card, ...styles.granBox }}>
        <div style={styles.cardTitle}>¿Qué implica calificar como Gran Escala?</div>
        <p style={styles.small}>
          <b>Recomendación operativa (no literal de la resolución):</b> checklist de buenas prácticas
          para evidenciar cumplimiento cuando una operación califica como gran escala.
        </p>

        <div style={styles.granGrid}>
          <div style={styles.granCard}>
            <div style={styles.granTitle}>Gobernanza y roles</div>
            <ul style={styles.granList}>
              <li>Designar/fortalecer el rol responsable de privacidad (DPD/DPO o equivalente).</li>
              <li>Definir responsables internos, dueños de procesos y un plan de cumplimiento.</li>
            </ul>
          </div>

          <div style={styles.granCard}>
            <div style={styles.granTitle}>Registro y documentación</div>
            <ul style={styles.granList}>
              <li>Actualizar el Registro de Actividades de Tratamiento (RAT) y el Inventario de datos.</li>
              <li>Mapear flujos, finalidades, bases legales y transferencias (incl. internacionales).</li>
            </ul>
          </div>

          <div style={styles.granCard}>
            <div style={styles.granTitle}>Análisis de riesgos y DPIA</div>
            <ul style={styles.granList}>
              <li>Realizar evaluación de riesgos y, cuando corresponda, Evaluación de Impacto (DPIA).</li>
              <li>Definir medidas técnicas/organizativas y plan de tratamiento del riesgo.</li>
            </ul>
          </div>

          <div style={styles.granCard}>
            <div style={styles.granTitle}>Transparencia y derechos</div>
            <ul style={styles.granList}>
              <li>Revisar avisos de privacidad, consentimientos y canal de derechos (ARCO+).</li>
              <li>Procedimientos y SLAs internos para responder solicitudes.</li>
            </ul>
          </div>

          <div style={styles.granCard}>
            <div style={styles.granTitle}>Seguridad y brechas</div>
            <ul style={styles.granList}>
              <li>Controles de seguridad (accesos, cifrado, respaldos, registro, segregación).</li>
              <li>Procedimiento de incidentes y notificación de brechas cuando aplique.</li>
            </ul>
          </div>

          <div style={styles.granCard}>
            <div style={styles.granTitle}>Proveedores y transferencias</div>
            <ul style={styles.granList}>
              <li>Contratos con encargados (proveedores) con cláusulas de protección de datos.</li>
              <li>Debida diligencia y control de transferencias dentro/fuera del país.</li>
            </ul>
          </div>
        </div>

        <div style={styles.ctaBar}>
          <div>
            <div style={styles.ctaTitle}>Agendemos un diagnóstico</div>
            <div style={styles.small}>
              Te guiamos con diagnóstico, RAT/RID, DPIA, políticas, contratos, evidencias y acompañamiento DPD/DPO.
            </div>
          </div>

          <div style={styles.ctaBtns}>
            <a
              href="https://wa.me/593992801005?text=Hola%20DataConSentido%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20porque%20mi%20operaci%C3%B3n%20califica%20como%20Gran%20Escala.%20%C2%BFCu%C3%A1les%20son%20los%20horarios%20disponibles%3F"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.ctaBtn, ...styles.ctaBtnPrimary }}
            >
              📅 Agendar diagnóstico
            </a>

            <a
              href="https://wa.me/593992801005"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaBtn}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.h1}>Calculadora MTGE</h1>
            <p style={styles.sub}>
              Primero revisa <b>calificación directa</b>. Si no aplica, calcula el puntaje con las{" "}
              <b>6 variables</b> (umbral <b>6 puntos</b>).
            </p>
          </div>

          <div style={styles.headerBtns}>
            <button onClick={copySummary} style={styles.btnGhost}>
              📋 Copiar resumen
            </button>
            <button onClick={resetAll} style={styles.btnGhost}>
              🔄 Reset
            </button>
          </div>
        </header>

        {/* Apartado: lo que indica la resolución (resumen operativo) */}
        <section style={styles.card}>
          <div style={styles.cardTitle}>Según la resolución (resumen operativo)</div>
          <ul style={{ margin: "10px 0 0 18px", lineHeight: 1.6, opacity: 0.92 }}>
            <li>
              La calificación de <b>gran escala</b> puede resultar por <b>calificación directa</b>{" "}
              (si se cumple alguno de los supuestos) o por <b>puntaje</b> (P).
            </li>
            <li>
              Si no hay calificación directa, se calcula <b>P</b> como la <b>suma de 6 variables</b>.
            </li>
            <li>
              Regla práctica en esta calculadora: si <b>P ≥ 6</b> ⇒ <b>califica como gran escala</b>.
            </li>
            <li style={{ opacity: 0.9 }}>
              Nota: Esta calculadora es un apoyo operativo; siempre valida con tu contexto y evidencia.
            </li>
          </ul>
        </section>

        {/* 1) CALIFICACIÓN DIRECTA (estampa aquí y SOLO aquí) */}
        <section style={{ ...styles.card, ...styles.directCard }}>
          {isDirect ? (
            <div style={styles.stampWrap} aria-hidden="true">
              <div style={styles.stampText}>CALIFICA COMO GRAN ESCALA</div>
            </div>
          ) : null}

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

          {isDirect ? (
            <div style={styles.directNotice}>
              Marcaste al menos un caso de <b>calificación directa</b>. Por claridad, las{" "}
              <b>6 variables</b> quedan bloqueadas.
            </div>
          ) : null}
        </section>

        {/* ✅ Si es directa: “¿Qué implica…?” va inmediatamente DESPUÉS (sección separada) */}
        {isDirect ? <ObligacionesYCTA /> : null}

        {/* 2) VARIABLES (bloqueadas si isDirect) */}
        <section style={styles.card}>
          <div style={styles.cardTitle}>Variables del MTGE</div>

          <SelectRow
            label="1) Número de titulares (12 meses)"
            options={titularesOptions}
            valueIdx={titularesIdx}
            onChange={setTitularesIdx}
            disabled={variablesDisabled}
          />
          <SelectRow
            label="2) Volumen de datos (tipos por titular)"
            options={volumenOptions}
            valueIdx={volumenIdx}
            onChange={setVolumenIdx}
            disabled={variablesDisabled}
          />
          <SelectRow
            label="3) Categorías de datos"
            options={categoriasOptions}
            valueIdx={categoriasIdx}
            onChange={setCategoriasIdx}
            disabled={variablesDisabled}
          />
          <SelectRow
            label="4) Frecuencia del tratamiento"
            options={frecuenciaOptions}
            valueIdx={frecuenciaIdx}
            onChange={setFrecuenciaIdx}
            disabled={variablesDisabled}
          />
          <SelectRow
            label="5) Permanencia del tratamiento"
            options={permanenciaOptions}
            valueIdx={permanenciaIdx}
            onChange={setPermanenciaIdx}
            disabled={variablesDisabled}
          />
          <SelectRow
            label="6) Alcance geográfico"
            options={geografiaOptions}
            valueIdx={geografiaIdx}
            onChange={setGeografiaIdx}
            disabled={variablesDisabled}
          />

          {variablesDisabled ? (
            <div style={styles.variablesLockedHint}>
              Variables bloqueadas por calificación directa. Si deseas calcular P, desmarca todas las
              opciones directas.
            </div>
          ) : null}
        </section>

        {/* RESULTADO */}
        <section style={{ ...styles.card, ...styles.resultCard }}>
          <div style={styles.resultTop}>
            <div>
              <div style={styles.resultLabel}>Puntaje total (P)</div>
              <div style={styles.resultValue}>{fmt(total)} pts</div>
              <div style={styles.small}>
                {isDirect ? "P es referencial (hay calificación directa)." : "P = suma de las 6 variables"}
              </div>
            </div>

            <div style={styles.badgeWrap}>
              {isGranEscala ? (
                <div style={{ ...styles.badge, ...styles.badgeOk }}>
                  ✅ CALIFICA COMO GRAN ESCALA
                </div>
              ) : (
                <div style={{ ...styles.badge, ...styles.badgeNo }}>
                  ⛔ NO CALIFICA COMO GRAN ESCALA
                </div>
              )}

              {isDirect ? <div style={styles.note}>Marcaste calificación directa.</div> : null}
            </div>
          </div>
        </section>

        {/* ✅ Si NO es directa y califica por puntaje: “¿Qué implica…?” va debajo del RESULTADO */}
        {!isDirect && isGranEscala ? <ObligacionesYCTA /> : null}

        {/* MODAL AYUDA */}
        {openHelpKey ? (
          <div
            style={styles.modalOverlay}
            onClick={closeHelp}
            role="dialog"
            aria-modal="true"
          >
            <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>
                  {directCases.find((x) => x.key === openHelpKey)?.label}
                </h3>
                <button type="button" style={styles.modalClose} onClick={closeHelp}>
                  Cerrar
                </button>
              </div>

              <div style={styles.modalBody}>
                <div style={styles.modalSectionTitle}>Qué contempla</div>
                <div>{directHelp[openHelpKey]?.what}</div>

                <div style={styles.modalSectionTitle}>Ejemplos</div>
                <ul style={styles.modalList}>
                  {(directHelp[openHelpKey]?.examples || []).map((ex) => (
                    <li key={ex}>{ex}</li>
                  ))}
                </ul>

                <div style={styles.modalSectionTitle}>Checklist rápido</div>
                <ul style={styles.modalList}>
                  {(directHelp[openHelpKey]?.quickCheck || []).map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
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
    marginBottom: 18,
  },
  h1: { margin: 0, fontSize: 30, letterSpacing: -0.3 },
  sub: { margin: "8px 0 0 0", opacity: 0.9 },

  headerBtns: { display: "flex", gap: 10, flexWrap: "wrap" },
  btnGhost: {
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(232,238,252,.22)",
    color: "#e8eefc",
    padding: "10px 12px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 900,
    boxShadow: "0 14px 40px rgba(0,0,0,.18)",
  },

  card: {
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(232,238,252,.12)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    boxShadow: "0 18px 60px rgba(0,0,0,.25)",
  },
  cardTitle: { fontWeight: 900, marginBottom: 10 },

  row: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderTop: "1px solid rgba(232,238,252,.10)",
  },
  rowDisabled: { opacity: 0.55 },

  rowLeft: { flex: 1, minWidth: 240 },
  rowRight: { width: 420, maxWidth: "100%" },
  rowTitle: { fontWeight: 750 },

  select: {
    width: "100%",
    padding: "11px 12px",
    borderRadius: 14,
    border: "1px solid rgba(232,238,252,.18)",
    background: "rgba(11,18,32,.78)",
    color: "#e8eefc",
    outline: "none",
    boxShadow: "0 14px 40px rgba(0,0,0,.16)",
  },
  selectDisabled: {
    cursor: "not-allowed",
  },

  small: { fontSize: 12, opacity: 0.85, margin: "8px 0 0 0" },

  directGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 10,
  },

  checkboxItem: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    padding: 12,
    borderRadius: 16,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
  },

  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    width: "100%",
  },
  checkboxText: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    lineHeight: 1.35,
  },

  directNotice: {
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(80, 200, 120, .10)",
    lineHeight: 1.5,
    fontSize: 13,
  },

  variablesLockedHint: {
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(255, 255, 255, .06)",
    lineHeight: 1.5,
    fontSize: 13,
    opacity: 0.9,
  },

  resultCard: { border: "1px solid rgba(232,238,252,.18)" },
  resultTop: {
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  resultLabel: { opacity: 0.9, fontWeight: 750 },
  resultValue: { fontSize: 40, fontWeight: 950, marginTop: 6 },

  badgeWrap: { textAlign: "right", minWidth: 260 },
  badge: {
    display: "inline-block",
    padding: "10px 12px",
    borderRadius: 999,
    fontWeight: 950,
    letterSpacing: 0.3,
    border: "1px solid rgba(232,238,252,.22)",
  },
  badgeOk: { background: "rgba(80, 200, 120, .18)" },
  badgeNo: { background: "rgba(255, 120, 120, .16)" },

  note: { marginTop: 8, fontSize: 12, opacity: 0.9 },

  infoBtn: {
    marginLeft: 10,
    width: 32,
    height: 32,
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.22)",
    background: "rgba(255,255,255,.06)",
    color: "#e8eefc",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 950,
    lineHeight: 1,
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    zIndex: 9999,
  },
  modalCard: {
    width: "min(820px, 100%)",
    background: "rgba(11,18,32,.96)",
    border: "1px solid rgba(232,238,252,.14)",
    borderRadius: 18,
    boxShadow: "0 18px 80px rgba(0,0,0,.55)",
    padding: 16,
  },
  modalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 950,
    margin: 0,
    lineHeight: 1.25,
  },
  modalClose: {
    background: "transparent",
    border: "1px solid rgba(232,238,252,.20)",
    color: "#e8eefc",
    borderRadius: 12,
    cursor: "pointer",
    padding: "8px 10px",
    fontWeight: 900,
  },
  modalBody: {
    marginTop: 10,
    color: "rgba(232,238,252,.88)",
    lineHeight: 1.6,
    fontSize: 14,
  },
  modalSectionTitle: {
    margin: "14px 0 6px",
    fontSize: 13,
    fontWeight: 950,
    letterSpacing: 0.2,
    opacity: 0.95,
  },
  modalList: { margin: "6px 0 0 18px" },

  // ✅ Estampa: queda ANCLADA a la sección de calificación directa
  directCard: { position: "relative", overflow: "hidden" },
  stampWrap: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 50,
  },
  stampText: {
    fontSize: "clamp(22px, 5vw, 56px)",
    fontWeight: 950,
    letterSpacing: "2px",
    textTransform: "uppercase",
    transform: "translateZ(0) rotate(-12deg)",
    color: "rgba(80, 200, 120, 0.70)",
    border: "2px solid rgba(80, 200, 120, 0.28)",
    padding: "16px 18px",
    borderRadius: 18,
    background: "rgba(80, 200, 120, 0.06)",
    boxShadow: "0 18px 80px rgba(0,0,0,.25)",
  },

  // ✅ “Gran escala” con borde ámbar (premium) y responsive
  granBox: {
    border: "1px solid rgba(245, 158, 11, .38)",
    boxShadow: "0 0 0 4px rgba(245, 158, 11, .08), 0 22px 80px rgba(0,0,0,.28)",
  },
  granGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginTop: 12,
  },
  granCard: {
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    borderRadius: 16,
    padding: 12,
  },
  granTitle: { fontWeight: 950, marginBottom: 8 },
  granList: { margin: "0 0 0 18px", lineHeight: 1.6, opacity: 0.92 },

  ctaBar: {
    marginTop: 14,
    padding: 14,
    borderRadius: 16,
    border: "1px solid rgba(80, 200, 120, .22)",
    background: "rgba(80, 200, 120, .10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  ctaTitle: { fontWeight: 950, marginBottom: 4 },
  ctaBtns: { display: "flex", gap: 10, flexWrap: "wrap" },
  ctaBtn: {
    whiteSpace: "nowrap",
    textDecoration: "none",
    background: "transparent",
    border: "1px solid rgba(232,238,252,.22)",
    color: "#e8eefc",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 900,
    cursor: "pointer",
  },
  ctaBtnPrimary: {
    background: "rgba(80, 200, 120, .22)",
    border: "1px solid rgba(80, 200, 120, .34)",
  },
};
