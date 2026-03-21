"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "./gestion-riesgos.css";
import { gestionRiesgosData, nodeDetails } from "@/data/gestionRiesgosData";

function TreeNode({ node, level = 0, onSelect, selectedId }) {
  const [open, setOpen] = useState(level < 1);

  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedId === node.id;

  return (
    <div className="gr-node-wrap">
      <div className="gr-node-row">
        <button
          type="button"
          className={`gr-node ${isSelected ? "is-selected" : ""}`}
          onClick={() => onSelect(node.id)}
        >
          {node.title}
        </button>

        {hasChildren && (
          <button
            type="button"
            className="gr-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Colapsar" : "Expandir"}
          >
            {open ? "−" : "+"}
          </button>
        )}
      </div>

      {hasChildren && open && (
        <div className="gr-children">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              onSelect={onSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GestionRiesgosMindmap() {
  const defaultId = "definiciones";
  const [selectedId, setSelectedId] = useState(defaultId);
  const [query, setQuery] = useState("");

  const detail = nodeDetails[selectedId];

  const flatNodes = useMemo(() => {
    const result = [];
    const walk = (node) => {
      result.push(node);
      if (node.children) node.children.forEach(walk);
    };
    walk(gestionRiesgosData);
    return result;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return flatNodes;
    return flatNodes.filter((n) => n.title.toLowerCase().includes(q));
  }, [flatNodes, query]);

  return (
    <div className="gr-shell">
      <div className="gr-toolbar">
        <div className="gr-toolbar-left">
          <div className="gr-brand">
            <img
              src="/logo_DataConSentido_transparencia_PaginaWeb.png"
              alt="DataConSentido"
              className="gr-brand-logo"
            />
            <div className="gr-brand-copy">
              <h1>DataConSentido · Gestión de Riesgos</h1>
              <p>Mindmap interactivo para dataconsentido.com/gestion-riesgos</p>
            </div>
          </div>

          <div className="gr-badges">
            <span>EIPD · Art. 42</span>
            <span>Versión 2 · 2026</span>
          </div>
        </div>

        <div className="gr-toolbar-right">
          <input
            type="text"
            placeholder="🔎 Buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="gr-search"
          />
          <a
            href="/gestion-riesgos/guia-riesgos.pdf"
            className="gr-action"
            download
          >
            📥 Descargar PDF
          </a>
        </div>
      </div>

      <div className="gr-layout">
        <aside className="gr-map">
          <div className="gr-root-card">
            <button
              type="button"
              className={`gr-node gr-root ${selectedId === "root" ? "is-selected" : ""}`}
              onClick={() => setSelectedId("root")}
            >
              {gestionRiesgosData.title}
            </button>
          </div>

          <div className="gr-tree">
            {gestionRiesgosData.children.map((node) => (
              <TreeNode
                key={node.id}
                node={node}
                onSelect={setSelectedId}
                selectedId={selectedId}
              />
            ))}
          </div>

          {query && (
            <div className="gr-search-results">
              <div className="gr-search-title">Resultados</div>
              {filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="gr-search-item"
                  onClick={() => setSelectedId(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </aside>

        <aside className="gr-detail">
          <div className="gr-detail-card">
            <div className="gr-detail-brand">
              <img
                src="/logo_DataConSentido_transparencia_PaginaWeb.png"
                alt="DataConSentido"
                className="gr-detail-logo"
              />
              <div>
                <div className="gr-detail-top">
                  DataConSentido · Arquitectura profesional en privacidad
                </div>
              </div>
            </div>

            <div className="gr-divider" />

            {detail ? (
              <>
                <div className="gr-kicker">{detail.category}</div>
                <h2>{detail.title}</h2>
                <p className="gr-description">{detail.description}</p>

                {detail.bullets?.length > 0 && (
                  <>
                    <h3>Aspectos clave</h3>
                    <ul>
                      {detail.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="gr-kicker">Selección</div>
                <h2>Explora el mapa</h2>
                <p className="gr-description">
                  Selecciona un nodo del mapa para visualizar su desarrollo,
                  definición y aspectos clave.
                </p>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}