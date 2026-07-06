export interface JournalEntry {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category:
    | "Engineering"
    | "Architecture"
    | "Developer Tools"
    | "Artificial Intelligence"
    | "Notes";
  published: boolean;
}
