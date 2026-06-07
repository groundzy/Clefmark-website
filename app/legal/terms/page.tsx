import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { LEGAL_ROUTES } from "@/content/legal/meta";
import { termsSections } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms · Clefmark",
  description:
    "Terms of Service for Clefmark, Inc. — subscriptions, acceptable use, and your rights when using the Clefmark platform.",
};

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
