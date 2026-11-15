import { PILLARS } from "@/content/marketing/features";
import { PRICING_TIERS } from "@/content/marketing/pricing";
import { SITE_URL } from "@/content/marketing/routes";
import type { FaqItem } from "@/content/marketing/faq";

const DEFAULT_DESCRIPTION =
  "Territory sales OS for B2B field teams. Map-based discovery, Clients, Gmail inbox, Playbooks, and Clefmark assistant.";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: "Clefmark",
    url: SITE_URL,
    email: "hello@clefmark.com",
    logo: `${SITE_URL}/icon.svg`,
    description: DEFAULT_DESCRIPTION,
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@type": "SoftwareApplication",
    name: "Clefmark",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    featureList: PILLARS.map((p) => p.title),
    offers: PRICING_TIERS.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      price: String(tier.monthly),
      priceCurrency: "USD",
      description: tier.description,
    })),
  };
}

export function webSiteJsonLd() {
  return {
    "@type": "WebSite",
    name: "Clefmark",
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
  };
}

export function faqPageJsonLd(faqs: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildJsonLdGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
