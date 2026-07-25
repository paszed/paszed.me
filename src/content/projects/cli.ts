import type { Project } from "@/types/project";

export const cli: Project = {
  slug: "cli",

  title: "CLI",

  tagline:
    "Shared command-line infrastructure for development and operational workflows.",

  summary:
    "A reusable command-line foundation that provides consistent commands, interaction patterns and tooling for working with projects and platform capabilities across the ecosystem.",

  featured: false,

  status: "building",

  started: 2026,

  category: "engineering-environment",

  overview: [
    "CLI provides a shared command-line interface for development, automation and operational workflows across the ecosystem.",

    "Rather than creating unrelated scripts and command implementations inside individual repositories, the project establishes reusable infrastructure for commands, configuration, output, errors and interactive workflows.",

    "The goal is to expose useful capabilities through a predictable terminal interface while keeping the underlying domain logic inside the repositories that own it.",
  ],

  problem: [
    "Development workflows often accumulate unrelated shell scripts and repository-specific commands.",
    "Independent command-line tools develop inconsistent flags, output and error behavior.",
    "Automation becomes harder when commands are designed only for interactive use.",
    "Operational capabilities become fragmented across repositories.",
    "Command implementations can accidentally duplicate domain logic that belongs elsewhere.",
  ],

  principles: [
    "Keep commands thin.",
    "Keep domain logic outside the CLI.",
    "Prefer predictable command structures.",
    "Design output for humans and automation.",
    "Make destructive operations explicit.",
    "Provide actionable errors.",
    "Keep command behavior composable and scriptable.",
  ],

  architecture: {
    description: [
      "CLI acts as an interface layer over capabilities owned by other repositories rather than becoming a container for domain logic.",
      "Commands parse user intent, validate input, invoke explicit APIs and present results through consistent terminal output.",
      "Shared command infrastructure standardizes configuration, errors and interaction patterns while individual capabilities remain independently owned.",
    ],
  },

  capabilities: [
    "Command routing.",
    "Argument and option parsing.",
    "Interactive prompts.",
    "Structured output.",
    "Machine-readable output.",
    "Configuration loading.",
    "Environment inspection.",
    "Consistent error handling.",
    "Progress reporting.",
    "Project commands.",
    "Platform operations.",
    "Automation-friendly execution.",
  ],

  engineering: [
    "Thin command architecture.",
    "Type-safe command contracts.",
    "Consistent terminal UX.",
    "Scriptable interfaces.",
    "Structured error handling.",
    "Composable commands.",
    "Separation of interface and domain logic.",
    "Cross-platform considerations.",
  ],

  challenges: [
    "Providing a unified interface without creating unnecessary coupling between repositories.",
    "Keeping interactive terminal experiences compatible with automation.",
    "Maintaining consistent command semantics as capabilities expand.",
    "Presenting complex failures without exposing irrelevant implementation details.",
    "Preventing convenience commands from becoming another location for business logic.",
  ],

  lessons: [
    "A CLI is an interface, not an architecture.",
    "Commands remain maintainable when they delegate rather than implement domain behavior.",
    "Predictability matters more than novelty in command-line interfaces.",
    "Machine-readable output makes human-oriented tools substantially more useful for automation.",
    "Good errors should explain both what failed and what the user can do next.",
  ],

  roadmap: [
    "Define the command architecture.",
    "Establish output and error conventions.",
    "Implement configuration infrastructure.",
    "Add project inspection commands.",
    "Integrate shared platform capabilities.",
    "Introduce structured output modes.",
    "Add interactive workflows.",
    "Improve shell completion.",
    "Develop plugin and extension boundaries.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Type-safe command definitions and interfaces.",
    },
    {
      name: "Node.js",
      purpose: "Cross-platform command-line runtime.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/cli",
      primary: true,
    },
  ],
};
