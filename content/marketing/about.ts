import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export const ABOUT_INTRO = {
  definitive:
    "Clefmark is a territory sales OS for B2B field teams. Reps discover businesses on the map, save them to Clients, follow up from Gmail, and run Playbooks — with Clefmark assistant grounded in each org's library and rules.",
  headline: "Territory sales, tied together.",
  subhead:
    "Clefmark is for B2B teams whose reps work in the real world — driving routes, visiting locations, and building relationships with businesses that have a physical address.",
} as const;

export const CLEF_MARK_STORY = {
  headline: "Why Clefmark",
  clef: "Clef (music) — the symbol that tells you how to read the score. Each org's industry pack, playbooks, library, and assistant rules define how that team uses the platform.",
  mark: "Mark (maps) — pins on the map, territory markers, leaving a mark on a place worth pursuing. Reps work in physical space; the product starts from where, not from a contact list.",
} as const;

export const ICP = {
  headline: "Who Clefmark is for",
  summary: "B2B companies with 5–50 field reps selling to local businesses with physical locations.",
  examples: [
    "Commercial services and trades",
    "Distribution and equipment dealers",
    "Beverage and CPG distribution",
    "Franchise development",
    "B2B software sold into local markets",
  ],
} as const;

export const ROLES = [
  {
    role: "Sales rep",
    description:
      "Explore territory on the map, save places to Clients, send email, run playbooks, log activity",
  },
  {
    role: "Sales manager",
    description:
      "Monitor team progress and activity, tune playbooks and automation, review the team library",
  },
  {
    role: "Org admin",
    description: `Set up business profile, industry, users, billing, integrations, and ${CLEFMARK_ASSISTANT} rules`,
  },
] as const;

export const DIFFERENTIATION = [
  {
    compared: "Desk tools",
    edge: "Map-first discovery and territory workflow",
  },
  {
    compared: "Field map tools",
    edge: "Deeper playbooks, Gmail inbox, org-grounded assistant, team library",
  },
  {
    compared: "Engagement-only tools",
    edge: "Full client workspace plus map discovery and rep program tooling",
  },
] as const;

export const CHANNELS = [
  "Email — Gmail via OAuth",
  `${CLEFMARK_ASSISTANT} — drafts grounded in your library and rules`,
] as const;

export const NOT_CLEFMARK = [
  "Not a generic desk tool with a map widget",
  "Not consumer software — built for B2B field sales teams and their managers",
  "Not a single-tenant internal tool — multi-tenant SaaS for any B2B org",
] as const;
