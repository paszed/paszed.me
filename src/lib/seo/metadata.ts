import type { Metadata } from "next";

import { site } from "@/config/site";
import {
  locales,
  type Locale,
} from "@/i18n/config";

interface MetadataOptions {
  title: string;
  description: string;
  locale: Locale;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

const openGraphLocales: Record<
  Locale,
  string
> = {
  en: "en_US",
  de: "de_DE",
  hu: "hu_HU",
};

export function createMetadata({
  title,
  description,
  locale,
  path = "",
  image = site.ogImage,
  type = "website",
}: MetadataOptions): Metadata {
  const localizedPath =
    `/${locale}${path}`;

  const url =
    `${site.url}${localizedPath}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${site.url}${image}`;

  const languages = Object.fromEntries(
    locales.map((supportedLocale) => [
      supportedLocale,
      `${site.url}/${supportedLocale}${path}`,
    ]),
  );

  return {
    title,
    description,

    alternates: {
      canonical: url,
      languages,
    },

    openGraph: {
      type,
      url,
      siteName: site.name,
      title,
      description,
      locale: openGraphLocales[locale],

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
    },
  };
}
