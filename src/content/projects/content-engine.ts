import type { Project } from "@/types/project";

export const contentEngine: Project = {
  slug: "content-engine",

  title: "Content Engine",

  tagline:
    "A structured content platform for managing articles, documentation and reusable knowledge.",

  summary:
    "A reusable content infrastructure that transforms structured data into websites, documentation and searchable knowledge while remaining framework-agnostic and type-safe.",

  featured: false,

  status: "building",

  started: 2026,

  category: "reusable-capabilities",

  overview: [
    "Content Engine treats content as structured data rather than static pages.",

    "Instead of scattering text across components and templates, it provides a consistent foundation for creating, organizing and publishing articles, documentation, project pages and other content types.",

    "The goal is to make publishing predictable, reusable and scalable.",
  ],

  problem: [
    "As websites grow, content often becomes tightly coupled to the user interface.",
    "Updating information requires editing components.",
    "Metadata becomes inconsistent.",
    "Search becomes unreliable.",
    "Content becomes difficult to reuse across websites, feeds, search indexes and future platforms.",
  ],

  principles: [
    "Separate content from presentation.",
    "Provide reusable content models.",
    "Treat metadata as a first-class concern.",
    "Keep content framework-agnostic.",
    "Prefer structured data over duplicated pages.",
    "Make publishing workflows predictable.",
  ],

  architecture: {
    description: [
      "The Content Engine separates authoring, organization and presentation into distinct layers.",
      "Content exists independently from the interface.",
      "Multiple consumers—including websites, search engines, feeds and future applications—can use the same source of truth without duplication.",
    ],
  },

  capabilities: [
    "Structured content models.",
    "Typed metadata.",
    "Article collections.",
    "Project collections.",
    "Documentation support.",
    "Search-ready content.",
    "RSS generation.",
    "SEO metadata.",
    "Open Graph support.",
    "Content validation.",
    "Framework-agnostic architecture.",
  ],

  engineering: [
    "Type-safe content.",
    "Schema validation.",
    "Separation of concerns.",
    "Reusable architecture.",
    "Search-first design.",
    "SEO-friendly metadata.",
    "Automation-ready workflows.",
  ],

  challenges: [
    "Designing schemas that remain useful as content types evolve.",
    "Keeping content portable across different presentation layers.",
    "Balancing strict validation with flexible authoring.",
    "Maintaining consistent metadata across large content collections.",
  ],

  lessons: [
    "Content should outlive the technology that renders it.",
    "Structured data is easier to evolve than free-form content.",
    "Metadata deserves first-class treatment.",
    "Reusable content scales better than duplicated pages.",
    "Publishing pipelines should be predictable.",
  ],

  roadmap: [
    "Add additional content types.",
    "Improve schema validation.",
    "Introduce media management.",
    "Add content transformations.",
    "Support multi-platform publishing.",
    "Introduce versioned content.",
    "Add localization support.",
    "Develop headless delivery APIs.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Type-safe content models and infrastructure.",
    },
    {
      name: "Markdown",
      purpose: "Portable long-form content authoring.",
    },
    {
      name: "Node.js",
      purpose: "Content processing and tooling.",
    },
    {
      name: "JSON",
      purpose: "Structured content representation and interchange.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/content-engine",
      primary: true,
    },
  ],
};
