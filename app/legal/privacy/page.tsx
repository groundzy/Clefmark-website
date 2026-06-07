import Link from "next/link";
import type { Metadata } from "next";

import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingHeader } from "@/components/marketing-header";

export const metadata: Metadata = {
  title: "Privacy · Clefmark",
  description: "Clefmark privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1 px-6 py-16">
        <article className="prose-neutral mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-semibold text-foreground">
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: June 2026. Draft — review before publish.
          </p>

          <div className="mt-8 space-y-6 text-base leading-7 text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">Overview</h2>
              <p className="mt-2">
                Clefmark (&quot;we&quot;) provides a territory sales platform for
                B2B field teams. This policy describes how we handle information
                on clefmark.com and in the Clefmark product at app.clefmark.com.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Information we collect
              </h2>
              <p className="mt-2">
                Product accounts: account details, workspace data, client records,
                communications metadata, and usage required to operate the service.
                Marketing site: standard web logs and analytics if enabled.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Subprocessors
              </h2>
              <p className="mt-2">
                We use infrastructure and service providers including Google
                (Firebase, Maps), Stripe, Twilio, and mail providers connected via
                OAuth. A full subprocessor list will be published before general
                availability.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                Questions:{" "}
                <a href="mailto:hello@clefmark.com" className="text-accent">
                  hello@clefmark.com
                </a>
              </p>
            </section>
          </div>

          <p className="mt-12">
            <Link href="/" className="text-sm text-accent hover:underline">
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
      <MarketingFooter />
    </>
  );
}
