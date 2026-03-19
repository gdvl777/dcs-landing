"use client";

export default function HotmartModal({ open, onClose, checkoutUrl }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-sm font-semibold text-white hover:bg-black/60"
        >
          Cerrar
        </button>

        <iframe
          src={checkoutUrl}
          title="Checkout Hotmart"
          className="h-full w-full"
          allow="payment *"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}