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

  keywords: [
    "Edvard Paz",
    "Paszed",
    "Software Engineer",
    "Developer",
    "TypeScript",
    "Go",
    "Python",
    "AI",
    "Developer Tools",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },

  twitter: {
    card: "summary_large_image",
    creator: "@paszed_",
    title: site.title,
    description: site.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};
