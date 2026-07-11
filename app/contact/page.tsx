import { ContactForm } from "@/components/contact-form";
import { MarketingPageLayout } from "@/components/marketing-page-layout";
import { SEO_PAGES } from "@/content/marketing/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(SEO_PAGES.contact);

export default function ContactPage() {
  return (
    <MarketingPageLayout>
      <div className="mx-auto max-w-lg px-6 py-16">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Request a demo or ask about territory sales for your field team.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Or email{" "}
          <a href="mailto:hello@clefmark.com" className="text-accent hover:underline">
            hello@clefmark.com
          </a>
        </p>
      </div>
    </MarketingPageLayout>
  );
}
