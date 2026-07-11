import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export const FIELD_SALES_INTRO = {
  definitive:
    "Clefmark is a territory sales OS for B2B field teams. Reps discover businesses on the map, save them to Clients, communicate from one Inbox, and run Playbooks — with Clefmark assistant grounded in each org's library and rules.",
  headline: "Territory sales software for field B2B teams",
  subhead:
    "Reps who sell by route need more than a contact list. Clefmark starts from the map and ties discovery, follow-up, and messaging together.",
} as const;

export const FIELD_SALES_PROBLEM = {
  headline: "The gap field reps live in",
  points: [
    "Desk tools assume you already have a list. Territory reps spend their day in maps, calls, and inboxes.",
    "Map tools help you find places but often stop at the pin — no sequences, no team library.",
    "Engagement tools excel at outbound email but miss local context and a full client workspace.",
  ],
  resolution:
    "Clefmark ties the full day together: find, qualify, communicate, follow up, close — in one product.",
} as const;

export const FIELD_SALES_PILLARS = [
  {
    title: "Explore",
    body: "Map and list search with Google, Apple, and Yelp. Territory filters. Save to Clients.",
  },
  {
    title: "Inbox",
    body: "Email and SMS in one place, linked to the client — not scattered across tools.",
  },
  {
    title: "Playbooks",
    body: "Team sequences for calls, emails, SMS, print, tasks, and waits.",
  },
  {
    title: CLEFMARK_ASSISTANT,
    body: "Drafts and outreach grounded in your library and rules — not generic templates.",
  },
] as const;
