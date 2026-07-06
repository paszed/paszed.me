import type { SearchItem } from "../types/search";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function search(
  items: readonly SearchItem[],
  query: string,
): SearchItem[] {
  const q = normalize(query);

  if (!q) {
    return [...items];
  }

  return items.filter((item) => {
    return (
      normalize(item.title).includes(q) ||
      normalize(item.description).includes(q) ||
      normalize(item.category).includes(q) ||
      item.keywords.some((keyword) =>
        normalize(keyword).includes(q),
      )
    );
  });
}
