import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import { AnalyticsProvider } from "@/components/analytics-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = "https://clefmark.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Clefmark — Territory sales, tied together",
  description:
    "Custom dashboard and Clefmark assistant for field B2B teams. Discover on the map, work clients, reply from one inbox.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Clefmark — Territory sales, tied together",
    description:
      "Custom dashboard and Clefmark assistant for field B2B teams. Discover on the map, work clients, reply from one inbox.",
    url: siteUrl,
    siteName: "Clefmark",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clefmark — Territory sales, tied together",
    description:
      "Custom dashboard and Clefmark assistant for field B2B teams. Discover on the map, work clients, reply from one inbox.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Clefmark",
      url: siteUrl,
      email: "hello@clefmark.com",
    },
    {
      "@type": "SoftwareApplication",
      name: "Clefmark",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Custom dashboard and Clefmark assistant for field B2B teams. Discover on the map, work clients, reply from one inbox.",
      offers: {
        "@type": "Offer",
        price: "29",
        priceCurrency: "USD",
      },
    },
  ],
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
