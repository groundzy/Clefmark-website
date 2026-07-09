"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ConsentBanner } from "@/components/consent-banner";
import { readAnalyticsConsent } from "@/lib/analytics/consent";
import {
  loadGtagScript,
  setDefaultConsentMode,
  updateConsentMode,
} from "@/lib/analytics/gtag";
import { trackPageView } from "@/lib/analytics/track";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<"granted" | "denied" | "unset">(() =>
    typeof window === "undefined" ? "unset" : readAnalyticsConsent(),
  );

  useEffect(() => {
    setDefaultConsentMode();
  }, []);

  const handleConsentChange = useCallback((next: "granted" | "denied") => {
    updateConsentMode(next === "granted");
    if (next === "granted") {
      loadGtagScript();
    }
    setConsent(next);
  }, []);

  useEffect(() => {
    if (consent === "granted") {
      loadGtagScript();
    }
  }, [consent]);

  useEffect(() => {
    if (consent === "granted" && pathname) {
      trackPageView(pathname);
    }
  }, [consent, pathname]);

  return (
    <>
      {children}
      <ConsentBanner onConsentChange={handleConsentChange} />
    </>
  );
}
