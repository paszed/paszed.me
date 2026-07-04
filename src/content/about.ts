export const about = {
  hero: {
    title: "About",
    intro:
      "I'm Edvard, a software engineer focused on developer tools, practical AI, and building software that improves the way people work.",
  },

  story: [
    "I enjoy building software that solves practical problems. Most of my projects begin with a workflow I want to simplify, a repetitive task I want to automate, or an idea I believe can make developers more productive.",

    "My interests extend beyond writing code. I'm fascinated by software architecture, developer experience, automation, and how small improvements compound over time. I believe the best engineering comes from understanding both the technical and human side of building software.",

    "This website is my engineering journal. It's where I document the projects I build, the technologies I explore, the lessons I learn, and the decisions behind my work. Rather than chasing trends, I focus on building useful tools, continuously refining my workflow, and sharing what I discover along the way.",
  ],

  philosophy: [
    {
      title: "Solve recurring problems",
      description:
        "If I find myself repeating the same task, I'd rather build a tool than repeat the process.",
    },
    {
      title: "Keep architecture simple",
      description:
        "Clear, maintainable systems outperform unnecessary complexity over the long term.",
    },
    {
      title: "Build, then improve",
      description:
        "Real feedback comes from shipping. Iteration teaches more than endless planning.",
    },
    {
      title: "Learn continuously",
      description:
        "Every project is an opportunity to improve my engineering skills, challenge assumptions, and refine how I build software.",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "Docker", "Linux", "Terminal", "GitHub"],
    },
  ],
} as const;
