import { CtaButton } from "@/components/cta-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLdScript } from "@/components/json-ld-script";
import { MarketingPageLayout } from "@/components/marketing-page-layout";
import { SectionViewTracker } from "@/components/section-view-tracker";
import { FEATURES_INTRO, PILLARS } from "@/content/marketing/features";
import { PRODUCT_FAQ } from "@/content/marketing/faq";
import { SEO_PAGES } from "@/content/marketing/seo";
import { appSignupUrl } from "@/lib/app-url";
import {
  breadcrumbJsonLd,
  buildJsonLdGraph,
  faqPageJsonLd,
} from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(SEO_PAGES.features);

const jsonLd = buildJsonLdGraph(
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
  ]),
  faqPageJsonLd(PRODUCT_FAQ),
);

export default function FeaturesPage() {
  return (
    <MarketingPageLayout>
      <JsonLdScript data={jsonLd} />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-base leading-7 text-muted-foreground">
          {FEATURES_INTRO.definitive}
        </p>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {FEATURES_INTRO.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {FEATURES_INTRO.subhead}
        </p>

        <nav className="sticky top-16 z-40 mt-12 hidden gap-2 overflow-x-auto border-b border-border bg-background py-3 md:flex">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.id}
              href={`#${pillar.id}`}
              className="shrink-0 rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {pillar.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-16">
          {PILLARS.map((pillar) => (
            <SectionViewTracker key={pillar.id} sectionId={pillar.id}>
              <article id={pillar.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-base text-muted-foreground">{pillar.summary}</p>
                <ul className="mt-4 space-y-2">
                  {pillar.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-2 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </SectionViewTracker>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Common questions
          </h2>
          <FaqAccordion items={PRODUCT_FAQ} className="mt-6" />
        </section>

        <section className="mt-20 rounded-xl border border-border bg-muted p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Start with a 14-day trial
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Free for 14 days. No card needed.
          </p>
          <div className="mt-6">
            <CtaButton
              href={appSignupUrl("starter", { campaign: "features" })}
              trackEventName="cta_signup_click"
              trackParams={{ plan: "starter", location: "features" }}
            >
              Start 14-day trial
            </CtaButton>
          </div>
        </section>
      </div>
    </MarketingPageLayout>
  );
}
