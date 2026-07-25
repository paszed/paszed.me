import type { Project } from "@/types/project";

export const observability: Project = {
  slug: "observability",

  title: "Observability",

  tagline:
    "Shared telemetry, diagnostics and operational visibility for software systems.",

  summary:
    "Composable observability infrastructure that standardizes logs, metrics, traces and diagnostic context across applications and platform services.",

  featured: false,

  status: "building",

  started: 2026,

  category: "platform-infrastructure",

  overview: [
    "Observability provides shared infrastructure for understanding how software behaves during development and operation.",

    "Rather than allowing every application and service to implement telemetry independently, the project establishes consistent primitives for logs, metrics, traces and diagnostic context.",

    "The goal is to make system behavior inspectable without coupling application code to a particular observability vendor or backend.",
  ],

  problem: [
    "Distributed systems become difficult to understand from individual application logs.",
    "Independent telemetry implementations produce inconsistent naming, metadata and instrumentation.",
    "Provider-specific observability SDKs can spread throughout application code.",
    "Failures are harder to diagnose when requests cannot be correlated across system boundaries.",
    "Operational visibility becomes expensive to retrofit after systems have already grown.",
  ],

  principles: [
    "Treat observability as infrastructure.",
    "Keep telemetry providers behind explicit adapters.",
    "Use consistent semantic conventions.",
    "Preserve correlation across system boundaries.",
    "Prefer structured telemetry over unstructured output.",
    "Instrument important boundaries rather than everything indiscriminately.",
    "Make diagnostics useful during both development and production.",
  ],

  architecture: {
    description: [
      "Applications and platform services emit telemetry through stable observability interfaces.",
      "Shared instrumentation normalizes logs, metrics, traces and contextual metadata before forwarding them through provider-specific exporters.",
      "This keeps instrumentation consistent while allowing telemetry backends to evolve independently.",
    ],
  },

  capabilities: [
    "Structured logging.",
    "Metrics.",
    "Distributed tracing.",
    "Correlation identifiers.",
    "Context propagation.",
    "Telemetry enrichment.",
    "Error reporting.",
    "Instrumentation primitives.",
    "Exporter adapters.",
    "Performance measurement.",
    "Operational diagnostics.",
  ],

  engineering: [
    "Provider-independent telemetry.",
    "Structured event data.",
    "Consistent semantic conventions.",
    "Context propagation.",
    "Composable instrumentation.",
    "Low-coupling adapters.",
    "Type-safe telemetry contracts.",
    "Operationally focused diagnostics.",
  ],

  challenges: [
    "Providing useful telemetry without overwhelming systems with unnecessary instrumentation.",
    "Maintaining consistent context across asynchronous and distributed execution.",
    "Keeping vendor-specific SDKs outside application architecture.",
    "Defining stable naming and metadata conventions across independent repositories.",
    "Balancing diagnostic detail with performance and storage costs.",
  ],

  lessons: [
    "Observability is most effective when designed before failures occur.",
    "Structured telemetry is easier to search, aggregate and automate.",
    "Correlation is essential once execution crosses process boundaries.",
    "Instrumentation should describe system behavior rather than implementation noise.",
    "Telemetry backends should remain replaceable dependencies.",
  ],

  roadmap: [
    "Define shared telemetry contracts.",
    "Establish semantic conventions.",
    "Implement structured logging primitives.",
    "Introduce metrics instrumentation.",
    "Add distributed tracing support.",
    "Develop context propagation utilities.",
    "Create exporter adapters.",
    "Integrate event and agent execution telemetry.",
    "Develop local diagnostic tooling.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Type-safe telemetry and instrumentation contracts.",
    },
    {
      name: "OpenTelemetry",
      purpose: "Vendor-neutral telemetry conventions and interoperability.",
    },
    {
      name: "Node.js",
      purpose: "Runtime instrumentation for platform services and tooling.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/observability",
      primary: true,
    },
  ],
};
