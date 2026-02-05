// app/page.jsx
import Link from "next/link";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.heroWrap}>
        <div style={styles.heroGlowA} />
        <div style={styles.heroGlowB} />

        <div style={styles.container}>
          <div className="heroGrid">
            <div style={{ minWidth: 0 }}>
              <div style={styles.kicker}>
                <span style={styles.kickerDot} />
                En Ecuador • LOPDP • Evidencia verificable
              </div>

              <h1 className="homeH1" style={styles.h1}>
                DataConSentido es tu aliado para{" "}
                <span style={styles.h1Accent}>cumplir la LOPDP</span>{" "}
                con método, evidencias y resultados.
              </h1>

              <p style={styles.sub}>
                Implementamos privacidad de forma práctica: diagnóstico, RAT/RID, DPIA,
                políticas, contratos con encargados, controles y capacitación. Menos “papel bonito”
                y más ejecución real que puedas sostener.
              </p>

              <div style={styles.valueChips}>
                <span style={styles.chip}>✅ Diagnóstico + roadmap</span>
                <span style={styles.chip}>✅ RAT/RID + evidencias</span>
                <span style={styles.chip}>✅ DPIA y riesgos</span>
                <span style={styles.chip}>✅ DPD/DPO externo</span>
              </div>

              <div style={styles.ctaRow}>
                <Link href="/dpo" style={{ ...styles.btn, ...styles.btnPrimary }}>
                  Quiero DPO/DPD para mi organización <span style={styles.btnArrow}>→</span>
                </Link>

                <Link href="/formacion-dpo" style={{ ...styles.btn, ...styles.btnGhost }}>
                  Ver formación avanzada
                </Link>

                <Link href="/calcular-mtge" style={{ ...styles.btn, ...styles.btnGhost }}>
                  Abrir calculadora MTGE
                </Link>
              </div>

              <div style={styles.trustRow}>
                <div style={styles.trustItem}>
                  <div style={styles.trustNum}>+21</div>
                  <div style={styles.trustTxt}>carpetas / repositorio de cumplimiento</div>
                </div>
                <div style={styles.trustItem}>
                  <div style={styles.trustNum}>ISO</div>
                  <div style={styles.trustTxt}>alineación práctica (27001/27701)</div>
                </div>
                <div style={styles.trustItem}>
                  <div style={styles.trustNum}>LOPDP</div>
                  <div style={styles.trustTxt}>enfoque operativo con evidencia</div>
                </div>
              </div>
            </div>

            {/* Panel derecho */}
            <div style={styles.heroCard}>
              <div style={styles.heroCardTop}>
                <div style={styles.heroBadge}>Enfoque 100% ejecutable</div>
                <div style={styles.heroBadgeAlt}>Checklist + plantillas</div>
              </div>

              <div style={styles.heroCardBody}>
                <div style={styles.heroCardTitle}>¿Qué hacemos en 4 pasos?</div>

                <div style={styles.steps}>
                  <Step n="1" title="Diagnóstico" desc="Levantamos tratamientos, inventarios, brechas y riesgo real." />
                  <Step n="2" title="Plan" desc="Roadmap con responsables, plazos y quick wins medibles." />
                  <Step n="3" title="Evidencias" desc="RAT/RID, DPIA, políticas, contratos y controles implementados." />
                  <Step n="4" title="Mejora" desc="Monitoreo, incidentes, auditorías internas y actualización continua." />
                </div>

                <div style={styles.heroCardCtas}>
                  <a
                    href="https://wa.me/593992801005"
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...styles.btn, ...styles.btnPrimary, width: "100%" }}
                  >
                    Hablar por WhatsApp <span style={styles.btnArrow}>→</span>
                  </a>

                  <div style={styles.heroHint}>
                    Respuesta rápida. Si ya tienes un caso, te pedimos 3 datos y avanzamos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Productos / Servicios */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHead}>
            <h2 style={styles.h2}>Elige tu ruta</h2>
            <p style={styles.p}>
              Servicios para ejecutar cumplimiento y formación para escalar capacidades internas.
            </p>
          </div>

          <div className="cards3Fix" style={styles.cards3}>
            <Card
              title="Servicios DPO (DPD externo / DPOaaS)"
              points={["Diagnóstico inicial + brechas", "RAT/RID + evidencias y controles", "Informes y mejora continua"]}
              primaryHref="/dpo"
              primaryLabel="Ver servicios"
              secondaryHref="https://wa.me/593992801005"
              secondaryLabel="WhatsApp"
              tag="Operación + Evidencia"
            />

            <Card
              title="Formación avanzada DPO"
              points={["Aplicación práctica (no solo teoría)", "Plantillas, recursos y casos", "Para profesionales y organizaciones"]}
              primaryHref="/formacion-dpo"
              primaryLabel="Ver programa"
              secondaryHref="/masterclass"
              secondaryLabel="Reservar cupo"
              tag="Aprende y ejecuta"
            />

            <Card
              title="Calculadora MTGE"
              points={["Calificación directa + variables", "Determina si califica gran escala", "Resumen copiable para informes"]}
              primaryHref="/calcular-mtge"
              primaryLabel="Calcular ahora"
              tag="Herramienta gratuita"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN: CTA fuerte */}
      <section style={styles.ctaBand}>
        <div style={styles.container}>
          <div style={styles.ctaBandInner}>
            <div style={{ minWidth: 0 }}>
              <div style={styles.ctaBandTitle}>¿Tu operación podría ser “gran escala”?</div>
              <div style={styles.ctaBandText}>
                Usa la calculadora MTGE y, si te marca gran escala, te ayudamos a armar evidencias:
                RAT/RID, DPIA, contratos, políticas y controles.
              </div>
            </div>

            <div style={styles.ctaBandBtns}>
              <Link href="/calcular-mtge" style={{ ...styles.btn, ...styles.btnPrimary }}>
                Abrir MTGE <span style={styles.btnArrow}>→</span>
              </Link>
              <Link href="/dpo" style={{ ...styles.btn, ...styles.btnGhost }}>
                Agendar diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerRow}>
            <div style={styles.footerLeft}>
              <div style={styles.footerBrand}>
                <div style={styles.brandMarkSm} />
                <div style={{ minWidth: 0 }}>
                  <div style={styles.footerName}>DataConSentido</div>
                  <div style={styles.footerDesc}>Privacidad, Cumplimiento y Tecnología con Sentido</div>
                </div>
              </div>
              <div style={styles.footerCopy}>© {year} DataConSentido</div>
            </div>

            <div style={styles.footerLinks}>
              <a href="https://wa.me/593992801005" target="_blank" rel="noreferrer" style={styles.footerLink}>
                WhatsApp
              </a>
              <Link href="/politica-de-privacidad" style={styles.footerLink}>
                Política de Privacidad
              </Link>
              <Link href="/webinar" style={styles.footerLink}>
                Webinar
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div style={styles.step}>
      <div style={styles.stepN}>{n}</div>
      <div style={{ minWidth: 0 }}>
        <div style={styles.stepTitle}>{title}</div>
        <div style={styles.stepDesc}>{desc}</div>
      </div>
    </div>
  );
}

function Card({ title, points, primaryHref, primaryLabel, secondaryHref, secondaryLabel, tag }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTop}>
        <div style={styles.cardTag}>{tag}</div>
      </div>

      <div style={styles.cardTitle}>{title}</div>

      <ul style={styles.cardList}>
        {points.map((p) => (
          <li key={p} style={styles.cardLi}>
            <span style={styles.check}>✓</span> <span style={{ minWidth: 0 }}>{p}</span>
          </li>
        ))}
      </ul>

      <div style={styles.cardCtas}>
        <Link href={primaryHref} style={{ ...styles.btn, ...styles.btnPrimary, width: "100%" }}>
          {primaryLabel} <span style={styles.btnArrow}>→</span>
        </Link>

        {secondaryHref ? (
          secondaryHref.startsWith("http") ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.btn, ...styles.btnGhost, width: "100%" }}
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link href={secondaryHref} style={{ ...styles.btn, ...styles.btnGhost, width: "100%" }}>
              {secondaryLabel}
            </Link>
          )
        ) : null}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background:
      "radial-gradient(900px 500px at 15% 10%, rgba(6,182,212,.10), transparent 60%), radial-gradient(900px 500px at 85% 0%, rgba(245,158,11,.10), transparent 60%), #0b1220",
    color: "#e8eefc",
    minHeight: "100vh",
  },
  container: { maxWidth: 1080, margin: "0 auto", padding: 22 },

  heroWrap: { position: "relative", overflow: "hidden", paddingBottom: 18 },
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

  h1: {
    margin: "14px 0 0 0",
    fontSize: 44,
    lineHeight: 1.07,
    letterSpacing: -0.6,
    fontWeight: 950,
  },
  h1Accent: {
    background: "linear-gradient(90deg, rgba(34,197,94,1), rgba(6,182,212,1), rgba(245,158,11,1))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  sub: { margin: "12px 0 0 0", fontSize: 16, lineHeight: 1.6, opacity: 0.88 },

  valueChips: { marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" },
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

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(232,238,252,.18)",
    background: "rgba(255,255,255,.06)",
    color: "#e8eefc",
    fontWeight: 950,
    boxShadow: "0 14px 40px rgba(0,0,0,.18)",
    textDecoration: "none",
    maxWidth: "100%",
    whiteSpace: "normal",
  },
  btnPrimary: {
    border: "1px solid rgba(6,182,212,.28)",
    background:
      "radial-gradient(900px 120px at 15% 0%, rgba(6,182,212,.22), transparent 55%), radial-gradient(900px 120px at 85% 0%, rgba(245,158,11,.18), transparent 55%), linear-gradient(90deg, rgba(34,197,94,.26), rgba(6,182,212,.22), rgba(245,158,11,.18))",
  },
  btnGhost: { background: "rgba(255,255,255,.04)" },
  btnArrow: { opacity: 0.95 },

  trustRow: { marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap", opacity: 0.92 },
  trustItem: {
    padding: "10px 12px",
    borderRadius: 16,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    minWidth: 180,
    maxWidth: "100%",
  },
  trustNum: { fontWeight: 950, fontSize: 16 },
  trustTxt: { fontSize: 12, opacity: 0.84, marginTop: 4 },

  heroCard: {
    borderRadius: 22,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(255,255,255,.06)",
    boxShadow: "0 18px 80px rgba(0,0,0,.35)",
    overflow: "hidden",
    minWidth: 0,
  },
  heroCardTop: {
    display: "flex",
    gap: 8,
    justifyContent: "space-between",
    padding: 14,
    borderBottom: "1px solid rgba(232,238,252,.10)",
    background:
      "radial-gradient(900px 140px at 15% 0%, rgba(6,182,212,.14), transparent 55%), radial-gradient(900px 140px at 85% 0%, rgba(245,158,11,.12), transparent 55%), rgba(11,18,32,.55)",
    flexWrap: "wrap",
  },
  heroBadge: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(255,255,255,.05)",
    fontWeight: 900,
    fontSize: 12,
  },
  heroBadgeAlt: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(6,182,212,.22)",
    background: "rgba(6,182,212,.10)",
    fontWeight: 900,
    fontSize: 12,
  },
  heroCardBody: { padding: 14 },
  heroCardTitle: { fontWeight: 950, fontSize: 16, marginBottom: 10 },
  steps: { display: "grid", gap: 10 },
  step: {
    display: "flex",
    gap: 10,
    padding: 12,
    borderRadius: 16,
    border: "1px solid rgba(232,238,252,.10)",
    background: "rgba(11,18,32,.35)",
    minWidth: 0,
  },
  stepN: {
    width: 28,
    height: 28,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 950,
    border: "1px solid rgba(232,238,252,.14)",
    background: "rgba(255,255,255,.06)",
    flex: "0 0 auto",
  },
  stepTitle: { fontWeight: 950 },
  stepDesc: { fontSize: 12, opacity: 0.84, lineHeight: 1.45, marginTop: 3 },

  heroCardCtas: { marginTop: 12 },
  heroHint: { marginTop: 10, fontSize: 12, opacity: 0.82, lineHeight: 1.45 },

  section: { padding: "18px 0" },
  sectionHead: { marginBottom: 12 },
  h2: { margin: 0, fontSize: 26, fontWeight: 950, letterSpacing: -0.3 },
  p: { margin: "8px 0 0 0", opacity: 0.85, lineHeight: 1.6 },

  cards3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 },

  card: {
    padding: 16,
    borderRadius: 20,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(255,255,255,.06)",
    boxShadow: "0 18px 60px rgba(0,0,0,.25)",
    minWidth: 0,
  },
  cardTop: { display: "flex", justifyContent: "flex-end" },
  cardTag: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(232,238,252,.12)",
    background: "rgba(11,18,32,.35)",
    fontWeight: 900,
    fontSize: 12,
    opacity: 0.9,
  },
  cardTitle: { marginTop: 8, fontWeight: 950, fontSize: 16 },
  cardList: { margin: "10px 0 0 0", padding: 0, listStyle: "none", lineHeight: 1.7, opacity: 0.9 },
  cardLi: { display: "flex", gap: 8, alignItems: "flex-start", marginTop: 8, minWidth: 0 },
  check: {
    width: 18,
    height: 18,
    borderRadius: 6,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(34,197,94,.30)",
    background: "rgba(34,197,94,.12)",
    fontWeight: 950,
    fontSize: 12,
    marginTop: 2,
    flex: "0 0 auto",
  },
  cardCtas: { marginTop: 14, display: "grid", gap: 10 },

  ctaBand: { padding: "14px 0 26px" },
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
  ctaBandText: { marginTop: 6, opacity: 0.86, lineHeight: 1.55, maxWidth: 640 },
  ctaBandBtns: { display: "flex", gap: 10, flexWrap: "wrap" },

  footer: {
    marginTop: 10,
    padding: "18px 0 28px",
    borderTop: "1px solid rgba(232,238,252,.10)",
    opacity: 0.92,
  },
  footerRow: { display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  footerLeft: { display: "grid", gap: 10 },
  footerBrand: { display: "flex", gap: 10, alignItems: "center" },
  brandMarkSm: {
    width: 28,
    height: 28,
    borderRadius: 10,
    background:
      "linear-gradient(135deg, rgba(34,197,94,.55), rgba(6,182,212,.45), rgba(245,158,11,.35))",
    border: "1px solid rgba(232,238,252,.16)",
  },
  footerName: { fontWeight: 950 },
  footerDesc: { fontSize: 12, opacity: 0.8, marginTop: 2 },
  footerCopy: { fontSize: 12, opacity: 0.8 },

  footerLinks: { display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" },
  footerLink: { color: "#e8eefc", textDecoration: "none", opacity: 0.9 },
};
