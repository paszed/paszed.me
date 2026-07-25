import type { Project } from "@/types/project";

export const testkit: Project = {
  slug: "testkit",

  title: "Testkit",

  tagline:
    "Reusable testing infrastructure for reliable software systems.",

  summary:
    "Shared testing infrastructure that provides fixtures, factories, assertions, harnesses and utilities for verifying applications and platform services consistently.",

  featured: false,

  status: "building",

  started: 2026,

  category: "platform-infrastructure",

  overview: [
    "Testkit provides reusable infrastructure for testing software across the ecosystem.",

    "Rather than allowing every repository to independently recreate fixtures, factories, mocks, harnesses and integration utilities, the project centralizes testing capabilities that have demonstrated value across multiple systems.",

    "The goal is not to replace testing frameworks. Testkit complements them with shared infrastructure for exercising application and platform behavior consistently.",
  ],

  problem: [
    "Testing infrastructure is frequently duplicated across repositories.",
    "Independent test utilities gradually develop inconsistent APIs and behavior.",
    "Complex integrations require realistic harnesses that are expensive to recreate.",
    "Excessive mocking can make tests pass without accurately representing system behavior.",
    "Reusable platform capabilities need consistent contract and integration testing.",
  ],

  principles: [
    "Test behavior rather than implementation details.",
    "Prefer realistic boundaries over excessive mocking.",
    "Keep test infrastructure deterministic.",
    "Extract utilities only when reuse is demonstrated.",
    "Make failures easy to diagnose.",
    "Keep test APIs small and predictable.",
    "Treat testing infrastructure as production-quality code.",
  ],

  architecture: {
    description: [
      "Testkit sits alongside existing test runners and provides reusable infrastructure rather than owning test execution itself.",
      "Repositories consume focused utilities such as factories, fixtures, harnesses and contract suites while retaining their own domain-specific tests.",
      "Shared testing capabilities remain independent of application behavior and evolve through concrete requirements from consuming projects.",
    ],
  },

  capabilities: [
    "Test factories.",
    "Reusable fixtures.",
    "Custom assertions.",
    "Integration harnesses.",
    "Contract testing.",
    "Provider test suites.",
    "Event testing utilities.",
    "Identity testing utilities.",
    "Deterministic test data.",
    "Test environment helpers.",
    "Fake implementations.",
    "Failure diagnostics.",
  ],

  engineering: [
    "Framework-compatible utilities.",
    "Deterministic execution.",
    "Type-safe test APIs.",
    "Reusable contract suites.",
    "Explicit test boundaries.",
    "Minimal mocking.",
    "Composable fixtures.",
    "Diagnostic-first failures.",
  ],

  challenges: [
    "Sharing useful testing infrastructure without coupling otherwise independent repositories.",
    "Keeping fixtures representative as domain models evolve.",
    "Avoiding abstractions that make tests harder to understand than direct setup.",
    "Creating realistic integration environments without making test suites unnecessarily slow.",
    "Maintaining deterministic behavior around asynchronous and event-driven systems.",
  ],

  lessons: [
    "Test infrastructure benefits from the same design discipline as production infrastructure.",
    "Shared test utilities should remove repetition without hiding important setup.",
    "Contract tests are especially valuable at reusable platform boundaries.",
    "Determinism matters more than clever test abstractions.",
    "A failing test should explain the behavior that violated expectations.",
  ],

  roadmap: [
    "Define core fixture and factory conventions.",
    "Introduce shared assertion utilities.",
    "Develop integration harnesses.",
    "Add contract testing primitives.",
    "Create event-platform testing utilities.",
    "Create identity testing utilities.",
    "Develop connector test suites.",
    "Improve asynchronous testing support.",
    "Add reusable failure diagnostics.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Type-safe testing utilities, fixtures and contracts.",
    },
    {
      name: "Vitest",
      purpose: "Primary compatibility target for unit and integration testing.",
    },
    {
      name: "Node.js",
      purpose: "Runtime for integration harnesses and platform testing.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/testkit",
      primary: true,
    },
  ],
};
