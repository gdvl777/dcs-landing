import Link from "next/link";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import ArquitecturaPdpThanksClient from "@/app/components/ArquitecturaPdpThanksClient";
import {
  arquitecturaPdpProgram as program,
  buildWhatsAppUrl,
} from "@/app/data/arquitecturaPdpProgram";

export const metadata = {
  title: `Gracias por tu compra | Curso PANSI | ${program.brand.name}`,
  description: "Confirmación y próximos pasos de la compra del curso PANSI.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasArquitecturaPdpPage() {
  const supportWhatsappUrl = buildWhatsAppUrl(program.whatsapp.infoText, program);

  return (
    <main className="min-h-screen bg-[#102033] text-slate-100">
      <ArquitecturaPdpThanksClient />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-cyan-200/20 bg-white/[0.05] p-6 md:p-8">
          <CheckCircle2 className="h-9 w-9 text-teal-300" aria-hidden="true" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyan-200">
            Compra procesada por Hotmart
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            ¡Gracias por tu compra!
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Hotmart procesó tu transacción y enviará el comprobante al correo registrado. Revisa tu bandeja de entrada para consultar los detalles de la compra y los próximos pasos de tu inscripción.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            Curso intensivo PANSI · Inicio 20 de noviembre de 2026 · Inversión individual de $120 USD.
          </p>
          <p className="mt-4 rounded-lg border border-teal-300/20 bg-teal-300/10 px-4 py-3 text-sm leading-6 text-teal-50">
            La inscripción se registra con la notificación de compra aprobada emitida por Hotmart.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={supportWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-bold text-white hover:bg-teal-400"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Consultar por WhatsApp
            </a>
            <a
              href={`mailto:${program.brand.supportEmail}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200/30 px-5 py-3 font-bold text-cyan-100 hover:bg-cyan-200/10"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Escribir por correo
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={program.slug}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/5"
          >
            Volver al curso PANSI
          </Link>
          <Link
            href="/politica-de-privacidad"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/5"
          >
            Política de privacidad
          </Link>
        </div>
      </section>
    </main>
  );
}
