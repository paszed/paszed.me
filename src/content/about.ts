export const about = {
  hero: {
    title: "Edvard Pasz",
    intro:
      "Software engineer building developer tools, platform infrastructure, and AI-powered systems with a focus on clarity, reliability, and long-term maintainability.",
  },

  story: [
    "I enjoy solving recurring engineering problems. Many of my projects begin with friction I encounter while building software—a repetitive workflow, missing capability, or architectural problem that should be solved once rather than repeatedly worked around.",

    "That approach has gradually moved my work from individual applications toward reusable systems. Developer tooling, identity, events, observability, search, data infrastructure, design systems, and AI orchestration are different problems, but they share the same underlying goal: create dependable foundations that make the software built on top of them simpler.",

    "I use projects as a way to explore those ideas in practice. Some become standalone tools, others become reusable capabilities or platform infrastructure, and each one provides another opportunity to refine how I think about architecture, developer experience, reliability, and long-term maintainability.",

    "This website is the public record of that work. The project library documents what I build and the decisions behind it, while the engineering journal develops the broader principles, trade-offs, and lessons that emerge along the way.",
  ],

  philosophy: [
    {
      title: "Solve recurring problems",
      description:
        "If a problem appears more than once, it's usually an opportunity to improve the system instead of repeating the work.",
    },
    {
      title: "Design for evolution",
      description:
        "Software should be understandable today while remaining adaptable to requirements that have not appeared yet.",
    },
    {
      title: "Prefer composition over complexity",
      description:
        "Small, focused building blocks create systems that are easier to understand, combine, replace, and maintain.",
    },
    {
      title: "Learn by building",
      description:
        "Engineering judgment develops through designing, shipping, testing assumptions, and refining systems over time.",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "SQL",
        "Go",
        "Rust",
      ],
    },
    {
      category: "Application Engineering",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
      ],
    },
    {
      category: "Platform & Infrastructure",
      items: [
        "Docker",
        "GitHub Actions",
        "REST APIs",
        "Webhooks",
        "OAuth",
      ],
    },
    {
      category: "Engineering Tooling",
      items: [
        "Git",
        "Neovim",
        "Fish",
        "pnpm",
        "Vitest",
        "Playwright",
      ],
    },
  ],
} as const;
