import type { Project } from "@/types/project";

export const dotfiles: Project = {
  slug: "dotfiles",

  title: "Dotfiles",

  tagline:
    "A reproducible development environment for building software consistently across machines.",

  summary:
    "A version-controlled development environment that standardizes tooling, shell configuration and workflows for reliable software engineering.",

  featured: false,

  status: "building",

  started: 2026,

  category: "engineering-environment",

  overview: [
    "Dotfiles provides a reproducible development environment that ensures every machine behaves consistently. Rather than manually configuring editors, shells and development tools, the repository captures the entire engineering environment as code.",

    "The project focuses on productivity, automation and consistency. Every configuration is version controlled, documented and designed to minimize setup time while creating a predictable development experience.",

    "Beyond editor preferences, the repository represents an evolving engineering workflow that emphasizes reproducibility, maintainability and continuous refinement.",
  ],

  problem: [
    "Development environments often drift over time.",
    "Manual setup is slow, repetitive and error-prone.",
    "Tooling differs between machines, creating inconsistent workflows.",
    "Configuration changes are rarely documented or version controlled.",
    "Rebuilding a workstation should not require rediscovering previous decisions.",
  ],

  principles: [
    "Everything should be reproducible.",
    "Automation over manual configuration.",
    "Version control every meaningful change.",
    "Terminal-first development.",
    "Small improvements compound over time.",
    "Consistency reduces cognitive load.",
  ],

  architecture: {
    description: [
      "Configuration is organized into small, independent modules with clear responsibilities.",
      "Bootstrap scripts automate installation and environment setup.",
      "Tool-specific configuration remains isolated while sharing common conventions.",
      "The repository serves as the single source of truth for the development environment.",
    ],

    diagram: `
           Dotfiles
               │
   ┌───────────┼───────────┐
   ▼           ▼           ▼
 Shell      Editors      Git
   │           │           │
   ├───────────┼───────────┤
   ▼           ▼           ▼
 CLI Tools   Scripts   Packages
               │
               ▼
      Reproducible Environment
`,
  },

  capabilities: [
    "Automated environment setup.",
    "Shell configuration.",
    "Editor configuration.",
    "Git configuration.",
    "Terminal tooling.",
    "Package management.",
    "Development scripts.",
    "Consistent aliases.",
    "Workflow automation.",
    "Machine provisioning.",
  ],

  engineering: [
    "Configuration as code.",
    "Modular organization.",
    "Cross-machine reproducibility.",
    "Automation-first workflows.",
    "Version-controlled tooling.",
  ],

  challenges: [
    "Balancing portability with platform-specific customization.",
    "Keeping configurations simple as the toolchain grows.",
    "Maintaining compatibility across operating system updates.",
    "Avoiding unnecessary customization while preserving productivity.",
  ],

  lessons: [
    "A good development environment removes friction instead of adding features.",
    "Automation is an investment that compounds every day.",
    "Configuration deserves the same engineering discipline as software.",
    "Small workflow improvements become significant over thousands of hours.",
    "Reproducibility is one of the foundations of professional engineering.",
  ],

  roadmap: [
    "Improve bootstrap automation.",
    "Expand development scripts.",
    "Document engineering workflows.",
    "Add machine validation.",
    "Improve onboarding experience.",
    "Support additional operating systems.",
  ],

  technologies: [
    {
      name: "Fish",
      purpose: "Interactive shell and command-line environment.",
    },
    {
      name: "Neovim",
      purpose: "Primary development editor.",
    },
    {
      name: "Git",
      purpose: "Version control configuration.",
    },
    {
      name: "Homebrew",
      purpose: "Package management.",
    },
    {
      name: "Shell Scripts",
      purpose: "Environment automation and provisioning.",
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
