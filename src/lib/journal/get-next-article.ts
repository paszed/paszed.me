import type { JournalEntry } from "@/types/journal";

import { getSortedArticles } from "./get-sorted-articles";

export function getNextArticle(
  slug: string,
): JournalEntry | undefined {
  const articles = getSortedArticles();

  const index = articles.findIndex(
    (article) => article.slug === slug,
  );

  if (index === -1 || index === articles.length - 1) {
    return undefined;
  }

  return articles[index + 1];
}
