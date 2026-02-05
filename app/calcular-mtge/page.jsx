// app/calcular-mtge/page.jsx
"use client";

import React, { useMemo, useState } from "react";

function fmt(n) {
  return n.toLocaleString("es-EC", { maximumFractionDigits: 2 });
}

export default function CalcularMTGEPage() {
  // =========================
  // Opciones (rangos/puntajes)
  // =========================
  const titularesOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "0 a 1.000 titulares", points: 1 },
    { label: "1.001 a 10.000 titulares", points: 2 },
    { label: "10.001 a 100.000 titulares", points: 3 },
    { label: "101.000 o más titulares", points: 4 }
  ];

  const volumenOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Hasta 10 tipos de datos por titular", points: 0.5 },
    { label: "11 a 30 tipos de datos por titular", points: 1 },
    { label: "31 a 100 tipos de datos por titular", points: 2 },
    { label: "101 o más tipos de datos por titular", points: 3 }
  ];

  const categoriasOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Solo datos básicos (no categorías especiales)", points: 0.5 },
    { label: "Incluye 1 categoría especial", points: 2 },
    {
      label:
        "Más de 1 categoría especial / grupos vulnerables / penal o infracciones",
      points: 3
    }
  ];

  const frecuenciaOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Puntual", points: 0.5 },
    { label: "Periódica o recurrente", points: 1 },
    { label: "Continua o en tiempo real", points: 2 }
  ];

  const permanenciaOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Ocasional", points: 0.5 },
    { label: "Temporal", points: 1 },
    { label: "Prolongada", points: 2 }
  ];

  const geografiaOptions = [
    { label: "Selecciona una opción…", points: 0, placeholder: true },
    { label: "Local", points: 1 },
    { label: "Nacional", points: 2 },
    { label: "Global o transfronterizo", points: 3 }
  ];

  // =========================
  // Estado (índices)
  // =========================
  const [titularesIdx, setTitularesIdx] = useState(0);
  const [volumenIdx, setVolumenIdx] = useState(0);
  const [categoriasIdx, setCategoriasIdx] = useState(0);
  const [frecuenciaIdx, setFrecuenciaIdx] = useState(0);
  const [permanenciaIdx, setPermanenciaIdx] = useState(0);
  const [geografiaIdx, setGeografiaIdx] = useState(0);

  // Tooltip / Modal (Calificación directa)
  const [openHelpKey, setOpenHelpKey] = useState(null);
  function openHelp(key) {
    setOpenHelpKey(key);
  }
  function closeHelp() {
    setOpenHelpKey(null);
  }

  // =========================
  // Calificación directa
  // =========================
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
      what: "Tratamientos que involucran datos sensibles o salud; por su naturaleza requieren mayor nivel de control.",
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
      what: "Evaluación automatizada para analizar o predecir aspectos de una persona con efectos relevantes.",
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
      what: "Monitoreo sistemático de personas en espacios de acceso público (cámaras u otros sensores).",
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
        "Tracking por GPS vinculado a personas (personal/usuarios/vehículos)."
      ],
      quickCheck: [
        "¿Usas huella/rostro/iris/voz para autenticar o registrar?",
        "¿Capturas ubicación precisa o recorridos vinculados a personas?"
      ]
    },
    crediticia: {
      what: "Tratamiento para evaluar solvencia/riesgo económico o información crediticia con impacto en decisiones.",
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
        "¿Recolectas datos de actividad/comportamiento de menores en plataformas?"
      ]
    },
    transferencias: {
      what: "Transferencias recurrentes/estructurales de datos como parte del flujo del negocio (internas o internacionales).",
      examples: [
        "Proveedores cloud fuera del país con intercambio continuo.",
        "Procesadores externos que reciben datos periódicamente."
      ],
      quickCheck: [
        "¿Envías datos a terceros de forma frecuente y no solo puntual?",
        "¿Existen transferencias internacionales como parte normal del servicio?"
      ]
    },
    courier: {
      what: "Tratamiento sistemático propio de mensajería/courier: guías, entregas, tracking, remitentes y destinatarios.",
      examples: [
        "Gestión de envíos con tracking.",
        "Validaciones de entrega, firmas, georreferenciación de entregas."
      ],
      quickCheck: [
        "¿Tu operación principal es entrega/gestión de envíos y guías?",
        "¿Mantienes tracking vinculado a personas?"
      ]
    }
  };

  const [directSelected, setDirectSelected] = useState({});

  // =========================
  // Cálculo de P
  // =========================
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

  const isComplete = useMemo(() => {
    const selected = [
      titularesOptions[titularesIdx],
      volumenOptions[volumenIdx],
      categoriasOptions[categoriasIdx],
      frecuenciaOptions[frecuenciaIdx],
      permanenciaOptions[permanenciaIdx],
      geografiaOptions[geografiaIdx]
    ];
    return selected.every((o) => !o?.placeholder);
  }, [
    titularesIdx,
    volumenIdx,
    categoriasIdx,
    frecuenciaIdx,
    permanenciaIdx,
    geografiaIdx
  ]);

  const totalFinal = isDirect ? 0 : total;
  const isGranEscala = isDirect || (isComplete && totalFinal >= 6);

  const variablesDisabled = isDirect;

  // =========================
  // Mantener scroll al cambiar selects
  // =========================
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
          {disabled ? (
            <div style={styles.noAplicaPill}>No aplica</div>
          ) : (
            <select
              value={valueIdx}
              disabled={disabled}
              className="uiField"
              onChange={(e) => {
                const next = Number(e.target.value);
                keepScrollWhile(() => onChange(next));
                e.target.blur();
              }}
            >

              {options.map((o, i) => (
                <option key={o.label} value={i}>
                  {o.label}
                  {!o.placeholder ? ` — ${fmt(o.points)} pts` : ""}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    );
  }

  function toggleDirect(key) {
    setDirectSelected((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      const nextIsDirect = Object.values(next).some(Boolean);

      if (nextIsDirect) {
        // Encera variables al activar directa
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
      `Calificación directa: ${isDirect ? "SÍ" : "NO"}`
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
        `Puntaje total (P): ${fmt(totalFinal)} pts`
      );
    }

    lines.push(
      "",
      `Resultado: ${isGranEscala ? "CALIFICA como Gran Escala" : isComplete ? "NO califica como Gran Escala" : "INCOMPLETO"
      }`
    );

    await navigator.clipboard.writeText(lines.join("\n"));
    alert("Copiado al portapapeles.");
  }

  // =========================
  // Bloques informativos
  // =========================
  function ObligacionesYCTA() {
    return (
      <section style={{ ...styles.card, ...styles.obligCard, ...styles.glowWarn }}>
        <div style={styles.cardTitle}>¿Qué implica calificar como Gran Escala?</div>
        <p style={styles.small}>
          <b>Recomendación operativa (no literal de la resolución):</b> checklist de buenas prácticas
          para evidenciar cumplimiento cuando una operación califica como gran escala.
        </p>

        <div style={styles.obligGrid}>
          <div style={styles.obligItem}>
            <div style={styles.obligTitle}>Gobernanza y roles</div>
            <ul style={styles.obligList}>
              <li>Designar/fortalecer el rol responsable de privacidad (DPD/DPO o equivalente).</li>
              <li>Definir responsables internos, dueños de procesos y un plan de cumplimiento.</li>
            </ul>
          </div>

          <div style={styles.obligItem}>
            <div style={styles.obligTitle}>Registro y documentación</div>
            <ul style={styles.obligList}>
              <li>Actualizar el Registro de Actividades de Tratamiento (RAT) y el Inventario de datos.</li>
              <li>Mapear flujos, finalidades, bases legales y transferencias (incl. internacionales).</li>
            </ul>
          </div>

          <div style={styles.obligItem}>
            <div style={styles.obligTitle}>Análisis de riesgos y DPIA</div>
            <ul style={styles.obligList}>
              <li>Realizar evaluación de riesgos y, cuando corresponda, Evaluación de Impacto (DPIA).</li>
              <li>Definir medidas técnicas/organizativas y plan de tratamiento del riesgo.</li>
            </ul>
          </div>

          <div style={styles.obligItem}>
            <div style={styles.obligTitle}>Transparencia y derechos</div>
            <ul style={styles.obligList}>
              <li>Revisar avisos de privacidad, consentimientos y canal de derechos (ARCO+).</li>
              <li>Procedimientos y SLAs internos para responder solicitudes.</li>
            </ul>
          </div>

          <div style={styles.obligItem}>
            <div style={styles.obligTitle}>Seguridad y brechas</div>
            <ul style={styles.obligList}>
              <li>Controles de seguridad (accesos, cifrado, respaldos, registro, segregación).</li>
              <li>Procedimiento de incidentes y notificación de brechas cuando aplique.</li>
            </ul>
          </div>

          <div style={styles.obligItem}>
            <div style={styles.obligTitle}>Proveedores y transferencias</div>
            <ul style={styles.obligList}>
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
              className="uiBtn uiBtnPrimary"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaBtnPrimary}
            >
              Agendar diagnóstico
            </a>

            <a
              href="https://wa.me/593992801005"
              target="_blank"
              className="uiBtn uiBtnPrimary"
              rel="noopener noreferrer"
              style={styles.ctaBtn}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  function MarcoResolucionBox() {
    return (
      <section style={{ ...styles.card, ...styles.resolCard }}>
        <div style={styles.cardTitle}>Marco de la resolución (lo esencial)</div>
        <p style={styles.small}>
          <b>Resumen basado en la resolución:</b> la determinación de “gran escala” puede darse por{" "}
          <b>supuestos de calificación directa</b> o por <b>evaluación por variables (puntaje)</b>.
          Esta herramienta te ayuda a ordenar la decisión y documentar evidencia.
        </p>

        <ul style={styles.resolList}>
          <li>
            <b>Ruta A — Calificación directa:</b> si se configura alguno de los supuestos, la
            calificación es directa (no necesitas puntuar variables).
          </li>
          <li>
            <b>Ruta B — Evaluación por variables:</b> si no aplica directa, se suman las variables
            para obtener <b>P</b> y comparar con el umbral operativo configurado en la calculadora.
          </li>
          <li style={{ opacity: 0.92 }}>
            <b>Importante:</b> este sitio no sustituye asesoría legal; siempre valida con tu contexto,
            evidencias y decisiones internas.
          </li>
        </ul>
      </section>
    );
  }

  function IconCopy({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"
        />
      </svg>
    );
  }

  function IconReset({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5a5 5 0 0 1-9.9 1H5.02A7 7 0 0 0 19 13c0-3.87-3.13-7-7-7z"
        />
      </svg>
    );
  }




  // =========================
  // Render
  // =========================
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
            <button onClick={copySummary} className="uiBtn uiBtnPrimary">
              <IconCopy className="uiIcon" />
              <span>Copiar resumen</span>
            </button>

            <button onClick={resetAll} className="uiBtn uiBtnGhost">
              <IconReset className="uiIcon" />
              <span>Reset</span>
            </button>
          </div>



        </header>

        {/* ✅ Opción 2: Sección basada en resolución con borde naranja/amarillo */}
        <MarcoResolucionBox />

        {/* 1) Calificación directa */}
        <section style={{ ...styles.card, position: "relative", overflow: "hidden" }}>
          {isDirect ? (
            <div style={styles.directOverlay} aria-hidden="true">
              <div style={styles.directOverlayText}>CALIFICA COMO GRAN ESCALA</div>
            </div>
          ) : null}

          <div style={styles.cardTitle}>Calificación directa — opcional</div>
          <p style={styles.small}>
            Si aplica alguno de estos supuestos, la calificación como gran escala es directa.
          </p>

          <div style={styles.directGrid} className="directGridUI">
            {directCases.map((c) => (
              <div key={c.key} className="uiCheckCard">
                <div className="uiCheckRow">
                  <label className="uiCheckLabel">
                    <input
                      type="checkbox"
                      checked={Boolean(directSelected[c.key])}
                      onChange={() => toggleDirect(c.key)}
                    />
                    <span>{c.label}</span>
                  </label>

                  <button
                    type="button"
                    className="uiInfoBtn"
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

        {/* ✅ Si es directa, obligaciones aquí */}
        {isDirect ? <ObligacionesYCTA /> : null}

        {/* 2) Variables */}
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

        {/* Resultado */}
        <section style={{ ...styles.card, ...styles.resultCard }}>
          <div style={styles.resultTop}>
            <div>
              <div style={styles.resultLabel}>
                {isDirect ? "Resultado" : "Puntaje total (P)"}
              </div>

              <div style={styles.resultValue}>
                {isDirect ? "—" : isComplete ? `${fmt(totalFinal)} pts` : "0 pts"}
              </div>

              <div style={styles.small}>
                {isDirect
                  ? "Determinación por calificación directa (no aplica cálculo por puntaje)."
                  : isComplete
                    ? "P = suma de las 6 variables"
                    : "Selecciona una opción en cada variable para calcular P."}
              </div>
            </div>

            <div style={styles.badgeWrap}>
              {isDirect ? (
                <div className={`uiBadge ${isGranEscala ? "uiBadgeOk" : "uiBadgeNo"}`}>
                  {isGranEscala ? "CALIFICA COMO GRAN ESCALA" : "NO CALIFICA COMO GRAN ESCALA"}
                </div>
              ) : !isComplete ? (
                <div style={{ ...styles.badge, ...styles.badgeNeutral }}>
                  COMPLETA LAS VARIABLES
                </div>
              ) : isGranEscala ? (
                <div style={{ ...styles.badge, ...styles.badgeOk }}>
                  CALIFICA COMO GRAN ESCALA
                </div>
              ) : (
                <div style={{ ...styles.badge, ...styles.badgeNo }}>
                  NO CALIFICA COMO GRAN ESCALA
                </div>
              )}

              {isDirect ? <div style={styles.note}>Marcaste calificación directa.</div> : null}
            </div>
          </div>
        </section>

        {/* ✅ Si califica por puntaje (y NO es directa), obligaciones aquí */}
        {!isDirect && isGranEscala ? <ObligacionesYCTA /> : null}

        {/* Modal ayuda */}
        {openHelpKey ? (
          <div style={styles.modalOverlay} onClick={closeHelp} role="dialog" aria-modal="true">
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
    marginBottom: 18
  },
  h1: { margin: 0, fontSize: 30, letterSpacing: -0.3 },
  sub: { margin: "8px 0 0 0", opacity: 0.9 },

  headerBtns: { display: "flex", gap: 10 },


  card: {
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(232,238,252,.12)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    boxShadow: "0 18px 60px rgba(0,0,0,.25)"
  },
  cardTitle: { fontWeight: 800, marginBottom: 10 },

  // ✅ Borde naranja/amarillo con glow (la sección “Marco de la resolución”)
  resolCard: {
    border: "1px solid rgba(255, 193, 7, .55)",
    boxShadow:
      "0 0 0 1px rgba(255, 193, 7, .15), 0 0 22px rgba(255, 193, 7, .18), 0 18px 60px rgba(0,0,0,.25)",
    background:
      "linear-gradient(180deg, rgba(255,193,7,.06), rgba(255,255,255,.06))"
  },
  resolList: {
    margin: "10px 0 0 18px",
    lineHeight: 1.6,
    opacity: 0.92
  },

  row: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderTop: "1px solid rgba(232,238,252,.10)"
  },
  rowDisabled: { opacity: 0.55 },

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

  noAplicaPill: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(232,238,252,.16)",
    background: "rgba(255,255,255,.06)",
    color: "rgba(232,238,252,.85)",
    fontWeight: 900,
    textAlign: "center"
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

  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    width: "100%"
  },
  checkboxText: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10
  },

  directNotice: {
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(80, 200, 120, .10)",
    lineHeight: 1.5,
    fontSize: 13
  },

  variablesLockedHint: {
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(255, 255, 255, .06)",
    lineHeight: 1.5,
    fontSize: 13,
    opacity: 0.9
  },

  resultCard: { border: "1px solid rgba(232,238,252,.18)" },
  resultTop: {
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  resultLabel: { opacity: 0.9, fontWeight: 650 },
  resultValue: { fontSize: 40, fontWeight: 900, marginTop: 6 },

  badgeWrap: { textAlign: "right", minWidth: 260 },
  badge: {
    display: "inline-block",
    padding: "10px 12px",
    borderRadius: 999,
    fontWeight: 900,
    letterSpacing: 0.3,
    border: "1px solid rgba(232,238,252,.22)"
  },
  badgeOk: { background: "rgba(80, 200, 120, .18)" },
  badgeNo: { background: "rgba(255, 120, 120, .16)" },
  badgeNeutral: { background: "rgba(255, 255, 255, .08)" },

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
    fontWeight: 800
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
  modalList: { margin: "6px 0 0 18px" },

  directOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 2
  },
  directOverlayText: {
    fontSize: "clamp(26px, 5vw, 64px)",
    fontWeight: 950,
    letterSpacing: "2px",
    textTransform: "uppercase",
    transform: "rotate(-12deg)",
    color: "rgba(80, 200, 120, 0.70)",
    border: "2px solid rgba(80, 200, 120, 0.28)",
    padding: "18px 22px",
    borderRadius: 18,
    background: "rgba(80, 200, 120, 0.06)",
    transition: "transform .18s ease, opacity .18s ease",
    boxShadow: "0 18px 80px rgba(0,0,0,.25)"
  },

  obligCard: { border: "1px solid rgba(232,238,252,.18)" },
  obligGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginTop: 12
  },
  obligItem: {
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    borderRadius: 16,
    padding: 12
  },
  obligTitle: { fontWeight: 900, marginBottom: 8 },
  obligList: { margin: "0 0 0 18px", lineHeight: 1.6, opacity: 0.92 },

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
    flexWrap: "wrap"
  },
  ctaTitle: { fontWeight: 950, marginBottom: 4 },
  ctaBtns: { display: "flex", gap: 10, flexWrap: "wrap" },

  ctaBtnPrimary: {
    whiteSpace: "nowrap",
    textDecoration: "none",
    background: "rgba(80, 200, 120, .22)",
    border: "1px solid rgba(80, 200, 120, .34)",
    color: "#e8eefc",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 950,
    cursor: "pointer"
  },
  ctaBtn: {
    whiteSpace: "nowrap",
    textDecoration: "none",
    background: "transparent",
    border: "1px solid rgba(232,238,252,.22)",
    color: "#e8eefc",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 900,
    cursor: "pointer"
  },
  glowWarn: {
    border: "1px solid rgba(255, 193, 7, .55)",
    boxShadow:
      "0 0 0 1px rgba(255, 193, 7, .15), 0 0 22px rgba(255, 193, 7, .18), 0 18px 60px rgba(0,0,0,.25)",
    background:
      "linear-gradient(180deg, rgba(255,193,7,.06), rgba(255,255,255,.06))"
  },

  btnIcon: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "11px 14px",
    borderRadius: 14,
    cursor: "pointer",
    border: "1px solid rgba(6,182,212,.28)",
    background:
      "linear-gradient(90deg, rgba(34,197,94,.22), rgba(6,182,212,.20), rgba(245,158,11,.18))",
    color: "#e8eefc",
    fontWeight: 950,
    boxShadow:
      "0 14px 40px rgba(0,0,0,.25), 0 0 0 3px rgba(6,182,212,.08)",
    transition: "transform .12s ease, filter .12s ease, box-shadow .12s ease"
  },

  btnIconGhost: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "11px 14px",
    borderRadius: 14,
    cursor: "pointer",
    border: "1px solid rgba(232,238,252,.20)",
    background: "rgba(255,255,255,.06)",
    color: "#e8eefc",
    fontWeight: 900,
    boxShadow: "0 14px 40px rgba(0,0,0,.18)",
    transition: "transform .12s ease, filter .12s ease, box-shadow .12s ease"
  },


};
