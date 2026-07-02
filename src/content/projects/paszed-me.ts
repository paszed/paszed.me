import type { Project } from "@/types/project";

export const paszedMe: Project = {
  slug: "paszed-me",

  title: "paszed.me",

  summary:
    "My personal website, engineering journal, and digital home built with Next.js.",

  description:
    "A content-driven personal website built with Next.js, React, TypeScript, and Tailwind CSS. Designed around a scalable feature-first architecture with reusable UI components and a structured content layer.",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "pnpm",
    "ESLint",
  ],

  github: "https://github.com/paszed/paszed.me",

  website: "https://paszed.me",

  featured: true,

  status: "building",

  year: 2026,

  overview:
    "paszed.me is more than a portfolio. It serves as my engineering journal, project showcase, and long-term experimentation platform. Every major architectural decision is made with maintainability, performance, and scalability in mind.",

  architecture: [
    "Next.js App Router",
    "Feature-first architecture",
    "Reusable UI component library",
    "Centralized content layer",
    "Typed project engine",
    "Dynamic project routing",
    "SEO-first metadata configuration",
  ],

  challenges: [
    "Designing a feature-first architecture that remains simple as the project grows.",
    "Creating reusable UI primitives before building page-specific components.",
    "Separating content from presentation to make the site easy to maintain.",
    "Building a scalable project system that supports detailed engineering case studies.",
  ],

  lessons: [
    "Good architecture makes future development significantly easier.",
    "Reusable components reduce maintenance and improve consistency.",
    "Keeping content separate from UI enables faster iteration.",
    "Small, incremental improvements compound into a polished product.",
  ],

  roadmap: [
    "Replace placeholder content with real engineering articles.",
    "Launch an MDX-powered blog.",
    "Add RSS support.",
    "Generate dynamic Open Graph images.",
    "Improve accessibility and performance.",
    "Publish additional case studies and developer tools.",
  ],

  gallery: [
    {
      src: "/images/projects/paszed-me/homepage.png",
      alt: "Homepage",
    },
    {
      src: "/images/projects/paszed-me/projects.png",
      alt: "Projects page",
    },
    {
      src: "/images/projects/paszed-me/about.png",
      alt: "About page",
    },
  ],
};
