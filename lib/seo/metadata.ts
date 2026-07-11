import type { Metadata } from "next";

import { pageUrl, type SeoConfig } from "@/content/marketing/seo";

export function createPageMetadata(config: SeoConfig): Metadata {
  const url = pageUrl(config.path);

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
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.title} · Clefmark`,
      description: config.description,
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
