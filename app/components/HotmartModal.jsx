"use client";

export default function HotmartModal({ open, onClose, checkoutUrl }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-sm font-semibold text-white hover:bg-black/60"
        >
          Cerrar
        </button>

        <div className="border-b border-white/10 bg-slate-950/95 px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            Checkout Hotmart
          </p>
          <p className="mt-2 text-base font-semibold text-white">
            Completa tu pago en un entorno seguro
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-300">
            El formulario que verás a continuación pertenece a{" "}
            <span className="font-semibold text-amber-300">Hotmart</span>. Tus
            datos de pago se procesan directamente en Hotmart, bajo sus
            políticas de protección de datos personales y sus estándares de
            seguridad, lo que garantiza un flujo de pago seguro y confiable.
          </p>
        </div>

        <div className="min-h-0 flex-1">
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