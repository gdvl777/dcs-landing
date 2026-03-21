export const metadata = {
  title: "Gestión de Riesgos | DataConSentido",
  description: "Mindmap interactivo de gestión de riesgos y EIPD.",
};

export default function GestionRiesgosPage() {
  return (
    <main className="w-full bg-[#03152b]">
      <iframe
        src="/public/gestion-riesgos/index.html"
        title="Gestión de Riesgos"
        className="block w-full border-0"
        style={{ height: "calc(100vh - 110px)" }}
      />
    </main>
  );
}