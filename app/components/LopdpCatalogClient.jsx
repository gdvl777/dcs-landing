"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Blocks,
  CalendarClock,
  Check,
  ChevronDown,
  CircleDollarSign,
  Database,
  ExternalLink,
  FileCheck2,
  Files,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  ScanSearch,
  Search,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { track as trackVercelEvent } from "@vercel/analytics";
import {
  buildCatalogWhatsappUrl,
  catalogCategories,
  catalogConfig,
  catalogProducts,
  commercialPackages,
  dativaPlans,
  decisionPaths,
} from "@/app/data/lopdpCatalog";
import { getTrackingEventContext, persistTrackingParams } from "@/app/lib/tracking";

const iconMap = {
  activity: Activity,
  blocks: Blocks,
  calendar: CalendarClock,
  database: Database,
  files: Files,
  graduation: GraduationCap,
  layout: LayoutDashboard,
  message: MessageCircle,
  scan: ScanSearch,
  shield: ShieldCheck,
  userShield: UserRoundCheck,
  workflow: Workflow,
};

function trackCatalogEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    catalog: "lopdp",
    ...getTrackingEventContext(),
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
  trackVercelEvent(eventName, payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (window.ttq && typeof window.ttq.track === "function") {
    window.ttq.track(eventName === "view_catalog" ? "ViewContent" : "ClickButton", payload);
  }
}

function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-bold uppercase ${dark ? "text-cyan-300" : "text-teal-700"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p> : null}
    </div>
  );
}

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[product.icon] || FileCheck2;
  const whatsappUrl = buildCatalogWhatsappUrl(product.title, `producto:${product.id}`);

  return (
    <article
      id={product.id}
      className={`flex h-full min-h-[520px] flex-col rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        product.featured ? "border-teal-400 ring-2 ring-teal-100" : "border-slate-200"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
          {product.categoryLabel}
        </span>
      </div>

      <div className="mt-5 min-h-[104px]">
        <h3 className="text-xl font-bold leading-7 text-slate-950">{product.title}</h3>
        {product.subtitle ? <p className="mt-1 text-sm font-semibold leading-5 text-teal-700">{product.subtitle}</p> : null}
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.summary}</p>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_auto] gap-3 border-y border-slate-200 py-4">
        <div>
          <p className="text-xs font-bold uppercase text-slate-500">Inversión</p>
          <p className="mt-1 text-xl font-bold text-slate-950">{product.price}</p>
          <p className="mt-1 text-xs text-slate-500">{product.priceKind}</p>
        </div>
        <div className="max-w-32 text-right">
          <p className="text-xs font-bold uppercase text-slate-500">Tiempo</p>
          <p className="mt-1 text-sm font-semibold leading-5 text-slate-800">{product.turnaround}</p>
        </div>
      </div>

      <div className="mt-4 flex-1">
        <p className="text-xs font-bold uppercase text-slate-500">Incluye</p>
        <ul className="mt-3 space-y-2">
          {product.deliverables.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-5 text-slate-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {product.footnote ? (
          <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
            {product.footnote}
          </p>
        ) : null}

        {expanded ? (
          <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            <strong className="text-slate-950">Ideal para:</strong> {product.audience}
          </div>
        ) : null}
      </div>

      <div className="mt-5 grid gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCatalogEvent("catalog_product_cta", { product_id: product.id, product_name: product.title, cta_label: product.cta })}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-200"
        >
          {product.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          {expanded ? "Ocultar detalle" : "¿Para quién es?"}
          <ChevronDown className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function LopdpCatalogClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    persistTrackingParams();
    trackCatalogEvent("view_catalog", { product_count: catalogProducts.length });
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");

    return catalogProducts.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const haystack = [product.title, product.subtitle, product.summary, product.categoryLabel, ...product.deliverables]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("es");

      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  function selectCategory(category, source = "filter") {
    setActiveCategory(category);
    trackCatalogEvent("catalog_filter", { category, source });
  }

  function followPath(path) {
    const firstProduct = catalogProducts.find((product) => product.id === path.productIds[0]);
    setActiveCategory(firstProduct?.category || "all");
    setQuery("");
    trackCatalogEvent("catalog_path_cta", { path_id: path.id, path_name: path.title });
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#071522] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(103,232,249,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.16) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-20">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo_DataConSentido_transparencia_PaginaWeb.png"
                alt="DataConSentido"
                width={54}
                height={54}
                className="h-14 w-14 object-contain"
                priority
              />
              <div>
                <p className="font-bold text-white">DataConSentido</p>
                <p className="text-sm text-slate-300">Privacidad que genera confianza</p>
              </div>
            </div>

            <p className="mt-10 text-sm font-bold uppercase text-cyan-300">Catálogo LOPDP · Ecuador</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Soluciones para pasar de la duda a la evidencia.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Consultorías, documentos, implementación y acompañamiento continuo para cumplir la LOPDP con un alcance claro, entregables concretos y precios previsibles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => document.getElementById("rutas")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-200/30"
              >
                Encontrar mi ruta
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <a
                href={buildCatalogWhatsappUrl("orientación para elegir una solución", "hero")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCatalogEvent("catalog_general_cta", { section: "hero" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/15"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Hablar con un especialista
              </a>
            </div>
          </div>

          <div className="border-l-2 border-cyan-300/50 pl-6 md:pl-8">
            <p className="text-sm font-bold uppercase text-cyan-300">Una ruta verificable</p>
            <ol className="mt-6 space-y-6">
              {[
                ["01", "Entender", "Tratamientos, brechas y riesgo real."],
                ["02", "Implementar", "Documentos, medidas y responsables."],
                ["03", "Demostrar", "Evidencias, seguimiento y mejora."],
              ].map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[44px_1fr] gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/35 bg-cyan-300/10 text-sm font-bold text-cyan-200">
                    {number}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6 text-sm leading-6 text-slate-300">
              <CircleDollarSign className="h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
              Precio fijo o propuesta cerrada antes de comenzar.
            </div>
          </div>
        </div>
      </section>

      <section id="rutas" className="scroll-mt-28 border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Elige tu punto de partida"
            title="Tres caminos para una decisión más sencilla"
            text="No necesitas conocer la solución de antemano. Empieza por el resultado que buscas y te mostraremos las opciones adecuadas."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {decisionPaths.map((path) => (
              <article key={path.id} className="flex min-h-[280px] flex-col border-t-4 border-teal-500 bg-slate-50 p-6">
                <p className="text-sm font-bold text-teal-700">{path.step}</p>
                <h3 className="mt-4 text-2xl font-bold leading-8 text-slate-950">{path.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{path.text}</p>
                <button
                  type="button"
                  onClick={() => followPath(path)}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-lg text-left font-bold text-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100"
                >
                  {path.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo" className="scroll-mt-28 py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="12 soluciones iniciales"
            title="Catálogo de productos y servicios LOPDP"
            text="Filtra por tipo de necesidad o busca una palabra clave. Cada ficha muestra el alcance base, el tiempo estimado y la forma de contratación."
          />

          <div className="mt-10 border-y border-slate-200 py-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold text-slate-700">Filtrar soluciones</p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Categorías del catálogo">
                  {catalogCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => selectCategory(category.id)}
                      aria-pressed={activeCategory === category.id}
                      className={`min-h-10 rounded-lg border px-4 py-2 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-teal-100 ${
                        activeCategory === category.id
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-3 block text-sm font-bold text-slate-700">Buscar</span>
                <span className="relative block">
                  <Search className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-slate-400" aria-hidden="true" />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Ej. RAT, políticas, riesgos"
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                  />
                </span>
              </label>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-600" aria-live="polite">
            {filteredProducts.length} {filteredProducts.length === 1 ? "solución disponible" : "soluciones disponibles"}
          </p>

          {filteredProducts.length ? (
            <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-8 text-center">
              <p className="font-bold text-slate-950">No encontramos una solución con esos criterios.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  selectCategory("all", "empty_state");
                }}
                className="mt-4 rounded-lg font-bold text-teal-700 underline underline-offset-4 focus:outline-none focus:ring-4 focus:ring-teal-100"
              >
                Ver todo el catálogo
              </button>
            </div>
          )}

          <p className="mt-7 max-w-4xl text-sm leading-6 text-slate-500">{catalogConfig.priceNotice}</p>
        </div>
      </section>

      <section className="bg-[#0b1f2e] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <SectionHeading
              dark
              eyebrow="Producto principal"
              title="DATIVA convierte el cumplimiento en un sistema vivo"
              text="Centraliza registros, tareas, evidencia y seguimiento para que el cumplimiento no dependa de archivos dispersos ni de la memoria del equipo."
            />
            <div className="flex justify-start lg:justify-end">
              <a
                href={buildCatalogWhatsappUrl("una demostración de DATIVA", "dativa")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCatalogEvent("catalog_product_cta", { product_id: "dativa", section: "plans" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-200/30"
              >
                Solicitar demo
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {dativaPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-lg border p-6 ${plan.featured ? "border-cyan-300 bg-cyan-300/10" : "border-white/15 bg-white/5"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <LayoutDashboard className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                  {plan.featured ? <span className="rounded-lg bg-cyan-300 px-3 py-2 text-xs font-bold text-slate-950">Recomendado</span> : null}
                </div>
                <h3 className="mt-5 text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-lg font-bold text-cyan-300">{plan.price}</p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-300">{plan.description}</p>
                <ul className="mt-5 space-y-3 border-t border-white/15 pt-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-slate-200">
                      <Check className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Paquetes comerciales"
            title="Combina entregables sin perder claridad"
            text="Cuatro alcances para organizaciones que prefieren contratar una ruta completa en lugar de productos separados."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {commercialPackages.map((pack) => (
              <article
                key={pack.name}
                className={`flex min-h-[430px] flex-col rounded-lg border p-5 ${pack.featured ? "border-amber-400 bg-amber-50" : "border-slate-200 bg-slate-50"}`}
              >
                {pack.featured ? <span className="self-start rounded-lg bg-amber-400 px-3 py-2 text-xs font-bold text-slate-950">Más equilibrado</span> : <Sparkles className="h-5 w-5 text-teal-600" aria-hidden="true" />}
                <h3 className="mt-5 text-2xl font-bold text-slate-950">{pack.name}</h3>
                <p className="mt-2 text-lg font-bold text-teal-700">{pack.price}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">{pack.duration}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{pack.description}</p>
                <ul className="mt-5 flex-1 space-y-3 border-t border-slate-200 pt-5">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-5 text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {pack.optionalNote ? (
                  <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
                    {pack.optionalNote}
                  </p>
                ) : null}
                {pack.maturityNote ? (
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    {pack.maturityNote}
                  </p>
                ) : null}
                <a
                  href={buildCatalogWhatsappUrl(`el Paquete ${pack.name}`, `paquete:${pack.name.toLocaleLowerCase("es")}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCatalogEvent("catalog_package_cta", { package_name: pack.name })}
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-950 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  Solicitar alcance
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Criterio regulatorio"
              title="Cada tratamiento se analiza de forma individual"
              text="El RAT documenta las actividades de tratamiento. El MTGE evalúa la escala de cada tratamiento. Su resultado puede relacionarse con obligaciones adicionales, pero una herramienta no sustituye a la otra."
            />
            <p className="mt-5 max-w-3xl leading-7 text-slate-600">
              La necesidad de una EIPD, de designar un DPD o de adoptar medidas reforzadas depende del caso, el riesgo y la normativa vigente. El catálogo describe alcances comerciales; no reemplaza el análisis técnico-jurídico de una operación concreta.
            </p>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-6">
            <ShieldCheck className="h-7 w-7 text-teal-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-slate-950">Fuentes oficiales</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Consulta siempre la versión vigente de la ley y de las resoluciones de la autoridad.</p>
            <div className="mt-5 grid gap-3">
              <a className="inline-flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-500" href="https://spdp.gob.ec/resoluciones2/" target="_blank" rel="noopener noreferrer">
                Resoluciones de la SPDP
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a className="inline-flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-500" href="https://www.asambleanacional.gob.ec/es/multimedios-legislativos/63464-ley-organica-de-proteccion-de-datos" target="_blank" rel="noopener noreferrer">
                Ley Orgánica de Protección de Datos Personales
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-teal-600 py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-teal-100">¿No sabes cuál elegir?</p>
            <h2 className="mt-2 text-3xl font-bold">Cuéntanos tu caso y te orientamos.</h2>
            <p className="mt-2 max-w-2xl leading-7 text-teal-50">Una conversación breve basta para ubicar tu necesidad en el catálogo y evitar contratar de más.</p>
          </div>
          <a
            href={buildCatalogWhatsappUrl("orientación sobre el catálogo LOPDP", "closing")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCatalogEvent("catalog_general_cta", { section: "closing" })}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-teal-800 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#071522] py-8 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 text-sm md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} DataConSentido. Privacidad, cumplimiento y tecnología.</p>
          <div className="flex flex-wrap gap-5">
            <Link className="font-semibold hover:text-white" href="/politica-de-privacidad">Política de privacidad</Link>
            <Link className="font-semibold hover:text-white" href="/dpo">Servicios DPO</Link>
            <Link className="font-semibold hover:text-white" href="/formacion-dpo">Formación</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
