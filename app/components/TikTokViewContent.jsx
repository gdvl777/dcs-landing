"use client";

import { useEffect } from "react";

export default function TikTokViewContent() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("ViewContent");
    }
  }, []);

  return null;
}