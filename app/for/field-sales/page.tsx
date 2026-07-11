import { CtaButton } from "@/components/cta-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLdScript } from "@/components/json-ld-script";
import { MarketingPageLayout } from "@/components/marketing-page-layout";
import { FIELD_SALES_FAQ } from "@/content/marketing/faq";
import {
  FIELD_SALES_INTRO,
  FIELD_SALES_PILLARS,
  FIELD_SALES_PROBLEM,
} from "@/content/marketing/field-sales";
import { SEO_PAGES } from "@/content/marketing/seo";
import { appSignupUrl } from "@/lib/app-url";
import {
  breadcrumbJsonLd,
  buildJsonLdGraph,
  faqPageJsonLd,
} from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(SEO_PAGES.fieldSales);

const jsonLd = buildJsonLdGraph(
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Field sales", path: "/for/field-sales" },
  ]),
  faqPageJsonLd(FIELD_SALES_FAQ),
);

export default function FieldSalesPage() {
  return (
    <MarketingPageLayout>
      <JsonLdScript data={jsonLd} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-base leading-7 text-muted-foreground">
          {FIELD_SALES_INTRO.definitive}
        </p>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {FIELD_SALES_INTRO.headline}
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          {FIELD_SALES_INTRO.subhead}
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {FIELD_SALES_PROBLEM.headline}
          </h2>
          <ul className="mt-4 space-y-3">
            {FIELD_SALES_PROBLEM.points.map((point) => (
              <li key={point} className="text-sm leading-6 text-muted-foreground">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base font-medium text-foreground">
            {FIELD_SALES_PROBLEM.resolution}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Built for territory workflows
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {FIELD_SALES_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h3 className="font-medium text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">FAQ</h2>
          <FaqAccordion items={FIELD_SALES_FAQ} className="mt-6" />
        </section>

        <section className="mt-12 rounded-xl border border-border bg-muted p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Start with a 14-day trial
          </h2>
          <div className="mt-6">
            <CtaButton
              href={appSignupUrl("starter", { campaign: "field_sales" })}
              trackEventName="cta_signup_click"
              trackParams={{ plan: "starter", location: "field_sales" }}
            >
              Start 14-day trial
            </CtaButton>
          </div>
        </section>
      </div>
    </MarketingPageLayout>
  );
}
