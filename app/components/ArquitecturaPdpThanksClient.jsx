"use client";

import { useEffect } from "react";
import { persistTrackingParams } from "@/app/lib/tracking";

export default function ArquitecturaPdpThanksClient() {
  useEffect(() => {
    persistTrackingParams();
  }, []);

  return null;
}
