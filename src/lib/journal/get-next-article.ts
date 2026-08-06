import type { JournalEntry } from "@/types/journal";

import { getPublishedArticles } from "./get-published-articles";

export function getNextArticle(
  slug: string,
): JournalEntry | undefined {
  const articles = getPublishedArticles();

  const index = articles.findIndex(
    (article) => article.slug === slug,
  );

  if (index === -1 || index === articles.length - 1) {
    return undefined;
  }

  return articles[index + 1];
}
