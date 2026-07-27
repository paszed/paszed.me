import type { Metadata } from "next";

import { site } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s • ${site.title}`,
  },

  description: site.description,

  applicationName: site.name,

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  authors: [
    {
      name: site.owner,
      url: site.url,
    },
  ],

  creator: site.owner,

  publisher: site.owner,

  alternates: {
    canonical: "/",

    types: {
      "application/rss+xml": "/rss.xml",
    },
  },

  keywords: [
    "Edvard Pasz",
    "Paszed",
    "Software Engineer",
    "Software Architecture",
    "Developer Experience",
    "Developer Tools",
    "Engineering",
    "Technical Writing",
    "TypeScript",
    "React",
    "Next.js",
    "Go",
    "Artificial Intelligence",
    "AI Engineering",
    "Developer Infrastructure",
    "Terminal Workflow",
    "Systems Design",
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
        alt: `${site.name} — ${site.owner}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    creator: "@paszed_",

    title: site.title,
    description: site.description,

    images: [
      {
        url: site.ogImage,
        alt: `${site.name} — ${site.owner}`,
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

  /*
    Add verification tokens after Search Console
    and other webmaster tools are configured.
  */
};
