export const home = {
  hero: {
    eyebrow: "ENGINEERING • SYSTEMS • SOFTWARE",

    title:
      "I build software systems that scale beyond the first version.",

    subtitle:
      "Developer tools, modern web platforms, and AI-powered workflows designed with clarity, reliability, and long-term maintainability.",

    description:
      "I'm Edvard, a software engineer focused on turning recurring technical problems into reusable systems. I design and build developer infrastructure, applications, and automation workflows while documenting the architecture, decisions, and lessons behind them.",

    primaryCta: {
      label: "View Projects",
      href: "/projects",
    },

    secondaryCta: {
      label: "Read Journal",
      href: "/journal",
    },
  },

  currentFocus: {
    title: "Currently",

    items: [
      {
        title: "🟢 Building",
        description:
          "Reusable developer tooling, platform infrastructure, and shared software capabilities.",
      },
      {
        title: "📚 Learning",
        description:
          "Distributed systems, platform engineering, AI orchestration, and Go.",
      },
      {
        title: "🔬 Exploring",
        description:
          "Composable AI systems, event-driven architecture, and infrastructure that compounds across projects.",
      },
    ],
  },

  featuredProjects: {
    title: "Featured Projects",

    description:
      "Selected work across developer infrastructure, reusable platform capabilities, AI systems, and applications.",
  },

  latestWriting: {
    title: "Latest Writing",

    description:
      "Essays on software engineering, architecture, infrastructure, distributed systems, AI, and engineering practice.",
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
