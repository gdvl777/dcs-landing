export const metadata = {
  title: "Arquitectura Profesional de Protección de Datos | DataConSentido",
  description:
    "Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.",
};

const curriculum = [
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

const outcomes = [
  "Traducir exigencias regulatorias a acciones operativas.",
  "Diseñar un PANSI accionable.",
  "Construir un RAT ampliado con criterio técnico.",
  "Estructurar un MTGE robusto y trazable.",
  "Determinar cuándo procede una EIPD.",
  "Tomar decisiones defendibles frente a auditoría o control.",
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
    a: "Tiene un enfoque ejecutivo-práctico, orientado a aplicación inmediata.",
  },
  {
    q: "¿Incluye evaluación?",
    a: "Sí. Cada sesión contempla preguntas, respuestas y evaluación de cierre.",
  },
  {
    q: "¿Sirve para sector público y privado?",
    a: "Sí. Está diseñado para organizaciones que requieren una gestión PDP más madura.",
  },
];

function SectionTitle({ label, title, text }) {
  return (
    <div className="mb-10 max-w-3xl">
      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
        {label}
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
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Programa intensivo
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Arquitectura Profesional de Protección de Datos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                PANSI · RAT · MTGE · EIPD
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                24, 25, 31 de marzo y 1 de abril
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                4 sesiones de 2.5 horas
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Duración</p>
                <p className="mt-2 text-2xl font-semibold">4 sesiones</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Formato</p>
                <p className="mt-2 text-2xl font-semibold">2.5 horas por sesión</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Inversión</p>
                <p className="mt-2 text-2xl font-semibold">$110 USD</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://pay.hotmart.com/TU-LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Quiero inscribirme
              </a>

              <a
                href="#programa"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
              >
                Ver contenido del programa
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Master Program
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Arquitectura formativa del programa
            </h2>

            <div className="mt-6 space-y-4">
              {curriculum.map((item) => (
                <div
                  key={item.day}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.day}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    4 competencias clave, preguntas y respuestas, y evaluación de cierre.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="aprendizajes" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          label="Lo que te llevas"
          title="Resultados concretos para tu operación"
          text="El programa está diseñado para que salgas con criterio de implementación, priorización y documentación frente a escenarios reales de cumplimiento."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {outcomes.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="leading-7 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programa" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          label="Programa del curso"
          title="Cuatro bloques integrados para una gestión PDP madura y defendible"
          text="Cada jornada combina contexto regulatorio, aterrizaje técnico, criterios de decisión y evaluación final."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {curriculum.map((item) => (
            <div
              key={item.day}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {item.day}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>

              <div className="mt-6 space-y-3">
                {item.topics.map((topic) => (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-900 to-slate-900 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
              Inversión
            </p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight text-white">$110</span>
              <span className="pb-1 text-slate-400">USD</span>
            </div>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Acceso al programa intensivo completo de{" "}
              <span className="font-semibold text-white">4 sesiones de 2.5 horas</span>,
              con contenido especializado, preguntas y respuestas y evaluación por jornada.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 px-3 py-1">
                10 horas en total
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Evaluación por sesión
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Cupo limitado
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              ¿Qué incluye?
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "4 sesiones intensivas de 2.5 horas cada una.",
                "Contenido avanzado sobre PANSI, RAT ampliado, MTGE y EIPD.",
                "Espacio de preguntas y respuestas en cada jornada.",
                "Evaluación al cierre de cada sesión.",
              ].map((item) => (
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
        <SectionTitle
          label="Dirigido a"
          title="Ideal para quienes ya no pueden gestionar privacidad solo con checklists"
          text="Este programa está pensado para profesionales que necesitan gobernar decisiones, evidencias y riesgos con una lógica más madura."
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
        <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-slate-900 to-violet-400/15 p-10">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
            Cohorte limitada
          </span>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Convierte regulación, riesgo y evidencia en una ventaja profesional real
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Reserva tu cupo y eleva el nivel de tu práctica en protección de datos con
            una metodología orientada a ejecución, criterios técnicos y documentación defendible.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://pay.hotmart.com/TU-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Inscribirme
            </a>

            <a
              href="https://wa.me/593999999999?text=Hola,%20quiero%20más%20información%20del%20programa%20Arquitectura%20Profesional%20de%20Protección%20de%20Datos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
            Preguntas frecuentes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Respuestas rápidas antes de inscribirte
          </h2>
        </div>

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