import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export const COMMERCIAL_PEST_CONTROL_INTRO = {
  definitive:
    "Clefmark is territory sales software for independent commercial pest-control teams. Reps find restaurants, property managers, and other local accounts on the map, keep them in Clients, and follow up from Gmail with playbooks and assistant drafts.",
  headline: "Run your commercial pest-control territory from the map, not a spreadsheet.",
  subhead:
    "Clefmark helps B2B pest-control field teams find local accounts on the map, keep them in Clients, and follow up from a Gmail inbox with playbooks and assistant drafts. 14-day trial. Seat plans from $29/month.",
} as const;

export const COMMERCIAL_PEST_CONTROL_PROBLEM = {
  headline: "The gap commercial pest reps live in",
  points: [
    "New restaurants, property managers, and food businesses are found on a map or a drive-by, then lost in a spreadsheet or a personal inbox.",
    "A pin after a visit never becomes a worked account — follow-up lives in Gmail, disconnected from the record.",
    "Managers cannot see whether the territory is actually being worked, or give every rep the same follow-up.",
  ],
  resolution:
    "Clefmark starts from the map and carries the account through Clients, Gmail, playbooks, and Clefmark assistant — in one workspace.",
} as const;

export const COMMERCIAL_PEST_CONTROL_PILLARS = [
  {
    title: "Explore",
    body: "Search and pin restaurants, property managers, and other local businesses on the map with Google Places, then save a place to Clients in one step.",
  },
  {
    title: "Clients",
    body: "One record per account: contacts, progress, tasks, and the thread of work — so a pin after a visit becomes a worked account, not a row in a spreadsheet.",
  },
  {
    title: "Follow-up",
    body: `Gmail in the product, basic playbooks (email, call, task, wait), and ${CLEFMARK_ASSISTANT} drafts grounded in the team's library and rules. Invite a manager and reps into the same workspace.`,
  },
] as const;