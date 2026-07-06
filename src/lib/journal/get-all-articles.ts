import { journal } from "@/content";
import type { JournalEntry } from "@/types/journal";

export function getAllArticles(): JournalEntry[] {
  return [...journal];
}
