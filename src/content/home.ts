export const home = {
  hero: {
    eyebrow: "SOFTWARE • SYSTEMS • AUTOMATION",

    title:
      "I build reliable software for complex problems.",

    subtitle:
      "Modern web applications, internal tools, and developer systems designed to be clear, maintainable, and ready to evolve.",

    description:
      "I'm Edvard, a software engineer helping turn ideas and technical challenges into dependable software. I design systems from the foundation up — focusing on architecture, developer experience, automation, and long-term maintainability.",

    primaryCta: {
      label: "View Projects",
      href: "/projects",
    },

    secondaryCta: {
      label: "Read Journal",
      href: "/journal",
    },
  },

    capabilities: {
    title: "What I Build",

    description:
      "Software solutions designed around reliability, maintainability, and long-term growth.",

    items: [
      {
        title: "Web Applications",
        description:
          "Production-ready applications, dashboards, and platforms built with modern technologies and scalable architecture.",
      },
      {
        title: "Internal Tools",
        description:
          "Custom tools and systems that simplify operations, automate workflows, and remove unnecessary friction.",
      },
      {
        title: "AI-Powered Workflows",
        description:
          "Practical AI integrations that improve existing processes, reduce repetitive work, and create new capabilities.",
      },
    ],
  },

  howIHelp: {
    title: "How I Help",

    description:
      "From early ideas to improving existing systems, I help turn technical challenges into dependable software.",

    items: [
      {
        title: "Build New Products",
        description:
          "Transform ideas into functional software products with a strong foundation, thoughtful architecture, and a clear path forward.",
      },
      {
        title: "Improve Existing Software",
        description:
          "Analyze, refactor, and improve systems that have become difficult to maintain, scale, or extend.",
      },
      {
        title: "Automate Repetitive Work",
        description:
          "Create integrations, tools, and workflows that save time and help teams focus on higher-value work.",
      },
    ],
  },

  featuredProjects: {
    title: "Featured Projects",

    description:
      "Selected work across developer tooling, software platforms, AI workflows, and applications.",
  },

  latestWriting: {
    title: "Latest Writing",

    description:
      "Essays and notes on software engineering, architecture, infrastructure, AI, and lessons learned while building real systems.",
  },

  philosophy: {
    title: "Engineering Principles",

    items: [
      {
        title: "Solve recurring problems",

        description:
          "Recurring friction is usually a signal to improve the underlying system rather than repeat the work.",
      },
      {
        title: "Design for evolution",

        description:
          "Good software should remain understandable today while leaving room for tomorrow's requirements.",
      },
      {
        title: "Build foundations that compound",

        description:
          "Reusable tools, platforms, and knowledge create leverage far beyond the problem that originally produced them.",
      },
    ],
  },
} as const;
