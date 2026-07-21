"use client";

import { ExternalLink, LockKeyhole, X } from "lucide-react";

export default function HotmartModal({ open, onClose, checkoutUrl, program }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-white/10 bg-[#102033] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hotmart-checkout-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-slate-950/70 text-white transition hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-300/25"
          aria-label="Cerrar checkout"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="border-b border-white/10 bg-[#142b3f] px-5 py-5 pr-16 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-teal-200/30 bg-teal-200/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-teal-50">
              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              Pago seguro
            </span>
            <span className="inline-flex rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-200">
              Checkout Hotmart
            </span>
          </div>

          <h2 id="hotmart-checkout-title" className="mt-4 text-xl font-bold text-white md:text-2xl">
            Completa tu inscripción por {program.enrollment.priceLabel}
          </h2>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300 md:text-base">
            {program.checkout.displaySecurityNotice}
          </p>
        </div>

        <div className="min-h-0 flex-1 bg-white">
          <iframe
            src={checkoutUrl}
            title="Checkout Hotmart"
            className="h-full w-full"
            allow="payment *"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="border-t border-white/10 bg-[#102033] px-5 py-4 sm:px-6">
          <p className="text-sm leading-6 text-slate-300">
            Si el checkout no carga correctamente, puedes abrirlo en una nueva pestaña:{" "}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-teal-200 underline underline-offset-4"
            >
              abrir checkout Hotmart
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

