export const home = {
  hero: {
    eyebrow: "BUILD • LEARN • SHIP",
    title: "Hi, I'm Edvard.",
    subtitle:
      "I build developer tools, AI products, and modern web experiences.",
    description:
      "I'm a software engineer passionate about creating products that are fast, maintainable, and genuinely useful. This site is where I document what I build, what I learn, and the engineering decisions behind each project.",
    primaryCta: {
      label: "Explore Projects",
      href: "/projects",
    },
    secondaryCta: {
      label: "About me",
      href: "/about",
    },
  },

  currentFocus: {
  title: "Currently",

  items: [
    {
      title: "🟢 Building",
      description:
        "Growing paszed.me into my engineering journal while building Dev Toolbox.",
    },
    {
      title: "📚 Learning",
      description:
        "AI agents, Model Context Protocol, and modern TypeScript architecture.",
    },
    {
      title: "🔬 Exploring",
      description:
        "Developer experience, browser extensions, and practical AI tooling.",
    },
  ],
},

  featuredProjects: {
    title: "Featured Projects",
    description:
      "A selection of products, experiments, and tools I've built. Each project includes the engineering decisions, challenges, and lessons learned along the way.",
  },
} as const;
