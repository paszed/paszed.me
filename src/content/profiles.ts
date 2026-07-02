export const profiles = {
  github: {
    id: "github",
    label: "GitHub",
    href: "https://github.com/paszed",
    description: "Open source projects and engineering work.",
    category: "developer",
    featured: true,
  },

  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/paszed",
    description: "Professional experience and network.",
    category: "social",
    featured: true,
  },

  x: {
    id: "x",
    label: "X",
    href: "https://x.com/paszed_",
    description: "Building in public and sharing ideas.",
    category: "social",
    featured: true,
  },

  reddit: {
    id: "reddit",
    label: "Reddit",
    href: "https://reddit.com/u/paszed",
    description: "Community discussions and learning.",
    category: "social",
    featured: false,
  },

  email: {
    id: "email",
    label: "Email",
    href: "mailto:edvard@paszed.me",
    description: "The best way to get in touch.",
    category: "contact",
    featured: true,
  },

  discord: {
    id: "discord",
    label: "Discord",
    href: "#",
    description: "Developer community.",
    category: "social",
    featured: false,
  },

  npm: {
    id: "npm",
    label: "npm",
    href: "https://www.npmjs.com/~paszed",
    description: "JavaScript and TypeScript packages.",
    category: "developer",
    featured: true,
  },

  pypi: {
    id: "pypi",
    label: "PyPI",
    href: "#",
    description: "Python packages.",
    category: "developer",
    featured: false,
  },

  docker: {
    id: "docker",
    label: "Docker Hub",
    href: "#",
    description: "Container images.",
    category: "developer",
    featured: false,
  },

  huggingFace: {
    id: "huggingface",
    label: "Hugging Face",
    href: "#",
    description: "Models and AI experiments.",
    category: "developer",
    featured: false,
  },

  stackOverflow: {
    id: "stackoverflow",
    label: "Stack Overflow",
    href: "#",
    description: "Questions and technical answers.",
    category: "developer",
    featured: false,
  },
} as const;

export type Profile = (typeof profiles)[keyof typeof profiles];
