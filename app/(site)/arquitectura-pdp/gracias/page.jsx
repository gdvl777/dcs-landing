import Link from "next/link";
import { Info, Mail, MessageCircle } from "lucide-react";
import ArquitecturaPdpThanksClient from "@/app/components/ArquitecturaPdpThanksClient";
import {
  arquitecturaPdpProgram as program,
  buildWhatsAppUrl,
} from "@/app/data/arquitecturaPdpProgram";

export const metadata = {
  title: `Retorno del checkout PANSI | ${program.brand.name}`,
  description: "Información posterior al checkout del curso PANSI.",
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
          <Info className="h-9 w-9 text-cyan-200" aria-hidden="true" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyan-200">
            Retorno del checkout
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Revisa la confirmación emitida por Hotmart
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Esta página no confirma por sí sola el pago. Tu inscripción queda confirmada cuando Hotmart aprueba la transacción y emite el comprobante correspondiente.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            Curso intensivo PANSI · Inicio 20 de noviembre de 2026 · Inversión individual de $120 USD.
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
