// app/dpo/page.jsx
"use client";

import Link from "next/link";

export default function DPOPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.heroWrap}>
        <div style={styles.heroGlowA} />
        <div style={styles.heroGlowB} />

        <div style={styles.container}>
          <div style={styles.kicker}>
            <span style={styles.kickerDot} />
            Servicios • DPD/DPO externo • Evidencia verificable
          </div>

          <h1 style={styles.h1}>
            Servicios DPO (DPD externo /{" "}
            <span style={styles.h1Accent}>DPOaaS</span>)
          </h1>

          <p style={styles.sub}>
            Acompañamiento para cumplir LOPDP con evidencia real: levantamiento, documentación clave,
            gestión de riesgos, y seguimiento continuo. Menos “papel bonito” y más ejecución que
            puedas sostener.
          </p>

          <div style={styles.chips}>
            <span style={styles.chip}>✅ Diagnóstico + roadmap</span>
            <span style={styles.chip}>✅ RAT/RID + evidencias</span>
            <span style={styles.chip}>✅ DPIA + riesgos</span>
            <span style={styles.chip}>✅ Contratos con encargados</span>
          </div>

          <div style={styles.ctaRow}>
            <a
              className="uiBtn uiBtnPrimary"
              href="https://wa.me/593992801005?text=Hola%20DataConSentido%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20LOPDP%20(Servicios%20DPD%2FDPO).%20%C2%BFCu%C3%A1les%20son%20los%20horarios%20disponibles%3F"
              target="_blank"
              rel="noreferrer"
            >
              <span className="uiIcon">📅</span>
              Agendar diagnóstico por WhatsApp
              <span className="uiIcon">→</span>
            </a>

            <Link className="uiBtn uiBtnGhost" href="/calcular-mtge">
              <span className="uiIcon">🧮</span>
              Calcular MTGE
            </Link>

            <Link className="uiBtn uiBtnGhost" href="/formacion-dpo">
              <span className="uiIcon">🎓</span>
              Ver formación DPO
            </Link>
          </div>

          <div style={styles.heroStats}>
            <div style={styles.stat}>
              <div style={styles.statNum}>RAT/RID</div>
              <div style={styles.statTxt}>levantamiento + coherencia legal/técnica</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNum}>DPIA</div>
              <div style={styles.statTxt}>impacto + riesgo + medidas</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNum}>Evidencia</div>
              <div style={styles.statTxt}>controles implementados y auditables</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: alcance base */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHead}>
            <h2 style={styles.h2}>Acompañamiento y reportabilidad (base)</h2>
            <p style={styles.p}>
              Lo esencial para operar cumplimiento y sostener evidencia ante auditorías, inspecciones o
              consultas internas.
            </p>
          </div>

          <div style={styles.grid2}>
            <div className="card" style={styles.card}>
              <div style={styles.cardTitle}>Entregables / Evidencias</div>
              <ul style={styles.list}>
                <li>Levantamiento de tratamientos e inventarios</li>
                <li>RAT / RID (según aplique) + recomendaciones</li>
                <li>Matriz de riesgos + plan de tratamiento</li>
                <li>Políticas / avisos / cláusulas</li>
                <li>Contratos y cláusulas con encargados</li>
              </ul>
            </div>

            <div className="card" style={styles.card}>
              <div style={styles.cardTitle}>Operación y acompañamiento</div>
              <ul style={styles.list}>
                <li>Gestión de derechos ARCO+ (procedimiento y SLAs)</li>
                <li>Capacitación y sensibilización</li>
                <li>Soporte en inspecciones, auditorías y requerimientos</li>
                <li>Seguimiento continuo + mejora</li>
                <li>Gestión de incidentes/brechas (cuando aplique)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={styles.ctaBand}>
        <div style={styles.container}>
          <div style={styles.ctaBandInner}>
            <div style={{ minWidth: 0 }}>
              <div style={styles.ctaBandTitle}>¿Necesitas arrancar ya (sin perderte en teoría)?</div>
              <div style={styles.ctaBandText}>
                En 30–45 minutos levantamos contexto, priorizamos por riesgo y definimos un roadmap.
                Si tu operación es “gran escala”, armamos evidencias desde el día 1.
              </div>
            </div>

            <div style={styles.ctaBandBtns}>
              <a
                className="uiBtn uiBtnPrimary"
                href="https://wa.me/593992801005?text=Hola%20DataConSentido%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20LOPDP%20(Servicios%20DPD%2FDPO)."
                target="_blank"
                rel="noreferrer"
              >
                <span className="uiIcon">💬</span>
                Escribir por WhatsApp
                <span className="uiIcon">→</span>
              </a>

              <Link className="uiBtn uiBtnGhost" href="/">
                <span className="uiIcon">🏠</span>
                Volver a inicio
              </Link>
            </div>
          </div>

          <div style={styles.footerLinks}>
            <Link href="/politica-de-privacidad" className="uiPill">
              Política de Privacidad
            </Link>
            <Link href="/calcular-mtge" className="uiPill">
              Calculadora MTGE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(900px 500px at 15% 10%, rgba(6,182,212,.10), transparent 60%), radial-gradient(900px 500px at 85% 0%, rgba(245,158,11,.10), transparent 60%), #0b1220",
    color: "#e8eefc",
  },
  container: { maxWidth: 1080, margin: "0 auto", padding: 22 },

  heroWrap: { position: "relative", overflow: "hidden", paddingBottom: 10 },
  heroGlowA: {
    position: "absolute",
    inset: "-40% -20% auto -20%",
    height: 520,
    background: "radial-gradient(closest-side, rgba(6,182,212,.22), transparent 70%)",
    filter: "blur(22px)",
    pointerEvents: "none",
  },
  heroGlowB: {
    position: "absolute",
    inset: "-40% -20% auto auto",
    height: 520,
    width: 520,
    background: "radial-gradient(closest-side, rgba(245,158,11,.18), transparent 70%)",
    filter: "blur(22px)",
    pointerEvents: "none",
  },

  kicker: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(255,255,255,.05)",
    fontWeight: 850,
    opacity: 0.95,
    maxWidth: "100%",
  },
  kickerDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(34,197,94,.85)",
    boxShadow: "0 0 0 4px rgba(34,197,94,.15)",
    flex: "0 0 auto",
  },

  h1: { margin: "14px 0 0 0", fontSize: 44, lineHeight: 1.07, letterSpacing: -0.6, fontWeight: 950 },
  h1Accent: {
    background: "linear-gradient(90deg, rgba(34,197,94,1), rgba(6,182,212,1), rgba(245,158,11,1))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  sub: { margin: "12px 0 0 0", fontSize: 16, lineHeight: 1.6, opacity: 0.88 },

  chips: { marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" },
  chip: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    opacity: 0.95,
    fontWeight: 800,
    fontSize: 13,
    maxWidth: "100%",
  },

  ctaRow: { marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" },

  heroStats: { marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap", opacity: 0.92 },
  stat: {
    padding: "10px 12px",
    borderRadius: 16,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    minWidth: 190,
    maxWidth: "100%",
  },
  statNum: { fontWeight: 950, fontSize: 16 },
  statTxt: { fontSize: 12, opacity: 0.84, marginTop: 4 },

  section: { padding: "16px 0 6px" },
  sectionHead: { marginBottom: 12 },
  h2: { margin: 0, fontSize: 26, fontWeight: 950, letterSpacing: -0.3 },
  p: { margin: "8px 0 0 0", opacity: 0.85, lineHeight: 1.6 },

  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  card: {
    padding: 16,
    borderRadius: 20,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(255,255,255,.06)",
    boxShadow: "0 18px 60px rgba(0,0,0,.25)",
    minWidth: 0,
  },
  cardTitle: { fontWeight: 950, fontSize: 16, marginBottom: 8 },
  list: { margin: "10px 0 0 18px", lineHeight: 1.65, opacity: 0.92 },

  ctaBand: { padding: "10px 0 28px" },
  ctaBandInner: {
    borderRadius: 22,
    border: "1px solid rgba(232,238,252,.14)",
    background:
      "radial-gradient(900px 140px at 15% 0%, rgba(6,182,212,.14), transparent 55%), radial-gradient(900px 140px at 85% 0%, rgba(245,158,11,.12), transparent 55%), rgba(255,255,255,.06)",
    boxShadow: "0 18px 80px rgba(0,0,0,.35)",
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  ctaBandTitle: { fontWeight: 950, fontSize: 18 },
  ctaBandText: { marginTop: 6, opacity: 0.86, lineHeight: 1.55, maxWidth: 680 },
  ctaBandBtns: { display: "flex", gap: 10, flexWrap: "wrap" },

  footerLinks: { marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" },
};
