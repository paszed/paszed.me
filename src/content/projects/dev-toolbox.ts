import type { Project } from "@/types/project";

export const devToolbox: Project = {
  slug: "dev-toolbox",

  title: "Dev Toolbox",

  summary:
    "A browser extension that brings everyday developer utilities directly into the browser.",

  description:
    "Dev Toolbox is a Chrome extension designed to eliminate context switching by providing common developer tools without leaving the current webpage.",

  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Chrome Extension API",
  ],

  github: "https://github.com/paszed/dev-toolbox",

  featured: true,

  status: "building",

  year: 2026,

  overview:
    "The goal of Dev Toolbox is to provide a collection of developer utilities inside a browser extension. Instead of opening separate websites for encoding, decoding, formatting, or generating data, developers can access everything from one lightweight popup.",

  architecture: [
    "Chrome Extension Manifest V3",
    "React popup application",
    "Reusable utility modules",
    "Feature-based architecture",
    "Shared UI component library",
  ],

  challenges: [
    "Designing a compact interface that remains easy to navigate.",
    "Keeping the extension fast while adding many utilities.",
    "Creating reusable conversion modules.",
  ],

  lessons: [
    "Small tools can have a large productivity impact.",
    "A consistent UI is more valuable than adding dozens of features.",
    "Shipping early provides better feedback than over-planning.",
  ],

  roadmap: [
    "JSON formatter",
    "JWT decoder",
    "UUID generator",
    "Base64 encoder and decoder",
    "Timestamp converter",
    "Regex tester",
    "Color converter",
    "Markdown preview",
  ],

  gallery: [
    {
      src: "/images/projects/dev-toolbox/hero.png",
      alt: "Dev Toolbox preview",
    },
  ],
};
