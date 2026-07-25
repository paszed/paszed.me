import type { Project } from "@/types/project";

export const identity: Project = {
  slug: "identity",

  title: "Identity",

  tagline:
    "Shared identity, authentication, authorization and access-control infrastructure.",

  summary:
    "Composable identity infrastructure that provides consistent primitives for authentication, authorization, principals, sessions and access control across applications and platform services.",

  featured: false,

  status: "building",

  started: 2026,

  category: "platform-infrastructure",

  overview: [
    "Identity provides a shared foundation for representing and controlling access to users, services and other principals across the ecosystem.",

    "Rather than allowing every application to independently define authentication, sessions, roles and permissions, the project establishes reusable contracts and policy boundaries for identity-related concerns.",

    "The goal is not to become an identity provider. Identity provides infrastructure that applications and platform services can compose around external authentication systems and their own domain requirements.",
  ],

  problem: [
    "Authentication and authorization are frequently reimplemented independently across applications.",
    "User identity, service identity and access-control concepts easily become coupled to individual frameworks or providers.",
    "Permission models become difficult to reason about when authorization logic is distributed throughout application code.",
    "Provider-specific identity models can leak into domain architecture.",
    "Security-sensitive behavior requires explicit and auditable boundaries.",
  ],

  principles: [
    "Separate authentication from authorization.",
    "Represent identity through explicit principals.",
    "Keep provider-specific behavior behind adapters.",
    "Apply least privilege by default.",
    "Make access-control decisions explainable.",
    "Prefer capabilities and policies over scattered permission checks.",
    "Treat security boundaries as architecture.",
  ],

  architecture: {
    description: [
      "Identity separates provider-specific authentication from stable internal identity and authorization contracts.",
      "Applications authenticate principals through adapters, establish trusted identity context and evaluate access through explicit policies and permissions.",
      "The architecture allows authentication providers and persistence implementations to change without redefining the identity model used by consuming systems.",
    ],
  },

  capabilities: [
    "Principal representation.",
    "Authentication contracts.",
    "Authorization primitives.",
    "Session abstractions.",
    "Role and permission models.",
    "Policy evaluation.",
    "Service identity.",
    "Provider adapters.",
    "Access-control boundaries.",
    "Audit-friendly authorization decisions.",
  ],

  engineering: [
    "Type-safe identity contracts.",
    "Provider-independent architecture.",
    "Explicit trust boundaries.",
    "Composable authorization primitives.",
    "Least-privilege design.",
    "Framework-independent domain models.",
    "Testable policy evaluation.",
  ],

  challenges: [
    "Keeping authentication providers from becoming application architecture.",
    "Designing authorization primitives that remain reusable without becoming overly generic.",
    "Representing users and services through a coherent principal model.",
    "Maintaining explicit trust boundaries across distributed systems.",
    "Supporting application-specific policies without coupling them to shared infrastructure.",
  ],

  lessons: [
    "Authentication establishes identity; authorization determines capability.",
    "Identity providers should remain replaceable infrastructure dependencies.",
    "Permission checks become easier to reason about when policy boundaries are explicit.",
    "Security abstractions should expose important decisions rather than hide them.",
    "Shared identity infrastructure should provide primitives without owning application-specific policy.",
  ],

  roadmap: [
    "Define the core principal model.",
    "Establish authentication contracts.",
    "Implement authorization primitives.",
    "Introduce session abstractions.",
    "Develop provider adapters.",
    "Add policy evaluation infrastructure.",
    "Introduce service-to-service identity.",
    "Add authorization testing utilities.",
    "Integrate audit and observability capabilities.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Type-safe identity, authorization and policy contracts.",
    },
    {
      name: "OAuth 2.0",
      purpose: "Interoperability with external authorization providers.",
    },
    {
      name: "OpenID Connect",
      purpose: "Standardized authentication and identity integration.",
    },
    {
      name: "JWT",
      purpose: "Portable signed claims where token-based identity is appropriate.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/identity",
      primary: true,
    },
  ],
};
