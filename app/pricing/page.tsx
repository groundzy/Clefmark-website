import { CtaButton } from "@/components/cta-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLdScript } from "@/components/json-ld-script";
import { MarketingPageLayout } from "@/components/marketing-page-layout";
import { PricingCards } from "@/components/pricing-cards";
import {
  PRICING_FAQ,
  PRICING_INTRO,
} from "@/content/marketing/pricing";
import { MARKETING_ROUTES } from "@/content/marketing/routes";
import { SEO_PAGES } from "@/content/marketing/seo";
import { appSignupUrl } from "@/lib/app-url";
import {
  breadcrumbJsonLd,
  buildJsonLdGraph,
  faqPageJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata(SEO_PAGES.pricing);

const jsonLd = buildJsonLdGraph(
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ]),
  softwareApplicationJsonLd(),
  faqPageJsonLd(PRICING_FAQ),
);

export default function PricingPage() {
  return (
    <MarketingPageLayout>
      <JsonLdScript data={jsonLd} />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {PRICING_INTRO.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {PRICING_INTRO.subhead}
        </p>
        <p className="mt-2 text-sm font-medium text-accent">
          {PRICING_INTRO.trialNote}
        </p>

        <div className="mt-12">
          <PricingCards />
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{PRICING_INTRO.usageNote}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {PRICING_INTRO.enterpriseNote}{" "}
          <Link href={MARKETING_ROUTES.contact} className="text-accent hover:underline">
            Contact us
          </Link>
        </p>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Pricing FAQ
          </h2>
          <FaqAccordion items={PRICING_FAQ} className="mt-6" />
        </section>

        <section className="mt-16 rounded-xl border border-border bg-muted p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Ready to try Clefmark?
          </h2>
          <div className="mt-6">
            <CtaButton
              href={appSignupUrl("starter", { campaign: "pricing" })}
              trackEventName="cta_signup_click"
              trackParams={{ plan: "starter", location: "pricing" }}
            >
              Start 14-day trial
            </CtaButton>
          </div>
        </section>
      </div>
    </MarketingPageLayout>
  );
}
