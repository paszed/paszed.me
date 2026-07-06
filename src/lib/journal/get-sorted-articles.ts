import type { JournalEntry } from "@/types/journal";

import { getAllArticles } from "./get-all-articles";

export function getSortedArticles(): JournalEntry[] {
  return getAllArticles().sort((a, b) => {
    if (!a.publishedAt && !b.publishedAt) {
      return a.title.localeCompare(b.title);
    }

    if (!a.publishedAt) {
      return 1;
    }

    if (!b.publishedAt) {
      return -1;
    }

    return (
      b.publishedAt.getTime() -
      a.publishedAt.getTime()
    );
  });
}
