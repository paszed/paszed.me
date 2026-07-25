import type { Project } from "@/types/project";

export const paszedMe: Project = {
  slug: "paszed-me",

  title: "paszed.me",

  tagline:
    "An engineering platform documenting software architecture, AI and modern web development.",

  summary:
    "A personal website and long-term engineering project combining technical writing, software architecture, reusable systems and production-grade engineering practices into a single platform.",

  featured: true,

  status: "production",

  started: 2026,

  category: "applications",

  overview: [
    "paszed.me is my primary engineering platform.",

    "Rather than serving as a traditional portfolio, it documents the systems, architectural decisions and engineering practices behind the software I build.",

    "The platform combines project documentation, long-form writing, engineering case studies and reusable knowledge into a single place focused on building software that remains maintainable over time.",
  ],

  problem: [
    "Most personal websites eventually become static collections of biography, projects and contact information.",
    "Finished work alone does not capture the reasoning, architectural decisions and lessons behind the software.",
    "Engineering knowledge is easily lost when decisions and mistakes are not documented.",
    "A long-term engineering platform should evolve alongside the work rather than becoming a frozen portfolio.",
  ],

  principles: [
    "Document engineering decisions.",
    "Share lessons learned.",
    "Publish reusable knowledge.",
    "Show the process behind finished work.",
    "Experiment with modern web technologies.",
    "Continuously improve the platform over time.",
  ],

  architecture: {
    description: [
      "The project follows a feature-first architecture where routing, content, presentation, business logic and infrastructure remain clearly separated.",
      "The codebase is organized around capabilities instead of implementation details, making it easier to evolve as the platform grows.",
      "Supporting documentation lives alongside the project and captures architectural decisions, development workflows and engineering standards.",
    ],
  },

  capabilities: [
    "Engineering journal.",
    "Project documentation.",
    "Long-form technical writing.",
    "Feature-first architecture.",
    "Reusable design system.",
    "Typed content system.",
    "Full-text search.",
    "Dynamic Open Graph images.",
    "RSS feeds.",
    "Structured data.",
    "Accessibility-first development.",
    "Performance optimization.",
    "Comprehensive testing.",
    "Continuous integration.",
  ],

  engineering: [
    "Strict TypeScript.",
    "Feature-first architecture.",
    "Accessibility-first development.",
    "Automated testing.",
    "End-to-end testing.",
    "Continuous integration.",
    "Dependency analysis.",
    "Architecture validation.",
    "SEO-first development.",
    "Performance budgets.",
  ],

  challenges: [
    "Keeping the architecture coherent as the platform gains new capabilities.",
    "Balancing experimentation with long-term maintainability.",
    "Maintaining consistency across content, design and engineering systems.",
    "Ensuring documentation evolves alongside the implementation.",
    "Building reusable foundations without introducing unnecessary abstraction.",
  ],

  lessons: [
    "Architecture should emerge from real requirements.",
    "Documentation scales better than memory.",
    "Simple systems are easier to evolve.",
    "Testing enables confident refactoring.",
    "Consistency compounds over time.",
  ],

  roadmap: [
    "Expand project case studies.",
    "Publish additional engineering articles.",
    "Improve search.",
    "Add interactive technical diagrams.",
    "Introduce privacy-friendly analytics.",
    "Develop a comprehensive engineering knowledge base.",
    "Publish deeper AI engineering content.",
    "Release more reusable open-source projects.",
    "Expand interactive architecture documentation.",
    "Continue long-term refinement.",
  ],

  technologies: [
    {
      name: "Next.js",
      purpose: "Application framework and server-side architecture.",
    },
    {
      name: "React",
      purpose: "Interface composition and interactive experiences.",
    },
    {
      name: "TypeScript",
      purpose: "Type-safe application and content architecture.",
    },
    {
      name: "Tailwind CSS",
      purpose: "Styling and design-system integration.",
    },
    {
      name: "Vitest",
      purpose: "Unit and component testing.",
    },
    {
      name: "Playwright",
      purpose: "End-to-end application testing.",
    },
    {
      name: "Motion",
      purpose: "Interface animation and interaction.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "Website",
      href: "https://paszed.me",
      primary: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/paszed/paszed.me",
    },
  ],
};

