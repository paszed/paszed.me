export const about = {
  hero: {
    title: "About",
    intro:
      "I'm Edvard, a software engineer passionate about building developer tools, AI applications, and modern web experiences.",
  },

  story: [
    "I'm passionate about building software that solves real problems. I enjoy working across the stack, from backend systems to polished user interfaces.",
    "My focus is on creating developer tools, AI-powered applications, and products that are simple to use but thoughtfully engineered.",
    "I treat every project as an opportunity to learn, improve my engineering skills, and document the process so others can benefit from it.",
  ],

  philosophy: [
    {
      title: "Build for maintainability",
      description:
        "I prefer clear architecture, reusable components, and strong typing over clever shortcuts.",
    },
    {
      title: "Ship continuously",
      description:
        "Small, incremental improvements keep projects healthy and make it easier to gather feedback.",
    },
    {
      title: "Learn by building",
      description:
        "Every project is an opportunity to explore new technologies and refine my engineering practices.",
    },
    {
      title: "Keep it simple",
      description:
        "Simple solutions are easier to understand, maintain, and scale than unnecessary complexity.",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
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
      category: "Tools",
      items: [
        "Git",
        "Docker",
        "GitHub",
        "Figma",
        "Linux",
      ],
    },
  ],
} as const;
