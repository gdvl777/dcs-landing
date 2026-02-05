// app/components/Navbar.jsx
"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const apply = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--navH", `${Math.ceil(h)}px`);
    };

    apply();

    const ro = new ResizeObserver(apply);
    ro.observe(el);

    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  const links = useMemo(
    () => [
      { href: "/servicios-dpo", label: "Servicios DPO" },
      { href: "/formacion-dpo", label: "Formación DPO" },
      { href: "/calcular-mtge", label: "Calculadora MTGE" },
      { href: "/politica-de-privacidad", label: "Privacidad" },
    ],
    []
  );

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="nav-wrap">
      <nav ref={navRef} className="nav" aria-label="Navegación principal">
        <a className="brand" href="/" onClick={close} aria-label="Ir al inicio">
          {/* Debe existir en /public/logo_DataConSentido.png */}
          <img
            className="brandLogo"
            src="/logo_DataConSentido.png"
            alt="DataConSentido"
          />
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
          className="navBurgerDots"
          aria-label={navOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={navOpen ? "true" : "false"}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </button>
      </nav>

      {navOpen ? (
        <div className="navMobile" role="dialog" aria-modal="true">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`navMobileLink ${isActive(l.href) ? "isActiveMobile" : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
              onClick={() => setNavOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}