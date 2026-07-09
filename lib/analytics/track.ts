import { sanitizeEventParams, type MarketingEventParams } from "@/lib/analytics/events";
import { shouldCollectAnalytics } from "@/lib/analytics/gtag";

export function trackEvent(name: string, params?: MarketingEventParams): void {
  if (!shouldCollectAnalytics() || typeof window === "undefined" || !window.gtag) {
    return;
  }

  const sanitized = sanitizeEventParams(params);
  window.gtag("event", name, sanitized);
}

export function trackPageView(path: string): void {
  if (!shouldCollectAnalytics() || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
  });
}
