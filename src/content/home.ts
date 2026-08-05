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
    title: "Capabilities",

    description:
      "Areas where I help teams design, build, and improve modern software systems.",

    items: [
      {
        title: "Web Applications",
        description:
          "Modern full-stack applications with thoughtful architecture, reliable foundations, and user-focused experiences.",
      },
      {
        title: "Developer Infrastructure",
        description:
          "Internal tools, automation, and workflows that reduce friction and help teams build software more effectively.",
      },
      {
        title: "AI Workflows",
        description:
          "Practical AI integrations, automation systems, and workflows that improve existing software processes.",
      },
    ],
  },

  howIHelp: {
    title: "How I Can Help",

    description:
      "I work with individuals, startups, and teams to design, build, and improve software systems.",

    items: [
      {
        title: "Build New Software",
        description:
          "From early concepts to production-ready applications, I help turn ideas into reliable software with a strong technical foundation.",
      },
      {
        title: "Improve Existing Systems",
        description:
          "I help simplify complex codebases, improve architecture, and create systems that are easier to maintain and extend.",
      },
      {
        title: "Automate Workflows",
        description:
          "I build tools and integrations that remove repetitive work and help teams operate more efficiently.",
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
