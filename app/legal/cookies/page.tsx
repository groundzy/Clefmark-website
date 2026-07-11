import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { cookiesSections } from "@/content/legal/cookies";
import { LEGAL_ROUTES } from "@/content/legal/meta";

import { SEO_PAGES } from "@/content/marketing/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(SEO_PAGES.cookies);

export default function CookiesPage() {
  return (
    <LegalPageLayout>
      <LegalDocument
        title="Cookie policy"
        sections={cookiesSections}
        seeAlso={{ label: "Privacy policy", href: LEGAL_ROUTES.privacy }}
      />
    </LegalPageLayout>
  );
}
