"use client";

import Link from "next/link";

import { ClefmarkWordmark } from "@/components/brand/clefmark-wordmark";
import { MARKETING_ROUTES } from "@/content/marketing/routes";
import { LEGAL_ROUTES } from "@/content/legal/meta";
import { openCookiePreferences } from "@/lib/analytics/consent";
import { trackEvent } from "@/lib/analytics/track";

const PRODUCT_LINKS = [
  { href: MARKETING_ROUTES.features, label: "Features" },
  { href: MARKETING_ROUTES.pricing, label: "Pricing" },
  { href: MARKETING_ROUTES.about, label: "About" },
  { href: MARKETING_ROUTES.contact, label: "Contact" },
  { href: MARKETING_ROUTES.fieldSales, label: "Field sales" },
] as const;

export function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#101010] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="text-2xl">
          <ClefmarkWordmark className="brightness-0 invert" />
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <nav className="flex flex-col gap-2 text-sm text-[#a1a1aa]">
            <span className="font-medium text-white">Product</span>
            {PRODUCT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  trackEvent("nav_click", { location: `footer_${link.label.toLowerCase()}` })
                }
                className="hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-2 text-sm text-[#a1a1aa]">
            <span className="font-medium text-white">Legal</span>
            <Link href={LEGAL_ROUTES.privacy} className="hover:text-white">
              Privacy
            </Link>
            <Link href={LEGAL_ROUTES.terms} className="hover:text-white">
              Terms
            </Link>
            <Link href={LEGAL_ROUTES.cookies} className="hover:text-white">
              Cookies
            </Link>
            <Link href={LEGAL_ROUTES.security} className="hover:text-white">
              Security
            </Link>
            <button
              type="button"
              onClick={() => openCookiePreferences()}
              className="text-left hover:text-white"
            >
              Cookie preferences
            </button>
            <a href="mailto:hello@clefmark.com" className="hover:text-white">
              hello@clefmark.com
            </a>
          </nav>
        </div>
      </div>
      <div className="border-t border-[#1a1a1a] px-6 py-4 text-center text-xs text-[#a1a1aa]">
        © {year} Clefmark
      </div>
    </footer>
  );
}
