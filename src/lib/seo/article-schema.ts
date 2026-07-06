import type { JournalEntry } from "@/types/journal";
import type { Schema } from "./types";

import { site } from "@/config/site";

export function createArticleSchema(
  article: JournalEntry,
): Schema {

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: article.title,
    description: article.description,

    author: {
      "@type": "Person",
      name: article.author,
    },

    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },

    mainEntityOfPage: `${site.url}/journal/${article.slug}`,

    url: `${site.url}/journal/${article.slug}`,

    image: `${site.url}${site.ogImage}`,

    datePublished: article.publishedAt?.toISOString(),

    inLanguage: site.language,
  };
}
