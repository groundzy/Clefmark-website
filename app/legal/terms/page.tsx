import Link from "next/link";
import type { Metadata } from "next";

import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingHeader } from "@/components/marketing-header";

export const metadata: Metadata = {
  title: "Terms · Clefmark",
  description: "Clefmark terms of service.",
};

export default function TermsPage() {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1 px-6 py-16">
        <article className="prose-neutral mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-semibold text-foreground">
            Terms of service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: June 2026. Draft — review before publish.
          </p>

          <div className="mt-8 space-y-6 text-base leading-7 text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">Agreement</h2>
              <p className="mt-2">
                By using Clefmark, you agree to these terms. Clefmark is a
                subscription software service for business teams.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Subscriptions
              </h2>
              <p className="mt-2">
                Paid plans are billed per workspace tier. Trials convert to paid
                subscriptions unless cancelled. Usage meters (SMS, Clefmark assistant, print mail)
                may apply in addition to seat pricing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Acceptable use
              </h2>
              <p className="mt-2">
                You are responsible for compliance with applicable laws for
                outbound email, SMS, and direct mail sent through your connected
                accounts and phone numbers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                Termination
              </h2>
              <p className="mt-2">
                Either party may terminate per subscription terms. Data export
                options will be documented in the product admin before general
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
