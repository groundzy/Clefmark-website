import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { LEGAL_ROUTES } from "@/content/legal/meta";
import { termsSections } from "@/content/legal/terms";

import { SEO_PAGES } from "@/content/marketing/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(SEO_PAGES.terms);

export default function TermsPage() {
  return (
    <LegalPageLayout>
      <LegalDocument
        title="Terms of service"
        sections={termsSections}
        seeAlso={{ label: "Privacy Policy", href: LEGAL_ROUTES.privacy }}
      />
    </LegalPageLayout>
  );
}
