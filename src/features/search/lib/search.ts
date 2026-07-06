import type { SearchItem } from "../types/search";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function score(item: SearchItem, query: string): number {
  const q = normalize(query);

  let score = 0;

  const title = normalize(item.title);
  const description = normalize(item.description);
  const category = normalize(item.category);

  if (title === q) {
    score += 100;
  } else if (title.startsWith(q)) {
    score += 75;
  } else if (title.includes(q)) {
    score += 50;
  }

  if (
    item.keywords.some((keyword) =>
      normalize(keyword).includes(q),
    )
  ) {
    score += 35;
  }

  if (description.includes(q)) {
    score += 20;
  }

  if (category.includes(q)) {
    score += 10;
  }

  return score;
}

export function search(
  items: readonly SearchItem[],
  query: string,
): SearchItem[] {
  const q = normalize(query);

  if (!q) {
    return [...items];
  }

  return items
    .map((item) => ({
      item,
      score: score(item, q),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.item);
}
