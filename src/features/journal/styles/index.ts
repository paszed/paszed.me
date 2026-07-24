/**
 * Shared layout styles for journal content.
 *
 * Journal pages deliberately use narrower measures than general
 * application pages to preserve comfortable long-form reading.
 */
export const journalStyles = {
  article: "mx-auto w-full max-w-3xl",
  prose: "mx-auto w-full max-w-2xl",
} as const;

export type JournalStyle = keyof typeof journalStyles;

