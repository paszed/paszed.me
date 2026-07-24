import type { Project } from "@/types/project";

export const designSystem: Project = {
  slug: "design-system",

  title: "Design System",

  tagline:
    "A reusable component library and design language for building consistent, accessible user interfaces.",

  summary:
    "A production-focused design system containing reusable UI primitives, patterns, layouts, accessibility utilities and design tokens used across multiple applications.",

  featured: false,

  status: "building",

  started: 2026,

  overview: [
    "The Design System provides a shared visual language for every application in the ecosystem.",

    "Instead of rebuilding interface components for each project, it centralizes reusable primitives, patterns and layout components into a single library that prioritizes consistency, accessibility and long-term maintainability.",
  ],

  problem: [
    "Every application eventually develops the same buttons, cards, dialogs and navigation components.",
    "Duplicating interface components across projects creates inconsistent experiences.",
    "Repeated implementations increase maintenance costs and make improvements harder to propagate.",
    "Without shared foundations, accessibility and interaction patterns can drift between applications.",
  ],

  principles: [
    "Maintain visual consistency.",
    "Encourage component reuse.",
    "Build accessibility into every component.",
    "Reduce duplicated UI code.",
    "Prefer composition over specialization.",
    "Use semantic HTML.",
    "Create a scalable design language.",
  ],

  architecture: {
    description: [
      "Components are organized by capability rather than visual appearance.",
      "Primitives form the foundation of the system.",
      "Patterns combine primitives into reusable building blocks.",
      "Application-specific interfaces compose those patterns into complete user experiences.",
      "This layered architecture keeps responsibilities clearly separated while maximizing reuse.",
    ],
  },

  capabilities: [
    "Reusable UI primitives.",
    "Layout components.",
    "Design tokens.",
    "Motion components.",
    "Accessibility utilities.",
    "Navigation patterns.",
    "Form components.",
    "Charts.",
    "Data display.",
    "Media components.",
    "Testing utilities.",
    "Dark mode support.",
  ],

  engineering: [
    "Strict TypeScript.",
    "Component testing.",
    "Accessibility-first development.",
    "Reusable component architecture.",
    "Consistent design tokens.",
    "Composition over inheritance.",
    "Semantic HTML.",
    "Responsive design.",
  ],

  challenges: [
    "Keeping component APIs flexible without making them unnecessarily complex.",
    "Maintaining visual consistency as the component library expands.",
    "Providing reusable abstractions without coupling components to individual applications.",
    "Preserving accessibility across increasingly complex interaction patterns.",
  ],

  lessons: [
    "Good design systems reduce decision fatigue.",
    "Accessibility should be built into every component.",
    "Composition scales better than specialization.",
    "Consistency is more valuable than novelty.",
    "Reusable foundations accelerate development.",
  ],

  roadmap: [
    "Expand chart components.",
    "Improve documentation.",
    "Increase component coverage.",
    "Add additional reusable patterns.",
    "Introduce visual regression testing.",
    "Develop framework adapters.",
    "Expand theming capabilities.",
    "Investigate cross-platform support.",
  ],

  technologies: [
    {
      name: "React",
      purpose: "Component architecture and interface composition.",
    },
    {
      name: "TypeScript",
      purpose: "Type-safe component APIs and implementation.",
    },
    {
      name: "Tailwind CSS",
      purpose: "Utility-driven styling and design token integration.",
    },
    {
      name: "Radix UI",
      purpose: "Accessible interaction primitives.",
    },
    {
      name: "Vitest",
      purpose: "Component and utility testing.",
    },
    {
      name: "Storybook",
      purpose: "Component development and documentation.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/design-system",
      primary: true,
    },
  ],
};

