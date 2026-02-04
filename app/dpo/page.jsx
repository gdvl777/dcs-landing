import Link from "next/link";

export default function DPOPage() {
  return (
    <div className="container">
      <div className="nav">
        <div style={{ fontWeight: 900 }}>DataConSentido</div>
        <div className="navLinks">
          <Link className="pill" href="/">Inicio</Link>
          <Link className="pill" href="/formacion-dpo">Formación DPO</Link>
          <Link className="pill" href="/calcular-mtge">MTGE</Link>
        </div>
      </div>

      <section className="hero">
        <h1 className="h1">Servicios DPO (DPOaaS / DPD Externo)</h1>
        <p className="sub">
          Acompañamiento para cumplir LOPDP con evidencia real: levantamiento,
          documentación clave, gestión de riesgos, y seguimiento.
        </p>

        <div className="ctaRow">
          <a className="btn" href="https://wa.me/593992801005" target="_blank" rel="noreferrer">
            Agendar diagnóstico por WhatsApp
          </a>
          <Link className="btn btnGhost" href="/calcular-mtge">Calcular MTGE</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Qué incluye (base)</h2>
        <ul className="bullets">
          <li>Levantamiento de tratamientos e inventarios</li>
          <li>RAT / RID (según aplique) + recomendaciones</li>
          <li>Matriz de riesgos y medidas</li>
          <li>Políticas / avisos / cláusulas</li>
          <li>Acompañamiento y reportabilidad</li>
        </ul>
      </section>

      <div className="footer">
        <Link href="/">Volver al inicio</Link>
        <Link href="/politica-de-privacidad">Política de Privacidad</Link>
      </div>
    </div>
  );
}
