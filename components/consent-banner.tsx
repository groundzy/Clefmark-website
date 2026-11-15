"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  writeAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics/consent";
import { useAnalyticsConsent } from "@/lib/analytics/use-analytics-consent";
import { LEGAL_ROUTES } from "@/content/legal/meta";

type ConsentBannerProps = {
  onConsentChange?: (consent: Exclude<AnalyticsConsent, "unset">) => void;
};

const BANNER_HEIGHT_VAR = "--cookie-banner-height";

export function ConsentBanner({ onConsentChange }: ConsentBannerProps) {
  const storedConsent = useAnalyticsConsent();
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [sessionDismissed, setSessionDismissed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOpenPreferences() {
      setPreferencesOpen(true);
    }
    window.addEventListener("clefmark:open-cookie-preferences", onOpenPreferences);
    return () => {
      window.removeEventListener(
        "clefmark:open-cookie-preferences",
        onOpenPreferences,
      );
    };
  }, []);

  const applyConsent = useCallback(
    (choice: Exclude<AnalyticsConsent, "unset">) => {
      setPreferencesOpen(false);
      setSessionDismissed(true);
      try {
        writeAnalyticsConsent(choice);
      } catch {
        // Dismiss even when localStorage is unavailable (private browsing, etc.)
      }
      onConsentChange?.(choice);
    },
    [onConsentChange],
  );

  const visible =
    preferencesOpen || (storedConsent === "unset" && !sessionDismissed);

  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.setProperty(BANNER_HEIGHT_VAR, "0px");
      return;
    }
    const el = bannerRef.current;
    if (!el) {
      return;
    }
    const syncHeight = () => {
      root.style.setProperty(BANNER_HEIGHT_VAR, `${el.offsetHeight}px`);
    };
    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(el);
    window.addEventListener("resize", syncHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
      root.style.setProperty(BANNER_HEIGHT_VAR, "0px");
    };
  }, [visible, preferencesOpen]);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background p-4 shadow-lg sm:p-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p id="cookie-banner-title" className="text-sm font-medium text-foreground">
            {preferencesOpen ? "Cookie preferences" : "Cookies on Clefmark"}
          </p>
          <p className="text-sm text-muted-foreground">
            {preferencesOpen
              ? "Analytics cookies help us understand how visitors use clefmark.com. You can change this anytime from the footer."
              : "We use optional analytics cookies to understand site usage and improve Clefmark. See our cookie policy for details."}
          </p>
          <Link
            href={LEGAL_ROUTES.cookies}
            className="text-sm font-medium text-accent hover:underline"
          >
            Cookie policy
          </Link>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => applyConsent("denied")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground hover:bg-muted"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => applyConsent("granted")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-[#242424]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
