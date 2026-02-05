// app/components/Navbar.jsx
"use client";

import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "/servicios-dpo", label: "Servicios DPO" },
      { href: "/formacion-dpo", label: "Formación DPO" },
      { href: "/calcular-mtge", label: "Calculadora MTGE" },
      { href: "/politica-de-privacidad", label: "Privacidad" }
    ],
    []
  );

  function isActive(href) {
    // Activo exacto o sub-rutas (ej: /calcular-mtge/xyz)
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  function close() {
    setOpen(false);
  }

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a className="brand" href="/" onClick={close} aria-label="Ir al inicio">
          {/* Cambia /logo.png por el nombre real en /public */}
          <img className="brandLogo" src="/logo_DataConSentido.png" alt="DataConSentido" />
          <span className="brandText"></span>
        </a>

        {/* Desktop */}
        <div className="navLinks">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={`navPill ${isActive(l.href) ? "isActive" : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          type="button"
          className="navBurger"
          aria-label={navOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={navOpen ? "true" : "false"}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span className={`burgerLine ${navOpen ? "x1" : ""}`} />
          <span className={`burgerLine ${navOpen ? "x2" : ""}`} />
          <span className={`burgerLine ${navOpen ? "x3" : ""}`} />
        </button>

      </nav>

      {open ? (
        <div className="navMobile" role="dialog" aria-modal="true">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={`navMobileLink ${isActive(l.href) ? "isActiveMobile" : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
