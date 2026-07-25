export const uses = {
  description:
    "My development environment is built around a terminal-first workflow. I prefer fast, composable tools with clear responsibilities, minimal friction, and configuration I can understand and maintain.",

  sections: [
    {
      title: "Hardware",
      items: [
        "Mac mini M4",
        "iPad Pro M4",
        "iPhone 17 Pro",
        "External monitor",
        "Mechanical keyboard",
      ],
    },

    {
      title: "Development",
      items: [
        "Neovim",
        "Ghostty",
        "Fish",
        "Git",
        "GitHub",
        "Docker",
        "Node.js",
        "pnpm",
        "TypeScript",
        "ripgrep (rg)",
        "fd",
        "fzf",
        "zoxide",
      ],
    },

    {
      title: "AI",
      items: [
        "ChatGPT",
        "Claude",
      ],
    },

    {
      title: "Design",
      items: [
        "Figma",
        "Excalidraw",
      ],
    },

    {
      title: "Workflow",
      items: [
        "Keep the terminal at the center of development.",
        "Automate repetitive work instead of documenting manual steps.",
        "Prefer small, composable tools over monolithic environments.",
        "Keep configuration version-controlled and reproducible.",
        "Adopt tools when they solve recurring problems.",
      ],
    },
  ],
} as const;
