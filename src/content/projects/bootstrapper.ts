import type { Project } from "@/types/project";

export const bootstrapper: Project = {
  slug: "bootstrapper",

  title: "Bootstrapper",

  summary:
    "A reusable development platform for bootstrapping modern TypeScript projects.",

  description:
    "A reusable development platform that standardizes tooling, project structure, automation, and engineering practices to create consistent, maintainable software.",

  featured: true,

  status: "building",

  started: 2026,

  overview: [
    "Bootstrapper began as a response to a recurring problem: every new project started with the same hours of configuring tooling, establishing repository structure, writing documentation, and creating development workflows. While each repository solved a different problem, the engineering foundation was almost always identical.",

    "Instead of repeating that work, I started extracting proven patterns into reusable packages and conventions. Over time, Bootstrapper evolved from a collection of configuration files into a reusable development platform that captures engineering practices rather than simply generating projects.",

    "Today it serves as the engineering foundation for nearly every project I build, allowing me to focus on solving domain problems instead of rebuilding infrastructure.",
  ],

  problem: [
    "Every new repository required repetitive setup before meaningful development could begin.",
    "Tooling and project structures gradually diverged across projects.",
    "Engineering standards had to be maintained independently in every repository.",
    "Developer onboarding lacked consistency between projects.",
  ],

  goals: [
    "Provide a consistent developer experience across repositories.",
    "Create repositories that are easy for both developers and AI assistants to understand and navigate.",
    "Centralize engineering standards and tooling.",
    "Automate repetitive development tasks.",
    "Reduce project setup from hours to minutes.",
  ],

  features: [
    "Shared TypeScript configuration.",
    "Shared Biome and ESLint configuration.",
    "Shared architectural conventions.",
    "Reusable project templates.",
    "Project generators.",
    "Development tooling and scripts.",
    "GitHub Actions automation.",
    "Documentation standards.",
    "Monorepo-friendly architecture.",
  ],

  architecture: [
    "TypeScript-first monorepo architecture built with Turborepo.",
    "Composable packages encapsulate shared tooling, configuration, and development workflows.",
    "Convention-driven project structures reduce cognitive overhead and improve consistency.",
    "Projects consume shared capabilities instead of duplicating configuration.",
    "Each repository remains independent while benefiting from a common engineering foundation.",
  ],

  engineering: [
    "Convention over configuration.",
    "Automate repetitive work before documenting it.",
    "Treat documentation as part of the engineering system.",
    "Extract abstractions only after they have proven useful.",
    "Optimize the platform before optimizing individual projects.",
    "Optimize for long-term maintainability rather than short-term convenience.",
  ],

  challenges: [
    "Balancing opinionated defaults with enough flexibility for different projects.",
    "Avoiding premature abstractions while still promoting reuse.",
    "Designing tooling that remains simple despite supporting multiple repository types.",
  ],

  results: [
    "Provides a consistent engineering foundation across personal projects.",
    "Eliminates repetitive repository setup for new work.",
    "Encourages shared engineering practices and documentation standards.",
    "Acts as the engineering foundation for the broader platform ecosystem.",
  ],

  lessons: [
    "The best tooling fades into the background and lets developers focus on solving problems.",
    "Small investments in engineering infrastructure compound over time.",
    "Consistency reduces cognitive overhead more than additional features increase productivity.",
    "Strong abstractions emerge from repeated experience, not speculation.",
  ],

  roadmap: [
    "Develop an interactive CLI for project creation.",
    "Expand the library of project generators.",
    "Extract additional reusable packages.",
    "Support additional project archetypes and platform templates.",
    "Improve automation throughout the development lifecycle.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Primary language for applications and shared packages.",
    },
    {
      name: "pnpm",
      purpose: "Workspace and dependency management.",
    },
    {
      name: "Turborepo",
      purpose: "Task orchestration and monorepo builds.",
    },
    {
      name: "Biome",
      purpose: "Code formatting and linting.",
    },
    {
      name: "ESLint",
      purpose: "Static analysis and code quality.",
    },
    {
      name: "Vitest",
      purpose: "Unit testing.",
    },
    {
      name: "Changesets",
      purpose: "Versioning and release management.",
    },
    {
      name: "GitHub Actions",
      purpose: "Continuous integration and automation.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/bootstrapper",
      primary: true,
    },
  ],
};
