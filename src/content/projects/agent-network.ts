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
    "Agent Network is an orchestration platform for building modular AI systems composed of specialized agents instead of a single general-purpose assistant.",

    "Rather than increasing the complexity of one model, the platform coordinates independent agents through shared workflows, structured communication and common infrastructure. Each agent owns a specific responsibility while the orchestration layer manages planning, delegation and execution.",

    "The project investigates how principles from distributed systems—such as message passing, service boundaries and orchestration—can be applied to modern AI applications. The result is a modular architecture that is easier to understand, extend and operate as capabilities continue to grow.",
  ],

  problem: [
    "General-purpose assistants accumulate unrelated responsibilities over time.",
    "Prompt engineering cannot replace software architecture.",
    "Tool integrations become tightly coupled to individual agents.",
    "Shared context becomes increasingly difficult to manage as capabilities grow.",
    "Without orchestration, autonomous systems become difficult to observe, test and maintain.",
  ],

  principles: [
    "Specialization over generalization.",
    "Composition over monolithic assistants.",
    "Clear responsibilities for every agent.",
    "Communication through explicit interfaces.",
    "Tools should be reusable across the network.",
    "Memory should be shared where appropriate and isolated where necessary.",
    "Observability is a first-class concern.",
  ],

  architecture: {
    description: [
      "The orchestrator accepts incoming work and decomposes it into smaller tasks.",
      "Specialized agents receive work through structured messages instead of direct dependencies.",
      "Shared infrastructure provides memory, tools, execution and observability.",
      "Every component communicates through stable interfaces, allowing new agents to be introduced without changing existing workflows.",
    ],

    diagram: `
                    User
                      │
                      ▼
              Orchestrator
                      │
      ┌───────────────┼───────────────┐
      ▼               ▼               ▼
 Planner Agent   Research Agent   Coding Agent
      │               │               │
      └───────────────┼───────────────┘
                      ▼
                 Tool Layer
                      │
      ┌───────────────┼───────────────┐
      ▼               ▼               ▼
    Memory         Providers      Observability
`,
  },

  capabilities: [
    "Task routing.",
    "Workflow orchestration.",
    "Context management.",
    "Shared memory.",
    "Tool execution.",
    "Message passing.",
    "Execution tracing.",
    "Plugin architecture.",
    "Agent lifecycle management.",
    "Distributed workflows.",
  ],

  engineering: [
    "Agent behavior is separated from orchestration logic.",
    "Communication occurs through explicit contracts rather than shared implementation.",
    "Infrastructure services remain independent from individual agents.",
    "The runtime prioritizes observability and deterministic execution where possible.",
    "New agent types can be introduced without modifying the orchestration layer.",
  ],

  challenges: [
    "Maintaining consistent shared context across multiple agents.",
    "Coordinating parallel execution without unnecessary synchronization.",
    "Avoiding duplicated work between collaborating agents.",
    "Balancing autonomous decision-making with deterministic workflows.",
    "Providing meaningful observability across distributed execution.",
  ],

  lessons: [
    "The hardest problem in AI systems is coordination, not intelligence.",
    "Smaller specialized agents are easier to reason about than one large assistant.",
    "Well-defined interfaces become increasingly valuable as systems grow.",
    "Shared infrastructure simplifies collaboration across independent agents.",
    "Reliable orchestration matters more than adding additional models.",
  ],

  roadmap: [
    "Implement the orchestration runtime.",
    "Develop planner and routing agents.",
    "Introduce persistent shared memory.",
    "Build a reusable tool registry.",
    "Expand the execution engine.",
    "Add execution tracing and observability.",
    "Support distributed execution.",
    "Publish SDKs for building custom agents.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Core runtime implementation.",
    },
    {
      name: "OpenAI",
      purpose: "LLM-powered reasoning.",
    },
    {
      name: "Model Context Protocol",
      purpose: "Standardized tool integration.",
    },
    {
      name: "Redis",
      purpose: "Shared state and message coordination.",
    },
    {
      name: "Docker",
      purpose: "Containerized execution environments.",
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
