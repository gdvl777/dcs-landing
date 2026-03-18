import LandingArquitecturaPdp from "../components/LandingArquitecturaPdp";

export const metadata = {
  title: "Arquitectura Profesional de Protección de Datos | DataConSentido",
  description:
    "Cómo estructurar PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP. Programa intensivo de 4 sesiones de 2.5 horas.",
  openGraph: {
    title: "Arquitectura Profesional de Protección de Datos | DataConSentido",
    description:
      "Programa intensivo sobre PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.",
    url: "https://dataconsentido.com/arquitectura-pdp",
    siteName: "DataConSentido",
    images: [
      {
        url: "https://dataconsentido.com/images/arquitectura-pdp-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Arquitectura Profesional de Protección de Datos",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquitectura Profesional de Protección de Datos | DataConSentido",
    description:
      "Programa intensivo sobre PANSI, RAT, MTGE y EIPD bajo el nuevo enfoque operativo de la LOPDP.",
    images: ["https://dataconsentido.com/images/arquitectura-pdp-cover.jpg"],
  },
};

export default function Page() {
  return <LandingArquitecturaPdp />;
}