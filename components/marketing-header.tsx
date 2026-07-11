"use client";

import Link from "next/link";

import { ClefmarkWordmark } from "@/components/brand/clefmark-wordmark";
import { CtaButton } from "@/components/cta-button";
import { MARKETING_ROUTES } from "@/content/marketing/routes";
import { appLoginUrl, appSignupUrl } from "@/lib/app-url";
import { trackEvent } from "@/lib/analytics/track";

const NAV_LINKS = [
  { href: MARKETING_ROUTES.features, label: "Features" },
  { href: MARKETING_ROUTES.pricing, label: "Pricing" },
  { href: MARKETING_ROUTES.about, label: "About" },
] as const;

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0 text-2xl text-foreground">
          <ClefmarkWordmark />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() =>
                trackEvent("nav_click", { location: link.label.toLowerCase() })
              }
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <CtaButton
            href={appSignupUrl("starter", { campaign: "header" })}
            trackEventName="cta_signup_click"
            trackParams={{ plan: "starter", location: "header" }}
            className="hidden px-4 sm:inline-flex"
          >
            Start trial
          </CtaButton>
          <a
            href={appLoginUrl()}
            onClick={() => trackEvent("cta_signin_click", { location: "header" })}
            className="inline-flex min-h-11 items-center text-sm font-medium text-foreground hover:text-accent"
          >
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}
