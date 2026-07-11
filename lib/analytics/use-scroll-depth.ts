"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics/track";

const THRESHOLDS = [25, 50, 75, 100] as const;

export function useScrollDepth(): void {
  useEffect(() => {
    const fired = new Set<number>();

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        return;
      }
      const percent = Math.min(100, Math.round((scrollTop / docHeight) * 100));

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackEvent("scroll_depth", { percent: threshold });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
