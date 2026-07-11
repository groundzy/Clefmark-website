import { MARKETING_ROUTES, SITE_URL } from "@/content/marketing/routes";

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

const DEFAULT_DESCRIPTION =
  "Territory sales OS for field B2B teams. Map-based discovery, Clients, unified Inbox, Playbooks, and Clefmark assistant — in one place.";

export const SEO_DEFAULT = {
  title: "Territory sales, tied together",
  description: DEFAULT_DESCRIPTION,
  path: MARKETING_ROUTES.home,
} as const;

export const SEO_PAGES: Record<string, SeoConfig> = {
  home: {
    title: "Territory sales, tied together",
    description:
      "Territory sales OS for field B2B teams. Discover on the map, work Clients, reply from one Inbox, and run Playbooks.",
    path: MARKETING_ROUTES.home,
  },
  features: {
    title: "Features",
    description:
      "Explore, Clients, Inbox, Playbooks, automation, and Clefmark assistant — seven pillars for territory sales teams.",
    path: MARKETING_ROUTES.features,
  },
  pricing: {
    title: "Pricing",
    description:
      "Plans from $29/mo for solo reps to teams up to 25 seats. 14-day trial. No card needed.",
    path: MARKETING_ROUTES.pricing,
  },
  about: {
    title: "About",
    description:
      "Clefmark is a territory sales OS for B2B field teams. Map-first discovery, unified communication, and playbooks in one product.",
    path: MARKETING_ROUTES.about,
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch with Clefmark. Request a demo or ask about territory sales for your field team.",
    path: MARKETING_ROUTES.contact,
  },
  fieldSales: {
    title: "Territory sales software for field B2B teams",
    description:
      "Map-based discovery, client management, unified Inbox, and playbooks for reps who sell by territory — not from a desk.",
    path: MARKETING_ROUTES.fieldSales,
  },
  privacy: {
    title: "Privacy",
    description:
      "How Clefmark collects, uses, and protects information on clefmark.com and app.clefmark.com.",
    path: "/legal/privacy",
  },
  terms: {
    title: "Terms",
    description: "Terms of service for Clefmark.",
    path: "/legal/terms",
  },
  cookies: {
    title: "Cookies",
    description: "How Clefmark uses cookies on clefmark.com.",
    path: "/legal/cookies",
  },
  security: {
    title: "Security",
    description:
      "How Clefmark protects tenant data — isolation, encryption, and OAuth token handling.",
    path: "/legal/security",
  },
};

export function pageUrl(path: string): string {
  if (path === "/") {
    return SITE_URL;
  }
  return `${SITE_URL}${path}`;
}
