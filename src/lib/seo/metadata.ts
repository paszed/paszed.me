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

  const imageUrl = image.startsWith("http")
    ? image
    : `${site.url}${image}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type,
      url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
      creator: site.social.x,
    },
  };
}
