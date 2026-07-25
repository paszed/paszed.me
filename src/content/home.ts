export const home = {
  hero: {
    eyebrow: "ENGINEERING • SYSTEMS • CRAFT",

    title: "Building software with longevity in mind.",

    subtitle:
      "Developer infrastructure, software platforms, and AI systems guided by clarity, composition, and long-term thinking.",

    description:
      "I'm Edvard, a software engineer focused on building reusable foundations for modern software. I work across developer tooling, platform infrastructure, distributed systems, and AI while documenting the architecture, trade-offs, and lessons behind what I build.",

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
