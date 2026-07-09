import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { cookiesSections } from "@/content/legal/cookies";
import { LEGAL_ROUTES } from "@/content/legal/meta";

export const metadata: Metadata = {
  title: "Cookies · Clefmark",
  description:
    "How Clefmark uses cookies on clefmark.com and app.clefmark.com, including optional Google Analytics.",
};

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
