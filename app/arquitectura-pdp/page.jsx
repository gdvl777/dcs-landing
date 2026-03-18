export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
          Programa intensivo
        </div>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Arquitectura Profesional de Protección de Datos
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-300">
          Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Duración</p>
            <p className="mt-2 text-2xl font-semibold">4 sesiones</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Formato</p>
            <p className="mt-2 text-2xl font-semibold">2.5 horas por sesión</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Inversión</p>
            <p className="mt-2 text-2xl font-semibold">$110 USD</p>
          </div>
        </div>
      </div>
    </main>
  );
}