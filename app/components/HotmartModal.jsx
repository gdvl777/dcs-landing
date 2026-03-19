"use client";

export default function HotmartModal({ open, onClose, checkoutUrl }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/60"
        >
          Cerrar
        </button>

        <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_30%)] px-6 py-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Pago seguro
            </span>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Checkout Hotmart
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-white md:text-2xl">
            Completa tu pago en un entorno confiable
          </h3>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
            El formulario que verás a continuación pertenece a{" "}
            <span className="font-semibold text-amber-300">Hotmart</span>. Tus
            datos de pago se procesan directamente en Hotmart, bajo sus políticas
            de protección de datos personales y sus estándares de seguridad.
          </p>
        </div>

        <div className="min-h-0 flex-1 bg-slate-950">
          <iframe
            src={checkoutUrl}
            title="Checkout Hotmart"
            className="h-full w-full"
            allow="payment *"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4">
          <p className="text-sm leading-6 text-slate-400">
            Si el formulario no se carga correctamente, puedes abrirlo en una
            nueva pestaña usando este enlace:{" "}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-300 underline underline-offset-4"
            >
              abrir checkout Hotmart
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}