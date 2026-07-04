import type { Project } from "@/types/project";

export const paszedMe: Project = {
  slug: "paszed-me",

  title: "paszed.me",

  summary:
    "My personal website, engineering journal, and long-term home for documenting projects, ideas, and lessons learned.",

  description:
    "Rather than treating a portfolio as a static resume, I wanted a place that grows alongside my engineering journey. paszed.me is where I document projects, share what I'm learning, and continuously refine both my workflow and the software behind the site.",

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
    "This website is designed to be more than a portfolio. It serves as my engineering journal, project showcase, and experimentation platform. Every new project, article, and improvement becomes part of a long-term record of how I think, build, and learn.",

  architecture: [
    "Next.js App Router",
    "Feature-first architecture",
    "Reusable UI components",
    "Centralized content layer",
    "Typed project system",
    "Dynamic project routing",
    "SEO-first metadata",
  ],

  challenges: [
    "Designing an architecture that remains easy to evolve without becoming overly abstract.",
    "Separating content from presentation so writing and development can evolve independently.",
    "Creating reusable UI components before introducing page-specific solutions.",
    "Building a project system that can grow from simple showcases into detailed engineering case studies.",
  ],

  lessons: [
    "Architecture should make future development easier rather than more clever.",
    "Good developer experience starts with simple foundations.",
    "Shipping regularly teaches more than endlessly redesigning.",
    "Personal websites become more valuable when they reflect ongoing work instead of acting as static portfolios.",
  ],

  roadmap: [
    "Replace placeholder content with original writing.",
    "Launch an MDX-powered engineering blog.",
    "Publish detailed project case studies.",
    "Improve accessibility and performance.",
    "Generate dynamic Open Graph images.",
    "Continue evolving the site alongside future projects.",
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
