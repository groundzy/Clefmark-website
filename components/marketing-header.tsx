"use client";

import Link from "next/link";

import { ClefmarkWordmark } from "@/components/brand/clefmark-wordmark";
import { appLoginUrl } from "@/lib/app-url";
import { trackEvent } from "@/lib/analytics/track";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-2xl text-foreground">
          <ClefmarkWordmark />
        </Link>
        <a
          href={appLoginUrl()}
          onClick={() => trackEvent("cta_signin_click", { location: "header" })}
          className="min-h-11 inline-flex items-center text-sm font-medium text-foreground hover:text-accent"
        >
          Sign in
        </a>
      </div>
    </header>
  );
}
