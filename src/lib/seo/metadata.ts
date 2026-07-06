import type { Metadata } from "next";

import { site } from "@/config/site";

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

export function createMetadata({
  title,
  description,
  path = "",
  image = site.ogImage,
  type = "website",
}: MetadataOptions): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: path || "/",
    },

    openGraph: {
      type,
      url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@paszed_",
    },
  };
}
