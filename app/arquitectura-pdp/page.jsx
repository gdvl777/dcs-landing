export const metadata = {
  title: "Arquitectura Profesional de Protección de Datos | DataConSentido",
  description:
    "Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP. Programa intensivo de 4 sesiones de 2.5 horas.",
};

const modules = [
  {
    day: "Día 1",
    title: "PANSI",
    topics: [
      "Estado de la técnica y medidas de seguridad.",
      "Alineación entre estrategia, continuidad y gestión PDP.",
      "Modelo operativo para decisiones informadas.",
      "PANSI como instrumento de planificación.",
    ],
  },
  {
    day: "Día 2",
    title: "RAT Ampliado",
    topics: [
      "Construcción práctica del RAT.",
      "Finalidad y bases de licitud.",
      "Trazabilidad de tratamientos.",
      "Gran escala y escenarios complejos.",
    ],
  },
  {
    day: "Día 3",
    title: "MTGE",
    topics: [
      "Evaluación del nivel de gestión.",
      "Priorización de riesgos y controles.",
      "Rationales o argumentos de acción.",
      "Documentación defendible.",
    ],
  },
  {
    day: "Día 4",
    title: "EIPD",
    topics: [
      "Cuándo corresponde una EIPD.",
      "Riesgos sobre derechos y libertades.",
      "Medidas mitigadoras.",
      "Estructura práctica de una EIPD.",
    ],
  },
];

const benefits = [
  "Traducir exigencias regulatorias a acciones operativas concretas.",
  "Diseñar un PANSI accionable y alineado con riesgos y continuidad.",
  "Construir un RAT ampliado con criterio técnico y trazabilidad.",
  "Estructurar un MTGE robusto y defendible.",
  "Determinar cuándo procede una EIPD.",
  "Tomar decisiones con criterio técnico, regulatorio y de negocio.",
];

const includes = [
  "4 sesiones intensivas de 2.5 horas.",
  "Contenido especializado sobre PANSI, RAT, MTGE y EIPD.",
  "Preguntas y respuestas por jornada.",
  "Evaluación de cierre por sesión.",
  "Enfoque ejecutivo-práctico.",
];

const audience = [
  "Delegados de Protección de Datos",
  "Abogados y consultores",
  "Líderes de cumplimiento y riesgos",
  "Responsables de tratamiento",
];

const faqs = [
  {
    q: "¿El programa es teórico o práctico?",
    a: "Tiene un enfoque ejecutivo-práctico. La idea es que puedas aterrizar criterios, decisiones y documentación a casos reales de cumplimiento.",
  },
  {
    q: "¿Sirve para empresas privadas e instituciones públicas?",
    a: "Sí. Está diseñado para organizaciones que necesitan elevar la madurez de su gestión de protección de datos personales.",
  },
  {
    q: "¿Incluye evaluación?",
    a: "Sí. Cada sesión contempla preguntas, respuestas y evaluación de cierre.",
  },
];

function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Formación avanzada DataConSentido
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                Arquitectura Profesional de Protección de Datos
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                  PANSI · RAT · MTGE · EIPD
                </span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                  24, 25, 31 de marzo y 1 de abril
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-slate-400">Duración</p>
                  <p className="mt-2 text-xl font-semibold">4 sesiones</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-slate-400">Formato</p>
                  <p className="mt-2 text-xl font-semibold">2.5h por sesión</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm text-slate-400">Inversión</p>
                  <p className="mt-2 text-xl font-semibold text-cyan-300">$110 USD</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://pay.hotmart.com/TU-LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Inscribirme ahora
                </a>

                <a
                  href="#programa"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  Ver programa
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
              <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">
                  Inversión especial
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-bold text-white">$110</span>
                  <span className="pb-1 text-slate-300">USD</span>
                </div>
                <p className="mt-3 text-slate-200">
                  Acceso al programa completo de 4 sesiones intensivas.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Fechas</p>
                  <p className="mt-2 text-lg font-semibold">24, 25, 31 de marzo y 1 de abril</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Total de horas</p>
                  <p className="mt-2 text-lg font-semibold">10 horas de formación</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Modalidad</p>
                  <p className="mt-2 text-lg font-semibold">Programa intensivo</p>
                </div>
              </div>

              <a
                href="https://wa.me/593999999999?text=Hola,%20quiero%20informaci%C3%B3n%20del%20programa%20Arquitectura%20Profesional%20de%20Protecci%C3%B3n%20de%20Datos"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-white/15 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/5"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Qué lograrás"
          title="Un programa diseñado para llevarte de la norma a la ejecución"
          text="La estructura del curso está orientada a ayudarte a decidir, documentar y defender técnicamente una gestión de protección de datos más madura."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="leading-7 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programa" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Programa"
          title="Cuatro bloques para estructurar una gestión PDP madura y defendible"
          text="Cada jornada combina base conceptual, aterrizaje operativo y criterios prácticos para implementación."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.day}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {module.day}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {module.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  Bloque clave
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {module.topics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <p className="text-slate-200">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="inversion" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-900 to-slate-900 p-8 shadow-xl">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
              Inversión
            </span>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-6xl font-bold tracking-tight text-white">$110</span>
              <span className="pb-2 text-slate-300">USD</span>
            </div>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Acceso al programa intensivo completo de <span className="font-semibold text-white">4 sesiones de 2.5 horas</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                10 horas totales
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                Evaluación por sesión
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                Cupo limitado
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <SectionHeader
              eyebrow="Incluye"
              title="Una inversión accesible para un programa especializado"
              text="Este programa está diseñado para aportar estructura, criterio técnico y capacidad de ejecución."
            />

            <div className="space-y-4">
              {includes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dirigido" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Dirigido a"
          title="Ideal para quienes necesitan gobernar decisiones, riesgos y evidencia"
          text="El enfoque del programa responde a la necesidad de construir una gestión de protección de datos más robusta y menos improvisada."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {audience.map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-slate-900 to-violet-400/15 p-10 shadow-xl">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
            Reserva tu cupo
          </span>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Convierte regulación, riesgo y evidencia en una ventaja profesional real
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Inscríbete y fortalece tu capacidad para estructurar una arquitectura de protección de datos con criterio operativo, técnico y estratégico.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://pay.hotmart.com/TU-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Inscribirme ahora
            </a>

            <a
              href="https://wa.me/593999999999?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20programa%20Arquitectura%20Profesional%20de%20Protecci%C3%B3n%20de%20Datos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Respuestas rápidas antes de inscribirte"
          text="Estas son algunas preguntas frecuentes sobre el programa."
          centered
        />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
              <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}