"use client";

import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics/track";

type SectionViewTrackerProps = {
  sectionId: string;
  children: React.ReactNode;
};

export function SectionViewTracker({ sectionId, children }: SectionViewTrackerProps) {
  const ref = useRef<HTMLElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !fired.current) {
          fired.current = true;
          trackEvent("features_section_view", { section_id: sectionId });
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionId]);

  return <section ref={ref}>{children}</section>;
}
