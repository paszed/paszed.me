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

  publishedAt: Date | null;
  updatedAt?: string;

  author: string;

  readingTimeMinutes: number;

  tags: string[];

  sections: ArticleSection[];
}
