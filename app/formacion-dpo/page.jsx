import Link from "next/link";

export default function FormacionDPOPage() {
  return (
    <div className="container">
      <div className="nav">
        <div style={{ fontWeight: 900 }}>DataConSentido</div>
        <div className="navLinks">
          <Link className="pill" href="/">Inicio</Link>
          <Link className="pill" href="/dpo">Servicios DPO</Link>
          <Link className="pill" href="/calcular-mtge">MTGE</Link>
        </div>
      </div>

      <section className="hero">
        <h1 className="h1">Formación avanzada DPO</h1>
        <p className="sub">
          Programa práctico para dominar criterios, documentación, riesgos y la operación real del rol DPO/DPD.
        </p>

        <div className="ctaRow">
          <Link className="btn" href="/masterclass">Reservar cupo</Link>
          <a className="btn btnGhost" href="https://wa.me/593992801005" target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Qué aprenderás</h2>
        <ul className="bullets">
          <li>Levantamiento de tratamientos + evidencias</li>
          <li>Riesgos, medidas y seguimiento</li>
          <li>Documentación y operación del DPO/DPD</li>
        </ul>
      </section>

      <div className="footer">
        <Link href="/">Volver al inicio</Link>
        <Link href="/politica-de-privacidad">Política de Privacidad</Link>
      </div>
    </div>
  );
}
