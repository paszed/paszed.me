import type { Project } from "@/types/project";

export const bootstrapper: Project = {
  slug: "bootstrapper",

  title: "Bootstrapper",

  summary:
    "Opinionated foundation for modern TypeScript monorepos.",

  description:
    "A reusable development foundation that standardizes tooling, project structure, automation, and engineering practices across repositories.",

  technologies: [
    "TypeScript",
    "pnpm",
    "Turborepo",
    "Biome",
    "ESLint",
    "Vitest",
    "Changesets",
    "GitHub Actions",
  ],

  github: "https://github.com/paszed/bootstrapper",

  featured: true,

  status: "building",

  year: 2026,

  overview:
    "Bootstrapper was created after repeatedly rebuilding the same development environment for every new project. Rather than configuring tooling, documentation, CI, and repository structure from scratch every time, I began extracting those patterns into a reusable foundation. Today it serves as the starting point for nearly every project I build.",

  problem: [
    "Every new repository required hours of repetitive setup.",
    "Tooling and project structures slowly diverged over time.",
    "Engineering standards had to be maintained independently across repositories.",
    "Developer onboarding was inconsistent between projects.",
  ],

  goals: [
    "Start projects in minutes instead of hours.",
    "Provide a consistent developer experience.",
    "Centralize engineering standards.",
    "Reduce repetitive setup work.",
    "Create repositories that are understandable by both developers and AI assistants.",
  ],

  architecture: [
    "TypeScript-first monorepo architecture.",
    "Reusable packages for tooling and shared configuration.",
    "Convention-driven project structure.",
    "Composable packages rather than a monolithic template.",
  ],

  features: [
    "Shared TypeScript configuration",
    "Shared ESLint configuration",
    "Shared Biome configuration",
    "Reusable project templates",
    "Project generators",
    "Development toolkit",
    "GitHub automation",
    "Documentation standards",
  ],

  engineering: [
    "Convention over configuration.",
    "Automation before repetition.",
    "Documentation treated as infrastructure.",
    "Consistency across repositories.",
    "Extract patterns only after they prove useful.",
  ],

  challenges: [
    "Finding the right balance between flexibility and opinionated defaults.",
    "Avoiding premature abstractions.",
    "Designing reusable tooling without creating unnecessary complexity.",
  ],

  lessons: [
    "Good tooling should disappear into the background.",
    "Small engineering investments compound over time.",
    "Consistency reduces cognitive overhead.",
    "Frameworks should emerge from experience rather than prediction.",
  ],

  roadmap: [
    "Interactive CLI.",
    "Additional project generators.",
    "More reusable internal packages.",
    "Expanded documentation.",
    "Improved automation.",
  ],

  gallery: [],
};
