import Link from "next/link";
import { CheckCircle2, Mail, MessageCircle, ReceiptText } from "lucide-react";
import ArquitecturaPdpThanksClient from "@/app/components/ArquitecturaPdpThanksClient";
import {
  arquitecturaPdpProgram as program,
  buildWhatsAppUrl,
} from "@/app/data/arquitecturaPdpProgram";

export const metadata = {
  title: `Gracias · ${program.displayName} | ${program.brand.name}`,
  description:
    "Confirmación y próximos pasos del programa Arquitectura Profesional de Protección de Datos Personales.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasArquitecturaPdpPage() {
  const supportWhatsappUrl = buildWhatsAppUrl(program.whatsapp.infoText, program);

  return (
    <main className="min-h-screen bg-[#0b1220] text-slate-100">
      <ArquitecturaPdpThanksClient />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-6">
          <CheckCircle2 className="h-10 w-10 text-emerald-100" aria-hidden="true" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-emerald-100">
            Confirmación
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Gracias por inscribirte en {program.displayName}
          </h1>
          <p className="mt-5 text-lg leading-8 text-emerald-50/90">
            Esta página está preparada como retorno posterior al pago. Los detalles finales se
            completan desde la configuración central del programa.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <ReceiptText className="h-6 w-6 text-cyan-200" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">Resumen del programa</h2>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Programa", program.displayName],
                ["Edición", program.editionLabel],
                ["Fechas", program.schedule.datesLabel],
                ["Horario", `${program.schedule.timeLabel} · ${program.schedule.timezoneLabel}`],
                ["Duración", `${program.schedule.sessionsLabel} · ${program.schedule.hoursLabel}`],
                ["Precio", program.enrollment.priceLabel],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-slate-400">{label}</dt>
                  <dd className="max-w-[58%] text-right font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <Mail className="h-6 w-6 text-amber-100" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">Próximos pasos</h2>
            <ul className="mt-5 space-y-4 leading-7 text-slate-300">
              <li>Revisar el correo usado en el checkout para instrucciones de acceso.</li>
              <li>Confirmar canal de grupo, materiales y calendario cuando estén publicados.</li>
              <li>Solicitar factura o soporte con los datos de compra si aplica.</li>
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${program.brand.supportEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-200/30 px-4 py-3 font-bold text-cyan-100 hover:bg-cyan-200/10"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Soporte
              </a>
              <a
                href={supportWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-200/30 px-4 py-3 font-bold text-emerald-100 hover:bg-emerald-200/10"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={program.slug}
            className="inline-flex items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200"
          >
            Volver al programa
          </Link>
          <Link
            href="/politica-de-privacidad"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/5"
          >
            Política de privacidad
          </Link>
        </div>
      </section>
    </main>
  );
}

