import type { Metadata } from "next";

import { pageUrl, type SeoConfig } from "@/content/marketing/seo";

export const DEFAULT_OG_IMAGE = "/og.png";

export function createPageMetadata(config: SeoConfig): Metadata {
  const url = pageUrl(config.path);
  const ogImage = {
    url: config.ogImage ?? DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: config.ogAlt ?? `${config.title} · Clefmark`,
  };

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${config.title} · Clefmark`,
      description: config.description,
      url,
      siteName: "Clefmark",
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.title} · Clefmark`,
      description: config.description,
      images: [ogImage.url],
    },
  };
}

export function getGscVerification(): Metadata | undefined {
  const token = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim();
  if (!token) {
    return undefined;
  }
  return {
    verification: {
      google: token,
    },
  };
}