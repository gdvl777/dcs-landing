"use client";

import { useMemo, useState } from "react";

const NODES = [
  {
    id: "root",
    x: 70,
    y: 300,
    w: 280,
    h: 72,
    label: "Mapa de Gestión de Riesgos\ny EIPD - DataConSentido",
    kind: "root",
  },

  {
    id: "p1",
    x: 430,
    y: 150,
    w: 240,
    h: 56,
    label: "I. Principios Fundamentales",
    kind: "section",
  },
  {
    id: "p2",
    x: 430,
    y: 560,
    w: 260,
    h: 56,
    label: "II. Etapas de la Gestión de Riesgos",
    kind: "section",
  },

  { id: "d0", x: 760, y: 40, w: 250, h: 46, label: "0. Definiciones Aplicadas", kind: "item" },
  { id: "d1", x: 760, y: 95, w: 280, h: 46, label: "1. Gestión de Riesgos: Fundamentos", kind: "item" },
  { id: "d2", x: 760, y: 150, w: 230, h: 46, label: "2. Integración de Riesgos", kind: "item" },
  { id: "d3", x: 760, y: 205, w: 250, h: 46, label: "3. Justificación de Rationales", kind: "item" },
  { id: "d4", x: 760, y: 260, w: 235, h: 46, label: "4. Conformidad en Riesgos", kind: "item" },
  { id: "d5", x: 760, y: 315, w: 285, h: 46, label: "5. Metarregulación y Rol de la SPDP", kind: "item" },
  { id: "d6", x: 760, y: 370, w: 170, h: 46, label: "6. Auditorías", kind: "item" },
  { id: "d7", x: 760, y: 425, w: 230, h: 46, label: "7. Vulneraciones de Seguridad", kind: "item" },
  { id: "d8", x: 760, y: 480, w: 260, h: 46, label: "8. Estándares de Mejores Prácticas", kind: "item" },
  { id: "dg", x: 760, y: 535, w: 180, h: 46, label: "Glosario de Siglas", kind: "item" },

  { id: "e1", x: 760, y: 620, w: 260, h: 46, label: "1. Establecimiento del Contexto", kind: "item" },
  { id: "e2", x: 760, y: 675, w: 230, h: 46, label: "2. Identificación de Riesgos", kind: "item" },
  { id: "e3", x: 760, y: 730, w: 190, h: 46, label: "3. Análisis de Riesgos", kind: "item" },
  { id: "e4", x: 760, y: 785, w: 225, h: 46, label: "4. Evaluación de Impacto (EIPD)", kind: "item" },
  { id: "e5", x: 760, y: 840, w: 220, h: 46, label: "5. Tratamiento de Riesgos", kind: "item" },
];

const EDGES = [
  ["root", "p1"],
  ["root", "p2"],

  ["p1", "d0"],
  ["p1", "d1"],
  ["p1", "d2"],
  ["p1", "d3"],
  ["p1", "d4"],
  ["p1", "d5"],
  ["p1", "d6"],
  ["p1", "d7"],
  ["p1", "d8"],
  ["p1", "dg"],

  ["p2", "e1"],
  ["p2", "e2"],
  ["p2", "e3"],
  ["p2", "e4"],
  ["p2", "e5"],
];

const DETAILS = {
  root: {
    category: "Mapa general",
    title: "Gestión de Riesgos y EIPD",
    description:
      "Mapa interactivo para explorar los fundamentos, etapas y componentes de la gestión de riesgos aplicada al tratamiento de datos personales dentro del marco de la LOPDP y la EIPD.",
    bullets: [
      "Integra fundamentos, etapas y criterios operativos.",
      "Sirve como estructura de estudio, consulta y comunicación.",
      "Permite conectar riesgo, cumplimiento y decisiones de mitigación.",
    ],
  },
  d0: {
    category: "Definición",
    title: "Riesgo",
    description:
      "Pérdida potencial, desastre u otro evento no deseado que puede vulnerar los derechos y libertades de los titulares de datos personales. Debe estimarse con probabilidades y/o frecuencias de ocurrencia asignadas a impactos de varias magnitudes.",
    bullets: [
      "No es un concepto binario.",
      "Debe cuantificarse o cualificarse con rationales.",
      "Debe distinguirse probabilidad estimable de posibilidad binaria.",
    ],
  },
  d1: {
    category: "Fundamentos",
    title: "Gestión de Riesgos",
    description:
      "Marco metodológico para identificar, analizar, evaluar y tratar riesgos en tratamientos de datos personales, vinculando seguridad, continuidad, cumplimiento y gobernanza.",
    bullets: [
      "Conecta cumplimiento con decisiones operativas.",
      "Permite priorizar controles y medidas.",
      "Se articula con la EIPD y con la responsabilidad proactiva.",
    ],
  },
  d2: {
    category: "Fundamentos",
    title: "Integración de Riesgos",
    description:
      "La gestión de riesgos no debe operar aislada. Debe integrarse con procesos, seguridad, gestión documental, continuidad, auditoría y gobierno institucional.",
    bullets: [
      "Evita enfoques fragmentados.",
      "Mejora coherencia entre áreas.",
      "Facilita trazabilidad y madurez.",
    ],
  },
  d3: {
    category: "Criterio metodológico",
    title: "Justificación de Rationales",
    description:
      "Toda valoración de probabilidad, impacto y decisión de tratamiento debe ser sustentada mediante racionales claros, verificables y consistentes.",
    bullets: [
      "Sustenta decisiones.",
      "Reduce arbitrariedad.",
      "Fortalece evidencia y auditoría.",
    ],
  },
  d4: {
    category: "Cumplimiento",
    title: "Conformidad en Riesgos",
    description:
      "La conformidad exige que los procesos de evaluación, tratamiento y seguimiento de riesgos se alineen con la LOPDP, su reglamento y buenas prácticas aplicables.",
    bullets: [
      "No basta con medir; hay que demostrar conformidad.",
      "La evidencia debe ser mantenida.",
      "La gestión debe ser revisable.",
    ],
  },
  d5: {
    category: "Gobernanza",
    title: "Metarregulación y rol de la SPDP",
    description:
      "La autoridad no reemplaza la gestión interna del responsable, pero sí orienta, supervisa y exige capacidad demostrable de control y cumplimiento.",
    bullets: [
      "La organización debe autogestionar su nivel de riesgo.",
      "La SPDP exige demostrabilidad.",
      "La gobernanza interna es esencial.",
    ],
  },
  d6: {
    category: "Control",
    title: "Auditorías",
    description:
      "Las auditorías permiten revisar diseño, eficacia, trazabilidad y sostenibilidad del sistema de gestión de riesgos y su relación con protección de datos personales.",
    bullets: [
      "Evalúan coherencia y evidencia.",
      "Detectan brechas y oportunidades de mejora.",
      "Refuerzan accountability.",
    ],
  },
  d7: {
    category: "Incidentes",
    title: "Vulneraciones de Seguridad",
    description:
      "Una vulneración puede materializar riesgos relevantes para los titulares. Su gestión exige detección, análisis, respuesta, documentación y eventual notificación.",
    bullets: [
      "No toda vulneración tiene igual impacto.",
      "Debe analizarse afectación a derechos y libertades.",
      "Exige trazabilidad y tiempos de respuesta.",
    ],
  },
  d8: {
    category: "Buenas prácticas",
    title: "Estándares de Mejores Prácticas",
    description:
      "La gestión de riesgos puede apoyarse en estándares y marcos de referencia internacionales para fortalecer criterios, escalabilidad y madurez organizacional.",
    bullets: [
      "Permiten mayor consistencia metodológica.",
      "Facilitan auditoría y comparabilidad.",
      "Ayudan a profesionalizar la gestión.",
    ],
  },
  dg: {
    category: "Apoyo",
    title: "Glosario de Siglas",
    description:
      "Compendio de siglas y conceptos recurrentes para facilitar una lectura técnica consistente del mapa y de la documentación asociada.",
    bullets: [
      "Unifica lenguaje.",
      "Reduce ambigüedad.",
      "Apoya capacitación y consulta.",
    ],
  },
  e1: {
    category: "Etapa",
    title: "Establecimiento del Contexto",
    description:
      "Consiste en delimitar el tratamiento, sus finalidades, actores, activos, entorno, dependencias y criterios de evaluación antes de valorar riesgos.",
    bullets: [
      "Define alcance.",
      "Determina criterios de evaluación.",
      "Prepara la identificación de riesgos.",
    ],
  },
  e2: {
    category: "Etapa",
    title: "Identificación de Riesgos",
    description:
      "Busca reconocer eventos, amenazas, vulnerabilidades y condiciones que puedan afectar los derechos y libertades de los titulares o la conformidad del tratamiento.",
    bullets: [
      "Identifica causas y consecuencias.",
      "Relaciona amenazas con tratamientos.",
      "Debe ser sistemática y documentada.",
    ],
  },
  e3: {
    category: "Etapa",
    title: "Análisis de Riesgos",
    description:
      "Consiste en estimar probabilidad, frecuencia, impacto y severidad con criterios definidos, generando una visión estructurada del nivel de riesgo.",
    bullets: [
      "Usa escalas y rationales.",
      "Permite comparar escenarios.",
      "Prepara la evaluación y priorización.",
    ],
  },
  e4: {
    category: "Etapa",
    title: "Evaluación de Impacto (EIPD)",
    description:
      "La EIPD profundiza la valoración cuando el tratamiento puede implicar alto riesgo, permitiendo identificar medidas, residualidad y decisiones justificadas.",
    bullets: [
      "Se activa frente a alto riesgo.",
      "Requiere análisis más profundo.",
      "Conecta diseño, riesgo y medidas de mitigación.",
    ],
  },
  e5: {
    category: "Etapa",
    title: "Tratamiento de Riesgos",
    description:
      "Implica seleccionar, justificar, implementar y monitorear medidas para evitar, reducir, transferir o aceptar riesgos dentro del apetito definido.",
    bullets: [
      "Debe tener responsables y plazos.",
      "Requiere seguimiento.",
      "Su justificación debe quedar documentada.",
    ],
  },
  p1: {
    category: "Bloque I",
    title: "Principios Fundamentales",
    description:
      "Agrupa definiciones, fundamentos, criterios de conformidad y referencias de gobernanza que estructuran el marco conceptual de la gestión de riesgos.",
    bullets: [
      "Base conceptual del mapa.",
      "Sustenta decisiones metodológicas.",
      "Conecta con accountability y cumplimiento.",
    ],
  },
  p2: {
    category: "Bloque II",
    title: "Etapas de la Gestión de Riesgos",
    description:
      "Describe la secuencia operativa desde el establecimiento del contexto hasta el tratamiento de riesgos, incluyendo la EIPD cuando corresponda.",
    bullets: [
      "Orden lógico de ejecución.",
      "Permite trazabilidad del proceso.",
      "Facilita implementación práctica.",
    ],
  },
};

function center(node) {
  return {
    x: node.x + node.w,
    y: node.y + node.h / 2,
  };
}

function startPoint(node) {
  return {
    x: node.x,
    y: node.y + node.h / 2,
  };
}

function findNode(id) {
  return NODES.find((n) => n.id === id);
}

function edgePath(fromId, toId) {
  const from = findNode(fromId);
  const to = findNode(toId);
  if (!from || !to) return "";

  const p1 = center(from);
  const p2 = startPoint(to);
  const dx = Math.max(40, (p2.x - p1.x) * 0.45);

  return `M ${p1.x} ${p1.y} C ${p1.x + dx} ${p1.y}, ${p2.x - dx} ${p2.y}, ${p2.x} ${p2.y}`;
}

function NodeCard({ node, active, onClick }) {
  const classes =
    node.kind === "root"
      ? "font-semibold"
      : node.kind === "section"
        ? "font-semibold"
        : "font-normal";

  return (
    <button
      type="button"
      onClick={() => onClick(node.id)}
      className={`absolute rounded-2xl border text-left transition-all duration-200 ${classes} ${
        active
          ? "border-cyan-400/70 bg-cyan-400/12 shadow-[0_0_0_1px_rgba(34,211,238,0.25)_inset]"
          : "border-sky-200/20 bg-white/[0.04] hover:bg-white/[0.07]"
      }`}
      style={{
        left: node.x,
        top: node.y,
        width: node.w,
        height: node.h,
        padding: node.kind === "root" ? "14px 18px" : "11px 16px",
        color: "#edf4ff",
      }}
    >
      <span className="whitespace-pre-line text-[15px] leading-[1.2]">
        {node.label}
      </span>
    </button>
  );
}

export default function GestionRiesgosPage() {
  const [selectedId, setSelectedId] = useState("root");
  const [query, setQuery] = useState("");

  const filteredIds = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return NODES.filter((n) => n.label.toLowerCase().includes(q)).map((n) => n.id);
  }, [query]);

  const visibleNodes = useMemo(() => {
    if (!filteredIds) return NODES;
    return NODES.filter((n) => filteredIds.includes(n.id) || n.id === "root");
  }, [filteredIds]);

  const visibleNodeIds = new Set(visibleNodes.map((n) => n.id));

  const detail = DETAILS[selectedId] || DETAILS.root;

  return (
    <main className="min-h-screen bg-[#03152b] text-white">
      <section className="mx-auto max-w-[1680px] px-4 pb-8 pt-5 md:px-6">
        <div className="mb-5 rounded-[28px] border border-sky-200/15 bg-[linear-gradient(180deg,rgba(9,25,49,0.95),rgba(5,20,38,0.96))] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-4">
                <img
                  src="/logo_DataConSentido_transparencia_PaginaWeb.png"
                  alt="DataConSentido"
                  className="h-14 w-14 object-contain"
                />
                <div className="min-w-0">
                  <h1 className="text-balance text-[clamp(1.8rem,3vw,3rem)] leading-tight text-white">
                    DataConSentido · Gestión de Riesgos
                  </h1>
                  <p className="mt-1 text-sm text-sky-100/80 md:text-lg">
                    Mindmap interactivo para dataconsentido.com/gestion-riesgos
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-sky-200/15 bg-white/[0.04] px-4 py-2 text-lg">
                  EIPD · Art. 42
                </span>
                <span className="rounded-full border border-sky-200/15 bg-white/[0.04] px-4 py-2 text-lg">
                  Versión 2 · 2026
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="🔎 Buscar nodo"
                className="min-w-[240px] rounded-full border border-sky-200/15 bg-white/[0.04] px-5 py-3 text-white outline-none placeholder:text-sky-100/55"
              />
              <a
                href="gestion-riesgos/guia-riesgos.pdf"
                download
                className="rounded-full border border-sky-200/15 bg-white/[0.04] px-5 py-3 text-center text-white transition hover:bg-white/[0.08]"
              >
                📥 Descargar PDF
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.58fr]">
          <div className="rounded-[28px] border border-sky-200/15 bg-[linear-gradient(180deg,rgba(6,27,53,0.96),rgba(2,17,36,0.98))] p-4 shadow-[0_16px_50px_rgba(0,0,0,0.24)] md:p-5">
            <div className="overflow-x-auto overflow-y-hidden rounded-[22px]">
              <div
                className="relative min-w-[1120px] rounded-[22px] bg-[radial-gradient(circle_at_center,rgba(14,65,122,0.25),transparent_40%),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.015)_1px,transparent_1px)]"
                style={{
                  width: 1120,
                  height: 930,
                  backgroundSize: "100% 100%, 56px 56px, 56px 56px",
                }}
              >
                <svg
                  width="1120"
                  height="930"
                  viewBox="0 0 1120 930"
                  className="absolute inset-0"
                >
                  {EDGES.filter(
                    ([a, b]) => visibleNodeIds.has(a) && visibleNodeIds.has(b)
                  ).map(([a, b]) => (
                    <path
                      key={`${a}-${b}`}
                      d={edgePath(a, b)}
                      fill="none"
                      stroke={selectedId === b || selectedId === a ? "#7dd3fc" : "#4977a8"}
                      strokeWidth={selectedId === b || selectedId === a ? "2.6" : "1.8"}
                      strokeLinecap="round"
                    />
                  ))}
                </svg>

                {visibleNodes.map((node) => (
                  <NodeCard
                    key={node.id}
                    node={node}
                    active={selectedId === node.id}
                    onClick={setSelectedId}
                  />
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-[28px] border border-sky-200/15 bg-[linear-gradient(180deg,rgba(6,27,53,0.96),rgba(2,17,36,0.98))] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.24)] xl:sticky xl:top-28 xl:h-fit">
            <div className="flex items-center gap-3">
              <img
                src="/logo_DataConSentido_transparencia_PaginaWeb.png"
                alt="DataConSentido"
                className="h-11 w-11 object-contain"
              />
              <div className="text-lg text-sky-50">
                DataConSentido · Arquitectura profesional en privacidad
              </div>
            </div>

            <div className="my-5 h-px bg-sky-200/15" />

            <div className="mb-3 text-xs uppercase tracking-[0.18em] text-sky-200/75">
              {detail.category}
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.25rem)] leading-tight text-white">
              {detail.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-sky-50/90">
              {detail.description}
            </p>

            {detail.bullets?.length > 0 && (
              <>
                <div className="mt-8 text-sm uppercase tracking-[0.16em] text-sky-200/80">
                  Aspectos clave
                </div>

                <div className="mt-3 space-y-0 rounded-2xl border border-sky-200/10 overflow-hidden">
                  {detail.bullets.map((bullet, idx) => (
                    <div
                      key={bullet}
                      className={`px-4 py-4 text-[15px] leading-7 text-sky-50/90 ${
                        idx !== detail.bullets.length - 1 ? "border-b border-sky-200/10" : ""
                      }`}
                    >
                      → {bullet}
                    </div>
                  ))}
                </div>
              </>
            )}

            {query && filteredIds?.length === 0 && (
              <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/5 px-4 py-3 text-amber-100">
                No encontré coincidencias para tu búsqueda.
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}