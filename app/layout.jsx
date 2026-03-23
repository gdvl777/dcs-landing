import "./globals.css";

export const metadata = {
  title: "DataConSentido",
  description: "Privacidad · Cumplimiento · Tecnología",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}