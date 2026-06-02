import Link from "next/link";
import TikTokViewContent from "@/app/components/TikTokViewContent";

const cursos = [
  {
    slug: "/formacion-avanzada",
    badge: "Programa activo",
    titulo: "Formación Avanzada para el DPO",
    descripcion:
      "Programa práctico para fortalecer capacidades en cumplimiento, documentación, operación real del rol DPO/DPD y evidencia verificable.",
    detalles: [
      "Enfoque aplicado",
      "Plantillas y recursos",
      "Casos prácticos",
      "Orientado a ejecución",
    ],
    cta: "Ver programa",
    destacado: false,
  },
  {
    slug: "/arquitectura-pdp",
    badge: "Nuevo programa",
    titulo: "Arquitectura Profesional de Protección de Datos",
    descripcion:
      "Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP, con criterio técnico y visión ejecutiva.",
    detalles: [
      "PANSI · RAT · MTGE · EIPD",
      "6 sesiones intensivas",
      "15 horas de formación",
      "Aplicación inmediata",
    ],
    cta: "Ver detalles",
    destacado: true,
  },
];

export const metadata = {
  title: "Formación DPO | DataConSentido",
  description:
    "Conoce los programas y cursos de DataConSentido para DPO, DPD y equipos de cumplimiento.",
};

export default function FormacionDpoPage() {
  return (
     <>
      <TikTokViewContent />
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Formación DPO
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Elige el programa que mejor se adapta a tu nivel y necesidad
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
              Programas diseñados para fortalecer capacidades reales en protección
              de datos, cumplimiento, documentación y ejecución operativa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {cursos.map((curso) => (
              <article
                key={curso.slug}
                className={`rounded-[2rem] border p-7 shadow-xl transition duration-200 hover:-translate-y-1 ${
                  curso.destacado
                    ? "border-cyan-400/25 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-900"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm ${
                      curso.destacado
                        ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                        : "border border-white/10 bg-white/5 text-slate-300"
                    }`}
                  >
                    {curso.badge}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                  {curso.titulo}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                  {curso.descripcion}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {curso.detalles.map((detalle) => (
                    <span
                      key={detalle}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-sm text-slate-300"
                    >
                      {detalle}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href={curso.slug}
                    className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition ${
                      curso.destacado
                        ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                        : "border border-white/15 text-white hover:bg-white/5"
                    }`}
                  >
                    {curso.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}