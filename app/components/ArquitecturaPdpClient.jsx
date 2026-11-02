"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Quote,
  Scale,
  ShieldCheck,
  UserRoundCog,
  UsersRound,
} from "lucide-react";
import HotmartModal from "./HotmartModal";
import {
  arquitecturaPdpProgram as program,
  buildWhatsAppUrl,
  getPrimaryCtaLabel,
  isCheckoutReady,
} from "@/app/data/arquitecturaPdpProgram";
import {
  appendTrackingParams,
  getTrackingEventContext,
  persistTrackingParams,
} from "@/app/lib/tracking";
import { track as trackVercelEvent } from "@vercel/analytics";

const eventDefaults = {
  program_slug: program.slug,
  program_name: program.displayName,
  enrollment_status: program.enrollment.status,
};

function trackEvent(eventName, params = {}, options = {}) {
  if (typeof window === "undefined") return;

  if (options.once) {
    if (!window.__dcsTrackedEvents) window.__dcsTrackedEvents = new Set();

    const eventKey = `${eventName}:${window.location.pathname}:${params.section || ""}`;
    if (window.__dcsTrackedEvents.has(eventKey)) return;
    window.__dcsTrackedEvents.add(eventKey);
  }

  const payload = {
    ...eventDefaults,
    ...getTrackingEventContext(),
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
  trackVercelEvent(eventName, payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (window.ttq && typeof window.ttq.track === "function") {
    const tikTokEvent = eventName === "pansi_view_program" ? "ViewContent" : "ClickButton";
    window.ttq.track(tikTokEvent, payload);
  }
}

function SectionHeader({ eyebrow, title, text, centered = false, tone = "light" }) {
  const dark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-sm font-semibold uppercase tracking-wide ${dark ? "text-cyan-200" : "text-teal-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children, tone = "default" }) {
  const classes =
    tone === "accent"
      ? "border-cyan-200/30 bg-cyan-200/10 text-cyan-50"
      : tone === "warm"
        ? "border-amber-200/35 bg-amber-200/10 text-amber-50"
        : "border-white/15 bg-white/5 text-slate-100";

  return (
    <span className={`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-sm ${classes}`}>
      {children}
    </span>
  );
}

function PrimaryButton({ children, onClick, href, className = "" }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300/30 md:text-base ${className}`;
  const content = (
    <>
      {children}
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

function SecondaryLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-teal-300/20 md:text-base"
    >
      {children}
    </a>
  );
}

function SessionItem({ session }) {
  return (
    <article className="grid gap-4 border-b border-slate-200 py-5 last:border-b-0 md:grid-cols-[100px_1fr_0.9fr] md:items-start">
      <p className="text-sm font-bold uppercase text-teal-700">{session.label}</p>
      <div>
        <p className="text-xs font-semibold uppercase text-slate-500">Contenido</p>
        <h3 className="mt-2 text-lg font-semibold leading-7 text-slate-950">{session.topic}</h3>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase text-slate-500">Resultado del ejercicio</p>
        <p className="mt-2 leading-7 text-slate-700">{session.result}</p>
      </div>
    </article>
  );
}

function SocialProofCarousel({ socialProof }) {
  const testimonials = socialProof.enabled ? socialProof.testimonials || [] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const activeTestimonial = testimonials[activeIndex % testimonials.length];

  return (
    <section id="opiniones" className="border-y border-slate-200 bg-[#f5f7fa]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <SectionHeader
          eyebrow={socialProof.eyebrow}
          title={socialProof.title}
          text={socialProof.text}
        />

        <div>
          <article
            key={activeTestimonial.name}
            aria-live="polite"
            className="min-h-[280px] rounded-lg border border-teal-200 bg-white p-6 shadow-sm"
          >
            <Quote className="h-8 w-8 text-teal-700" aria-hidden="true" />
            <blockquote className="mt-6 text-xl font-semibold leading-9 text-slate-950 md:text-2xl md:leading-10">
              “{activeTestimonial.quote}”
            </blockquote>
            <div className="mt-7 flex flex-col gap-2 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-slate-950">{activeTestimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{activeTestimonial.editionLabel} · Participante</p>
              </div>
              <p className="text-sm font-medium text-teal-700">{socialProof.sourceLabel}</p>
            </div>
          </article>

          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Opiniones de programas anteriores">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Ver opinión de ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex ? "w-9 bg-teal-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq }) {
  return (
    <details className="group border-b border-slate-200 py-5 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-slate-950">
        {faq.question}
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-teal-700 transition group-open:rotate-90" aria-hidden="true" />
      </summary>
      <p className="mt-4 max-w-4xl leading-7 text-slate-600">{faq.answer}</p>
    </details>
  );
}

export default function ArquitecturaPdpClient() {
  const curriculumRef = useRef(null);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [modalCheckoutUrl, setModalCheckoutUrl] = useState(program.checkout.url);
  const checkoutReady = isCheckoutReady(program);
  const primaryCtaLabel = getPrimaryCtaLabel(program);
  const contactUrl = buildWhatsAppUrl(program.whatsapp.infoText, program);
  const confirmedMaterials = program.proposedMaterials.filter((material) => material.confirmed);

  const heroDetails = [
    ["Inicio", program.enrollment.startDateLabel],
    ["Sesiones", program.schedule.sessionsLabel],
    ["Duración", program.schedule.hoursLabel],
    program.schedule.datesLabel ? ["Calendario", program.schedule.datesLabel] : null,
    program.schedule.timeLabel ? ["Horario", program.schedule.timeLabel] : null,
    program.schedule.formatLabel ? ["Modalidad", program.schedule.formatLabel] : null,
    program.enrollment.priceLabel ? ["Inversión", program.enrollment.priceLabel] : null,
  ].filter(Boolean);

  useEffect(() => {
    persistTrackingParams();
  }, []);

  useEffect(() => {
    const node = curriculumRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackEvent("pansi_view_program", { section: "programa" }, { once: true });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handlePrimaryAction = (source) => {
    if (checkoutReady) {
      const checkoutUrl = appendTrackingParams(program.checkout.url);
      setModalCheckoutUrl(checkoutUrl);
      trackEvent("pansi_click_checkout", {
        source,
        checkout_provider: program.checkout.provider,
      });
      setOpenCheckout(true);
      return;
    }

    trackEvent("pansi_click_whatsapp", {
      source,
      intent: "course_enrollment_information",
    });
  };

  return (
    <>
      <main className="min-h-screen bg-[#f5f7fa] pb-28 text-slate-950 sm:pb-24">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <span>{program.enrollment.banner}</span>
            <span className="font-semibold text-teal-800">{program.campaignConcept}</span>
          </div>
        </section>

        <section className="bg-[#102033] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:px-8">
            <div>
              <Pill tone="accent">
                <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
                {program.hero.eyebrow}
              </Pill>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                {program.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                {program.hero.description}
              </p>
              <p className="mt-4 max-w-3xl border-l-2 border-amber-300 pl-4 leading-7 text-slate-200">
                {program.hero.support}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={!checkoutReady ? contactUrl : undefined} onClick={() => handlePrimaryAction("hero")}>{primaryCtaLabel}</PrimaryButton>
                <SecondaryLink href="#resultado">Ver qué voy a construir</SecondaryLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>{`Inicio ${program.enrollment.startDateLabel}`}</Pill>
                <Pill>{program.schedule.sessionsLabel}</Pill>
                <Pill>{program.schedule.hoursLabel}</Pill>
              </div>
            </div>

            <aside className="self-start rounded-lg border border-white/15 bg-white/[0.06]">
              <div className="border-b border-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Curso PANSI</p>
                <h2 className="mt-3 text-2xl font-bold text-white">{program.enrollment.statusLabel}</h2>
                <p className="mt-3 leading-7 text-slate-300">
                  {checkoutReady
                    ? "Completa tu inscripción en el checkout seguro correspondiente al curso PANSI de noviembre."
                    : "Solicita la información vigente sin reutilizar condiciones de convocatorias anteriores."}
                </p>
              </div>
              <dl className="divide-y divide-white/10">
                {heroDetails.map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 px-5 py-4">
                    <dt className="text-sm text-slate-400">{label}</dt>
                    <dd className="max-w-[62%] text-right text-sm font-semibold text-white">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="p-5 text-sm leading-6 text-slate-300">{program.schedule.calendarCtaLabel}.</p>
            </aside>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <SectionHeader
              eyebrow="El problema"
              title={program.problem.title}
              text={program.problem.text}
            />
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {program.problem.questions.map((question, index) => (
                <div key={question} className="flex gap-4 py-5">
                  <span className="text-sm font-bold text-teal-700">0{index + 1}</span>
                  <p className="text-lg font-semibold leading-7 text-slate-900">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf5f3]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Contexto normativo</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">{program.concept.title}</h2>
              <p className="mt-5 leading-7 text-slate-700">{program.concept.text}</p>
            </div>
            <div className="border-l-2 border-teal-600 pl-6">
              <Scale className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <p className="mt-4 leading-7 text-slate-700">{program.concept.clarification}</p>
              <p className="mt-4 font-semibold leading-7 text-slate-900">{program.concept.scope}</p>
              <a
                href={program.concept.officialReference}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 underline decoration-teal-400 underline-offset-4"
              >
                Consultar referencia oficial
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-3 text-xs leading-5 text-slate-500">{program.concept.referenceNote}</p>
            </div>
          </div>
        </section>

        <section id="resultado" className="scroll-mt-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Resultado del taller"
              title="Una estructura para pasar del diagnóstico al seguimiento"
              text="El objetivo es que puedas ordenar decisiones, responsabilidades y evidencias en una ruta que tenga continuidad después de las sesiones."
            />
            <div className="mt-8 grid gap-x-8 gap-y-0 md:grid-cols-2">
              {program.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 border-b border-slate-200 py-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <p className="leading-7 text-slate-700">{outcome}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-4xl rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              {program.outcomeClarification}
            </p>
          </div>
        </section>

        <section className="bg-[#142033] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <SectionHeader
              eyebrow={program.demonstration.label}
              title={program.demonstration.title}
              text="Una vista sencilla del razonamiento que practicarás durante el taller."
              tone="dark"
            />
            <div>
              <dl className="overflow-hidden rounded-lg border border-white/15 bg-white/[0.05]">
                {program.demonstration.items.map(([label, value]) => (
                  <div key={label} className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[180px_1fr]">
                    <dt className="text-sm font-semibold text-cyan-200">{label}</dt>
                    <dd className="leading-7 text-slate-200">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-6 text-slate-400">{program.demonstration.note}</p>
            </div>
          </div>
        </section>

        <section id="programa" ref={curriculumRef} className="scroll-mt-28 bg-[#f5f7fa]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Programa de seis sesiones"
              title="Del diagnóstico inicial a la revisión periódica"
              text="Cada sesión tiene un objetivo concreto y un resultado de ejercicio. Las fechas restantes se comunicarán cuando el calendario esté confirmado."
            />
            <div className="mt-8 border-y border-slate-200">
              {program.sessions.map((session) => (
                <SessionItem key={session.label} session={session} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Público"
              title="Para quienes necesitan llevar la protección de datos a la práctica"
              text="El curso reúne perfiles que supervisan, coordinan o ejecutan partes distintas de una adecuación. No habilita profesionalmente como DPD."
            />
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {program.audiences.map((audience, index) => {
                const icons = [ShieldCheck, UsersRound, UserRoundCog];
                const Icon = icons[index] || UsersRound;

                return (
                  <article key={audience.title} className="border-t-2 border-teal-600 pt-5">
                    <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold text-slate-950">{audience.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{audience.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf5f3]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <SectionHeader
              eyebrow="Metodología aplicada"
              title={program.methodology.title}
              text={program.methodology.text}
            />
            <div className="space-y-3">
              {program.methodology.steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 border-b border-teal-900/10 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="font-semibold leading-7 text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {confirmedMaterials.length ? (
            <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
              <div className="border-t border-teal-900/10 pt-8">
                <h3 className="text-xl font-bold text-slate-950">Materiales confirmados</h3>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {confirmedMaterials.map((material) => (
                    <li key={material.title} className="flex gap-3 text-slate-700">
                      <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                      {material.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </section>

        <SocialProofCarousel socialProof={program.socialProof} />

        <section id="inscripcion" className="scroll-mt-28 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <SectionHeader
              eyebrow="Calendario e inversión"
              title={checkoutReady ? "Inscripciones abiertas para el curso PANSI" : "Consulta la información vigente de esta convocatoria"}
              text={checkoutReady
                ? "El valor individual es de $120 USD y el pago se procesa de forma segura en Hotmart. El calendario completo, horario y modalidad pueden consultarse directamente con DataConSentido."
                : "El inicio, la carga horaria y el número de sesiones ya están confirmados. El calendario completo, horario, modalidad, precio y condiciones se comunicarán cuando queden aprobados para noviembre."}
            />
            <div className="rounded-lg border border-slate-200 bg-[#f5f7fa] p-6">
              <dl className="divide-y divide-slate-200">
                {[
                  ["Inicio", program.enrollment.startDateLabel],
                  ["Sesiones", program.schedule.sessionsLabel],
                  ["Carga total", program.schedule.hoursLabel],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <dt className="text-sm text-slate-500">{label}</dt>
                    <dd className="max-w-[64%] text-right font-semibold text-slate-950">{value}</dd>
                  </div>
                ))}
              </dl>
              <PrimaryButton href={!checkoutReady ? contactUrl : undefined} onClick={() => handlePrimaryAction("information_section")} className="mt-7 w-full">
                {primaryCtaLabel}
              </PrimaryButton>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {checkoutReady
                  ? program.checkout.displaySecurityNotice
                  : "La consulta no te suscribe automáticamente a campañas ni solicita datos sensibles o documentos de clientes."}
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-slate-200 bg-[#f5f7fa]">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Preguntas frecuentes"
              title="Respuestas sobre el curso PANSI"
              text="Información confirmada para la convocatoria que inicia el 20 de noviembre de 2026."
              centered
            />
            <div className="mt-8 border-y border-slate-200">
              {program.faqs.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#142033] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Cierre</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{program.closing.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{program.closing.text}</p>
            </div>
            <div>
              <PrimaryButton href={!checkoutReady ? contactUrl : undefined} onClick={() => handlePrimaryAction("closing_section")} className="w-full">
                {primaryCtaLabel}
              </PrimaryButton>
              <div className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <p>{program.brand.legalName}</p>
                <p>
                  Contacto: <a className="font-semibold text-cyan-200 underline underline-offset-4" href={`mailto:${program.brand.supportEmail}`}>{program.brand.supportEmail}</a>
                </p>
                <p>
                  <a className="font-semibold text-cyan-200 underline underline-offset-4" href="/politica-de-privacidad">Política de privacidad</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-16px_40px_rgba(15,23,42,0.14)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="hidden min-w-0 sm:block">
            <p className="text-xs text-slate-500">Inicio</p>
            <p className="truncate text-sm font-semibold text-slate-950">{program.enrollment.startDateLabel}</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 sm:flex sm:flex-none sm:items-center">
            <a
              href="#programa"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-950 bg-slate-950 px-4 py-2 text-sm font-bold !text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-teal-200"
            >
              <BookOpenCheck className="h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
              Ver programa
            </a>
            <PrimaryButton
              href={!checkoutReady ? contactUrl : undefined}
              onClick={() => handlePrimaryAction("sticky_bar")}
              className="min-h-11 px-3 py-2 text-sm sm:px-4"
            >
              <span className="hidden sm:inline">{primaryCtaLabel}</span>
              <span className="sm:hidden">{checkoutReady ? "Inscribirme" : "Consultar inscripción"}</span>
            </PrimaryButton>
          </div>
        </div>
      </div>

      {checkoutReady ? (
        <HotmartModal
          open={openCheckout}
          onClose={() => setOpenCheckout(false)}
          checkoutUrl={modalCheckoutUrl}
          program={program}
        />
      ) : null}

    </>
  );
}
