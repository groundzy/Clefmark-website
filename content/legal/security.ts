import type { LegalSection } from "@/content/legal/types";

export const securitySections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "Clefmark is a multi-tenant SaaS platform. Each organization's data is isolated by orgId. This page summarizes how we protect tenant data on app.clefmark.com.",
    ],
  },
  {
    id: "isolation",
    title: "Tenant isolation",
    paragraphs: [
      "All tenant documents include an orgId. API routes verify the actor's organization and role before reading or writing CRM, inbox, playbook, or automation data.",
      "Client applications cannot read or write tenant collections directly. CRM and inbox access is API-first via the Admin SDK.",
    ],
  },
  {
    id: "encryption",
    title: "Encryption",
    paragraphs: [
      "Data is encrypted in transit using TLS. Data at rest is encrypted by our cloud infrastructure providers.",
      "OAuth tokens for email and integration credentials are stored encrypted using server-side keys.",
    ],
  },
  {
    id: "auth",
    title: "Authentication",
    paragraphs: [
      "Product access uses Firebase Authentication. Sessions are validated on every API request via Bearer tokens.",
      "Role-based access applies within each organization: org admin, manager, and rep scopes.",
    ],
  },
  {
    id: "oauth",
    title: "OAuth and integrations",
    paragraphs: [
      "Email mailboxes connect via OAuth (Gmail, Microsoft 365, Zoho). Clefmark stores tokens needed to sync and send on behalf of your organization.",
      "You can disconnect integrations from Admin or user settings. See our privacy policy for subprocessors.",
    ],
  },
  {
    id: "audit",
    title: "Outbound communications",
    paragraphs: [
      "Email, SMS, and print mail sends are audited. Outbound activity is logged for compliance and team visibility where applicable.",
    ],
  },
  {
    id: "marketing",
    title: "Marketing site",
    paragraphs: [
      "clefmark.com does not store CRM or tenant data. Optional analytics cookies on the marketing site require consent. See our cookie policy.",
    ],
  },
  {
    id: "contact",
    title: "Security contact",
    paragraphs: [
      "Report security concerns to hello@clefmark.com. We review reports promptly.",
    ],
  },
];
