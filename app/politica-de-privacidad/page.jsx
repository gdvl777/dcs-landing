// app/politica-de-privacidad/page.jsx

export const metadata = {
  title: "Política de Privacidad · DataConSentido",
  description:
    "Política de Privacidad de DataConSentido para el sitio y las masterclasses LOPDP & DPD."
};

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <style>{`
        :root { --brand: #0a5275; }
        .pp-html, .pp-body {
          margin: 0; padding: 0;
          font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;
          color: #0f172a;
          background: #f8fafc;
        }
        .pp-wrap { max-width: 920px; margin: 0 auto; padding: 2.5rem 1.25rem; }
        .pp-header { background: linear-gradient(180deg,#e6f0f5,#fff); border-bottom: 1px solid #e2e8f0; }
        .pp-header .pp-wrap { padding-top: 2.75rem; padding-bottom: 2.75rem; }
        .pp-h1 { font-size: clamp(1.8rem,2.6vw,2.4rem); margin: 0; line-height: 1.15; }
        .pp-h1 strong { color: var(--brand); }
        .pp-h2 { font-size: 1.15rem; margin: 2rem 0 .75rem; color: #0f172a; }
        .pp-p, .pp-li { line-height: 1.65; }
        .pp-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.25rem;
          box-shadow: 0 8px 24px rgba(2,6,23,.04);
        }
        .pp-a { color: var(--brand); }
        .pp-foot { margin-top: 2rem; font-size: .9rem; color: #475569; }
        .pp-tag {
          display: inline-block;
          padding: .25rem .5rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: .75rem;
          color: #075985;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
        }
      `}</style>

      <div className="pp-body">
        <header className="pp-header">
          <div className="pp-wrap">
            <div className="pp-tag">Privacidad · LOPDP Ecuador</div>
            <h1 className="pp-h1">
              Política de Privacidad <strong>DataConSentido</strong>
            </h1>
            <p className="pp-p">
              Última actualización: 2025 · Sitio:{" "}
              <a
                className="pp-a"
                href="https://dataconsentido.com"
                rel="nofollow noopener"
              >
                dataconsentido.com
              </a>
            </p>
          </div>
        </header>

        <main className="pp-wrap">
          <article className="pp-card">
            <h2 className="pp-h2">1. Responsable del tratamiento</h2>
            <p className="pp-p">
              <strong>Nombre comercial: DataConSentido</strong> · RUC 0924906308001
              · Quito, Ecuador · Contacto:{" "}
              <a className="pp-a" href="mailto:contacto@dataconsentido.com">
                contacto@dataconsentido.com
              </a>
            </p>

            <h2 className="pp-h2">2. Finalidades</h2>
            <ul>
              <li className="pp-li">
                Gestionar su inscripción y participación en las Masterclasses LOPDP &amp; DPD.
              </li>
              <li className="pp-li">
                Enviar información logística, materiales, plantillas y recordatorios.
              </li>
              <li className="pp-li">
                Ofrecer contenidos y demostraciones de la solución PDP-360° / PDP-APP.
              </li>
              <li className="pp-li">
                Atender consultas y ejercer derechos ARCO.
              </li>
            </ul>

            <h2 className="pp-h2">3. Bases legales</h2>
            <ul>
              <li className="pp-li">
                <strong>Medidas precontractuales</strong>: registro y acceso a los eventos.
              </li>
              <li className="pp-li">
                <strong>Interés legítimo</strong>: comunicaciones informativas sobre cumplimiento LOPDP.
              </li>
              <li className="pp-li">
                <strong>Consentimiento</strong>: suscripciones o comunicaciones comerciales opt-in.
              </li>
              <li className="pp-li">
                <strong>Cumplimiento normativo</strong> en protección de datos personales.
              </li>
            </ul>

            <h2 className="pp-h2">4. Datos tratados</h2>
            <p className="pp-p">
              Nombre, correo institucional, institución/empresa, cargo, preferencias de asistencia
              (días), y metadatos técnicos de navegación (ver Política de Cookies). No solicitamos
              datos sensibles a través del formulario general.
            </p>

            <h2 className="pp-h2">5. Destinatarios</h2>
            <p className="pp-p">
              Personal de DataConSentido y socios tecnológicos estrictamente necesarios
              (videoconferencia, correo transaccional, registro de consentimiento). No vendemos ni
              cedemos datos a terceros ajenos a estas finalidades.
            </p>

            <h2 className="pp-h2">6. Conservación</h2>
            <p className="pp-p">
              Mientras dure la relación y/o hasta que usted solicite la supresión o se oponga a
              futuras comunicaciones, respetando plazos legales de conservación aplicables.
            </p>

            <h2 className="pp-h2">7. Derechos ARCO+</h2>
            <p className="pp-p">
              Puede solicitar <strong>acceso, rectificación, actualización, oposición, portabilidad</strong>{" "}
              o <strong>eliminación</strong> escribiendo a{" "}
              <a className="pp-a" href="mailto:contacto@dataconsentido.com">
                contacto@dataconsentido.com
              </a>
              . Atenderemos su solicitud conforme a los plazos de la LOPDP y su reglamento.
            </p>

            <h2 className="pp-h2">8. Seguridad</h2>
            <p className="pp-p">
              Aplicamos medidas técnicas y organizativas alineadas a buenas prácticas (p.ej.,
              ISO/IEC 27001) para proteger la confidencialidad, integridad y disponibilidad de la
              información.
            </p>

            <h2 className="pp-h2">9. Cookies y consentimiento</h2>
            <p className="pp-p">
              Utilizamos un banner/gestor de consentimiento que bloquea cookies hasta su aceptación.
            </p>

            <h2 className="pp-h2">10. Cambios</h2>
            <p className="pp-p">
              Podremos actualizar esta política para reflejar cambios normativos o funcionales.
              Publicaremos la versión vigente en este mismo URL.
            </p>

            <div className="pp-foot">
              <p className="pp-p">
                Si desea dejar de recibir comunicaciones, puede revocar su consentimiento en
                cualquier momento escribiendo a{" "}
                <a className="pp-a" href="mailto:contacto@dataconsentido.com">
                  contacto@dataconsentido.com
                </a>
                .
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
