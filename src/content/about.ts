export const about = {
  hero: {
    title: "About",

    intro:
      "I'm Edvard, a software engineer focused on building reliable software systems, developer tools, and modern applications with strong technical foundations.",
  },

  story: [
    "I build software by starting with the underlying problem rather than the first implementation. Whether it is an application, internal tool, or reusable system, I focus on creating solutions that remain understandable and maintainable as they grow.",

    "My work combines product development with engineering foundations: application architecture, developer experience, automation, infrastructure, and practical AI workflows. I enjoy turning repeated problems into systems that make future work simpler.",

    "I believe good software is built through iteration. Design decisions become clearer through building, testing assumptions, measuring results, and continuously improving the systems around the product.",

    "This website documents that process. The projects show what I build, while the journal explores the technical decisions, trade-offs, and lessons behind the work.",
  ],

  philosophy: [
    {
      title: "Understand before building",

      description:
        "The strongest solutions come from understanding the real problem before choosing the technology or implementation.",
    },
    {
      title: "Create systems that scale",

      description:
        "Software should be designed so that future changes improve the system instead of creating unnecessary complexity.",
    },
    {
      title: "Reduce recurring friction",

      description:
        "Repeated manual work and recurring technical problems are opportunities to create better tools and workflows.",
    },
    {
      title: "Keep improving",

      description:
        "Engineering skill grows through shipping, feedback, reflection, and continuously refining how software is built.",
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
