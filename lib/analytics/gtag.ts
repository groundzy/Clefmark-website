declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

import { hasAnalyticsConsent } from "@/lib/analytics/consent";

export function getMeasurementId(): string | undefined {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || undefined;
}

export function isAnalyticsDisabledByEnv(): boolean {
  return process.env.NEXT_PUBLIC_ANALYTICS_DISABLED === "1";
}

export function shouldCollectAnalytics(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  if (process.env.NODE_ENV === "development") {
    return false;
  }
  if (isAnalyticsDisabledByEnv()) {
    return false;
  }
  if (typeof navigator !== "undefined" && navigator.webdriver) {
    return false;
  }
  if (!hasAnalyticsConsent()) {
    return false;
  }
  return Boolean(getMeasurementId());
}

function ensureGtagStub(): void {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

export function setDefaultConsentMode(): void {
  ensureGtagStub();
  window.gtag!("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
}

export function updateConsentMode(granted: boolean): void {
  ensureGtagStub();
  window.gtag!("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

let scriptLoaded = false;

export function loadGtagScript(): void {
  const measurementId = getMeasurementId();
  if (!measurementId || scriptLoaded || typeof document === "undefined") {
    return;
  }

  scriptLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  ensureGtagStub();
  window.gtag!("js", new Date());
  window.gtag!("config", measurementId, {
    anonymize_ip: true,
    linker: {
      domains: ["clefmark.com", "app.clefmark.com"],
    },
  });
}

export function resetGtagForTests(): void {
  scriptLoaded = false;
}
