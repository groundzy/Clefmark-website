import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export const COMMERCIAL_TRADES_INTRO = {
  definitive:
    "Clefmark is territory sales software for commercial-trades and facility-services teams. Reps find local accounts on the map, keep them in Clients, and follow up from Gmail with playbooks and assistant drafts.",
  headline: "Run your commercial-trades territory from the map, not a spreadsheet.",
  subhead:
    "Clefmark helps B2B field teams find local accounts on the map, keep them in Clients, and follow up from a Gmail inbox with playbooks and assistant drafts. 14-day trial. Seat plans from $29/month.",
} as const;

export const COMMERCIAL_TRADES_PROBLEM = {
  headline: "The gap trades reps live in",
  points: [
    "The day starts in a map or a truck, not a spreadsheet — but the account list still lives in a desk CRM or a shared doc.",
    "Field-map tools help you pin a place, then leave follow-up in Gmail, disconnected from the record.",
    "Managers cannot see whether the territory is actually being worked.",
  ],
  resolution:
    "Clefmark starts from the map and carries the account through Clients, Gmail, playbooks, and Clefmark assistant — in one workspace.",
} as const;

export const COMMERCIAL_TRADES_PILLARS = [
  {
    title: "Explore",
    body: "Search and pin local businesses on the map with Google Places, then save a place to Clients in one step.",
  },
  {
    title: "Clients",
    body: "One record per account: contacts, progress, tasks, and the thread of work — built for a territory, not a desk CRM list.",
  },
  {
    title: "Follow-up",
    body: `Gmail in the product, basic playbooks (email, call, task, wait), and ${CLEFMARK_ASSISTANT} drafts grounded in the team's library and rules. Invite a manager and reps into the same workspace.`,
  },
] as const;