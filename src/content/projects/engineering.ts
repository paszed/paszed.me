import type { Project } from "@/types/project";

export const engineering: Project = {
  slug: "engineering",

  title: "Engineering",

  tagline:
    "Standards, architecture and engineering practices for building maintainable software.",

  summary:
    "A living collection of engineering principles, architectural guidance and development standards that define how projects are designed, built and maintained across the ecosystem.",

  featured: false,

  status: "building",

  started: 2026,

  category: "engineering-environment",

  overview: [
    "Engineering is the foundation that connects every repository.",

    "Rather than focusing on implementation, it documents the principles, standards and architectural decisions that guide software development across the ecosystem.",

    "It serves as both a reference for current projects and a long-term knowledge base that evolves alongside them.",
  ],

  problem: [
    "As projects grow, consistency becomes increasingly difficult to maintain.",
    "Coding standards drift.",
    "Architectures diverge.",
    "Documentation becomes outdated.",
    "Without shared engineering standards, projects can evolve independently at the cost of consistency and quality.",
  ],

  principles: [
    "Documentation-first.",
    "Feature-first architecture.",
    "Strict typing.",
    "Automated testing.",
    "Continuous integration.",
    "Accessibility by default.",
    "Performance-conscious development.",
    "Long-term maintainability.",
  ],

  architecture: {
    description: [
      "Rather than prescribing rigid rules, the repository documents proven patterns that have emerged through building real software.",
      "Documentation is organized into focused topics covering architecture, development workflows, testing, deployment and design decisions.",
      "The structure is intended to remain easy to navigate while being flexible enough to evolve as engineering practices change.",
    ],
  },

  capabilities: [
    "Architecture documentation.",
    "Coding standards.",
    "Repository guidelines.",
    "Documentation conventions.",
    "Testing strategies.",
    "Accessibility standards.",
    "Performance guidelines.",
    "Deployment practices.",
    "Development workflows.",
    "Decision records.",
  ],

  engineering: [
    "Documentation-first practices.",
    "Feature-first architecture.",
    "Strict typing.",
    "Automated testing.",
    "Continuous integration.",
    "Accessibility by default.",
    "Performance-conscious development.",
    "Long-term maintainability.",
  ],

  challenges: [
    "Keeping standards useful without turning them into rigid rules.",
    "Maintaining documentation as projects and tooling evolve.",
    "Establishing consistency across repositories with different responsibilities.",
    "Capturing architectural decisions without creating unnecessary process overhead.",
  ],

  lessons: [
    "Standards reduce cognitive load.",
    "Documentation compounds in value over time.",
    "Consistency is easier to maintain than restore.",
    "Good architecture evolves through iteration.",
    "Engineering is a continuous process of refinement.",
  ],

  roadmap: [
    "Expand architecture guides.",
    "Document additional workflows.",
    "Improve decision records.",
    "Add practical examples.",
    "Develop a comprehensive engineering handbook.",
    "Create architecture playbooks.",
    "Develop operational runbooks.",
    "Publish reference implementations.",
  ],

  technologies: [
    {
      name: "Markdown",
      purpose: "Engineering documentation and long-form technical guidance.",
    },
    {
      name: "TypeScript",
      purpose: "Reference implementations and typed examples.",
    },
    {
      name: "GitHub",
      purpose: "Version control, collaboration and documentation management.",
    },
    {
      name: "CI/CD",
      purpose: "Automated validation and engineering workflows.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/engineering",
      primary: true,
    },
  ],
};

