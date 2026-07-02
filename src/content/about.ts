export const about = {
  hero: {
    title: "About",
    intro:
      "I'm Edvard, a software engineer focused on building developer tools, AI-powered applications, and products that help people build faster and think better.",
  },

  story: [
    "I enjoy building software from the ground up, turning ideas into products through thoughtful architecture, clean code, and continuous iteration. My favorite projects are the ones that combine technical depth with a polished user experience.",
    "Most of my work revolves around developer tooling, artificial intelligence, and modern web technologies. I'm especially interested in creating products that automate repetitive work and improve the daily workflow of developers.",
    "I believe the best way to learn is by shipping. Every project teaches me something new, whether it's a framework, a design pattern, or a better way to solve a problem. That's why I build in public and continuously refine both my projects and my engineering process.",
  ],

  philosophy: [
    {
      title: "Think in systems",
      description:
        "I prefer designing reusable foundations instead of solving the same problem multiple times.",
    },
    {
      title: "Ship continuously",
      description:
        "Small, frequent improvements create better software than waiting for perfection.",
    },
    {
      title: "Build with purpose",
      description:
        "Technology should solve real problems and provide a genuinely better experience for the people using it.",
    },
    {
      title: "Never stop learning",
      description:
        "Every project is an opportunity to explore new technologies, challenge assumptions, and become a better engineer.",
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
