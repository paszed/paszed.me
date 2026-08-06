import type { JournalEntry } from "@/types/journal";

import { getPublishedArticles } from "./get-published-articles";

export function getPreviousArticle(
  slug: string,
): JournalEntry | undefined {
  const articles = getPublishedArticles();

  const index = articles.findIndex(
    (article) => article.slug === slug,
  );

  if (index <= 0) {
    return undefined;
  }

  return articles[index - 1];
}
