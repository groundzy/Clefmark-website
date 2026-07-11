import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { LEGAL_ROUTES } from "@/content/legal/meta";
import { privacySections } from "@/content/legal/privacy";
import { SEO_PAGES } from "@/content/marketing/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(SEO_PAGES.privacy);

export default function PrivacyPage() {
  return (
    <LegalPageLayout>
      <LegalDocument
        title="Privacy policy"
        sections={privacySections}
        seeAlso={{ label: "Terms of Service", href: LEGAL_ROUTES.terms }}
      />
    </LegalPageLayout>
  );
}
