export const gestionRiesgosData = {
  id: "root",
  title: "Mapa de Gestión de Riesgos y EIPD - DataConSentido",
  children: [
    {
      id: "principios",
      title: "I. Principios Fundamentales",
      children: [
        { id: "definiciones", title: "0. Definiciones Aplicadas" },
        { id: "fundamentos", title: "1. Gestión de Riesgos: Fundamentos" },
        { id: "integracion", title: "2. Integración de Riesgos" },
        { id: "rationales", title: "3. Justificación de Rationales" },
        { id: "conformidad", title: "4. Conformidad en Riesgos" },
        { id: "spdp", title: "5. Metarregulación y Rol de la SPDP" },
        { id: "auditorias", title: "6. Auditorías" },
        { id: "vuln", title: "7. Vulneraciones de Seguridad" },
        { id: "estandares", title: "8. Estándares de Mejores Prácticas" },
        { id: "glosario", title: "Glosario de Siglas" },
      ],
    },
    {
      id: "etapas",
      title: "II. Etapas de la Gestión de Riesgos",
      children: [
        { id: "contexto", title: "1. Establecimiento del Contexto" },
        { id: "identificacion", title: "2. Identificación de Riesgos" },
        { id: "analisis", title: "3. Análisis de Riesgos" },
        { id: "eipd", title: "4. Evaluación de Impacto (EIPD)" },
        { id: "tratamiento", title: "5. Tratamiento de Riesgos" },
      ],
    },
  ],
};

export const nodeDetails = {
  definiciones: {
    category: "Definición",
    title: "Riesgo",
    description:
      "Pérdida potencial, desastre u otro evento no deseado que puede vulnerar los derechos y libertades de los titulares de datos personales.",
    bullets: [
      "No es un concepto binario",
      "Debe cuantificarse o cualificarse con rationales",
      "Distinguir probabilidad estimable de posibilidad binaria",
    ],
  },
  fundamentos: {
    category: "Fundamentos",
    title: "Gestión de Riesgos",
    description:
      "Marco metodológico para identificar, analizar, evaluar y tratar riesgos en tratamientos de datos personales.",
    bullets: [
      "Conecta cumplimiento con decisiones operativas",
      "Permite priorizar medidas",
      "Se articula con seguridad, continuidad y gobernanza",
    ],
  },
};