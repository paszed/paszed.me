import type { Project } from "@/types/project";

export const designSystem: Project = {
  slug: "design-system",

  title: "Design System",

  tagline:
    "A composable frontend platform for building consistent, accessible user interfaces.",

  summary:
    "A reusable design system that provides the foundations for building modern web applications.",

  featured: true,

  status: "building",

  started: 2026,

  overview: [
    "The Design System is a reusable frontend platform that standardizes the way interfaces are designed and implemented across projects. Rather than creating isolated components for individual applications, it provides a shared foundation of tokens, primitives, layouts and composable patterns.",

    "The project began after repeatedly solving the same interface problems across multiple repositories. Every application required typography, layout primitives, forms, navigation, feedback components and accessibility improvements. Consolidating these patterns into a shared platform reduced duplication while improving consistency.",

    "Today the Design System continues to evolve alongside my applications, serving as the interface foundation for larger platforms while remaining independent of any single product.",
  ],

  problem: [
    "User interfaces became inconsistent across projects.",
    "Common components were repeatedly reimplemented.",
    "Accessibility varied between applications.",
    "Visual changes required updates in multiple repositories.",
    "Developers spent time rebuilding infrastructure instead of product functionality.",
  ],

  principles: [
    "Composition over inheritance.",
    "Accessibility by default.",
    "Design tokens as the single source of truth.",
    "Small primitives compose into larger patterns.",
    "Consistency before customization.",
    "Stable APIs with predictable behavior.",
    "Testing is part of every reusable component.",
  ],

  architecture: {
    description: [
      "Design tokens define the visual language of the system.",
      "Primitive components provide reusable building blocks.",
      "Layout and typography establish consistent structure.",
      "Patterns compose primitives into reusable application features.",
      "Applications consume the platform without duplicating interface logic.",
    ],
    diagram: `
Applications
        │
        ▼
Patterns
        │
        ▼
Layout & Typography
        │
        ▼
Primitives
        │
        ▼
Design Tokens
`,
  },

  capabilities: [
    "Design tokens for colors, spacing, typography and motion.",
    "Reusable primitive components.",
    "Responsive layout primitives.",
    "Typography system.",
    "Accessible navigation patterns.",
    "Form building blocks.",
    "Feedback and status components.",
    "Motion utilities.",
    "Composable application patterns.",
    "Comprehensive unit testing for shared components.",
  ],

  engineering: [
    "The platform favors composition instead of large opinionated components.",
    "Visual consistency is maintained through shared design tokens rather than duplicated styles.",
    "Reusable primitives remain intentionally small to maximize flexibility.",
    "Shared abstractions are introduced only after repeated use across projects.",
    "Testing focuses on the foundation to reduce regressions throughout consuming applications.",
  ],

  challenges: [
    "Balancing flexibility with consistency.",
    "Avoiding unnecessary abstractions.",
    "Determining which components belong in the shared platform versus individual applications.",
    "Maintaining backwards compatibility while evolving APIs.",
  ],

  lessons: [
    "A design system is primarily an architectural exercise rather than a visual one.",
    "Simple, composable primitives scale better than complex all-in-one components.",
    "Developer experience is just as important as user experience.",
    "Well-designed APIs reduce cognitive overhead across an entire codebase.",
  ],

  roadmap: [
    "Interactive documentation website.",
    "Visual regression testing.",
    "Theme customization.",
    "Expanded pattern library.",
    "Package distribution.",
    "Accessibility auditing within CI.",
    "Automatic design token generation.",
  ],

  technologies: [
    {
      name: "React",
      purpose: "Composable component architecture.",
    },
    {
      name: "TypeScript",
      purpose: "Type-safe component APIs.",
    },
    {
      name: "Tailwind CSS",
      purpose: "Implementation of the design language.",
    },
    {
      name: "Vitest",
      purpose: "Component unit testing.",
    },
    {
      name: "Playwright",
      purpose: "Accessibility and integration testing.",
    },
  ],

  gallery: [],

  links: [],
};
