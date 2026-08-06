import type { JournalEntry } from "@/types/journal";

const article: JournalEntry = {
  slug: "engineering-over-fashion",

  title: "Engineering Over Fashion",

  description:
    "Software systems should be designed around lasting principles rather than temporary trends. Good engineering prioritizes durability, understanding, and long-term usefulness over novelty.",

  category: "Architecture",

  published: false,

  publishedAt: null,

  author: "Edvard Pasz",

  readingTimeMinutes: 7,

  tags: [
    "Architecture",
    "Engineering",
    "Software",
    "Maintainability",
  ],

  sections: [
    {
      title: "Software Outlives Trends",
      content: `
Software engineering constantly produces new ideas, tools, frameworks, and approaches.

Some are genuinely useful. Others are temporary reactions to the problems of the moment.

The difficulty is not discovering new technology.

The difficulty is knowing which ideas will still matter years later.

Software is expensive to replace. Decisions made during development often become constraints that shape everything built afterward.

Good engineering therefore begins with a different question:

Will this decision still make sense when the current excitement disappears?
`,
    },
    {
      title: "The Problem With Fashion",
      content: `
Technology moves quickly, and engineering culture often rewards novelty.

A new framework appears. A new architecture style becomes popular. A new tool promises dramatic improvements.

Sometimes these changes are valuable.

But adopting something because it is popular is not the same as adopting it because it solves a real problem.

Fashion optimizes for attention.

Engineering optimizes for outcomes.

The difference is that fashionable decisions are often evaluated by how modern they appear, while engineering decisions should be evaluated by how well they serve the system and the people maintaining it.
`,
    },
    {
      title: "Principles Before Tools",
      content: `
Tools change constantly.

Principles change much more slowly.

Clear boundaries, simple abstractions, good naming, reliable systems, and understandable code remain valuable regardless of which technologies are currently popular.

Strong engineers do not reject new ideas.

They understand the problem first, then choose the tool that best fits the situation.

Technology should serve engineering decisions, not replace them.
`,
    },
    {
      title: "Building For The Long Term",
      content: `
The best systems are not necessarily the ones built with the newest technology.

They are the ones that remain understandable, adaptable, and useful after years of change.

Engineering is not about avoiding change.

It is about creating systems that can survive it.

Durable software comes from careful decisions, not fashionable ones.
`,
    },
  ],
};

export default article;
