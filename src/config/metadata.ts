import type { Metadata } from "next";

import { site } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s • ${site.name}`,
  },

  description: site.description,

  applicationName: site.name,

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  authors: [
    {
      name: site.name,
      url: site.url,
    },
  ],

  publisher: site.name,

  alternates: {
    canonical: "/",

    types: {
      "application/rss+xml": "/rss.xml",
    },
  },

  keywords: [
    "Alapworks",
    "Software Engineering",
    "Software Architecture",
    "Web Development",
    "Digital Products",
    "Web Applications",
    "Automation",
    "Artificial Intelligence",
    "AI Engineering",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "Developer Experience",
    "Developer Tools",
  ],

  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,

    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.title}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,

    images: [
      {
        url: site.ogImage,
        alt: `${site.name} — ${site.title}`,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  category: "technology",
};
