export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* IZQUIERDA */}
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Programa intensivo
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Arquitectura Profesional de Protección de Datos
            </h1>

            <p className="mt-6 text-lg text-slate-300 md:text-xl">
              Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.
            </p>

            {/* BADGES */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
                PANSI · RAT · MTGE · EIPD
              </span>

              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                24, 25, 31 de marzo y 1 de abril
              </span>
            </div>

            {/* TARJETAS */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Duración</p>
                <p className="mt-1 text-xl font-semibold">4 sesiones</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Formato</p>
                <p className="mt-1 text-xl font-semibold">2.5h por sesión</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Inversión</p>
                <p className="mt-1 text-xl font-semibold text-cyan-300">
                  $110 USD
                </p>
              </div>
            </div>

            {/* BOTONES */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://pay.hotmart.com/TU-LINK"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 hover:bg-cyan-300"
              >
                Inscribirme
              </a>

              <a
                href="#programa"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5"
              >
                Ver programa
              </a>
            </div>
          </div>

          {/* DERECHA (CARD VISUAL) */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
            <h3 className="text-xl font-semibold text-white">
              Estructura del programa
            </h3>

            <div className="mt-6 space-y-4">
              {["PANSI", "RAT Ampliado", "MTGE", "EIPD"].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-semibold">{item}</p>
                  <p className="text-sm text-slate-400">
                    Bloque estratégico del programa
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}