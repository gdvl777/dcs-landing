// app/politica-de-privacidad/page.jsx
export const metadata = {
  title: "Política de Privacidad · DataConSentido",
  description: "Política de Privacidad de DataConSentido para el sitio y masterclasses."
};

export default function PrivacidadPage() {
  return (
    <main className="container" style={{ paddingTop: 24 }}>
      <section className="hero" style={{ background: "rgba(255,255,255,.06)" }}>
        <h1 className="h1">Política de Privacidad <span style={{ opacity: 0.9 }}>DataConSentido</span></h1>
        <p className="sub">
          Última actualización: 2025 · Sitio: <a href="https://dataconsentido.com">dataconsentido.com</a>
        </p>
      </section>

      <section className="section" style={{ marginTop: 14 }}>
        <h2 className="sectionTitle">1. Responsable del tratamiento</h2>
        <p className="sub" style={{ color: "var(--text)" }}>
          <b>Nombre comercial:</b> DataConSentido · <b>RUC</b> 0993404667001 · Guayaquil, Ecuador ·
          <b> Contacto:</b> <a href="mailto:contacto@dataconsentido.com">contacto@dataconsentido.com</a>
        </p>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>2. Finalidades</h2>
        <ul className="bullets">
          <li>Gestionar su inscripción y participación en las Masterclasses LOPDP & DPD.</li>
          <li>Enviar información logística, materiales, plantillas y recordatorios.</li>
          <li>Ofrecer contenidos y demostraciones de la solución PDP-360° / PDP-APP.</li>
          <li>Atender consultas y ejercer derechos ARCO+.</li>
        </ul>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>3. Bases legales</h2>
        <ul className="bullets">
          <li><b>Medidas precontractuales:</b> registro y acceso a eventos.</li>
          <li><b>Interés legítimo:</b> comunicaciones informativas sobre cumplimiento LOPDP.</li>
          <li><b>Consentimiento:</b> comunicaciones comerciales opt-in.</li>
          <li><b>Cumplimiento normativo</b> en protección de datos personales.</li>
        </ul>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>4. Datos tratados</h2>
        <p className="sub">
          Nombre, correo institucional, institución/empresa, cargo, preferencias de asistencia (días),
          y metadatos técnicos de navegación. No solicitamos datos sensibles en formularios generales.
        </p>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>5. Destinatarios</h2>
        <p className="sub">
          Personal de DataConSentido y socios tecnológicos estrictamente necesarios. No vendemos ni cedemos datos
          a terceros ajenos a estas finalidades.
        </p>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>6. Conservación</h2>
        <p className="sub">
          Mientras dure la relación y/o hasta que solicite supresión u oposición, respetando plazos legales aplicables.
        </p>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>7. Derechos ARCO+</h2>
        <p className="sub">
          Puede solicitar acceso, rectificación, actualización, oposición, portabilidad o eliminación escribiendo a{" "}
          <a href="mailto:contacto@dataconsentido.com">contacto@dataconsentido.com</a>.
        </p>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>8. Seguridad</h2>
        <p className="sub">
          Aplicamos medidas técnicas y organizativas alineadas a buenas prácticas para proteger la información.
        </p>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>9. Cookies y consentimiento</h2>
        <p className="sub">
          Utilizamos un gestor de consentimiento que bloquea cookies hasta su aceptación.
        </p>

        <h2 className="sectionTitle" style={{ marginTop: 16 }}>10. Cambios</h2>
        <p className="sub">
          Podremos actualizar esta política para reflejar cambios normativos o funcionales.
        </p>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} DataConSentido</span>
        <span>Privacidad, Cumplimiento y Tecnología con Sentido</span>
      </footer>
    </main>
  );
}
