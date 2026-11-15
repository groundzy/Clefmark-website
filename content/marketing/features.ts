import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export type Pillar = {
  id: string;
  title: string;
  summary: string;
  outcomes: readonly string[];
};

export const PILLARS: readonly Pillar[] = [
  {
    id: "discover",
    title: "Discover",
    summary: "Map and list search with place providers — territory-first.",
    outcomes: [
      "Search Google Places from map or list view",
      "Filter by territory and preview before you save",
      "Pins reflect client status across your map",
    ],
  },
  {
    id: "clients",
    title: "Clients",
    summary: "Accounts on your map — contacts, progress, tasks, deals, timeline.",
    outcomes: [
      "Save places to Clients with one action",
      "Track progress stages your org defines",
      "Full timeline follows the rep, not a spreadsheet",
    ],
  },
  {
    id: "communicate",
    title: "Communicate",
    summary: "A Gmail inbox, linked to Clients.",
    outcomes: [
      "Connect Gmail with OAuth",
      "Signatures and threads tied to the client record",
      "Reply without leaving the client workspace",
    ],
  },
  {
    id: "automate",
    title: "Automate",
    summary: "Scheduled email outreach from the client record.",
    outcomes: [
      "Schedule emails from the client record",
      "Timed follow-up without a separate engagement tool",
      "Outbound sends audited for your team",
    ],
  },
  {
    id: "playbooks",
    title: "Playbooks",
    summary: "Team sequences — call, email, task, and wait steps.",
    outcomes: [
      "Start a sequence from any client",
      "Managers publish team playbook templates",
      "Step progress visible to rep and manager",
    ],
  },
  {
    id: "program",
    title: "Program",
    summary: "Team and personal library plus activity tracking.",
    outcomes: [
      "Shared library for talk tracks, policies, and assets",
      "Rep activity log and rollups for managers",
      "Personal library for individual assets",
    ],
  },
  {
    id: "customize",
    title: "Customize",
    summary: `Industry pack, assistant rules, search presets — your org's clef.`,
    outcomes: [
      "Industry pack seeds explore defaults and sample playbooks",
      `${CLEFMARK_ASSISTANT} rules set tone and boundaries`,
      "Territory, service areas, and templates per org",
    ],
  },
] as const;

export const FEATURES_INTRO = {
  definitive:
    "Clefmark is a territory sales OS for B2B field teams. Reps discover businesses on the map, save them to Clients, follow up from Gmail, and run Playbooks — with Clefmark assistant grounded in each org's library and rules.",
  headline: "Everything your field team needs in one place.",
  subhead:
    "Seven pillars that tie discovery, client work, communication, and follow-up together.",
} as const;
