import "./globals.css";

export const metadata = {
  title: "DataConSentido",
  description: "Privacidad, Cumplimiento y Tecnología con Sentido"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
