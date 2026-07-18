import type { Project } from "@/types/project";

export const trustPlatform: Project = {
  slug: "trust-platform",

  title: "Trust Platform",

  tagline:
    "An event-driven Trust & Safety platform for building transparent, explainable moderation systems.",

  summary:
    "Infrastructure for moderation, reputation and trust in modern online communities.",

  featured: true,

  status: "research",

  started: 2026,

  overview: [
    "Trust Platform explores how modern online communities can build safer, more transparent moderation systems without relying on opaque decision making. Rather than treating moderation as a collection of isolated features, the project approaches Trust & Safety as a dedicated platform with reusable services, policies and workflows.",

    "The architecture is event-driven, allowing moderation decisions, investigations and policy enforcement to evolve independently while maintaining a complete audit trail. Every decision is supported by evidence and designed to be explainable to both moderators and users.",

    "Although still in the research and design phase, the project establishes the architectural foundation for scalable Trust & Safety systems that can be adapted to different communities and products.",
  ],

  problem: [
    "Moderation systems are often tightly coupled to individual products.",
    "Automated decisions frequently lack transparency and explainability.",
    "Evidence is fragmented across different services.",
    "Policy changes become difficult as platforms grow.",
    "Human moderation workflows are rarely treated as first-class engineering problems.",
  ],

  principles: [
    "Transparency over black-box automation.",
    "Evidence before enforcement.",
    "Humans remain part of high-impact decisions.",
    "Policies should be versioned and independently deployable.",
    "Every moderation action should be auditable.",
    "The platform should remain extensible through events and plugins.",
  ],

  architecture: {
    description: [
      "An event-driven architecture separates moderation workflows into independent services.",
      "Evidence, policies, investigations and risk assessment communicate through events rather than direct dependencies.",
      "Plugins allow products to extend the platform without modifying its core.",
      "Complete audit trails improve transparency and operational insight.",
    ],
    diagram: `
User Activity
      │
      ▼
Event Bus
      │
 ┌────┼────┐
 ▼    ▼    ▼
Risk Policy Evidence
Engine Engine Store
      │
      ▼
Investigation
      │
      ▼
Moderator Decision
`,
  },

  capabilities: [
    "Event-driven moderation workflows.",
    "Policy evaluation.",
    "Evidence collection.",
    "Risk assessment.",
    "Investigation management.",
    "Plugin architecture.",
    "Moderator cockpit.",
    "Audit history.",
    "Explainable decision making.",
    "AI-assisted moderation.",
  ],

  engineering: [
    "The platform treats Trust & Safety as infrastructure rather than application logic.",
    "Event-driven communication reduces coupling between moderation services.",
    "Policies remain independent from implementation details.",
    "Evidence is preserved to improve accountability and future investigations.",
    "AI assists moderators without replacing human judgment.",
  ],

  challenges: [
    "Balancing automation with human oversight.",
    "Designing explainable AI-assisted workflows.",
    "Supporting diverse moderation policies across different communities.",
    "Maintaining scalability while preserving complete auditability.",
  ],

  lessons: [
    "Trust cannot be treated as a single feature—it emerges from consistent, explainable systems.",
    "Transparent architecture improves both developer experience and user confidence.",
    "Event-driven systems naturally support evolving moderation policies.",
    "The most valuable moderation platforms augment human decision making rather than replacing it.",
  ],

  roadmap: [
    "Build the event infrastructure.",
    "Implement the policy engine.",
    "Develop the evidence store.",
    "Create the moderator cockpit.",
    "Integrate AI-assisted investigations.",
    "Support reputation and trust scoring.",
    "Publish architectural documentation.",
  ],

  technologies: [
    {
      name: "TypeScript",
      purpose: "Platform implementation.",
    },
    {
      name: "PostgreSQL",
      purpose: "Persistent storage and audit history.",
    },
    {
      name: "Redis",
      purpose: "Event processing and caching.",
    },
    {
      name: "OpenAI",
      purpose: "AI-assisted moderation workflows.",
    },
    {
      name: "Docker",
      purpose: "Local development and deployment.",
    },
  ],

  gallery: [],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/paszed/trust-platform",
      primary: true,
    },
  ],
};
