"use client";

import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics/track";
import type { MarketingEventParams } from "@/lib/analytics/events";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  trackEventName?: string;
  trackParams?: MarketingEventParams;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  trackEventName,
  trackParams,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={() => {
        if (trackEventName) {
          trackEvent(trackEventName, trackParams);
        }
      }}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-[#242424]",
        variant === "outline" &&
          "border border-border bg-background text-foreground hover:bg-muted",
        className,
      )}
    >
      {children}
    </a>
  );
}
