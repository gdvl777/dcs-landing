"use client";

import { useEffect } from "react";
import { arquitecturaPdpProgram as program } from "@/app/data/arquitecturaPdpProgram";

export default function ArquitecturaPdpThanksClient() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.__dcsTrackedEvents) window.__dcsTrackedEvents = new Set();

    const eventKey = `purchase:${window.location.pathname}`;
    if (window.__dcsTrackedEvents.has(eventKey)) return;
    window.__dcsTrackedEvents.add(eventKey);

    const payload = {
      program_slug: program.slug,
      program_name: program.displayName,
      program_edition: program.editionLabel,
      enrollment_status: program.enrollment.status,
      checkout_provider: program.checkout.provider,
      currency: program.checkout.currency,
      value: program.enrollment.priceAmount || undefined,
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "purchase", ...payload });

    if (typeof window.gtag === "function") {
      window.gtag("event", "purchase", payload);
    }

    if (window.ttq && typeof window.ttq.track === "function") {
      window.ttq.track("CompletePayment", payload);
    }
  }, []);

  return null;
}

