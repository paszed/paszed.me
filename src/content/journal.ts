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

export const journal: JournalEntry[] = [
  {
    slug: "building-a-timeless-design-system",
    title: "Building a Timeless Design System",
    description:
      "Why design systems should be built from enduring principles instead of visual trends.",
    publishedAt: "Coming Soon",
    readingTime: "—",
    category: "Engineering",
    published: false,
  },
  {
    slug: "why-source-serif-4",
    title: "Why Source Serif 4",
    description:
      "Choosing typography that supports ideas instead of competing with them.",
    publishedAt: "Coming Soon",
    readingTime: "—",
    category: "Notes",
    published: false,
  },
  {
    slug: "engineering-over-fashion",
    title: "Engineering Over Fashion",
    description:
      "Thoughts on designing software intended to remain useful for years.",
    publishedAt: "Coming Soon",
    readingTime: "—",
    category: "Architecture",
    published: false,
  },
];
