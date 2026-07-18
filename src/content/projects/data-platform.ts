import type { Project } from "@/types/project";

export const dataPlatform: Project = {
  slug: "data-platform",

  title: "Data Platform",

  tagline:
    "A unified data layer for connecting, transforming and serving information across distributed systems.",

  summary:
    "Infrastructure for ingesting, normalizing and exposing data through a consistent platform.",

  featured: true,

  status: "research",

  started: 2026,

  overview: [
    "Data Platform explores how applications can consume information from multiple systems without becoming tightly coupled to individual APIs or storage technologies. Instead of allowing each application to implement its own integrations, the platform provides a unified layer for ingestion, transformation and distribution.",

    "The platform is designed around reusable data pipelines that normalize information before making it available to downstream services. This approach improves consistency, simplifies integrations and creates a single source of truth for applications consuming shared data.",

    "Although currently in the research phase, the project establishes the architectural foundation for scalable data integration across multiple platforms and services.",
  ],

  problem: [
    "Applications repeatedly integrate with the same external services.",
    "Data formats differ between providers.",
    "Business logic becomes tightly coupled to third-party APIs.",
    "Synchronization and consistency become increasingly difficult as systems grow.",
    "There is often no single source of truth across applications.",
  ],

  principles: [
    "Normalize data before consumption.",
    "Separate ingestion from business logic.",
    "Prefer event-driven synchronization where appropriate.",
    "Design integrations as reusable platform capabilities.",
    "Treat data quality as a platform responsibility.",
    "Build observable pipelines from day one.",
  ],

  architecture: {
    description: [
      "Data is collected from external and internal sources through dedicated connectors.",
      "Transformation pipelines normalize and enrich incoming data.",
      "Validated datasets are stored and exposed through stable APIs.",
      "Applications consume the platform instead of integrating directly with individual providers.",
    ],
    diagram: `
External Sources
        │
        ▼
 Connectors
        │
        ▼
Transformation
        │
        ▼
 Storage Layer
        │
        ▼
 Platform APIs
        │
        ▼
 Applications
`,
  },

  capabilities: [
    "Data ingestion.",
    "Normalization pipelines.",
    "Data transformation.",
    "Provider connectors.",
    "Synchronization workflows.",
    "Unified APIs.",
    "Schema validation.",
    "Data quality monitoring.",
    "Event-driven processing.",
    "Reusable integration framework.",
  ],

  engineering: [
    "Connectors remain isolated from application logic.",
    "Transformation pipelines are composable and reusable.",
    "Platform APIs provide stable contracts regardless of underlying providers.",
    "Observability is integrated throughout the ingestion lifecycle.",
    "The architecture favors extensibility as new data sources are introduced.",
  ],

  challenges: [
    "Supporting heterogeneous data sources.",
    "Maintaining consistency across asynchronous pipelines.",
    "Balancing flexibility with standardized schemas.",
    "Designing resilient synchronization strategies.",
  ],

  lessons: [
    "Applications become simpler when integration complexity is centralized.",
    "Normalized data enables faster product development.",
    "Stable interfaces are more valuable than provider-specific optimizations.",
    "Observability is essential for reliable data platforms.",
  ],

  roadmap: [
    "Implement connector framework.",
    "Build transformation pipeline engine.",
    "Develop synchronization services.",
    "Add monitoring and alerting.",
    "Introduce schema versioning.",
    "Expand supported providers.",
    "Publish developer SDKs.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Platform implementation.",
    },
    {
      name: "PostgreSQL",
      purpose: "Persistent data storage.",
    },
    {
      name: "Redis",
      purpose: "Caching and event processing.",
    },
    {
      name: "Docker",
      purpose: "Containerized services.",
    },
    {
      name: "OpenAPI",
      purpose: "API contracts and documentation.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/data-platform",
      primary: true,
    },
  ],
};
