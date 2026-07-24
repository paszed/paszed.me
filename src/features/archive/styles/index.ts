/**
 * Shared layout styles for the archive feature.
 */
export const archiveStyles = {
  list: "grid gap-8",
  emptyState: "mx-auto max-w-2xl text-center",
} as const;

export type ArchiveStyle = keyof typeof archiveStyles;
