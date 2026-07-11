import Link from "next/link";

import { PRICING_TEASER } from "@/content/marketing/home";
import { MARKETING_ROUTES } from "@/content/marketing/routes";

export function PricingTeaser() {
  return (
    <section id="pricing-teaser" className="border-t border-border px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          {PRICING_TEASER.headline}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {PRICING_TEASER.body}
        </p>
        <Link
          href={MARKETING_ROUTES.pricing}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:underline"
        >
          View pricing →
        </Link>
      </div>
    </section>
  );
}
