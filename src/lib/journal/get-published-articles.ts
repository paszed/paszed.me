import type { JournalEntry } from "@/types/journal";

import { getSortedArticles } from "./get-sorted-articles";

export function getPublishedArticles(): JournalEntry[] {
  return getSortedArticles().filter(
    (article) => article.published,
  );
}
