import type { Project } from "@/types/project";

export const bootstrapper: Project = {
  slug: "bootstrapper",

  title: "Bootstrapper",

  tagline: "Opinionated foundation for modern TypeScript monorepos.",

  description:
    "Bootstrapper is the foundation of my development ecosystem. It provides a production-ready monorepo with shared tooling, reusable configurations, templates, generators, and engineering standards that accelerate new projects while keeping every repository consistent.",

  overview: [
    "Bootstrapper was created after repeatedly rebuilding the same development environment for every new project. Repository setup, tooling, documentation, testing, CI/CD, and configuration consumed valuable time before solving any real business problem.",
    "Instead of recreating that foundation over and over, I began extracting the common patterns into a reusable bootstrap project. Today it serves as the starting point for nearly every application I build.",
  ],

  problem: [
    "Every new repository started with the same repetitive work.",
    "Tooling drift caused projects to slowly become inconsistent.",
    "Engineering standards had to be maintained independently across repositories.",
    "Developer onboarding required understanding a different structure every time.",
  ],

  goals: [
    "Start new projects in minutes instead of hours.",
    "Maintain one consistent developer experience.",
    "Centralize tooling and shared configuration.",
    "Automate repetitive engineering tasks.",
    "Create repositories that are understandable by both developers and AI assistants.",
  ],

  architecture: [
    "TypeScript-first monorepo architecture.",
    "Shared packages for reusable tooling and configuration.",
    "Separation between applications, tooling, generators and templates.",
    "Convention-driven project structure with minimal configuration.",
  ],

  technologies: [
    "TypeScript",
    "pnpm Workspaces",
    "Turborepo",
    "Biome",
    "ESLint",
    "Vitest",
    "Changesets",
    "GitHub Actions",
  ],

  features: [
    "Reusable project templates",
    "Shared TypeScript configuration",
    "Shared linting configuration",
    "Project generators",
    "Development toolkit",
    "Consistent repository standards",
    "Automation-ready workflows",
  ],

  engineering: [
    "Convention over configuration.",
    "Automation before manual processes.",
    "Documentation treated as infrastructure.",
    "Composable packages rather than a monolithic template.",
    "Consistency across every repository.",
  ],

  lessons: [
    "Good tooling should disappear into the background.",
    "A small investment in engineering infrastructure compounds across every future project.",
    "Consistency reduces cognitive overhead far more than endless customization.",
    "Real-world projects should shape the tooling instead of designing abstractions prematurely.",
  ],

  roadmap: [
    "CLI for project generation.",
    "Additional reusable templates.",
    "Shared internal packages.",
    "Improved automation.",
    "Expanded documentation.",
  ],

  links: {
    github: "https://github.com/paszed/bootstrapper",
  },
};
