"use client";

import { useState } from "react";
import HotmartModal from "./HotmartModal";

export default function ArquitecturaPdpLanding() {
  const [openModal, setOpenModal] = useState(false);

  const checkoutUrl = "https://pay.hotmart.com/TU-LINK";

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">
              💰 Inversión especial
            </p>

            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-bold text-white">$110</span>
              <span className="pb-1 text-slate-300">USD</span>
            </div>

            <p className="mt-3 text-slate-200">
              Acceso al programa completo de 6 sesiones intensivas.
            </p>

            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              🛒 Comprar ahora
            </button>
          </div>
        </section>
      </main>

      <HotmartModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        checkoutUrl={checkoutUrl}
      />
    </>
  );
}