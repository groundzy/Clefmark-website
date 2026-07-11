import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { LEGAL_ROUTES } from "@/content/legal/meta";
import { securitySections } from "@/content/legal/security";
import { SEO_PAGES } from "@/content/marketing/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(SEO_PAGES.security);

export default function SecurityPage() {
  return (
    <LegalPageLayout>
      <LegalDocument
        title="Security"
        sections={securitySections}
        seeAlso={{ label: "Privacy policy", href: LEGAL_ROUTES.privacy }}
      />
    </LegalPageLayout>
  );
}
