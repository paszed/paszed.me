import type { Project } from "@/types/project";

export const eventPlatform: Project = {
  slug: "event-platform",

  title: "Event Platform",

  tagline:
    "Shared event infrastructure for decoupled, observable and reliable systems.",

  summary:
    "Composable event infrastructure that standardizes event contracts, publication, delivery and consumption across applications and platform services.",

  featured: false,

  status: "building",

  started: 2026,

  category: "platform-infrastructure",

  overview: [
    "Event Platform provides shared infrastructure for communication through events across otherwise independent systems.",

    "Rather than allowing applications and platform services to invent their own event formats, delivery semantics and consumer patterns, the project establishes reusable contracts and infrastructure for event-driven communication.",

    "Domain repositories remain responsible for defining what their events mean. Event Platform is responsible for the mechanisms that transport, deliver and observe them.",
  ],

  problem: [
    "Direct service dependencies increase coupling between systems.",
    "Independent implementations produce inconsistent event contracts and delivery behavior.",
    "Retries, failures and duplicate delivery require deliberate handling.",
    "Event infrastructure becomes difficult to operate when observability is added as an afterthought.",
    "Transport-specific details can easily leak into domain logic.",
  ],

  principles: [
    "Separate event semantics from event transport.",
    "Treat event contracts as stable interfaces.",
    "Design consumers for idempotency.",
    "Make delivery behavior explicit.",
    "Keep transport implementations replaceable.",
    "Make failures observable.",
    "Prefer asynchronous boundaries where they reduce meaningful coupling.",
  ],

  architecture: {
    description: [
      "Producers publish typed events through stable platform interfaces rather than depending directly on a specific message broker.",
      "The platform handles transport, delivery, subscriptions and reliability concerns while consumers process events through explicit contracts.",
      "Domain systems retain ownership of event meaning while Event Platform owns the shared delivery infrastructure.",
    ],
  },

  capabilities: [
    "Typed event contracts.",
    "Event publication.",
    "Event subscriptions.",
    "Consumer abstractions.",
    "Transport adapters.",
    "Delivery policies.",
    "Retry handling.",
    "Dead-letter handling.",
    "Idempotency support.",
    "Event metadata.",
    "Correlation and causation tracking.",
    "Event inspection.",
  ],

  engineering: [
    "Event-driven architecture.",
    "Type-safe contracts.",
    "Transport abstraction.",
    "Failure-aware delivery.",
    "Idempotent consumer design.",
    "Explicit event metadata.",
    "Observable execution.",
    "Composable infrastructure.",
  ],

  challenges: [
    "Defining stable event contracts without coupling domains together.",
    "Handling duplicate delivery and retries safely.",
    "Preserving useful ordering semantics without unnecessary global coordination.",
    "Keeping transport-specific behavior outside domain code.",
    "Making asynchronous failures understandable during development and operation.",
  ],

  lessons: [
    "Events reduce coupling only when their contracts remain explicit.",
    "Delivery guarantees should be documented rather than assumed.",
    "Consumers should expect duplicate delivery.",
    "Event transport and domain semantics are separate architectural concerns.",
    "Observability is essential when control flow becomes asynchronous.",
  ],

  roadmap: [
    "Define the core event envelope.",
    "Establish producer and consumer contracts.",
    "Implement an in-memory transport.",
    "Introduce persistent transport adapters.",
    "Add retry and dead-letter infrastructure.",
    "Develop idempotency primitives.",
    "Add correlation and causation tracking.",
    "Integrate shared observability.",
    "Build event inspection and development tooling.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Type-safe event contracts and platform interfaces.",
    },
    {
      name: "Node.js",
      purpose: "Runtime for event producers, consumers and transport adapters.",
    },
    {
      name: "Async Messaging",
      purpose: "Decoupled communication between independent systems.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/event-platform",
      primary: true,
    },
  ],
};
