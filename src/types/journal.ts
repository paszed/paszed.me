import type { ArticleSection } from "./article";

export interface JournalEntry {
  slug: string;

  title: string;
  description: string;

  category:
    | "Engineering"
    | "Architecture"
    | "Developer Tools"
    | "Artificial Intelligence"
    | "Notes";

  published: boolean;

  publishedAt: string;
  updatedAt?: string;

  author: string;

  readingTime: string;

  tags: string[];

  sections: ArticleSection[];
}
