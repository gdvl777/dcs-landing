export const metadata = {
  title: "Gestión de Riesgos | DataConSentido",
  description: "Mindmap interactivo de gestión de riesgos y EIPD",
};

export default function GestionRiesgosPage() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100dvh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        background: "#08162b",
      }}
    >
      <iframe
        src="/mindmaps/gestion-riesgos.html"
        title="Gestión de Riesgos"
        style={{
          width: "100%",
          height: "100%",
          border: "0",
          display: "block",
        }}
      />
    </main>
  );
}