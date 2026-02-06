// app/calcular-mtge/page.jsx
"use client";

import React, { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gaEvent } from "@/lib/ga";


function fmt(n) {
  return n.toLocaleString("es-EC", { maximumFractionDigits: 2 });
}

export default function CalcularMTGEPage() {
  const pathname = usePathname();

  // =========================
  // NAV (fixed / responsive)
  // =========================
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { href: "/dpo", label: "Servicios DPO" },
    { href: "/formacion-dpo", label: "Formación DPO" },
    { href: "/calcular-mtge", label: "Calculadora MTGE" },
    { href: "/politica-de-privacidad", label: "Privacidad" }
  ];

  const isActive = (href) => pathname === href;

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

  // =========================
  // Tooltip / Modal (Calificación directa)
  // =========================
  const [openHelpKey, setOpenHelpKey] = useState(null);
  const [directSelected, setDirectSelected] = useState({});

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
      what:
        "Tratamientos que involucran datos sensibles o salud; por su naturaleza requieren mayor nivel de control y evidencia.",
      examples: [
        "Historias clínicas, diagnósticos, tratamientos, exámenes, recetas.",
        "Datos sobre discapacidad, salud mental, biometría con fines médicos."
      ],
      quickCheck: [
        "¿Prestas servicios de salud o gestionas expedientes médicos?",
        "¿Guardas información clínica o de condición médica de personas?"
      ]
    },
    perfilamiento: {
      what:
        "Evaluación automatizada para analizar o predecir aspectos de una persona y que produce o puede producir efectos relevantes.",
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
      what:
        "Monitoreo sistemático de personas en espacios de acceso público, usualmente con cámaras u otros sensores.",
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
      what:
        "Uso de biometría o geolocalización para identificar/validar identidad o rastrear ubicación.",
      examples: [
        "Huella/rostro para control de acceso o asistencia.",
        "Tracking por GPS de personal/usuarios/vehículos vinculado a personas."
      ],
      quickCheck: [
        "¿Usas huella/rostro/iris/voz para autenticar o registrar?",
        "¿Capturas ubicación precisa o recorridos vinculados a personas?"
      ]
    },
    crediticia: {
      what:
        "Tratamiento para evaluar solvencia, riesgo económico o información crediticia/financiera con impacto en decisiones.",
      examples: [
        "Evaluación de riesgo para crédito, seguros, arriendos.",
        "Consulta/gestión de buró, score, historial de pagos."
      ],
      quickCheck: [
        "¿Defines aprobación/rechazo basado en capacidad de pago o historial?",
        "¿El resultado afecta condiciones económicas (tasa, prima, cupo, etc.)?"
      ]
    },
    nna: {
      what:
        "Tratamiento sistemático de datos de niñas, niños y adolescentes en contextos institucionales/educativos o plataformas.",
      examples: [
        "Plataformas educativas con registros de rendimiento/asistencia.",
        "Gestión de datos de estudiantes menores y sus representantes."
      ],
      quickCheck: [
        "¿Tus titulares principales son menores de edad?",
        "¿Recolectas datos de actividad de menores en plataformas?"
      ]
    },
    transferencias: {
      what:
        "Transferencias recurrentes/estructurales de datos como parte del flujo del negocio (internas o internacionales).",
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
      what:
        "Tratamiento sistemático propio de mensajería/courier: guías, entregas, tracking, destinatarios, remitentes.",
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

  const openHelp = (key) => setOpenHelpKey(key);
  const closeHelp = () => setOpenHelpKey(null);

  // =========================
  // Cálculo total
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

  const totalFinal = isDirect ? 0 : total;
  const isGranEscala = isDirect || totalFinal >= 6;
  const variablesDisabled = isDirect;

  // =========================
  // Evita “jump” en mobile al cambiar select
  // =========================
  const keepScrollWhile = useCallback((fn) => {
    const y = window.scrollY;
    fn();
    requestAnimationFrame(() => window.scrollTo(0, y));
  }, []);

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
            className="uiField"
            style={disabled ? { cursor: "not-allowed" } : null}
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

    gaEvent("mtge_reset");

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
        `Puntaje total (P): ${fmt(total)} pts`
      );
    }

    lines.push(
      "",
      `Resultado: ${isGranEscala ? "CALIFICA como Gran Escala" : "NO califica como Gran Escala"
      }`
    );

    await navigator.clipboard.writeText(lines.join("\n"));

    gaEvent("mtge_copy_summary", {
      gran_escala: isGranEscala ? "si" : "no",
      metodo: isDirect ? "directa" : "puntaje",
      puntaje: total,
    });
    alert("Copiado al portapapeles.");
    
  }

  function ObligacionesYCTA() {
    return (
      <section className="card granBox" style={{ marginTop: 14 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 950 }}>
          ¿Qué implica calificar como Gran Escala?
        </h2>

        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.5 }}>
          <b>Recomendación operativa (no literal de la resolución):</b> checklist de buenas prácticas
          para evidenciar cumplimiento cuando una operación califica como gran escala.
        </p>

        <div className="granGrid" style={{ marginTop: 12 }}>
          <div className="card granCard">
            <div style={styles.obligTitle}>Gobernanza y roles</div>
            <ul style={styles.obligList}>
              <li>Designar/fortalecer un Delegado de Protección de Datos Personales.</li>
              <li>Definir responsables internos, dueños de procesos y un plan de cumplimiento.</li>
            </ul>
          </div>

          <div className="card granCard">
            <div style={styles.obligTitle}>Registro y documentación</div>
            <ul style={styles.obligList}>
              <li>Actualizar el Registro de Actividades de Tratamiento (RAT) y el Inventario de datos.</li>
              <li>Mapear flujos, finalidades, bases legales y transferencias (incl. internacionales).</li>
            </ul>
          </div>

          <div className="card granCard">
            <div style={styles.obligTitle}>Análisis de riesgos y DPIA</div>
            <ul style={styles.obligList}>
              <li>Realizar evaluación de riesgos y, cuando corresponda, Evaluación de Impacto (DPIA).</li>
              <li>Definir medidas técnicas/organizativas y plan de tratamiento del riesgo.</li>
            </ul>
          </div>

          <div className="card granCard">
            <div style={styles.obligTitle}>Transparencia y derechos</div>
            <ul style={styles.obligList}>
              <li>Revisar avisos de privacidad, consentimientos y canal de derechos (ARCO+).</li>
              <li>Procedimientos y SLAs internos para responder solicitudes.</li>
            </ul>
          </div>

          <div className="card granCard">
            <div style={styles.obligTitle}>Seguridad y brechas</div>
            <ul style={styles.obligList}>
              <li>Controles de seguridad (accesos, cifrado, respaldos, registro, segregación).</li>
              <li>Procedimiento de incidentes y notificación de brechas cuando aplique.</li>
            </ul>
          </div>

          <div className="card granCard">
            <div style={styles.obligTitle}>Proveedores y transferencias</div>
            <ul style={styles.obligList}>
              <li>Contratos con encargados (proveedores) con cláusulas de protección de datos.</li>
              <li>Debida diligencia y control de transferencias dentro/fuera del país.</li>
            </ul>
          </div>
        </div>

        <div style={styles.ctaBar}>
          <div style={{ minWidth: 220 }}>
            <div style={styles.ctaTitle}>Agendemos un diagnóstico</div>
            <div style={{ fontSize: 13, opacity: 0.88, lineHeight: 1.45 }}>
              Te guiamos con diagnóstico, RAT/RID, DPIA, políticas, contratos, evidencias y
              acompañamiento DPD/DPO.
            </div>
          </div>

          <div style={styles.ctaBtns}>
            <a
              href="https://wa.me/593992801005?text=Hola%20DataConSentido%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20porque%20mi%20operaci%C3%B3n%20califica%20como%20Gran%20Escala.%20%C2%BFCu%C3%A1les%20son%20los%20horarios%20disponibles%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="uiBtn uiBtnPrimary"
            >
              <span className="uiIcon">📅</span>
              Agendar diagnóstico
            </a>

            <a
              href="https://wa.me/593992801005"
              target="_blank"
              rel="noopener noreferrer"
              className="uiBtn uiBtnGhost"
              onClick={() => gaEvent("cta_whatsapp_click", { origen: "mtge" })}
            >
              <span className="uiIcon">💬</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  const showGranEscalaBlockAfterDirect = isDirect;
  const showGranEscalaBlockAfterResult = !isDirect && isGranEscala;

  return (
    <main style={styles.page} className="hasDock">
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.h1}>Calculadora MTGE</h1>
            <p style={styles.sub}>
              Primero revisa <b>calificación directa</b>. Si no aplica, calcula el puntaje con las{" "}
              <b>6 variables</b> (umbral <b>6 puntos</b>).
            </p>
          </div>
        </header>


        {/* Resumen operativo */}
        <section className="card cardGlow">
          <div style={styles.cardTitle}>
            Según la resolución No.{" "}
            <a
              href="https://spdp.gob.ec/r52026/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradLink"
            >
              <span className="gradText">SPDP-SPD-2026-0005-R</span>
              <svg
                className="extIcon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h7v2H7v10h10v-5h2v7H5V5z"
                />
              </svg>
            </a>{" "}
            (resumen operativo)
          </div>

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

        {/* 1) Calificación directa (SOLO esta card tiene estampa) */}
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

          <div className="directGridUI" style={{ marginTop: 10 }}>
            {directCases.map((c) => (
              <div key={c.key} className="uiCheckCard">
                <div className="uiCheckRow">
                  <label className="uiCheckLabel" style={styles.noWeirdBreaks}>
                    <input
                      type="checkbox"
                      checked={Boolean(directSelected[c.key])}
                      onChange={() => toggleDirect(c.key)}
                      style={{ marginTop: 2 }}
                    />
                    <span style={styles.noWeirdBreaks}>{c.label}</span>
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

        {/* ✅ Ahora SÍ: Gran escala va como sección SEPARADA (no dentro de la card de calificación directa) */}
        {showGranEscalaBlockAfterDirect ? <ObligacionesYCTA /> : null}

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
                <div className="uiBadge uiBadgeOk">CALIFICA COMO GRAN ESCALA</div>
              ) : (
                <div className="uiBadge uiBadgeNo">NO CALIFICA COMO GRAN ESCALA</div>
              )}

              {isDirect ? <div style={styles.note}>Marcaste calificación directa.</div> : null}
            </div>
          </div>
        </section>

        {/* ✅ Si califica por puntaje, va DESPUÉS del resultado como sección separada */}
        {showGranEscalaBlockAfterResult ? <ObligacionesYCTA /> : null}

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
                <button type="button" className="uiBtn uiBtnGhost" onClick={closeHelp}>
                  <span className="uiIcon">✖️</span>
                  Cerrar
                </button>
              </div>

              <div style={styles.modalBody}>
                <div style={styles.modalSectionTitle}>¿Qué contempla?</div>
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
      {/* ACTION DOCK fixed (siempre visible) */}
      <div style={styles.actionDock} role="region" aria-label="Acciones rápidas">
        <div style={styles.actionDockInner}>
          <button onClick={copySummary} className="uiBtn uiBtnGhost" style={styles.dockBtn}>
            <span className="uiIcon">📋</span>
            Copiar resumen
          </button>

          <button onClick={resetAll} className="uiBtn uiBtnGhost" style={styles.dockBtn}>
            <span className="uiIcon">🔄</span>
            Reset
          </button>
        </div>
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
    flexWrap: "wrap"
  },
  h1: { margin: 0, fontSize: 30, letterSpacing: -0.3 },
  sub: { margin: "8px 0 0 0", opacity: 0.9, lineHeight: 1.5 },

  headerBtns: { display: "flex", gap: 10, flexWrap: "wrap" },

  card: {
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(232,238,252,.12)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    boxShadow: "0 18px 60px rgba(0,0,0,.25)"
  },
  cardTitle: { fontWeight: 800, marginBottom: 10, fontSize: 16 },

  row: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderTop: "1px solid rgba(232,238,252,.10)",
    flexWrap: "wrap"
  },
  rowDisabled: { opacity: 0.55 },

  rowLeft: { flex: 1, minWidth: 240 },
  rowRight: { width: 420, maxWidth: "100%" },
  rowTitle: { fontWeight: 650 },

  small: { fontSize: 12, opacity: 0.85, margin: "8px 0 0 0" },

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
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  resultLabel: { opacity: 0.9, fontWeight: 650 },
  resultValue: { fontSize: 40, fontWeight: 900, marginTop: 6 },

  badgeWrap: { textAlign: "right", minWidth: 260 },
  note: { marginTop: 8, fontSize: 12, opacity: 0.9 },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    zIndex: 99999
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
    gap: 12,
    flexWrap: "wrap"
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 900,
    margin: 0,
    lineHeight: 1.25
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

  // Overlay “stamp” (solo dentro del section de calificación directa)
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
    boxShadow: "0 18px 80px rgba(0,0,0,.25)"
  },

  // Evita que el texto se “corte” feo en móvil (letras sueltas)
  noWeirdBreaks: {
    wordBreak: "normal",
    overflowWrap: "break-word",
    hyphens: "auto"
  },

  actionBar: {
    position: "sticky",
    top: "calc(var(--navH) + 10px)",   // queda debajo del nav fijo
    zIndex: 50,
    marginTop: 10,
    marginBottom: 14,
  },

  actionBarInner: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 16,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(11,18,32,.70)",
    boxShadow: "0 18px 60px rgba(0,0,0,.25)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  },

  actionBtn: {
    flex: "1 1 160px",   // en móvil se acomodan 2 por fila si hay espacio
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
  actionDock: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 14,
    zIndex: 99999,
    display: "flex",
    justifyContent: "center",
    padding: "0 14px",
    pointerEvents: "none", // ✅ importante: no bloquea scroll en el resto
  },

  actionDockInner: {
    pointerEvents: "auto",
    width: "min(980px, 100%)",
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 18,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(11,18,32,.72)",
    boxShadow: "0 18px 60px rgba(0,0,0,.35)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  },

  dockBtn: {
    flex: "1 1 220px",
    minHeight: 48,
  },

  ctaTitle: { fontWeight: 950, marginBottom: 4 },
  ctaBtns: { display: "flex", gap: 10, flexWrap: "wrap" }
};
