import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

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
    "Map-based field sales for B2B teams. Discover on the map, work clients, reply from one inbox.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Clefmark — Territory sales, tied together",
    description:
      "Map-based field sales for B2B teams. Discover on the map, work clients, reply from one inbox.",
    url: siteUrl,
    siteName: "Clefmark",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clefmark — Territory sales, tied together",
    description:
      "Map-based field sales for B2B teams. Discover on the map, work clients, reply from one inbox.",
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
        "Map-based field sales for B2B teams. Discover on the map, work clients, reply from one inbox.",
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
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
