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

  authors: [
    {
      name: site.owner,
      url: site.url,
    },
  ],

  creator: site.owner,

  publisher: site.owner,

  keywords: [
    "Edvard Pasz",
    "Paszed",
    "Developer Tools",
    "Software Engineering",
    "Software Architecture",
    "Developer Experience",
    "Terminal Workflow",
    "TypeScript",
    "Go",
    "Next.js",
    "React",
    "AI Workflows",
    "Engineering Blog",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/og.png",
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
    images: ["/og.png"],
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

  category: "technology",

  // Uncomment after verifying your site with Google Search Console.
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION",
  // },
};
