export type PricingTier = {
  planId: string;
  name: string;
  monthly: number;
  yearly: number;
  seatCap: string;
  description: string;
  highlight?: boolean;
};

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    planId: "starter",
    name: "Starter",
    monthly: 29,
    yearly: 290,
    seatCap: "1 seat",
    description: "Solo rep or owner-operator getting started on the map.",
  },
  {
    planId: "team",
    name: "Team",
    monthly: 114,
    yearly: 1140,
    seatCap: "Up to 5 seats",
    description: "Growing field teams with playbooks and Gmail inbox.",
    highlight: true,
  },
  {
    planId: "growth",
    name: "Growth",
    monthly: 199,
    yearly: 1990,
    seatCap: "Up to 10 seats",
    description: "Larger field teams standardizing playbooks and follow-up.",
  },
  {
    planId: "scale",
    name: "Scale",
    monthly: 399,
    yearly: 3990,
    seatCap: "Up to 25 seats",
    description: "Mid-market field orgs standardizing territory sales.",
  },
] as const;

export const PRICING_INTRO = {
  headline: "Simple seat tiers.",
  subhead: "14-day trial on every plan. No card needed to start.",
  trialNote: "Free for 14 days. No card needed.",
  enterpriseNote:
    "Need 26+ seats? Contact us for custom pricing — not self-serve in v0.1.",
} as const;

export const PRICING_FAQ = [
  {
    id: "trial",
    question: "How does the 14-day trial work?",
    answer:
      "Every new workspace starts with a 14-day trial. No card required. During the trial you can send up to 25 outbound emails and create up to 50 Clefmark assistant drafts.",
  },
  {
    id: "cancel",
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from Admin → Billing when billing is active. Your data remains exportable per our terms.",
  },
  {
    id: "export",
    question: "Can I export my data?",
    answer:
      "Yes. You can export client records and related data. See our terms for retention details after cancellation.",
  },
  {
    id: "multi-org",
    question: "Can one person belong to multiple organizations?",
    answer:
      "Each workspace is a separate organization. Users can be invited to multiple orgs with different roles.",
  },
  {
    id: "security",
    question: "How is my data protected?",
    answer:
      "Tenant data is isolated by organization. See our security page for encryption, OAuth handling, and subprocessors.",
  },
  {
    id: "trial-limits",
    question: "Are there limits during the trial?",
    answer:
      "Yes. During the trial you can send up to 25 outbound emails and create up to 50 Clefmark assistant drafts. Receiving and syncing email are not capped by those limits.",
  },
] as const;
