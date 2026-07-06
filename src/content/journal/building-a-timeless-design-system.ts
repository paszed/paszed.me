import type { JournalEntry } from "@/types/journal";

const article: JournalEntry = {
  slug: "building-a-timeless-design-system",

  title: "Building a Timeless Design System",

  description:
    "Why design systems should be built from enduring principles instead of visual trends.",

  category: "Engineering",

  published: true,

  publishedAt: new Date("2026-07-06"),

  author: "Edvard Pasz",

  readingTime: "8 min read",

  tags: [
    "Design System",
    "Architecture",
    "Typography",
    "UI",
  ],

  sections: [
    {
      heading: "Why another design system?",
      paragraphs: [
        "Software changes rapidly, but principles tend to outlive frameworks.",
        "A design system should capture enduring decisions rather than visual trends.",
      ],
    },
    {
      heading: "Timelessness",
      paragraphs: [
        "The goal is not to imitate the past.",
        "The goal is to build interfaces that continue to feel intentional years from now.",
      ],
    },
  ],
};

export default article;
