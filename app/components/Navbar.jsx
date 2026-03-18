"use client";

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

  return (
    <div className="nav-wrap">
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

        <nav className="nav-pro-links">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-pro-link ${active ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}