import type { Project } from "@/types/project";

export const paszedMe: Project = {
  slug: "paszed-me",

  title: "paszed.me",

  summary: "My personal website and engineering journal.",

  description:
    "A modern personal website built with Next.js, TypeScript, Tailwind CSS, and a feature-first architecture.",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],

  github: "https://github.com/paszed/paszed.me",

  website: "https://paszed.me",

  featured: true,

  status: "building",

  year: 2026,

  overview:
    "This website serves as my digital home. It documents my projects, engineering decisions, and ongoing work while acting as a place to experiment with modern web technologies.",

  architecture: [
    "Next.js App Router",
    "Feature-first architecture",
    "Typed content layer",
    "Reusable design system",
  ],

  challenges: [
    "Designing a scalable project architecture.",
    "Creating a consistent brand identity.",
    "Keeping content separated from presentation.",
  ],

  lessons: [
    "Build reusable primitives before adding features.",
    "Keep content independent from UI.",
    "Ship small improvements continuously.",
  ],


  gallery: [
  {
    src: "/images/projects/paszed-me/homepage.png",
    alt: "Homepage",
  },
],

};
