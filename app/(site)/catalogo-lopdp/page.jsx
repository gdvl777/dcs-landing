import LopdpCatalogClient from "@/app/components/LopdpCatalogClient";

export const metadata = {
  title: "Catálogo LOPDP | DataConSentido",
  description:
    "Consultorías, documentos, implementación, DATIVA y DPD externo para cumplir la Ley Orgánica de Protección de Datos Personales del Ecuador.",
  alternates: {
    canonical: "/catalogo-lopdp",
  },
  openGraph: {
    title: "Soluciones LOPDP | DataConSentido",
    description:
      "12 soluciones con alcance, entregables, tiempos y precios claros para implementar y mantener el cumplimiento en Ecuador.",
    url: "/catalogo-lopdp",
    siteName: "DataConSentido",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones LOPDP | DataConSentido",
    description:
      "Consultoría, documentos, implementación y acompañamiento continuo para convertir obligaciones en evidencia.",
  },
};

export default function CatalogoLopdpPage() {
  return <LopdpCatalogClient />;
}
