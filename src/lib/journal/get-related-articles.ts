import type { JournalEntry } from "@/types/journal";

import { getPublishedArticles } from "./get-published-articles";

export function getRelatedArticles(
  slug: string,
  limit = 3,
): JournalEntry[] {
  const articles = getPublishedArticles();

  const current = articles.find(
    (article) => article.slug === slug,
  );

  if (!current) {
    return [];
  }

  return articles
    .filter(
      (article) =>
        article.slug !== slug &&
        article.category === current.category,
    )
    .slice(0, limit);
}
