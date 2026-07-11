export type AnalyticsConsent = "granted" | "denied" | "unset";

const STORAGE_KEY = "clefmark_analytics_consent";

export const ANALYTICS_CONSENT_CHANGE_EVENT = "clefmark:analytics-consent-change";

export function readAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") {
    return "unset";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "granted" || stored === "denied") {
    return stored;
  }
  return "unset";
}

export function writeAnalyticsConsent(consent: Exclude<AnalyticsConsent, "unset">): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, consent);
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_CHANGE_EVENT));
}

export function hasAnalyticsConsent(): boolean {
  return readAnalyticsConsent() === "granted";
}

export function openCookiePreferences(): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new Event("clefmark:open-cookie-preferences"));
}
