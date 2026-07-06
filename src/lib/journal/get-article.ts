import { journal } from "@/content";
import type { JournalEntry } from "@/types/journal";

export function getArticle(
  slug: string,
): JournalEntry | undefined {
  return journal.find((article) => article.slug === slug);
}
