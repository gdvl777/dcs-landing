import ArquitecturaPdpClient from "../../components/ArquitecturaPdpClient";
import { arquitecturaPdpProgram as program } from "@/app/data/arquitecturaPdpProgram";

export const metadata = {
  title: `${program.editionLabel} · ${program.displayName} | ${program.brand.name}`,
  description:
    `Programa online en vivo del ${program.schedule.datesLabel}, de ${program.schedule.timeLabel}, para integrar PANSI, RAT ampliado, MTGE y EIPD.`,
  alternates: {
    canonical: program.canonicalUrl,
  },
  openGraph: {
    title: `${program.editionLabel} · ${program.displayName}`,
    description:
      `Sesiones online en vivo: ${program.schedule.datesLabel}, de ${program.schedule.timeLabel}, GMT-5.`,
    url: program.canonicalUrl,
    siteName: program.brand.name,
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: `${program.canonicalUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${program.editionLabel} de ${program.displayName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${program.editionLabel} · ${program.displayName}`,
    description:
      `PANSI, RAT ampliado, MTGE y EIPD. ${program.schedule.datesLabel}, ${program.schedule.timeLabel}.`,
    images: [`${program.canonicalUrl}/opengraph-image`],
  },
};

export default function Page() {
  return <ArquitecturaPdpClient />;
}
