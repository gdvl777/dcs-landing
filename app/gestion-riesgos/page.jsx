import GestionRiesgosMindmap from "../components/GestionRiesgosMindmap";

export const metadata = {
  title: "Gestión de Riesgos | DataConSentido",
  description:
    "Mindmap interactivo de gestión de riesgos y EIPD de DataConSentido.",
};

export default function GestionRiesgosPage() {
  return (
    <main className="min-h-screen bg-[#03152b]">
      <section className="mx-auto w-full max-w-[1600px] px-4 pb-8 pt-6 md:px-6">
        <GestionRiesgosMindmap />
      </section>
    </main>
  );
}