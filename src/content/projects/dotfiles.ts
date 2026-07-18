import type { Project } from "@/types/project";

export const dotfiles: Project = {
  slug: "dotfiles",

  title: "Dotfiles",

  tagline:
    "A reproducible development environment designed for consistency, automation and developer productivity.",

  summary:
    "Configuration and tooling that power my daily software engineering workflow.",

  featured: false,

  status: "production",

  started: 2025,

  overview: [
    "Dotfiles capture the development environment I use every day, bringing together editor configuration, shell tooling, terminal customization and development utilities into a single reproducible system.",

    "Rather than treating configuration as personal preference, the repository approaches the development environment as engineering infrastructure. A consistent setup reduces cognitive overhead, improves reliability across machines and makes experimentation easier without sacrificing stability.",

    "The repository evolves alongside my workflow, incorporating new tools and automation as they prove valuable while remaining focused on simplicity, maintainability and developer experience.",
  ],

  problem: [
    "Development environments often become difficult to reproduce.",
    "Important tooling is scattered across multiple configuration files.",
    "Switching machines frequently requires manual setup.",
    "Small inconsistencies accumulate and interrupt developer flow.",
  ],

  principles: [
    "Reproducibility over manual configuration.",
    "Automation before repetition.",
    "Keep tooling discoverable and documented.",
    "Optimize for long-term maintainability.",
    "Reduce friction in everyday development.",
  ],

  architecture: {
    description: [
      "Configuration is organized into focused modules rather than one large setup.",
      "Shell, editor, Git and terminal tooling remain independent while sharing common conventions.",
      "Bootstrap scripts automate installation and onboarding.",
      "Documentation explains not only how the environment works, but why particular decisions were made.",
    ],
    diagram: `
Bootstrap
     │
     ▼
Shell Configuration
     │
 ┌───┼────┐
 ▼   ▼    ▼
Git Neovim Terminal
     │
     ▼
Developer Workflow
`,
  },

  capabilities: [
    "Neovim configuration.",
    "Zsh environment.",
    "Git aliases and workflow improvements.",
    "Terminal customization.",
    "Development automation.",
    "Bootstrap scripts.",
    "Shared CLI tooling.",
    "Consistent development environment across machines.",
  ],

  engineering: [
    "Configuration is modular to simplify maintenance and experimentation.",
    "Automation replaces repetitive setup wherever possible.",
    "Tools are selected based on long-term productivity rather than novelty.",
    "Documentation is treated as part of the development environment.",
  ],

  challenges: [
    "Keeping configuration portable across machines.",
    "Balancing customization with simplicity.",
    "Managing evolving tooling without introducing unnecessary complexity.",
  ],

  lessons: [
    "Small workflow improvements compound over time.",
    "A reliable development environment increases focus by reducing unnecessary friction.",
    "Well-documented tooling is easier to maintain than clever configuration.",
    "Developer experience begins long before writing application code.",
  ],

  roadmap: [
    "Improve bootstrap automation.",
    "Expand development scripts.",
    "Support additional operating systems.",
    "Increase environment validation.",
    "Publish setup documentation and workflow guides.",
  ],

  technologies: [
    {
      name: "Neovim",
      purpose: "Primary development environment.",
    },
    {
      name: "Zsh",
      purpose: "Interactive shell.",
    },
    {
      name: "Git",
      purpose: "Version control workflow.",
    },
    {
      name: "Homebrew",
      purpose: "Package management.",
    },
    {
      name: "Lua",
      purpose: "Neovim configuration.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/dotfiles",
      primary: true,
    },
  ],
};
