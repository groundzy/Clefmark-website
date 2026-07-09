import { CLEFMARK_ASSISTANT } from "@/lib/copy";

import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_ENTITY,
  LEGAL_ROUTES,
} from "@/content/legal/meta";
import type { LegalSection } from "@/content/legal/types";

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `${LEGAL_ENTITY} ("Clefmark," "we," "us," or "our") operates the Clefmark territory sales platform. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit clefmark.com (our marketing website) or use the Clefmark product at app.clefmark.com (the "Service").`,
      "Clefmark is a business-to-business software service. This policy applies to workspace administrators, team members, and visitors to our marketing site. If you use Clefmark on behalf of an organization, your organization controls much of the data in your workspace. This policy describes our practices as the service provider.",
      "This document is provided for informational purposes and does not constitute legal advice. If you do not agree with this policy, please do not use the Service.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect information in three broad categories: information you provide, information generated through your use of the Service, and information from connected integrations.",
      "Account and profile information: When you create an account, we collect your name, email address, authentication credentials (managed through Firebase Authentication), organization name, role, timezone, and preferences you set in your profile.",
      "Workspace and organization data: Administrators configure business details, industry settings, team structure, playbooks, library content, email signature templates, phone number assignments, and Clefmark assistant rules for the workspace.",
      "Clients and sales data: The Service stores information about the businesses and contacts your team works with, including names, addresses, phone numbers, email addresses, location and map data, progress status, tasks, notes, deals, and activity history.",
      "Communications data: When you connect email or SMS channels, we process message metadata and content needed to display threads in Inbox, send replies, link conversations to Clients records, and run playbooks and scheduled outreach. This may include subject lines, message bodies, attachments metadata, phone numbers, and delivery status.",
      "Explore and place data: When your team searches for businesses on the map or in list view, we process search queries and place information returned by configured place providers (such as Google Places, Apple Maps, or Yelp) when you save locations to Clients.",
      "Library and files: We store documents, talk tracks, and other files uploaded to team or personal libraries, including version history and acknowledgment records where enabled.",
      "Billing and usage: If your organization subscribes to a paid plan, Stripe processes payment information. We store subscription tier, billing status, seat counts, and usage aggregates for SMS segments, Clefmark assistant usage, and print mail pieces.",
      "Support and correspondence: If you contact us, we retain the content of your messages and related contact details to respond and improve the Service.",
    ],
  },
  {
    id: "information-from-integrations",
    title: "Information from integrations",
    paragraphs: [
      "Clefmark connects to third-party services that you or your organization authorize. We process data from those services solely to provide features you enable.",
      "Email providers (Google Gmail, Microsoft Outlook via Graph, Zoho Mail): When a user connects a mailbox through OAuth, we sync threads and messages, send outbound email on the user's behalf, and store encrypted OAuth credentials until the connection is disconnected.",
      "Twilio: For SMS and phone numbers, we process message content, sender and recipient phone numbers, delivery receipts, and phone number inventory assigned to your workspace.",
      "Stannp: For print mail, we process recipient addresses, template selections, merge fields, and fulfillment status needed to send physical mail on your behalf.",
      "Calendly and Zoom: When connected, we may process meeting scheduling events and meeting links associated with your sales activity.",
      "Place providers (Google Places, Apple Maps Server API, Yelp): We query these services using search terms and location context you provide. Imported place data is stored in your workspace as Clients records.",
      `${CLEFMARK_ASSISTANT} features may process workspace context, library content, and draft requests to generate suggested email or SMS text. Usage is metered and governed by your organization's settings.`,
      "You are responsible for ensuring you have appropriate rights and notices in place for personal information you import or sync into Clefmark through integrations.",
    ],
  },
  {
    id: "marketing-site-data",
    title: "Marketing site data",
    paragraphs: [
      "When you visit clefmark.com, we may collect standard server logs such as IP address, browser type, referring URL, pages viewed, and timestamps.",
      "We may use Google Analytics 4 with your consent to understand aggregate traffic patterns and product usage on clefmark.com and app.clefmark.com. Analytics cookies are optional and are not loaded until you accept them. We do not use third-party advertising pixels on the marketing site.",
      "If you submit a contact or demo request form when available, we collect the information you provide (such as name, work email, company, and message) to respond to your inquiry.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: [
      "We use the information described above to:",
      "Provide, operate, maintain, and improve the Service, including Explore, Clients, Inbox, Playbooks, scheduled outreach, and Clefmark assistant features.",
      "Authenticate users, enforce workspace access controls, and protect against fraud, abuse, and security incidents.",
      "Process subscriptions, trials, usage metering, and billing through Stripe.",
      "Send service-related communications such as account notices, security alerts, and product updates.",
      "Provide customer support and respond to your requests.",
      "Comply with legal obligations and enforce our Terms of Service.",
      "Analyze aggregated, de-identified usage to improve performance and reliability.",
      "We do not sell personal information. We do not use personal information for cross-context behavioral advertising.",
    ],
  },
  {
    id: "legal-bases",
    title: "Legal bases (EEA, UK, and Switzerland)",
    paragraphs: [
      "If you are located in the European Economic Area, the United Kingdom, or Switzerland, we process personal information on the following bases:",
      "Performance of a contract: To provide the Service under our agreement with you or your organization.",
      "Legitimate interests: To secure and improve the Service, prevent abuse, and communicate about the Service, balanced against your rights.",
      "Consent: Where required for optional integrations, marketing email, or other processing for which consent is the appropriate basis. You may withdraw consent where applicable without affecting the lawfulness of processing before withdrawal.",
      "Legal obligation: Where we must retain or disclose information to comply with applicable law.",
    ],
  },
  {
    id: "how-we-share-information",
    title: "How we share information",
    paragraphs: [
      "We share personal information only as described below:",
      "Subprocessors: We use trusted service providers to host infrastructure, process payments, deliver messages, and operate the Service. They process data on our instructions and under contractual safeguards. See the Subprocessors section below.",
      "Within your organization: Workspace administrators and authorized managers may access data in your organization's workspace according to role permissions.",
      "Legal and safety: We may disclose information if required by law, court order, or governmental request, or when we believe disclosure is necessary to protect rights, safety, or the integrity of the Service.",
      "Business transfers: If Clefmark is involved in a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction, subject to continued protection consistent with this policy.",
      "With your direction: We share information when you connect integrations or instruct us to send communications through third-party providers on your behalf.",
    ],
  },
  {
    id: "subprocessors",
    title: "Subprocessors",
    paragraphs: [
      "We rely on the following categories of subprocessors to operate Clefmark. This list may be updated as we add or change providers. Material changes will be reflected in an updated version of this policy.",
    ],
    showSubprocessorTable: true,
  },
  {
    id: "international-transfers",
    title: "International transfers",
    paragraphs: [
      "Clefmark is based in the United States. If you access the Service from outside the United States, your information may be transferred to, stored in, and processed in the United States and other countries where our subprocessors operate.",
      "Where required, we use appropriate safeguards for international transfers, such as Standard Contractual Clauses approved by relevant authorities. Business customers may request a Data Processing Addendum by contacting us at hello@clefmark.com.",
    ],
  },
  {
    id: "data-retention",
    title: "Data retention",
    paragraphs: [
      "We retain personal information for as long as your organization maintains an active workspace or as needed to provide the Service.",
      "When you disconnect an integration, we delete or invalidate associated OAuth credentials and stop syncing new data from that provider, subject to reasonable processing time.",
      "Server and security logs are generally retained for up to ninety (90) days unless a longer period is required for security investigations or legal compliance.",
      "After termination of a workspace, we retain data for a limited period to allow export and to comply with legal obligations, then delete or de-identify it in accordance with our retention schedule. Specific retention periods may vary by data type and legal requirements.",
      "You may request deletion of your user profile information by contacting us. Organization data is controlled by your workspace administrator.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We implement technical and organizational measures designed to protect personal information, including encryption in transit (TLS) and encryption at rest through our cloud infrastructure providers.",
      "Clefmark uses multi-tenant architecture with organization-level isolation. Integration credentials such as OAuth tokens are stored in encrypted form.",
      "Access to production systems is restricted to authorized personnel. We monitor for errors and security events using industry-standard tooling.",
      "No method of transmission or storage is completely secure. We cannot guarantee absolute security. A dedicated security overview page may be published separately as our program matures.",
    ],
  },
  {
    id: "your-choices-and-rights",
    title: "Your choices and rights",
    paragraphs: [
      "Depending on your location and role, you may have rights to access, correct, delete, or export personal information, restrict or object to certain processing, and withdraw consent where processing is consent-based.",
      "Workspace administrators can manage user access, disconnect integrations, and configure workspace settings in the product admin.",
      "You may opt out of non-essential marketing email from Clefmark by using the unsubscribe link in those messages or contacting us.",
      "To exercise privacy rights, contact us at hello@clefmark.com. We may need to verify your identity and, for organization data, confirm authorization from your workspace administrator. We will respond within the timeframe required by applicable law.",
    ],
  },
  {
    id: "california-and-us-state-privacy",
    title: "California and U.S. state privacy",
    paragraphs: [
      "If you are a California resident, the California Consumer Privacy Act (CCPA), as amended by the CPRA, may provide additional rights regarding personal information.",
      "Categories collected: Identifiers (name, email, phone); commercial information (subscription and usage records); internet or network activity (logs, analytics); professional information (role, organization); and inferences or profiles limited to Service functionality.",
      "Business purposes: Providing the Service, security, billing, support, analytics, and legal compliance as described in this policy.",
      "We do not sell personal information. We do not share personal information for cross-context behavioral advertising.",
      "California residents may request access, deletion, or correction, and may limit use of sensitive personal information where applicable. Submit requests to hello@clefmark.com. We will not discriminate against you for exercising privacy rights.",
      "Residents of other U.S. states with comprehensive privacy laws may have similar rights. Contact us to exercise applicable rights.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "The Service is not directed to individuals under sixteen (16) years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, contact us at hello@clefmark.com and we will take appropriate steps to delete it.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    paragraphs: [
      "The Service and marketing site may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing information to them.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the \"Last updated\" date. If we make material changes, we will provide additional notice such as email to workspace administrators or an in-product notice.",
      "Your continued use of the Service after the effective date of an updated policy constitutes acceptance of the changes, except where further consent is required by law.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      `Questions about this Privacy Policy or our privacy practices may be sent to ${LEGAL_CONTACT_EMAIL}.`,
      `${LEGAL_ENTITY} is the data controller for personal information processed through the Service. For account and workspace obligations, see our Terms of Service at ${LEGAL_ROUTES.terms}.`,
    ],
  },
];
