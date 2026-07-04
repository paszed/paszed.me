export const home = {
  hero: {
    eyebrow: "ENGINEERING • TOOLS • LEARNING",

    title: "Hi, I'm Edvard.",

    subtitle:
      "I build developer tools, explore practical AI workflows, and design software with a focus on simplicity and maintainability.",

    description:
      "I'm a software engineer interested in improving the developer experience through thoughtful architecture and automation. This site is my engineering journal—a place to share the projects I build, the ideas I explore, and the lessons I learn along the way.",

    primaryCta: {
      label: "Explore Projects",
      href: "/projects",
    },

    secondaryCta: {
      label: "About Me",
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
