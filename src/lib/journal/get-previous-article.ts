import type { JournalEntry } from "@/types/journal";

import { getSortedArticles } from "./get-sorted-articles";

export function getPreviousArticle(
  slug: string,
): JournalEntry | undefined {
  const articles = getSortedArticles();

  const index = articles.findIndex(
    (article) => article.slug === slug,
  );

  if (index <= 0) {
    return undefined;
  }

  return articles[index - 1];
}
