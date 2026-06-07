import type { SubprocessorRow } from "@/content/legal/types";

export const subprocessors: SubprocessorRow[] = [
  {
    provider: "Google Cloud / Firebase",
    purpose:
      "Authentication, database, file storage, application hosting, Maps and Places, Clefmark assistant",
    location: "United States / global",
  },
  {
    provider: "Stripe",
    purpose: "Subscription billing and usage metering",
    location: "United States",
  },
  {
    provider: "Twilio",
    purpose: "SMS messaging and phone numbers",
    location: "United States",
  },
  {
    provider: "Google (Gmail API)",
    purpose: "Email sync and send via OAuth",
    location: "United States",
  },
  {
    provider: "Microsoft (Graph)",
    purpose: "Email sync and send via OAuth",
    location: "United States",
  },
  {
    provider: "Zoho",
    purpose: "Email sync and send via OAuth",
    location: "United States / global",
  },
  {
    provider: "Stannp",
    purpose: "Print mail fulfillment",
    location: "United Kingdom / European Union / United States",
  },
  {
    provider: "Apple",
    purpose: "Maps Server API (place search)",
    location: "United States",
  },
  {
    provider: "Yelp",
    purpose: "Place search",
    location: "United States",
  },
  {
    provider: "Inngest",
    purpose: "Background jobs and scheduling",
    location: "United States",
  },
  {
    provider: "Sentry",
    purpose: "Error monitoring",
    location: "United States",
  },
  {
    provider: "Plausible or Firebase Analytics",
    purpose: "Marketing site analytics (if enabled)",
    location: "European Union or United States",
  },
];
