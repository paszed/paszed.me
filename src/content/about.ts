export const about = {
  hero: {
    title: "About",

    intro:
      "I'm Edvard, a software engineer focused on building reliable applications, developer tools, and systems that help ideas become useful products.",
  },

  story: [
    "I approach software by understanding the underlying problem first. The goal is not just to write code, but to create systems that remain clear, maintainable, and valuable as they grow.",

    "My work combines product development with strong engineering foundations: application architecture, automation, developer experience, infrastructure, and practical AI workflows.",

    "I enjoy turning recurring problems into reusable solutions. Whether improving an existing system or building something new, I focus on reducing complexity and creating foundations that last.",

    "This website documents the systems I build, the decisions behind them, and the lessons learned throughout the process.",
  ],

  philosophy: [
    {
      title: "Understand the problem first",

      description:
        "The best technical solutions come from understanding the real need before choosing the implementation.",
    },
    {
      title: "Build for change",

      description:
        "Software should be designed so future improvements become easier rather than adding unnecessary complexity.",
    },
    {
      title: "Remove recurring friction",

      description:
        "Repeated problems are opportunities to create better tools, workflows, and systems.",
    },
    {
      title: "Improve through shipping",

      description:
        "Engineering grows through building, feedback, iteration, and continuously refining the process.",
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
      category: "Infrastructure & Tooling",
      items: [
        "Docker",
        "GitHub Actions",
        "REST APIs",
        "Webhooks",
        "OAuth",
      ],
    },
    {
      category: "Developer Workflow",
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
