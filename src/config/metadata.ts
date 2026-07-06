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
  },

  keywords: [
    "Edvard Pasz",
    "Paszed",
    "Software Engineer",
    "Software Engineering",
    "Software Architecture",
    "Developer Experience",
    "Developer Tools",
    "Engineering Journal",
    "TypeScript",
    "Go",
    "Next.js",
    "React",
    "Artificial Intelligence",
    "AI Engineering",
    "Terminal Workflow",
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
        alt: `${site.name} Open Graph Image`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@paszed_",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  category: "technology",

  // Uncomment after verifying your site with Google Search Console.
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION",
  // },
};
