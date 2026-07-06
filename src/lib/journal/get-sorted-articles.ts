import type { JournalEntry } from "@/types/journal";

import { getAllArticles } from "./get-all-articles";

export function getSortedArticles(): JournalEntry[] {
  return getAllArticles().sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}
