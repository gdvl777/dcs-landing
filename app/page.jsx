import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <div className="nav">
        <div style={{ fontWeight: 900, letterSpacing: 0.2 }}>
          DataConSentido
        </div>

        <div className="navLinks">
          <Link className="pill" href="/dpo">Servicios DPO</Link>
          <Link className="pill" href="/formacion-dpo">Formación DPO</Link>
          <Link className="pill" href="/calcular-mtge">Calculadora MTGE</Link>
          <Link className="pill" href="/politica-de-privacidad">Privacidad</Link>
        </div>
      </div>

      <section className="hero">
        <h1 className="h1">Protección de Datos Personales en Ecuador (LOPDP)</h1>
        <p className="sub">
          Enfoque práctico y verificable: documentación clave, gestión de riesgos,
          acompañamiento del DPO/DPD y formación avanzada para equipos y profesionales.
        </p>

        <div className="ctaRow">
          <Link className="btn" href="/dpo">Quiero DPO para mi organización</Link>
          <Link className="btn btnGhost" href="/formacion-dpo">Ver formación avanzada DPO</Link>
          <Link className="btn btnGhost" href="/calcular-mtge">Abrir calculadora MTGE</Link>
        </div>
      </section>

      <section className="grid3">
        <div className="card">
          <div className="cardTitle">Servicios DPO (DPOaaS / DPD Externo)</div>
          <ul className="bullets">
            <li>Diagnóstico inicial + brechas</li>
            <li>RAT/RID + evidencias y controles</li>
            <li>Informes, acompañamiento y mejora continua</li>
          </ul>
          <div className="ctaRow">
            <Link className="btn" href="/dpo">Ver servicios</Link>
            <a className="btn btnGhost" href="https://wa.me/593992801005" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Formación avanzada DPO</div>
          <ul className="bullets">
            <li>Aplicación práctica: documentación, riesgos y operación</li>
            <li>Enfoque para profesionales y organizaciones</li>
            <li>Recursos, plantillas y casos</li>
          </ul>
          <div className="ctaRow">
            <Link className="btn" href="/formacion-dpo">Ver programa</Link>
            <Link className="btn btnGhost" href="/masterclass">Reservar cupo</Link>
          </div>
        </div>

        <div className="card">
          <div className="cardTitle">Calculadora MTGE</div>
          <ul className="bullets">
            <li>Determina puntaje MTGE</li>
            <li>Evalúa si califica como gran escala</li>
            <li>Resumen copiable para informes</li>
          </ul>
          <div className="ctaRow">
            <Link className="btn" href="/calcular-mtge">Calcular ahora</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Cómo trabajamos</h2>
        <div className="sub">
          Metodología simple para ejecutar y dejar evidencia lista (no solo teoría).
        </div>

        <div className="steps">
          <div className="step">
            <div className="stepName">1) Diagnóstico</div>
            <div className="stepDesc">Levantamiento de tratamientos, inventarios y brechas.</div>
          </div>
          <div className="step">
            <div className="stepName">2) Plan</div>
            <div className="stepDesc">Priorización por riesgo, responsables y cronograma.</div>
          </div>
          <div className="step">
            <div className="stepName">3) Evidencias</div>
            <div className="stepDesc">Documentación, controles y capacitación.</div>
          </div>
          <div className="step">
            <div className="stepName">4) Mejora</div>
            <div className="stepDesc">Monitoreo, incidentes y revisiones periódicas.</div>
          </div>
        </div>
      </section>

      <div className="footer">
        <div>© {new Date().getFullYear()} DataConSentido</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://wa.me/593992801005" target="_blank" rel="noreferrer">WhatsApp</a>
          <Link href="/politica-de-privacidad">Política de Privacidad</Link>
          <Link href="/webinar">Webinar</Link>
        </div>
      </div>
    </div>
  );
}
