import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export const HERO = {
  headline: "Territory sales software that starts on the map.",
  subhead: `Discover local businesses in Explore, save them to Clients, and run follow-up from Gmail — with playbooks and ${CLEFMARK_ASSISTANT}. Built for field teams of 5–50 reps. 14-day trial, no card required.`,
} as const;

export const EMPATHY = {
  headline: "Reps sell by territory. Most tools were built for desks.",
  body: `When discovery, follow-up, and messaging live in different places, context gets lost and territory work slows down. Clefmark gives your team Explore, Clients, a Gmail inbox, and Playbooks in a single flow — plus ${CLEFMARK_ASSISTANT} tuned to how you sell.`,
} as const;

export const WORKFLOW_STEPS = [
  {
    id: "explore",
    title: "Explore",
    body: "Search the map and list with Google Places, and preview places before you save them.",
  },
  {
    id: "clients",
    title: "Clients",
    body: "Turn a place into a client record with contacts, location, tags, and progress stage.",
  },
  {
    id: "inbox",
    title: "Inbox",
    body: "Gmail in one thread, tied to the client — not a separate tool.",
  },
  {
    id: "playbooks",
    title: "Playbooks",
    body: "Team sequences: calls, emails, tasks, and timed waits.",
  },
  {
    id: "progress",
    title: "Progress",
    body: "Track deals from first look through working terms to won or moved on.",
  },
] as const;

export const COMPARISON_ROWS = [
  {
    category: "Desk tools",
    gap: "Built for contact lists and spreadsheet views",
    clefmark: "Map-first discovery and territory workflow",
  },
  {
    category: "Map-only tools",
    gap: "Find places but stop short of follow-up",
    clefmark: "Playbooks, Gmail inbox, and team library",
  },
  {
    category: "Engagement-only tools",
    gap: "Strong outbound email, weak local context",
    clefmark: "Full client workspace plus map discovery",
  },
] as const;

export const INDUSTRIES = [
  "Commercial services",
  "Distribution",
  "Equipment",
  "Franchise development",
  "Vertical SaaS",
] as const;

export const PRICING_TEASER = {
  headline: "Plans from $29/mo",
  body: "14-day trial. No card needed. Seat tiers for solo reps up to teams of 25.",
} as const;

export const TRIAL_CTA = {
  headline: "Start with a 14-day trial.",
  body: "Free for 14 days. No card needed. Billing setup comes later.",
} as const;
