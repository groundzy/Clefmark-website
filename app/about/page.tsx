import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { JsonLdScript } from "@/components/json-ld-script";
import { MarketingPageLayout } from "@/components/marketing-page-layout";
import {
  ABOUT_INTRO,
  CHANNELS,
  CLEF_MARK_STORY,
  DIFFERENTIATION,
  ICP,
  NOT_CLEFMARK,
  ROLES,
} from "@/content/marketing/about";
import { MARKETING_ROUTES } from "@/content/marketing/routes";
import { SEO_PAGES } from "@/content/marketing/seo";
import { appSignupUrl } from "@/lib/app-url";
import {
  breadcrumbJsonLd,
  buildJsonLdGraph,
  organizationJsonLd,
} from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(SEO_PAGES.about);

const jsonLd = buildJsonLdGraph(
  organizationJsonLd(),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
);

export default function AboutPage() {
  return (
    <MarketingPageLayout>
      <JsonLdScript data={jsonLd} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-base leading-7 text-muted-foreground">
          {ABOUT_INTRO.definitive}
        </p>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground">
          {ABOUT_INTRO.headline}
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          {ABOUT_INTRO.subhead}
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {CLEF_MARK_STORY.headline}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {CLEF_MARK_STORY.clef}
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {CLEF_MARK_STORY.mark}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {ICP.headline}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{ICP.summary}</p>
          <ul className="mt-4 list-inside list-disc space-y-1 text-muted-foreground">
            {ICP.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">Roles</h2>
          <div className="mt-4 space-y-4">
            {ROLES.map((row) => (
              <div key={row.role}>
                <h3 className="font-medium text-foreground">{row.role}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {row.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            How Clefmark is different
          </h2>
          <div className="mt-4 space-y-3">
            {DIFFERENTIATION.map((row) => (
              <p key={row.compared} className="text-sm leading-6 text-muted-foreground">
                <span className="font-medium text-foreground">{row.compared}:</span>{" "}
                {row.edge}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">Channels</h2>
          <ul className="mt-4 list-inside list-disc space-y-1 text-muted-foreground">
            {CHANNELS.map((channel) => (
              <li key={channel}>{channel}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            What Clefmark is not
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-1 text-muted-foreground">
            {NOT_CLEFMARK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-muted p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Questions?{" "}
            <Link href={MARKETING_ROUTES.contact} className="text-accent hover:underline">
              Get in touch
            </Link>
          </p>
          <div className="mt-6">
            <CtaButton
              href={appSignupUrl("starter", { campaign: "about" })}
              trackEventName="cta_signup_click"
              trackParams={{ plan: "starter", location: "about" }}
            >
              Start 14-day trial
            </CtaButton>
          </div>
        </section>
      </div>
    </MarketingPageLayout>
  );
}
