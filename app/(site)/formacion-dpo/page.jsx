import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, Clock3 } from "lucide-react";
import TikTokViewContent from "@/app/components/TikTokViewContent";
import {
  arquitecturaPdpProgram as program,
  getPrimaryCtaLabel,
} from "@/app/data/arquitecturaPdpProgram";

const ofertas = [
  {
    slug: program.slug,
    badge: `${program.editionLabel} · ${program.enrollment.statusLabel}`,
    categoria: "Programa con inscripciones abiertas",
    titulo: program.displayName,
    descripcion:
      "Formación online en vivo para integrar PANSI, RAT ampliado, MTGE y EIPD en una arquitectura operativa con evidencia y trazabilidad.",
    detalles: [
      "PANSI · RAT · MTGE · EIPD",
      `${program.schedule.sessionsLabel} · ${program.schedule.hoursLabel}`,
      program.schedule.datesLabel,
      program.enrollment.priceLabel,
    ],
    cta: getPrimaryCtaLabel(program),
    destacado: true,
  },
  {
    slug: "/formacion-avanzada",
    badge: "Edición finalizada",
    categoria: "Referencia histórica",
    titulo: "Formación Avanzada para el DPO",
    descripcion:
      "Programa previo de formación práctica para fortalecer capacidades de cumplimiento y documentación del rol DPO/DPD.",
    detalles: [
      "No recibe pauta activa",
      "Oferta y fechas no vigentes",
      "Derivar nuevas consultas al programa vigente",
    ],
    cta: "Ver referencia",
    destacado: false,
  },
];

export const metadata = {
  title: "Formación DPO | DataConSentido",
  description:
    "Hub de formación de DataConSentido para DPO, DPD y equipos de cumplimiento, con la oferta vigente de Arquitectura PDP.",
};

export default function FormacionDpoPage() {
  return (
    <>
      <TikTokViewContent />
      <main className="min-h-screen bg-[#0b1220] text-white">
        <section className="border-b border-white/10 bg-[#101827]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                Formación DPO
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Una ruta clara para desarrollar capacidades reales en protección de datos
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
                Este hub distingue la próxima oferta comercial, referencias históricas y programas que
                no deben recibir tráfico de pauta.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={program.slug}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200"
                >
                  Ir al programa vigente
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  href={`${program.slug}#programa`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/5"
                >
                  Ver temario
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {ofertas.map((oferta) => (
              <article
                key={oferta.slug}
                className={`rounded-lg border p-6 ${
                  oferta.destacado
                    ? "border-cyan-300/25 bg-cyan-300/10"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200">
                    {oferta.badge}
                  </span>
                  <span className="rounded-lg border border-amber-200/25 bg-amber-200/10 px-3 py-2 text-sm text-amber-100">
                    {oferta.categoria}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                  {oferta.titulo}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                  {oferta.descripcion}
                </p>

                <ul className="mt-6 grid gap-3">
                  {oferta.detalles.map((detalle) => (
                    <li key={detalle} className="flex gap-3 text-slate-200">
                      {oferta.destacado ? (
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-200" aria-hidden="true" />
                      ) : (
                        <Clock3 className="mt-1 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
                      )}
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={oferta.destacado ? oferta.slug : program.slug}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 font-bold ${
                      oferta.destacado
                        ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                        : "border border-white/15 text-white hover:bg-white/5"
                    }`}
                  >
                    {oferta.destacado ? oferta.cta : "Ir al programa vigente"}
                    <BookOpenCheck className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
