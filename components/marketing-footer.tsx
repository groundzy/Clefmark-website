"use client";

import Link from "next/link";

import { ClefmarkWordmark } from "@/components/brand/clefmark-wordmark";
import { openCookiePreferences } from "@/lib/analytics/consent";
import { LEGAL_ROUTES } from "@/content/legal/meta";

export function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#101010] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="text-2xl">
          <ClefmarkWordmark className="brightness-0 invert" />
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#a1a1aa]">
          <Link href={LEGAL_ROUTES.privacy} className="hover:text-white">
            Privacy
          </Link>
          <Link href={LEGAL_ROUTES.terms} className="hover:text-white">
            Terms
          </Link>
          <Link href={LEGAL_ROUTES.cookies} className="hover:text-white">
            Cookies
          </Link>
          <button
            type="button"
            onClick={() => openCookiePreferences()}
            className="hover:text-white"
          >
            Cookie preferences
          </button>
          <a href="mailto:hello@clefmark.com" className="hover:text-white">
            hello@clefmark.com
          </a>
        </nav>
      </div>
      <div className="border-t border-[#1a1a1a] px-6 py-4 text-center text-xs text-[#a1a1aa]">
        © {year} Clefmark
      </div>
    </footer>
  );
}
