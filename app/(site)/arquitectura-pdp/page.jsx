import ArquitecturaPdpClient from "../../components/ArquitecturaPdpClient";
import { arquitecturaPdpProgram as program } from "@/app/data/arquitecturaPdpProgram";

export const metadata = {
  title: "Curso PANSI en Ecuador | Inicio 20 de noviembre | DataConSentido",
  description:
    "Aprende a estructurar un PANSI con medidas, responsables, evidencias y seguimiento. Seis sesiones y aproximadamente 15 horas. Inicio 20 de noviembre de 2026.",
  alternates: {
    canonical: program.canonicalUrl,
  },
  openGraph: {
    title: "Curso PANSI en Ecuador | Inicio 20 de noviembre",
    description:
      "Construye un PANSI con medidas, responsables, evidencias y seguimiento. Seis sesiones y aproximadamente 15 horas.",
    url: program.canonicalUrl,
    siteName: program.brand.name,
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso PANSI en Ecuador | DataConSentido",
    description:
      "Del diagnóstico a la evidencia. Inicio 20 de noviembre de 2026, seis sesiones y aproximadamente 15 horas.",
  },
};

export default function Page() {
  return <ArquitecturaPdpClient />;
}
