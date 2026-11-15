import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const PRODUCT_FAQ: readonly FaqItem[] = [
  {
    id: "what-is-clefmark",
    question: "What is Clefmark?",
    answer:
      "Clefmark is a territory sales OS for B2B field teams. Reps discover businesses on the map, save them to Clients, follow up from Gmail, and run Playbooks — with Clefmark assistant grounded in each org's library and rules.",
  },
  {
    id: "who-for",
    question: "Who is Clefmark for?",
    answer:
      "B2B companies with 5–50 field reps selling to local businesses with physical locations — commercial services, distribution, equipment, franchise development, and similar.",
  },
  {
    id: "how-different",
    question: "How is Clefmark different from desk tools?",
    answer:
      "Desk tools assume you already have a contact list. Clefmark starts from the map and territory — discovery, client work, communication, and playbooks in one product.",
  },
  {
    id: "channels",
    question: "What channels does Clefmark support?",
    answer:
      "Gmail, tied to the client record. Connect your Google mailbox with OAuth and keep threads on the Client.",
  },
  {
    id: "assistant",
    question: `What is ${CLEFMARK_ASSISTANT}?`,
    answer: `${CLEFMARK_ASSISTANT} is your conversation and automation companion — drafts, sequences, and outreach grounded in your library and admin rules, not generic templates.`,
  },
] as const;

export const FIELD_SALES_FAQ: readonly FaqItem[] = [
  {
    id: "territory-software",
    question: "What is territory sales software?",
    answer:
      "Territory sales software helps field reps discover businesses by location, manage client relationships, and run structured follow-up — starting from the map, not a spreadsheet.",
  },
  {
    id: "field-sales-clefmark",
    question: "Is Clefmark built for field sales?",
    answer:
      "Yes. Clefmark is designed for reps who drive routes, visit locations, and sell to businesses with a physical address. Explore, Clients, Inbox, and Playbooks are built for that workflow.",
  },
  {
    id: "map-discovery",
    question: "Can reps search for businesses on a map?",
    answer:
      "Yes. Explore supports map and list search using Google Places. Reps filter by territory and save places directly to Clients.",
  },
  {
    id: "playbooks-field",
    question: "Do playbooks work for field follow-up?",
    answer:
      "Playbooks support calls, emails, tasks, and timed waits — so managers can standardize how reps follow up across a territory.",
  },
] as const;

export const COMMERCIAL_PEST_CONTROL_FAQ: readonly FaqItem[] = [
  {
    id: "who-pest",
    question: "Is Clefmark built for commercial pest control?",
    answer:
      "Yes. Clefmark is a fit for independent commercial pest-control teams with field reps who sell to local businesses — restaurants, hotels, property managers, retailers, and similar — not residential door-to-door canvassing.",
  },
  {
    id: "pest-map",
    question: "Can reps find local accounts on a map?",
    answer:
      "Yes. Explore uses Google Places for map and list search. Reps preview a place and save it to Clients.",
  },
  {
    id: "pest-follow-up",
    question: "How does follow-up work after a visit or a pin?",
    answer:
      "Work the account from Gmail in Clefmark, run a playbook with email, call, task, and wait steps, and use Clefmark assistant to draft messages from your library and rules.",
  },
  {
    id: "pest-trial",
    question: "How does the trial work?",
    answer:
      "Every new workspace starts with a 14-day trial. No card required. During the trial you can send up to 25 outbound emails and create up to 50 Clefmark assistant drafts.",
  },
] as const;
