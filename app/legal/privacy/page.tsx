import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { LEGAL_ROUTES } from "@/content/legal/meta";
import { privacySections } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy · Clefmark",
  description:
    "How Clefmark, Inc. collects, uses, and protects information on clefmark.com and app.clefmark.com.",
};

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
