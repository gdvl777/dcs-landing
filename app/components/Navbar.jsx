"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dpo", label: "Servicios DPO" },
  { href: "/formacion-dpo", label: "Formación DPO" },
  { href: "/calcular-mtge", label: "Calculadora MTGE" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="nav-wrap">
      <div className="w-full max-w-[1180px]">
        <header className="nav-pro">
          <Link href="/" className="nav-brand">
            <Image
              src="/images/logo-dataconsentido.png"
              alt="DataConSentido"
              width={44}
              height={44}
              className="nav-brand-logo"
              priority
            />
            <div className="nav-brand-copy">
              <span className="nav-brand-title">DataConSentido</span>
              <span className="nav-brand-subtitle">
                Privacidad · Cumplimiento · Tecnología
              </span>
            </div>
          </Link>

          <nav className="nav-pro-links nav-pro-links-desktop">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-mobile-link ${active ? "is-active-mobile" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="nav-hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`nav-hamburger-line ${open ? "is-open" : ""}`} />
            <span className={`nav-hamburger-line ${open ? "is-open" : ""}`} />
            <span className={`nav-hamburger-line ${open ? "is-open" : ""}`} />
          </button>
        </header>

        {open ? (
          <div className="nav-mobile-panel" onClick={(e) => e.stopPropagation()}>
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-mobile-link ${active ? "is-active-mobile" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}