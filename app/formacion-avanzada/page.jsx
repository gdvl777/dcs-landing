// app/formacion-dpo/page.jsx
"use client";

import Link from "next/link";

export default function FormacionDPOPage() {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      {/* HERO */}
      <section className="hero" style={styles.hero}>
        <div style={styles.heroGlowA} aria-hidden="true" />
        <div style={styles.heroGlowB} aria-hidden="true" />

        <div style={styles.kicker}>
          <span style={styles.kickerDot} />
          Formación • DPO/DPD • Enfoque ejecutable
        </div>

        <h1 className="h1" style={styles.h1}>
          Formación avanzada DPO para{" "}
          <span style={styles.h1Accent}>ejecutar cumplimiento</span>, no solo entenderlo.
        </h1>

        <p className="sub" style={styles.sub}>
          Programa práctico para dominar criterios, documentación, riesgos y la operación real del rol
          DPO/DPD. Saldrás con un método, plantillas y checklist para implementar evidencia verificable.
        </p>

        <div style={styles.chips}>
          <span style={styles.chip}>✅ RAT/RID + flujos</span>
          <span style={styles.chip}>✅ DPIA + riesgos</span>
          <span style={styles.chip}>✅ Políticas + contratos</span>
          <span style={styles.chip}>✅ Operación ARCO+</span>
        </div>

        <div className="ctaRow" style={{ marginTop: 14 }}>
          <Link className="uiBtn uiBtnPrimary" href="https://masterclass.dataconsentido.com/">
            Reservar cupo <span className="uiIcon">→</span>
          </Link>

          <a
            className="uiBtn uiBtnGhost"
            href="https://wa.me/593992801005"
            target="_blank"
            rel="noreferrer"
          >
            Consultar por WhatsApp
          </a>

          <Link className="uiBtn uiBtnGhost" href="/dpo">
            Ver servicios DPO/DPD
          </Link>
        </div>

        <div style={styles.heroMiniGrid}>
          <div style={styles.heroStat}>
            <div style={styles.heroStatNum}>100%</div>
            <div style={styles.heroStatTxt}>orientado a ejecución</div>
          </div>
          <div style={styles.heroStat}>
            <div style={styles.heroStatNum}>Plantillas</div>
            <div style={styles.heroStatTxt}>checklists + evidencias</div>
          </div>
          <div style={styles.heroStat}>
            <div style={styles.heroStatNum}>LOPDP</div>
            <div style={styles.heroStatTxt}>criterio operativo</div>
          </div>
        </div>
      </section>





      {/* Footer mini */}
      <div className="footer" style={{ marginTop: 18 }}>
        <div style={{ opacity: 0.85 }}>© {year} DataConSentido</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/">Inicio</Link>
          <Link href="/politica-de-privacidad">Política de Privacidad</Link>
          <Link href="/dpo">Servicios DPO</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: 18,
    borderRadius: 18,
  },
  heroGlowA: {
    position: "absolute",
    inset: "-45% -25% auto -25%",
    height: 520,
    background: "radial-gradient(closest-side, rgba(6,182,212,.18), transparent 70%)",
    filter: "blur(22px)",
    pointerEvents: "none",
  },
  heroGlowB: {
    position: "absolute",
    inset: "-45% -25% auto auto",
    height: 520,
    width: 520,
    background: "radial-gradient(closest-side, rgba(245,158,11,.14), transparent 70%)",
    filter: "blur(22px)",
    pointerEvents: "none",
  },

  kicker: {
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(255,255,255,.05)",
    fontWeight: 850,
    opacity: 0.95,
  },
  kickerDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(34,197,94,.85)",
    boxShadow: "0 0 0 4px rgba(34,197,94,.15)",
  },

  h1: { position: "relative", zIndex: 1 },
  h1Accent: {
    background: "linear-gradient(90deg, rgba(34,197,94,1), rgba(6,182,212,1), rgba(245,158,11,1))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  sub: { position: "relative", zIndex: 1, marginTop: 12, opacity: 0.9, lineHeight: 1.6 },

  chips: { position: "relative", zIndex: 1, marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" },
  chip: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    fontWeight: 850,
    fontSize: 13,
    opacity: 0.95,
  },

  heroMiniGrid: {
    position: "relative",
    zIndex: 1,
    marginTop: 14,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  heroStat: {
    padding: "10px 12px",
    borderRadius: 16,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    minWidth: 170,
  },
  heroStatNum: { fontWeight: 950, fontSize: 16 },
  heroStatTxt: { fontSize: 12, opacity: 0.84, marginTop: 4 },

  section: { padding: "18px 0" },
  sectionHead: { marginBottom: 12 },
  h2: { margin: 0, fontSize: 26, fontWeight: 950, letterSpacing: -0.3 },
  p: { margin: "8px 0 0 0", opacity: 0.85, lineHeight: 1.6 },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },

  card: {
    padding: 16,
    borderRadius: 20,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(255,255,255,.06)",
    boxShadow: "0 18px 60px rgba(0,0,0,.25)",
  },
  cardTop: { display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" },
  cardTag: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    fontWeight: 900,
    fontSize: 12,
    opacity: 0.9,
  },
  cardTagAlt: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(6,182,212,.22)",
    background: "rgba(6,182,212,.10)",
    fontWeight: 900,
    fontSize: 12,
  },
  cardTitle: { marginTop: 8, fontWeight: 950, fontSize: 16 },
  list: { marginTop: 10, lineHeight: 1.6 },

  ctaBand: {
    marginTop: 10,
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
  ctaLeft: { minWidth: 240, maxWidth: 680 },
  ctaTitle: { fontWeight: 950, fontSize: 18 },
  ctaText: { marginTop: 6, opacity: 0.86, lineHeight: 1.55 },
  ctaBtns: { display: "flex", gap: 10, flexWrap: "wrap" },
};
