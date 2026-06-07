import { CLEFMARK_ASSISTANT } from "@/lib/copy";

import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_ENTITY,
  LEGAL_GOVERNING_LAW,
  LEGAL_ROUTES,
} from "@/content/legal/meta";
import type { LegalSection } from "@/content/legal/types";

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement",
    paragraphs: [
      `These Terms of Service ("Terms") are a binding agreement between you and ${LEGAL_ENTITY} ("Clefmark," "we," "us," or "our") governing access to and use of the Clefmark platform at app.clefmark.com and related services (collectively, the "Service"). By creating an account, accessing the Service, or clicking to accept these Terms, you agree to be bound by them.`,
      "If you use the Service on behalf of an organization, you represent that you have authority to bind that organization, and \"you\" refers to that organization. Each person who accesses the Service under your organization's account must comply with these Terms.",
      "You must be at least eighteen (18) years old and capable of forming a binding contract. The Service is intended for business use only.",
      `Our Privacy Policy at ${LEGAL_ROUTES.privacy} is incorporated into these Terms by reference and describes how we handle personal information.`,
    ],
  },
  {
    id: "the-service",
    title: "The service",
    paragraphs: [
      "Clefmark is a map-first territory sales platform for business teams. The Service includes features such as Explore (map and list discovery), Clients (account and progress management), Inbox (unified email and SMS communication), Playbooks (team sequences), scheduled outreach (email, SMS, and print mail), team library, activity tracking, and Clefmark assistant capabilities for drafts and workspace configuration.",
      "We may add, change, or discontinue features from time to time. We will use reasonable efforts to avoid materially reducing core functionality during a paid subscription term without notice.",
      "The Service does not guarantee specific sales outcomes, response rates, or revenue results. You remain responsible for your sales strategy and communications.",
    ],
  },
  {
    id: "accounts-and-organizations",
    title: "Accounts and organizations",
    paragraphs: [
      "Clefmark is organized around workspaces (\"organizations\"). An organization administrator manages users, billing, integrations, and workspace settings.",
      "You are responsible for maintaining the confidentiality of account credentials and for all activity under your account. Notify us promptly at hello@clefmark.com if you suspect unauthorized access.",
      "Subscription plans include seat caps (maximum number of organization members). You may not exceed your plan's seat cap without upgrading. Administrators may invite users subject to available seats and role permissions.",
      "We may suspend or refuse registration if we reasonably believe information provided is inaccurate or the account will be used in violation of these Terms.",
    ],
  },
  {
    id: "customer-data",
    title: "Customer data",
    paragraphs: [
      "\"Customer Data\" means information you or your users submit to the Service or sync through connected integrations, including Clients records, communications, library files, and configuration data.",
      "You retain ownership of Customer Data. You grant Clefmark a limited, non-exclusive license to host, process, transmit, and display Customer Data solely to provide and improve the Service, comply with law, and as otherwise described in our Privacy Policy.",
      "You are responsible for the accuracy, quality, and legality of Customer Data and for obtaining any rights, consents, and notices required to collect and use it.",
      "Business customers may request a Data Processing Addendum (DPA) by contacting hello@clefmark.com. Our Privacy Policy describes subprocessors and security practices.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: [
      "You may use the Service only for lawful business purposes and in compliance with these Terms and applicable law.",
      "You may not: (a) send spam, unsolicited bulk messages, or deceptive communications; (b) harass, threaten, or defame others; (c) transmit malware or attempt to disrupt the Service; (d) scrape, crawl, or reverse engineer the Service except as permitted by law; (e) resell or sublicense the Service without our written consent; (f) use the Service to store or transmit illegal content; or (g) circumvent usage limits, security controls, or access restrictions.",
      "You are solely responsible for compliance with laws governing outbound communications, including the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, state telemarketing laws, carrier and A2P 10DLC registration requirements for SMS, email provider policies, and regulations applicable to direct mail.",
      "You must honor opt-out requests (including SMS STOP keywords where supported) and maintain appropriate consent records for your communications programs.",
      "We may investigate violations and suspend or terminate access as described below.",
    ],
  },
  {
    id: "integrations-and-third-party-services",
    title: "Integrations and third-party services",
    paragraphs: [
      "The Service integrates with third-party providers such as email platforms (Google, Microsoft, Zoho), Twilio, Stannp, place data providers, Calendly, Zoom, and Stripe. Your use of those services is subject to their terms and policies.",
      "When you connect an integration, you authorize Clefmark to access and process data from that provider as needed to deliver Service features. OAuth tokens and similar credentials are stored in encrypted form.",
      "We are not responsible for outages, policy changes, or acts of third-party providers. You are responsible for maintaining valid connections and complying with provider requirements.",
    ],
  },
  {
    id: "subscriptions-and-billing",
    title: "Subscriptions and billing",
    paragraphs: [
      "Paid plans are offered on a subscription basis. Current tiers include Starter ($29 per month), Team ($114 per month), Growth ($199 per month), and Scale ($399 per month), each with a defined seat cap. Annual billing may be offered at a discounted rate equal to ten months of the monthly price.",
      "New workspaces may start with a fourteen (14) day trial. During the trial, your organization may have a seat cap equivalent to the Team tier unless otherwise stated at signup. Your selected plan is stored and applies when you subscribe.",
      "Usage meters for SMS segments, Clefmark assistant usage, and print mail pieces may be billed separately from seat subscriptions at rates disclosed in the product or at checkout.",
      "Payments are processed by Stripe. By subscribing, you authorize us and Stripe to charge your payment method on a recurring basis until you cancel.",
      "Enterprise pricing for organizations requiring more than twenty-five (25) seats is available by contacting us and is not self-serve.",
    ],
  },
  {
    id: "trial-limitations",
    title: "Trial limitations",
    paragraphs: [
      "During a trial period, certain features may be limited. Unless otherwise stated, outbound email sending is capped at twenty-five (25) messages per organization during the trial. Inbound email sync and receiving messages may still be available.",
      "Other outbound channels (SMS, print mail, or additional email sends) may be restricted until you convert to a paid subscription.",
      "At the end of the trial, continued use requires setting up billing through the admin billing portal unless we extend the trial in writing.",
    ],
  },
  {
    id: "payment-and-taxes",
    title: "Payment and taxes",
    paragraphs: [
      "Subscriptions automatically renew at the end of each billing period unless cancelled before renewal. You are responsible for all applicable taxes, except taxes based on Clefmark's net income.",
      "If a payment fails, we may retry charges, notify your administrator, and suspend access to paid features until payment is received.",
      "We may change plan prices with at least thirty (30) days' notice before the change applies to your next renewal. Price changes do not apply retroactively to the current billing period.",
    ],
  },
  {
    id: "cancellation-and-refunds",
    title: "Cancellation and refunds",
    paragraphs: [
      "You may cancel a subscription through the billing portal in the product admin or by contacting hello@clefmark.com. Cancellation takes effect at the end of the current paid billing period unless otherwise required by law.",
      "Fees are non-refundable except where required by applicable law or explicitly stated in writing by Clefmark. Downgrading or cancelling does not entitle you to a refund for unused time in the current period.",
    ],
  },
  {
    id: "suspension-and-termination",
    title: "Suspension and termination",
    paragraphs: [
      "We may suspend or terminate your access immediately if you violate these Terms, fail to pay amounts due, pose a security or legal risk, or if required by law.",
      "You may terminate by cancelling your subscription and ceasing use of the Service.",
      "Upon termination, your right to access the Service ends. Provisions that by their nature should survive (including payment obligations, disclaimers, limitation of liability, and indemnification) will survive termination.",
    ],
  },
  {
    id: "data-export-and-deletion",
    title: "Data export and deletion",
    paragraphs: [
      "During an active subscription, administrators may export Customer Data using features available in the product admin.",
      "After termination, we will retain Customer Data for a limited period to allow export and to meet legal obligations, then delete or de-identify it in accordance with our Privacy Policy and retention practices.",
      "We recommend exporting data before cancellation. We are not obligated to retain Customer Data indefinitely after termination.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "Clefmark and its licensors own all rights in the Service, including software, design, trademarks, and documentation. These Terms do not grant you any ownership rights in the Service.",
      "You retain ownership of Customer Data and grant us only the limited license described in the Customer Data section.",
      "You may not copy, modify, or create derivative works of the Service except as expressly permitted.",
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    paragraphs: [
      "If you provide suggestions, ideas, or feedback about the Service, you grant Clefmark a perpetual, irrevocable, royalty-free license to use that feedback without restriction or compensation to you.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    paragraphs: [
      "Each party may receive non-public information from the other. The receiving party will use reasonable care to protect confidential information and will not disclose it except to employees, contractors, or advisors who need to know and are bound by confidentiality obligations, or as required by law.",
      "Confidential information does not include information that is publicly available, independently developed, or rightfully received from a third party without restriction.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLEFMARK DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`,
      "We do not warrant that the Service will be uninterrupted, error-free, or secure, or that communications sent through the Service will be delivered or comply with all applicable laws without your oversight.",
      `${CLEFMARK_ASSISTANT} outputs are suggestions only. You are responsible for reviewing and approving all outbound communications before sending.`,
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLEFMARK WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM OR RELATED TO THE SERVICE OR THESE TERMS.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLEFMARK'S TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE OR THESE TERMS IN ANY TWELVE (12) MONTH PERIOD WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO CLEFMARK FOR THE SERVICE IN THAT PERIOD.",
      "Some jurisdictions do not allow certain limitations. In those cases, our liability is limited to the greatest extent permitted by law.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    paragraphs: [
      "You will defend, indemnify, and hold harmless Clefmark and its officers, directors, employees, and agents from claims, damages, losses, and expenses (including reasonable attorneys' fees) arising from: (a) your Customer Data; (b) your use of the Service; (c) your communications sent through the Service; or (d) your violation of these Terms or applicable law.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "Dispute resolution",
    paragraphs: [
      `These Terms are governed by the laws of the ${LEGAL_GOVERNING_LAW}, without regard to conflict-of-law principles.`,
      "Any dispute arising from or relating to these Terms or the Service will be resolved exclusively in the state or federal courts located in Delaware, and each party consents to personal jurisdiction in those courts.",
      "The parties waive any right to a jury trial to the extent permitted by law.",
    ],
  },
  {
    id: "general",
    title: "General",
    paragraphs: [
      "These Terms, together with the Privacy Policy and any order or plan selection, constitute the entire agreement between you and Clefmark regarding the Service.",
      "If any provision is found unenforceable, the remaining provisions remain in effect.",
      "You may not assign these Terms without our consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.",
      "Neither party is liable for failure to perform due to causes beyond reasonable control (force majeure).",
      "Failure to enforce a provision is not a waiver of the right to enforce it later.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    paragraphs: [
      "We may modify these Terms by posting an updated version on clefmark.com or in the Service. We will update the \"Last updated\" date. Material changes will be communicated via email to organization administrators or an in-product notice when practicable.",
      "Continued use of the Service after the effective date of updated Terms constitutes acceptance, except where further consent is required by law.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      `Questions about these Terms may be sent to ${LEGAL_CONTACT_EMAIL}.`,
      `${LEGAL_ENTITY}`,
    ],
  },
];
