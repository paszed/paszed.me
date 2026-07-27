export interface HighlightPart {
  text: string;
  highlighted: boolean;
}

function escapeRegExp(value: string): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
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
    `(${escapeRegExp(normalizedQuery)})`,
    "gi",
  );

  return text
    .split(regex)
    .filter(Boolean)
    .map((part) => ({
      text: part,
      highlighted:
        part.localeCompare(
          normalizedQuery,
          undefined,
          {
            sensitivity: "accent",
          },
        ) === 0,
    }));
}
