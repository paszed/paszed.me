export const about = {
  hero: {
    title: "About",
    intro:
      "I'm Edvard, a software engineer focused on building composable platforms for developers, AI systems, and modern software.",
  },

  story: [
    "I enjoy solving recurring engineering problems. Many of my projects begin with friction I encounter while building software—a repetitive workflow, missing tooling, or an architectural challenge that deserves a reusable solution rather than another one-off implementation.",

    "Over time, that approach has naturally evolved into building platforms instead of isolated applications. Whether it's developer tooling, AI infrastructure, trust systems, or data integration, I'm interested in creating foundations that make future software easier to build, maintain, and extend.",

    "This website serves as my engineering journal. Every project documents not only what I built, but why it exists, the architectural decisions behind it, the trade-offs I made, and the lessons I learned along the way. I believe good engineering comes from continuous iteration, thoughtful abstractions, and sharing knowledge openly.",
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
        "Software should be easy to understand today and adaptable to tomorrow's requirements.",
    },
    {
      title: "Prefer composition over complexity",
      description:
        "Small, focused building blocks create systems that are easier to maintain than large, tightly coupled solutions.",
    },
    {
      title: "Learn by building",
      description:
        "Real understanding comes from designing, shipping, measuring, and continuously refining software.",
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
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "REST APIs",
        "PostgreSQL",
        "Prisma",
      ],
    },
    {
      category: "Developer Tools",
      items: [
        "Git",
        "Docker",
        "Linux",
        "Terminal",
        "GitHub",
      ],
    },
  ],
} as const;
