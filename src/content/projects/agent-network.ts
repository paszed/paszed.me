import type { Project } from "@/types/project";

export const agentNetwork: Project = {
  slug: "agent-network",

  title: "Agent Network",

  tagline:
    "A modular runtime for orchestrating specialized AI agents that collaborate to solve complex tasks.",

  summary:
    "An orchestration platform for building collaborative, tool-enabled AI systems.",

  featured: true,

  status: "research",

  started: 2026,

  overview: [
    "Agent Network explores how specialized AI agents can collaborate instead of relying on a single general-purpose model. Rather than creating one increasingly complex assistant, the platform coordinates multiple agents with distinct responsibilities through a shared orchestration layer.",

    "The project focuses on routing, memory, tool execution and structured communication between agents. Each agent remains intentionally focused while the network coordinates planning, delegation and execution to solve larger tasks.",

    "Although still in active research, the project establishes the architectural foundation for building modular AI systems that are easier to extend, observe and maintain than monolithic assistants.",
  ],

  problem: [
    "Single AI agents become increasingly difficult to scale as responsibilities grow.",
    "Prompt complexity increases when one model is expected to solve every task.",
    "Tool integrations become tightly coupled to individual agents.",
    "Observability and debugging are difficult without structured orchestration.",
    "Knowledge and execution logic are often mixed together.",
  ],

  principles: [
    "Specialization over generalization.",
    "Composition over monolithic assistants.",
    "Clear responsibilities for every agent.",
    "Tools should be reusable across the network.",
    "Memory should be shared where appropriate and isolated where necessary.",
    "Observability is a first-class concern.",
  ],

  architecture: {
    description: [
      "A central orchestrator receives requests and delegates work to specialized agents.",
      "Agents communicate through structured messages rather than direct dependencies.",
      "Shared services provide memory, tools and execution capabilities.",
      "The platform supports adding new agents without changing the orchestration model.",
    ],
    diagram: `
User
  │
  ▼
Orchestrator
  │
 ├─────────────┐
 ▼             ▼
Planner     Research
Agent         Agent
 │             │
 └──────┬──────┘
        ▼
 Tool Layer
        │
        ▼
 Shared Memory
`,
  },

  capabilities: [
    "Task orchestration.",
    "Specialized AI agents.",
    "Shared memory.",
    "Tool execution.",
    "Workflow delegation.",
    "Agent communication.",
    "Extensible plugin architecture.",
    "Execution tracing.",
    "Modular runtime.",
    "Composable AI workflows.",
  ],

  engineering: [
    "The platform separates orchestration from agent implementation.",
    "Agents remain small and focused to reduce complexity.",
    "Tools are reusable services rather than agent-specific integrations.",
    "Structured communication improves observability and debugging.",
    "The architecture is designed for extensibility as new agent types emerge.",
  ],

  challenges: [
    "Coordinating multiple autonomous agents efficiently.",
    "Preventing duplicated work between agents.",
    "Managing shared context without unnecessary coupling.",
    "Balancing autonomy with deterministic orchestration.",
  ],

  lessons: [
    "The complexity of AI systems lies in coordination rather than model selection.",
    "Smaller specialized agents are easier to reason about than one large assistant.",
    "Well-defined interfaces become increasingly important as networks grow.",
    "Observability is essential for building reliable AI platforms.",
  ],

  roadmap: [
    "Implement the orchestration runtime.",
    "Develop the planner and routing agents.",
    "Add persistent shared memory.",
    "Expand the tool ecosystem.",
    "Support distributed execution.",
    "Introduce execution monitoring and visualization.",
    "Publish SDKs for custom agents.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Core runtime implementation.",
    },
    {
      name: "OpenAI",
      purpose: "LLM-powered agents.",
    },
    {
      name: "Model Context Protocol",
      purpose: "Standardized tool integration.",
    },
    {
      name: "Redis",
      purpose: "State and message coordination.",
    },
    {
      name: "Docker",
      purpose: "Containerized execution.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/agent-network",
      primary: true,
    },
  ],
};
