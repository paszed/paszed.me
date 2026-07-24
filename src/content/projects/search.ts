import type { Project } from "@/types/project";

export const search: Project = {
  slug: "search",

  title: "Search",

  tagline:
    "Reusable search infrastructure for applications, documentation, and structured content.",

  summary:
    "A framework-agnostic search platform for indexing, querying, ranking, and discovering structured content.",

  featured: false,

  status: "building",

  started: 2026,

  overview: [
    "Search is designed as reusable infrastructure rather than a feature tied to a single application.",

    "It provides the foundations for indexing structured content, grouping results, and delivering fast, relevant search experiences across documentation, blogs, project pages, and future applications.",

    "Instead of every project implementing search differently, the repository establishes a consistent search foundation that can be reused across applications.",
  ],

  problem: [
    "Search is often introduced late and tightly coupled to a specific user interface.",
    "Applications repeatedly implement similar indexing, filtering, and ranking logic.",
    "Search behavior becomes difficult to reuse or improve consistently across projects.",
    "Content discovery becomes increasingly difficult as applications accumulate more structured information.",
  ],

  principles: [
    "Treat search as infrastructure rather than a UI widget.",
    "Keep indexing independent from presentation.",
    "Use structured metadata to improve relevance.",
    "Keep the core framework-agnostic and reusable.",
    "Prefer predictable ranking behavior over unnecessary complexity.",
  ],

  architecture: {
    description: [
      "Search is divided into independent stages for indexing, querying, ranking, and presentation.",
      "Applications provide structured content while the search layer transforms it into a consistent searchable representation.",
      "The search engine remains independent from individual interfaces so multiple consumers can share the same underlying infrastructure.",
      "Typed boundaries keep indexed documents, queries, and results predictable as the system evolves.",
    ],
  },

  capabilities: [
    "Search indexing.",
    "Full-text querying.",
    "Result ranking.",
    "Content grouping.",
    "Match highlighting.",
    "Metadata indexing.",
    "Typed search interfaces.",
    "Framework-independent search utilities.",
  ],

  engineering: [
    "Type-safe APIs.",
    "Modular architecture.",
    "Framework independence.",
    "Reusable indexing pipelines.",
    "Deterministic ranking behavior.",
    "Testable search primitives.",
    "Extensible search strategies.",
  ],

  challenges: [
    "Designing a generic search model without losing useful domain-specific metadata.",
    "Keeping ranking behavior understandable as additional signals are introduced.",
    "Separating reusable search infrastructure from application-specific presentation.",
    "Supporting richer search capabilities without prematurely introducing external infrastructure.",
  ],

  lessons: [
    "Search is infrastructure, not a widget.",
    "Good metadata produces better search.",
    "Separating indexing from presentation makes search significantly easier to reuse.",
    "Simple and predictable ranking is often more useful than opaque sophistication.",
  ],

  roadmap: [
    "Expand ranking and relevance strategies.",
    "Support richer metadata and filtering.",
    "Add incremental indexing capabilities.",
    "Improve query matching and highlighting.",
    "Extract additional reusable search primitives as real applications require them.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Primary language and type-safe search interfaces.",
    },
    {
      name: "Node.js",
      purpose: "Runtime for indexing and search tooling.",
    },
    {
      name: "JSON",
      purpose: "Portable representation for structured searchable content.",
    },
    {
      name: "Vitest",
      purpose: "Testing ranking, indexing, and query behavior.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/search",
      primary: true,
    },
  ],
};
