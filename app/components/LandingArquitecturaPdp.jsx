"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Target,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  BarChart3,
  Briefcase,
  Layers3,
  GraduationCap,
  Sparkles,
  Clock3,
  Users,
  Scale,
  BrainCircuit,
  DollarSign,
} from "lucide-react";

const curriculum = [
  {
    day: "Día 1",
    title: "PANSI",
    icon: ShieldCheck,
    accent: "from-cyan-500/20 to-sky-500/10",
    topics: [
      "Impacto del nuevo enfoque operativo sobre la gestión PDP.",
      "Estado de la técnica y medidas de seguridad alineadas a la LOPDP.",
      "Sistema para alinear estrategia, continuidad y GRC.",
      "Toma de decisiones informadas y modelo de gestión de resultados.",
      "PANSI en una hoja: método OGSM y Hoshin Kanri.",
    ],
  },
  {
    day: "Día 2",
    title: "RAT Ampliado",
    icon: FileText,
    accent: "from-violet-500/20 to-fuchsia-500/10",
    topics: [
      "Construcción del RAT bajo enfoque operativo.",
      "Finalidad, bases de licitud y trazabilidad.",
      "Estaciones autogestionadas, PATD y actividades por puesto.",
      "Tratamientos a gran escala e implicaciones prácticas.",
      "RAT como insumo para MTGE y decisiones de cumplimiento.",
    ],
  },
  {
    day: "Día 3",
    title: "MTGE",
    icon: Target,
    accent: "from-amber-500/20 to-yellow-500/10",
    topics: [
      "Metodología para medir el nivel de gestión y exposición.",
      "Evaluación de riesgos y priorización de controles.",
      "El PANSI como insumo para decisiones de seguridad.",
      "Rationales o argumentos de acción y trazabilidad.",
      "Cómo documentar decisiones defendibles frente a auditoría o control.",
    ],
  },
  {
    day: "Día 4",
    title: "EIPD",
    icon: AlertTriangle,
    accent: "from-rose-500/20 to-orange-500/10",
    topics: [
      "Cuándo corresponde una EIPD.",
      "RACI de la EIPD y gobernanza del proceso.",
      "Riesgos sobre derechos y libertades del titular.",
      "Medidas mitigadoras y seguridad reforzada.",
      "Estructura práctica de una EIPD bien documentada.",
    ],
  },
];

const outcomes = [
  "Traducir exigencias regulatorias a acciones operativas concretas.",
  "Diseñar un PANSI accionable y alineado con riesgos y continuidad.",
  "Construir un RAT ampliado con enfoque de licitud, escala y trazabilidad.",
  "Estructurar un MTGE robusto con criterio técnico y priorización.",
  "Determinar cuándo procede una EIPD y cómo documentarla.",
  "Tomar decisiones defendibles con criterios regulatorios y de negocio.",
];

const audience = [
  {
    icon: Briefcase,
    title: "Delegados de Protección de Datos",
    text: "Que necesitan fortalecer su marco operativo y elevar el nivel de madurez de la gestión PDP.",
  },
  {
    icon: Scale,
    title: "Abogados y consultores",
    text: "Que buscan aterrizar la normativa en herramientas concretas de gestión, evidencia y defensa técnica.",
  },
  {
    icon: Layers3,
    title: "Líderes de cumplimiento y riesgos",
    text: "Que necesitan integrar privacidad, continuidad, seguridad y gobierno de forma práctica.",
  },
  {
    icon: BrainCircuit,
    title: "Equipos con tratamientos intensivos",
    text: "Que requieren criterios claros para RAT, MTGE y EIPD en escenarios complejos.",
  },
];

const faqs = [
  {
    q: "¿El programa es teórico o práctico?",
    a: "Tiene enfoque ejecutivo-práctico. Cada jornada aterriza conceptos en herramientas y criterios utilizables de inmediato.",
  },
  {
    q: "¿Qué diferencia tiene frente a una capacitación general de LOPDP?",
    a: "No se queda en la teoría normativa. Se enfoca en arquitectura operativa, evidencia, riesgo y documentación técnica.",
  },
  {
    q: "¿Sirve para empresas privadas e instituciones públicas?",
    a: "Sí. Está diseñado para responsables y encargados que necesitan estructurar una gestión de protección de datos más madura.",
  },
  {
    q: "¿Incluye evaluación?",
    a: "Sí. Cada sesión contempla preguntas, respuestas y evaluación de cierre.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ badge, title, description }) {
  return (
    <div className="mb-8 max-w-3xl space-y-4">
      <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
        {badge}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default function LandingArquitecturaPdp() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 top-96 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-0 top-[70rem] h-[24rem] w-[24rem] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-dataconsentido.png"
              alt="DataConSentido"
              width={170}
              height={48}
              className="h-auto w-auto"
              priority
            />
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#programa" className="transition hover:text-white">Programa</a>
            <a href="#aprendizajes" className="transition hover:text-white">Resultados</a>
            <a href="#inversion" className="transition hover:text-white">Inversión</a>
            <a href="#dirigido" className="transition hover:text-white">Dirigido a</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <a
            href="https://wa.me/593999999999?text=Hola,%20quiero%20inscribirme%20en%20Arquitectura%20Profesional%20de%20Protección%20de%20Datos"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Reservar cupo
          </a>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.55 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                  Programa intensivo
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                  PANSI · RAT · MTGE · EIPD
                </div>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Arquitectura Profesional de Protección de Datos
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                  Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-slate-400">Duración</p>
                  <p className="mt-1 text-lg font-semibold text-white">4 sesiones</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-slate-400">Formato</p>
                  <p className="mt-1 text-lg font-semibold text-white">2.5 horas por sesión</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-slate-400">Inversión</p>
                  <p className="mt-1 text-lg font-semibold text-white">$110 USD</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                  24, 25, 31 de marzo y 1 de abril
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                  Cohorte limitada
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://pay.hotmart.com/TU-LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Quiero inscribirme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#programa"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-transparent px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  Ver contenido del programa
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-cyan-950/40">
                <div className="border-b border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-cyan-300">
                        Master Program
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">
                        Arquitectura formativa del programa
                      </h2>
                    </div>
                    <Sparkles className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  {curriculum.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.day}
                        className={`rounded-3xl border border-white/10 bg-gradient-to-r ${item.accent} p-4`}
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                              {item.day}
                            </p>
                            <h3 className="text-lg font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-slate-200">
                          5 competencias clave, preguntas y respuestas, y evaluación de cierre.
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="aprendizajes" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="space-y-4">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                Lo que te llevas
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Resultados concretos para tu operación
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                El programa está estructurado para que salgas con criterio de implementación,
                priorización y documentación frente a escenarios reales de cumplimiento.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="leading-7 text-slate-200">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="programa" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            badge="Programa del curso"
            title="Cuatro bloques integrados para construir una gestión PDP madura y defendible"
            description="Cada jornada combina contexto regulatorio, aterrizaje técnico, criterios de decisión y evaluación final."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {curriculum.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.day}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-cyan-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                            {item.day}
                          </p>
                          <h3 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                        5 competencias
                      </div>
                    </div>

                    <div className="space-y-3">
                      {item.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                        >
                          <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                          <p className="text-slate-200">{topic}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        Preguntas y respuestas
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        Evaluación del día
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="inversion" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-900 to-slate-900 p-8 shadow-2xl shadow-emerald-950/20">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <DollarSign className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Inversión</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">$110</span>
                <span className="pb-1 text-slate-400">USD</span>
              </div>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Acceso al programa intensivo completo de{" "}
                <span className="font-semibold text-white">4 sesiones de 2.5 horas</span>,
                con contenido especializado, preguntas y respuestas y evaluación por jornada.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 px-3 py-1">10 horas en total</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Evaluación por sesión</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Cupo limitado</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                ¿Qué incluye?
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Una inversión accesible para un programa altamente especializado
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
                    className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="dirigido" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionTitle
            badge="Dirigido a"
            title="Ideal para quienes ya no pueden gestionar privacidad solo con checklists"
            description="Este programa está pensado para profesionales que necesitan gobernar decisiones, evidencias y riesgos con una lógica más madura."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audience.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-slate-900 to-violet-400/15">
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div className="space-y-4">
                <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
                  Cohorte limitada
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Convierte regulación, riesgo y evidencia en una ventaja profesional real
                </h2>
                <p className="max-w-3xl text-lg leading-8 text-slate-200">
                  Reserva tu cupo y eleva el nivel de tu práctica en protección de datos
                  con una metodología orientada a ejecución, criterios técnicos y documentación defendible.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-transparent px-7 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
              Preguntas frecuentes
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
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

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="h-4 w-4 text-cyan-300" />
            <span>DataConSentido · Privacidad · Cumplimiento · Tecnología</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#programa" className="transition hover:text-white">Programa</a>
            <a href="#dirigido" className="transition hover:text-white">Dirigido a</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}