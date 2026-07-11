"use client";

import { useSyncExternalStore } from "react";

import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
  readAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics/consent";

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, onStoreChange);
  };
}

function getServerSnapshot(): AnalyticsConsent {
  return "unset";
}

export function useAnalyticsConsent(): AnalyticsConsent {
  return useSyncExternalStore(subscribe, readAnalyticsConsent, getServerSnapshot);
}
