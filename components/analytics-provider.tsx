"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { ConsentBanner } from "@/components/consent-banner";
import {
  loadGtagScript,
  setDefaultConsentMode,
  updateConsentMode,
} from "@/lib/analytics/gtag";
import { useAnalyticsConsent } from "@/lib/analytics/use-analytics-consent";
import { useScrollDepth } from "@/lib/analytics/use-scroll-depth";
import { trackPageView } from "@/lib/analytics/track";
import { useUtmCapture } from "@/lib/analytics/use-utm-capture";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const consent = useAnalyticsConsent();

  useUtmCapture();
  useScrollDepth();

  useEffect(() => {
    setDefaultConsentMode();
  }, []);

  useEffect(() => {
    if (consent === "granted") {
      updateConsentMode(true);
      loadGtagScript();
      return;
    }
    if (consent === "denied") {
      updateConsentMode(false);
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
      <ConsentBanner />
    </>
  );
}
