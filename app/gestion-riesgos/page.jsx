export const metadata = {
  title: "Gestión de Riesgos | DataConSentido",
  description:
    "Mindmap interactivo de gestión de riesgos y EIPD de DataConSentido.",
};

export default function GestionRiesgosPage() {
  return (
    <main className="w-full min-h-screen bg-[#03152b]">
      <section className="w-full h-[calc(100vh-80px)]">
        <iframe
          src="/gestion-riesgos/index.html"
          title="Mindmap Gestión de Riesgos"
          className="w-full h-full border-0 block"
        />
      </section>
    </main>
  );
}