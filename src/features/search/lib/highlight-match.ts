export interface HighlightPart {
  text: string;
  highlighted: boolean;
}

export function highlightMatch(
  text: string,
  query: string,
): HighlightPart[] {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return [
      {
        text,
        highlighted: false,
      },
    ];
  }

  const regex = new RegExp(
    `(${normalizedQuery})`,
    "gi",
  );

  return text
    .split(regex)
    .filter(Boolean)
    .map((part) => ({
      text: part,
      highlighted:
        part.toLowerCase() ===
        normalizedQuery.toLowerCase(),
    }));
}
