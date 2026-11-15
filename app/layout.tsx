import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import { AnalyticsProvider } from "@/components/analytics-provider";
import { JsonLdScript } from "@/components/json-ld-script";
import {
  buildJsonLdGraph,
  organizationJsonLd,
  softwareApplicationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, getGscVerification } from "@/lib/seo/metadata";
import { SEO_DEFAULT } from "@/content/marketing/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const rootJsonLd = buildJsonLdGraph(
  organizationJsonLd(),
  softwareApplicationJsonLd(),
  webSiteJsonLd(),
);

export const metadata: Metadata = {
  metadataBase: new URL("https://clefmark.com"),
  title: {
    default: SEO_DEFAULT.title,
    template: "%s · Clefmark",
  },
  description: SEO_DEFAULT.description,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${SEO_DEFAULT.title} · Clefmark`,
    description: SEO_DEFAULT.description,
    url: "https://clefmark.com",
    siteName: "Clefmark",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Territory sales software that starts on the map · Clefmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SEO_DEFAULT.title} · Clefmark`,
    description: SEO_DEFAULT.description,
    images: [DEFAULT_OG_IMAGE],
  },
  ...getGscVerification(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <AnalyticsProvider>
          <JsonLdScript data={rootJsonLd} />
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
