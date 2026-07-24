import type { ChangelogEntry } from "../types";

/**
 * Returns changelog entries ordered from newest to oldest.
 */
export function sortChangelogEntries(
  entries: readonly ChangelogEntry[],
): ChangelogEntry[] {
  return [...entries].sort(
    (a, b) =>
      b.publishedAt.getTime() - a.publishedAt.getTime(),
  );
}

/**
 * Finds a changelog entry by its stable identifier.
 */
export function getChangelogEntry(
  entries: readonly ChangelogEntry[],
  id: string,
): ChangelogEntry | undefined {
  return entries.find((entry) => entry.id === id);
}
