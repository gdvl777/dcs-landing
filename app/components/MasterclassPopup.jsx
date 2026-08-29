"use client";

import { useEffect, useState } from "react";
import { track as trackVercelEvent } from "@vercel/analytics";
import { getTrackingEventContext, persistTrackingParams } from "@/app/lib/tracking";

const MASTERCLASS_URL = "https://masterclass.dataconsentido.com/";

function trackPopupEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    page_area: "homepage_masterclass_popup",
    destination_url: MASTERCLASS_URL,
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
    window.ttq.track(eventName === "view_masterclass_popup" ? "ViewContent" : "ClickButton", payload);
  }
}

export default function MasterclassPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    persistTrackingParams();
    setOpen(true);

    if (!window.__dcsMasterclassPopupViewed) {
      window.__dcsMasterclassPopupViewed = true;
      trackPopupEvent("view_masterclass_popup");
    }

    return undefined;
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        trackPopupEvent("close_masterclass_popup", { close_method: "escape" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    setOpen(false);
    trackPopupEvent("close_masterclass_popup", { close_method: "button" });
  };

  const handleBackdropClose = () => {
    setOpen(false);
    trackPopupEvent("close_masterclass_popup", { close_method: "backdrop" });
  };

  const handleClick = () => {
    setOpen(false);
    trackPopupEvent("click_masterclass_popup");
  };

  return (
    <div
      className="masterclass-popup-overlay"
      role="presentation"
      onMouseDown={handleBackdropClose}
    >
      <div
        className="masterclass-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Masterclass gratuita LOPDP"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="masterclass-popup-close"
          aria-label="Cerrar popup de masterclass"
          onClick={handleClose}
        >
          ×
        </button>

        <a
          href={MASTERCLASS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="masterclass-popup-link"
          onClick={handleClick}
        >
          <img
            src="/masterclass-lopdp-preview.png"
            alt="Masterclass LOPDP: domina el artículo 47 y aplica la normativa con seguridad. Regístrate gratis."
            className="masterclass-popup-image"
          />
        </a>
      </div>
    </div>
  );
}
