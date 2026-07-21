"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileText,
  Landmark,
  LockKeyhole,
  MessageCircle,
  Scale,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import HotmartModal from "./HotmartModal";
import {
  arquitecturaPdpProgram as program,
  buildWhatsAppUrl,
  getPrimaryCtaLabel,
  isCheckoutReady,
} from "@/app/data/arquitecturaPdpProgram";

const TRACKING_KEYS = ["utm_", "gclid", "fbclid", "ttclid", "msclkid"];

const eventDefaults = {
  program_slug: program.slug,
  program_name: program.displayName,
  program_edition: program.editionLabel,
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
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (window.ttq && typeof window.ttq.track === "function") {
    const tikTokEvent = eventName === "view_program" ? "ViewContent" : "ClickButton";
    window.ttq.track(tikTokEvent, payload);
  }
}

function appendTrackingParams(checkoutUrl) {
  if (!checkoutUrl || typeof window === "undefined") return checkoutUrl;

  try {
    const target = new URL(checkoutUrl);
    const current = new URL(window.location.href);

    current.searchParams.forEach((value, key) => {
      const shouldKeep = TRACKING_KEYS.some((trackingKey) =>
        trackingKey.endsWith("_") ? key.startsWith(trackingKey) : key === trackingKey
      );

      if (shouldKeep) target.searchParams.set(key, value);
    });

    return target.toString();
  } catch {
    return checkoutUrl;
  }
}

function Pill({ children, tone = "default" }) {
  const toneClass =
    tone === "accent"
      ? "border-teal-200/35 bg-teal-200/10 text-teal-50"
      : tone === "warm"
        ? "border-amber-200/35 bg-amber-200/10 text-amber-50"
        : "border-white/15 bg-white/5 text-slate-100";

  return (
    <span className={`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-sm ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, text, centered = false, tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-sm font-semibold uppercase tracking-wide ${isDark ? "text-teal-200" : "text-teal-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-4xl ${isDark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({ children, onClick, className = "" }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300/30 md:text-base ${className}`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {children}
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

function SecondaryLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-teal-300/20 md:text-base"
    >
      {children}
    </a>
  );
}

function ResultCard({ children, index }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 font-bold text-teal-800">
          {index}
        </div>
        <p className="leading-7 text-slate-700">{children}</p>
      </div>
    </article>
  );
}

function DeliverablePreview({ deliverable }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{deliverable.title}</h3>
          <p className="mt-1 text-sm font-medium text-amber-700">{deliverable.status}</p>
        </div>
        <FileText className="h-6 w-6 shrink-0 text-teal-700" aria-hidden="true" />
      </div>

      {deliverable.previewImage ? (
        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
          <img
            src={deliverable.previewImage}
            alt={deliverable.previewAlt}
            loading="lazy"
            className="aspect-[14/9] w-full object-cover"
          />
        </div>
      ) : (
        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
          <div className="border-b border-slate-200 bg-slate-100 px-4 py-3">
            <div className="h-2 w-28 rounded bg-teal-300" />
          </div>
          <div className="space-y-3 p-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded bg-slate-200" />
              <div className="h-8 rounded bg-slate-200" />
              <div className="h-8 rounded bg-slate-200" />
            </div>
            <div className="h-3 w-full rounded bg-slate-200" />
            <div className="h-3 w-10/12 rounded bg-slate-200" />
            <div className="h-3 w-8/12 rounded bg-slate-200" />
          </div>
        </div>
      )}

      <p className="mt-4 text-sm leading-6 text-slate-600">{deliverable.description}</p>
    </article>
  );
}

function CurriculumRow({ item }) {
  return (
    <article className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[0.6fr_1.1fr_1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Bloque</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">{item.block}</h3>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">¿Qué se trabaja?</p>
        <p className="mt-2 leading-7 text-slate-700">{item.work}</p>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Resultado esperado</p>
        <p className="mt-2 leading-7 text-slate-700">{item.result}</p>
      </div>
    </article>
  );
}

function SessionItem({ session }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <CalendarClock className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {session.label} · {session.date}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{session.topic}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{session.practice}</p>
        </div>
      </div>
    </article>
  );
}

function StatusNotice({ icon: Icon, title, text }) {
  return (
    <article className="rounded-lg border border-amber-200 bg-amber-50 p-5">
      <Icon className="h-6 w-6 text-amber-700" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{text}</p>
    </article>
  );
}

function FaqItem({ faq }) {
  return (
    <details className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-slate-950">
        {faq.question}
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-teal-700 transition group-open:rotate-90" aria-hidden="true" />
      </summary>
      <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
    </details>
  );
}

const plainLanguageIcons = [Database, Building2, UsersRound, LockKeyhole];

function PlainLanguageSection() {
  return (
    <section id="contexto-ecuador" className="bg-[#f6f8fb]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <SectionHeader
              eyebrow={program.plainLanguage.eyebrow}
              title={program.plainLanguage.title}
              text={program.plainLanguage.intro}
            />

            <div className="mt-7 rounded-lg border border-teal-200 bg-teal-50 p-5">
              <Scale className="h-6 w-6 text-teal-800" aria-hidden="true" />
              <p className="mt-4 leading-7 text-slate-700">
                En la práctica, la LOPDP convierte la privacidad en un sistema de trabajo:
                inventario, finalidad, base de licitud, seguridad, derechos, riesgos y evidencia.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {program.plainLanguage.points.map((point, index) => {
              const Icon = plainLanguageIcons[index] || ShieldCheck;

              return (
                <article key={point.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{point.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{point.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ArquitecturaPdpClient() {
  const curriculumRef = useRef(null);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [modalCheckoutUrl, setModalCheckoutUrl] = useState(program.checkout.url);
  const checkoutReady = isCheckoutReady(program);
  const primaryCtaLabel = getPrimaryCtaLabel(program);
  const waitlistUrl = buildWhatsAppUrl(program.whatsapp.waitlistText, program);
  const infoUrl = buildWhatsAppUrl(program.whatsapp.infoText, program);
  const corporateUrl = buildWhatsAppUrl(program.whatsapp.corporateText, program);

  useEffect(() => {
    trackEvent("view_program", { section: "landing" }, { once: true });
  }, []);

  useEffect(() => {
    const node = curriculumRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackEvent("view_curriculum", { section: "programa" }, { once: true });
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleEnroll = () => {
    trackEvent("click_enroll", {
      checkout_ready: checkoutReady,
      price_label: program.enrollment.priceLabel,
    });

    if (checkoutReady) {
      const checkoutUrl = appendTrackingParams(program.checkout.url);
      setModalCheckoutUrl(checkoutUrl);

      trackEvent("open_checkout", {
        checkout_provider: program.checkout.provider,
        checkout_url_configured: true,
      });
      trackEvent("begin_checkout", {
        checkout_provider: program.checkout.provider,
        currency: program.checkout.currency,
        value: program.enrollment.priceAmount || undefined,
      });

      setOpenCheckout(true);
      return;
    }

    trackEvent("click_whatsapp", { intent: "waitlist" });
    window.open(waitlistUrl, "_blank", "noopener,noreferrer");
  };

  const handleInfoClick = () => {
    trackEvent("click_whatsapp", { intent: "program_info" });
  };

  const handleCorporateClick = () => {
    trackEvent("group_inquiry", { participants: "pending" });
    trackEvent("click_whatsapp", { intent: "corporate" });
  };

  const handleCurriculumClick = () => {
    trackEvent("view_curriculum", { section: "hero_link" }, { once: true });
  };

  return (
    <>
      <main className="min-h-screen bg-[#f6f8fb] pb-32 text-slate-950 sm:pb-28">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-700 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>{program.enrollment.banner}</span>
              <span className="font-semibold text-teal-800">
                Arquitectura Profesional de Protección de Datos Personales (4.ª edición)
              </span>
            </div>
          </div>
        </section>

        <section className="bg-[#102033] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:px-8">
            <div>
              <div className="flex flex-wrap gap-3">
                <Pill tone="accent">
                  <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
                  {program.editionLabel} · Formación online en vivo
                </Pill>
                <Pill tone="warm">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  PANSI · RAT · MTGE · EIPD
                </Pill>
              </div>

              <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
                Construye una arquitectura de protección de datos personales que puedas aplicar, justificar y defender
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-xl md:leading-8">
                Aprende a integrar PANSI, RAT ampliado, MTGE y EIPD en un modelo operativo con evidencia,
                trazabilidad y criterio profesional.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <PrimaryButton onClick={handleEnroll}>{primaryCtaLabel}</PrimaryButton>
                <SecondaryLink href="#entregables" onClick={handleCurriculumClick}>
                  Ver qué voy a construir
                </SecondaryLink>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Pill>{program.schedule.sessionsLabel}</Pill>
                <Pill>{program.schedule.hoursLabel}</Pill>
                <Pill>{program.schedule.datesLabel}</Pill>
                <Pill>{program.schedule.timeLabel}</Pill>
              </div>
            </div>

            <aside className="rounded-lg border border-white/15 bg-white/[0.06]">
              <div className="border-b border-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
                  Arquitectura Profesional de Protección de Datos Personales
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white">{program.enrollment.statusLabel}</h2>
                <p className="mt-3 leading-7 text-slate-300">{program.enrollment.displayTrustNote}</p>
              </div>

              <div className="divide-y divide-white/10">
                {[
                  ["Inicio", program.enrollment.startDateLabel],
                  ["Cierre de inscripciones", program.enrollment.enrollmentDeadlineLabel],
                  ["Inversión individual", program.enrollment.priceLabel],
                  ["Horario", `${program.schedule.timeLabel}, ${program.schedule.timezoneLabel}`],
                 
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 px-5 py-4">
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="max-w-[58%] text-right text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <a
                  href={infoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleInfoClick}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-bold text-white transition hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-teal-300/20"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Consultar por WhatsApp
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <PlainLanguageSection />

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Resultados del programa"
              title="Al finalizar tendrás una estructura para operar y defender decisiones PDP"
              text="La promesa se centra en producir criterio y trazabilidad, no en acumular conceptos aislados."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {program.outcomes.map((outcome, index) => (
                <ResultCard key={outcome} index={index + 1}>
                  {outcome}
                </ResultCard>
              ))}
            </div>
          </div>
        </section>

        <section id="entregables" className="bg-[#f6f8fb]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Entregables"
              title="Materiales para trabajar la arquitectura PDP durante el programa"
              text="El curso combina sesiones en vivo con plantillas editables, grabaciones, recursos aplicados y certificado."
            />

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {program.deliverables.map((deliverable) => (
                <DeliverablePreview key={deliverable.title} deliverable={deliverable} />
              ))}
            </div>
          </div>
        </section>

        <section id="programa" ref={curriculumRef} className="scroll-mt-28 border-y border-slate-200 bg-[#eef7f5]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Programa académico"
              title="Tres bloques para una gestión PDP madura y defendible"
              text="El contenido se organiza alrededor de PANSI, RAT ampliado, MTGE y EIPD, con resultados esperados visibles por bloque."
            />

            <div className="mt-8 grid gap-4">
              {program.curriculumBlocks.map((item) => (
                <CurriculumRow key={item.block} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <SectionHeader
                eyebrow="Metodología y calendario"
                title="Calendario de la cuarta edición"
                text={`${program.schedule.sessionsLabel}, ${program.schedule.hoursLabel}, ${program.schedule.formatLabel}. Las sesiones serán de ${program.schedule.timeLabel}, ${program.schedule.timezoneLabel}, con espacio de preguntas.`}
              />

              <div className="grid gap-4 md:grid-cols-2">
                {program.sessions.map((session) => (
                  <SessionItem key={session.label} session={session} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f6f8fb]">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
            <StatusNotice
              icon={UserRoundCheck}
              title={`Instructores: ${program.instructors.status}`}
              text={program.instructors.note}
            />
            <StatusNotice
              icon={ClipboardCheck}
              title={`Evidencia social: ${program.socialProof.status}`}
              text={program.socialProof.note}
            />
          </div>
        </section>

        <section id="inscripcion" className="scroll-mt-28 bg-[#eef7f5]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-lg border border-teal-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Landmark className="mt-1 h-6 w-6 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                    Inversión
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-950">{program.individualOffer.title}</h2>
                  <p className="mt-3 text-4xl font-bold text-slate-950">{program.individualOffer.priceLabel}</p>
                  <p className="mt-4 leading-7 text-slate-600">
                    Oferta vigente.
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3">
                {program.individualOffer.items.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>

              <PrimaryButton onClick={handleEnroll} className="mt-7 w-full">
                {primaryCtaLabel}
              </PrimaryButton>

              <p className="mt-4 text-sm leading-6 text-slate-600">{program.checkout.displayNote}</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Building2 className="mt-1 h-6 w-6 shrink-0 text-amber-700" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                    Modalidad corporativa
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-950">Equipos de 3, 5 y 10 personas</h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    Para equipos, preparamos una propuesta según el número de participantes, necesidades
                    de la organización y datos de facturación.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {program.corporatePlans.map((plan) => (
                  <article key={plan.participants} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">{plan.participants}</p>
                    <p className="mt-3 text-lg font-bold text-slate-950">{plan.total}</p>
                    <p className="mt-2 text-sm text-slate-600">Por persona: {plan.perPerson}</p>
                    <p className="mt-1 text-sm text-slate-600">Ahorro: {plan.savings}</p>
                  </article>
                ))}
              </div>

              <a
                href={corporateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCorporateClick}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-5 py-3 font-bold text-amber-800 transition hover:bg-amber-100 focus:outline-none focus:ring-4 focus:ring-amber-200"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Consultar modalidad corporativa
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Preguntas frecuentes"
              title="Respuestas para esta edición"
              text="Lo que necesitas saber de nuestro curso."
              centered
            />

            <div className="mt-8 grid gap-4">
              {program.faqs.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#142033] text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
                  Cierre
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
                  Inscríbete a la cuarta edición
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                  El programa inicia el {program.enrollment.startDateLabel.toLowerCase()} y se desarrolla
                  los días {program.schedule.datesLabel}, de {program.schedule.timeLabel}. Las inscripciones
                  cierran el {program.enrollment.enrollmentDeadlineLabel}.
                </p>
              </div>

              <div className="rounded-lg border border-white/15 bg-white/[0.06] p-5">
                <PrimaryButton onClick={handleEnroll} className="w-full">
                  {primaryCtaLabel}
                </PrimaryButton>

                <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  <p>{program.brand.legalName}</p>
                  <p>{program.checkout.displaySecurityNotice}</p>
                  <p>
                    Incluye {program.schedule.sessionsLabel.toLowerCase()} online en vivo, espacio de preguntas,
                    materiales editables, grabaciones con acceso indefinido y certificado validado en blockchain.
                  </p>
                  <p>
                    Contacto:{" "}
                    <a className="font-semibold text-teal-200 underline underline-offset-4" href={`mailto:${program.brand.supportEmail}`}>
                      {program.brand.supportEmail}
                    </a>
                  </p>
                  <p>
                    <a className="font-semibold text-teal-200 underline underline-offset-4" href="/politica-de-privacidad">
                      Política de privacidad
                    </a>{" "}
                    · Soporte de compra, cambios por Hotmart y DataConSentido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-16px_40px_rgba(15,23,42,0.14)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="hidden min-w-0 sm:block">
            <p className="text-xs text-slate-500">{program.editionLabel}</p>
            <p className="truncate text-sm font-semibold text-slate-950">{program.enrollment.priceLabel}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-end">
            <a
              href="#programa"
              onClick={handleCurriculumClick}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:border-teal-300 hover:bg-teal-50 focus:outline-none focus:ring-4 focus:ring-teal-200"
            >
              <BookOpenCheck className="h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
              Ver programa
            </a>

            <button
              type="button"
              onClick={handleEnroll}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-200"
            >
              <span className="hidden sm:inline">{primaryCtaLabel}</span>
              <span className="sm:hidden">{checkoutReady ? "Inscribirme" : "Lista de espera"}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <HotmartModal
        open={openCheckout}
        onClose={() => setOpenCheckout(false)}
        checkoutUrl={modalCheckoutUrl}
        program={program}
      />
    </>
  );
}
