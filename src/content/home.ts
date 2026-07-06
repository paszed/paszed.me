export const home = {

 hero: {
  eyebrow: "ENGINEERING • SYSTEMS • CRAFT",

  title: "Building software built to last.",

  subtitle:
    "Developer tools, practical AI, and software architecture guided by clarity, restraint, and long-term thinking.",

  description:
    "I'm Edvard, a software engineer focused on building dependable software and thoughtful developer experiences. This site is my engineering journal—a place to document projects, explore ideas, and share what I learn while building.",

  primaryCta: {
    label: "View Projects",
    href: "/projects",
  },

  secondaryCta: {
    label: "About",
    href: "/about",
  },
},
  currentFocus: {
    title: "Currently",

    items: [
      {
        title: "🟢 Building",
        description:
          "Developer-focused tools while continuously improving paszed.me as my engineering journal.",
      },
      {
        title: "📚 Learning",
        description:
          "AI agents, Model Context Protocol, software architecture, and Go.",
      },
      {
        title: "🔬 Exploring",
        description:
          "Developer experience, terminal workflows, automation, and practical AI.",
      },
    ],
  },

  featuredProjects: {
    title: "Featured Projects",
    description:
      "A selection of projects that reflect my interests in developer tools, software architecture, and practical AI.",
  },

  philosophy: {
    title: "Engineering Principles",

    items: [
      {
        title: "Solve recurring problems",
        description:
          "If I find myself repeating the same task, I'd rather improve the workflow than repeat the process.",
      },
      {
        title: "Keep systems simple",
        description:
          "Clear architecture and maintainable code outperform unnecessary complexity over the long term.",
      },
      {
        title: "Build, use, improve",
        description:
          "The best feedback comes from using your own software. I prefer shipping, learning, and iterating over chasing perfection.",
      },
    ],
  },
} as const;
