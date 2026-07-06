export type SearchCategory =
  | "Page"
  | "Project"
  | "Article";

export interface SearchItem {
  id: string;

  title: string;

  description: string;

  href: string;

  category: SearchCategory;

  keywords: readonly string[];
}
