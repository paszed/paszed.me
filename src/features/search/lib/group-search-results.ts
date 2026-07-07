import type {
  SearchCategory,
  SearchItem,
} from "../types/search";

export interface SearchGroup {
  category: SearchCategory;
  items: SearchItem[];
}

const CATEGORY_ORDER: readonly SearchCategory[] = [
  "Project",
  "Article",
  "Page",
];

export function groupSearchResults(
  results: readonly SearchItem[],
): SearchGroup[] {
  const groups = new Map<
    SearchCategory,
    SearchItem[]
  >();

  for (const result of results) {
    const items =
      groups.get(result.category) ?? [];

    items.push(result);

    groups.set(result.category, items);
  }

  return CATEGORY_ORDER.flatMap((category) => {
    const items = groups.get(category);

    if (!items || items.length === 0) {
      return [];
    }

    return [
      {
        category,
        items,
      },
    ];
  });
}
