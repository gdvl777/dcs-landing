// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "DataConSentido",
  description: "Privacidad, Cumplimiento y Tecnología con Sentido"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
