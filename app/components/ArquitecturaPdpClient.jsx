"use client";

import { useEffect, useState } from "react";
import HotmartModal from "./HotmartModal";

const PROGRAM_DATES = "5, 6, 7, 12, 13 y 14 de mayo de 2026";
const PROGRAM_TIME = "19h00";
const TOTAL_HOURS = "15 horas";
const TOTAL_SESSIONS = "6 sesiones";

const WHATSAPP_URL =
  "https://wa.me/593992801005?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20programa%20Arquitectura%20Profesional%20de%20Protecci%C3%B3n%20de%20Datos";

const pricingConfig = {
  activeStage: "launch", // "launch" | "current" | "regular"
  currency: "USD",
  trustNote: "Precio visible y final. Sin códigos ocultos.",
  checkoutUrl: "https://pay.hotmart.com/Q104933430P",
  corporateWhatsappText:
    "Hola, quiero información del paquete corporativo del programa Arquitectura Profesional de Protección de Datos Personales",
  stages: [
    {
      id: "launch",
      label: "Lanzamiento",
      price: 110,
      window: "Hasta el 24 de abril de 2026",
      badge: "Mejor momento para reservar",
      deadlineISO: "2026-04-24T23:59:59-05:00",
    },
    {
      id: "current",
      label: "Precio vigente",
      price: 120,
      window: "Del 25 al 30 de abril de 2026",
      badge: "Segunda etapa",
      deadlineISO: "2026-04-30T23:59:59-05:00",
    },
    {
      id: "regular",
      label: "Precio regular",
      price: 129,
      window: "Desde el 1 de mayo de 2026",
      badge: "Etapa final",
    },
  ],
};

const modules = [
  {
    day: "Día 1 y Día 2",
    title: "🛡️ PANSI",
    topics: [
      "🔹 Estado de la técnica y medidas de seguridad.",
      "🔹 Alineación entre estrategia, continuidad y gestión PDP.",
      "🔹 Modelo operativo para decisiones informadas.",
      "🔹 PANSI como instrumento de planificación.",
    ],
  },
  {
    day: "Día 3 y Día 4",
    title: "🗂️ RAT Ampliado + MTGE",
    topics: [
      "🔹 Construcción práctica del RAT.",
      "🔹 Finalidad, bases de licitud y trazabilidad de tratamientos.",
      "🔹 Evaluación del nivel de gestión y priorización de riesgos.",
      "🔹 Rationales o argumentos de acción y documentación defendible.",
    ],
  },
  {
    day: "Día 5 y Día 6",
    title: "⚖️ EIPD",
    topics: [
      "🔹 Cuándo corresponde una EIPD.",
      "🔹 Riesgos sobre derechos y libertades.",
      "🔹 Medidas mitigadoras.",
      "🔹 Estructura práctica de una EIPD.",
    ],
  },
];

const benefits = [
  "✅ Traducir exigencias regulatorias a decisiones operativas concretas.",
  "✅ Diseñar un PANSI accionable y alineado con riesgos y continuidad.",
  "✅ Construir un RAT ampliado con criterio técnico y trazabilidad.",
  "✅ Estructurar un MTGE robusto y defendible.",
  "✅ Determinar cuándo procede una EIPD y cómo documentarla.",
  "✅ Elevar tu nivel profesional en protección de datos personales con herramientas aplicables.",
];

const includes = [
  "📚 6 sesiones intensivas de 2.5 horas.",
  "🧩 Temario especializado sobre PANSI, RAT, MTGE y EIPD.",
  "💬 Preguntas y respuestas por jornada.",
  "📝 Evaluación de cierre por sesión.",
  "🚀 Enfoque ejecutivo-práctico orientado a implementación.",
];

const faqs = [
  {
    q: "¿El programa es teórico o práctico?",
    a: "Tiene un enfoque ejecutivo-práctico. No se queda en la teoría: aterriza decisiones, criterios y documentación aplicable.",
  },
  {
    q: "¿Está dirigido solo a DPO?",
    a: "No. También está pensado para abogados, consultores, líderes de cumplimiento, riesgos y responsables de tratamiento.",
  },
  {
    q: "¿Incluye evaluación?",
    a: "Sí. Cada sesión contempla preguntas, respuestas y evaluación de cierre.",
  },
  {
    q: "¿Cuál es el valor vigente?",
    a: "El valor depende de la etapa activa. En la landing puedes ver el precio actual y las siguientes etapas de inversión.",
  },
  {
    q: "¿Tienen opción para equipos?",
    a: "Sí. Si van 3 o más personas de la misma organización, puedes solicitar una opción corporativa por WhatsApp.",
  },
];

const corporatePlans = [
  {
    name: "Acceso grupal 3",
    price: "$300",
    detail: "3 participantes",
  },
  {
    name: "Acceso grupal 5",
    price: "$475",
    detail: "5 participantes",
  },
  {
    name: "Acceso grupal 10",
    price: "$900",
    detail: "10 participantes",
  },
];

function SectionHeader(props) {
  const { eyebrow, title, text, centered = false } = props;

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

function PriceTimeline(props) {
  const { stages, activeStage, currency } = props;

  return (
    <div className="grid gap-3">
      {stages.map((stage) => {
        const isActive = stage.id === activeStage;

        return (
          <div
            key={stage.id}
            className={
              isActive
                ? "rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4"
                : "rounded-2xl border border-white/10 bg-slate-950/40 p-4"
            }
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className={isActive ? "font-semibold text-cyan-200" : "font-semibold text-white"}>
                    {stage.label}
                  </p>
                  <span
                    className={
                      isActive
                        ? "rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100"
                        : "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    }
                  >
                    {stage.badge}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{stage.window}</p>
              </div>

              <div className="text-left sm:text-right">
                <p className={isActive ? "text-2xl font-bold text-white" : "text-xl font-semibold text-slate-200"}>
                  ${stage.price} {currency}
                </p>
                {isActive && <p className="text-xs text-cyan-200">Precio activo</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CountdownTimer(props) {
  const { deadlineISO, label = "Esta etapa cierra en" } = props;
  const [timeLeft, setTimeLeft] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function calculateTimeLeft() {
      const now = new Date().getTime();
      const deadline = new Date(deadlineISO).getTime();
      const difference = deadline - now;

      if (difference <= 0) {
        return {
          expired: true,
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        expired: false,
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      };
    }

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [deadlineISO]);

  if (!mounted || !timeLeft) {
    return (
      <div className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4">
        <p className="text-sm font-medium text-rose-100">{label}</p>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {["00", "00", "00", "00"].map((value, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-center"
            >
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                {["días", "horas", "min", "seg"][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (timeLeft.expired) {
    return (
      <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
        <p className="text-sm font-medium text-amber-100">
          ⏳ Esta etapa ya terminó. Actualiza el precio activo en el código.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4">
      <p className="text-sm font-medium text-rose-100">{label}</p>

      <div className="mt-3 grid grid-cols-4 gap-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-center">
          <p className="text-2xl font-bold text-white">{timeLeft.days}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">días</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-center">
          <p className="text-2xl font-bold text-white">{timeLeft.hours}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">horas</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-center">
          <p className="text-2xl font-bold text-white">{timeLeft.minutes}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">min</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-center">
          <p className="text-2xl font-bold text-white">{timeLeft.seconds}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">seg</p>
        </div>
      </div>
    </div>
  );
}

export default function ArquitecturaPdpClient() {
  const [openModal, setOpenModal] = useState(false);

  const activeStageData =
    pricingConfig.stages.find((stage) => stage.id === pricingConfig.activeStage) ||
    pricingConfig.stages[0];

  const activePrice = activeStageData.price;
  const activeCheckoutUrl = pricingConfig.checkoutUrl;
  const activeDeadlineISO = activeStageData.deadlineISO || null;

  const primaryCtaText = `🚀 Reservar por $${activePrice}`;
  const stickyCtaText = `Reservar por $${activePrice}`;

  const corporateWhatsappUrl = `https://wa.me/593992801005?text=${encodeURIComponent(
    pricingConfig.corporateWhatsappText
  )}`;

  return (
    <>
      <main className="min-h-screen bg-slate-950 pb-24 text-white md:pb-0">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                  🎓 Segunda edición ampliada por feedback
                </span>

                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  Arquitectura Profesional de Protección de Datos Personales
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                  Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                    🛡️ PANSI · 🗂️ RAT · 🎯 MTGE · ⚖️ EIPD
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                    📅 {PROGRAM_DATES}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                    🕖 {PROGRAM_TIME}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                    ⏱️ {TOTAL_SESSIONS} · {TOTAL_HOURS}
                  </span>
                </div>

                <div className="mt-8 rounded-[2rem] border border-amber-400/20 bg-amber-400/10 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">
                    💰 Inversión por etapas
                  </p>

                  <div className="mt-4">
                    <p className="text-sm text-slate-300">Hoy puedes reservar por</p>
                    <div className="mt-2 flex flex-wrap items-end gap-3">
                      <span className="text-5xl font-bold text-white">${activePrice}</span>
                      <span className="pb-1 text-slate-300">{pricingConfig.currency}</span>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                        {activeStageData.label}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-slate-200">
                    Reserva ahora al valor vigente. Luego el precio sube según la etapa activa.
                  </p>

                  <div className="mt-5">
                    <PriceTimeline
                      stages={pricingConfig.stages}
                      activeStage={pricingConfig.activeStage}
                      currency={pricingConfig.currency}
                    />
                  </div>

                  {activeDeadlineISO && (
                    <CountdownTimer
                      deadlineISO={activeDeadlineISO}
                      label={`⏰ ${activeStageData.label} termina en`}
                    />
                  )}

                  <p className="mt-4 text-sm text-slate-400">{pricingConfig.trustNote}</p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">⏳ Duración</p>
                    <p className="mt-2 text-xl font-semibold">{TOTAL_SESSIONS}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">💻 Formato</p>
                    <p className="mt-2 text-xl font-semibold">2.5h por sesión</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">💵 Valor vigente</p>
                    <p className="mt-2 text-xl font-semibold text-cyan-300">
                      ${activePrice} {pricingConfig.currency}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {primaryCtaText}
                  </button>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                  >
                    📲 Solicitar información
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-cyan-400/20 bg-white/5 p-6 shadow-xl">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
                    ✅ Esta edición es para ti si...
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Trabajas en privacidad, cumplimiento, riesgo, legal o auditoría.",
                      "Necesitas aterrizar PANSI, RAT, MTGE o EIPD con criterio aplicable.",
                      "Quieres conectar norma, evidencia y trazabilidad con lógica operativa.",
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

                <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-900 to-slate-900 p-6 shadow-xl">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-200">
                    🏢 Modalidad grupal
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    ¿Van varias personas?
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    Si desean participar varias personas, pueden acceder a una modalidad grupal con condiciones preferenciales para 3, 5 o 10 participantes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {corporatePlans.map((plan) => (
                      <div
                        key={plan.name}
                        className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                      >
                        <p className="text-sm text-slate-400">{plan.name}</p>
                        <p className="mt-2 text-2xl font-bold text-white">{plan.price}</p>
                        <p className="mt-1 text-sm text-slate-300">{plan.detail}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={corporateWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-base font-semibold text-emerald-100 transition hover:bg-emerald-400/20"
                  >
                    💬 Solicitar opción corporativa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="📌 ¿Por qué este programa?"
            title="No es una capacitación genérica. Es una arquitectura de trabajo."
            text="Este programa está diseñado para ayudarte a estructurar decisiones, documentación y trazabilidad con una lógica operativa real, más allá del cumplimiento superficial."
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
            eyebrow="📚 Contenido del programa"
            title="Tres bloques para una gestión PDP madura y defendible"
            text="Cada bloque aterriza conceptos, criterios regulatorios y decisiones operativas para que puedas aplicarlos en contextos reales."
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
                    <h3 className="mt-2 text-2xl font-semibold text-white">{module.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                    🔑 Bloque clave
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
                💵 Inversión
              </span>

              <div className="mt-6">
                <p className="text-sm text-slate-400">Precio activo</p>
                <div className="mt-2 flex flex-wrap items-end gap-3">
                  <span className="text-6xl font-bold tracking-tight text-white">${activePrice}</span>
                  <span className="pb-2 text-slate-300">{pricingConfig.currency}</span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                    {activeStageData.label}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Asegura tu cupo al valor vigente y evita pagar la siguiente etapa de precio.
              </p>

              <div className="mt-6">
                <PriceTimeline
                  stages={pricingConfig.stages}
                  activeStage={pricingConfig.activeStage}
                  currency={pricingConfig.currency}
                />
              </div>

              {activeDeadlineISO && (
                <CountdownTimer
                  deadlineISO={activeDeadlineISO}
                  label={`⏰ ${activeStageData.label} termina en`}
                />
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                  ⏱️ {TOTAL_HOURS} totales
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                  📝 Evaluación por sesión
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                  🎯 Cupo limitado
                </span>
              </div>

              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {primaryCtaText}
              </button>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <SectionHeader
                eyebrow="🎁 ¿Qué incluye?"
                title="Todo lo necesario para vivir el programa de forma intensiva"
                text="El objetivo es que cada sesión te aporte claridad, método y herramientas conceptuales aplicables."
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

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-slate-900 to-violet-400/15 p-10 shadow-xl">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
              🧠 Decisión inteligente
            </span>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              Si vas a trabajar protección de datos personales en serio, necesitas una arquitectura, no solo conceptos.
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
              Este programa te ayuda a conectar norma, evidencia, trazabilidad y criterio operativo para que tu gestión PDP tenga sustancia real.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {primaryCtaText}
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
              >
                💬 Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="❓ Preguntas frecuentes"
            title="Lo que necesitas saber antes de reservar"
            text="Aquí tienes respuestas rápidas para ayudarte a tomar la decisión."
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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs text-slate-400">Precio activo</p>
            <p className="truncate text-base font-semibold text-white">
              ${activePrice} {pricingConfig.currency}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            {stickyCtaText}
          </button>
        </div>
      </div>

      <HotmartModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        checkoutUrl={activeCheckoutUrl}
      />
    </>
  );
}