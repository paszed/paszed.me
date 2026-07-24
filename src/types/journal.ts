import type { ArticleSection } from "./article";

export type JournalCategory =
  | "AI"
  | "Architecture"
  | "Career"
  | "Design"
  | "Development"
  | "Distributed Systems"
  | "Engineering"
  | "Engineering Leadership"
  | "Infrastructure"
  | "Philosophy"
  | "Platform Engineering"
  | "Product Engineering"
  | "Systems";

export interface JournalEntry {
  slug: string;
  title: string;
  description: string;
  category: JournalCategory;
  series?: string;
  published: boolean;
  publishedAt: Date | null;
  updatedAt?: Date | null;
  author: string;
  readingTimeMinutes: number;
  tags: string[];
  sections: ArticleSection[];
  related?: string[];
}
