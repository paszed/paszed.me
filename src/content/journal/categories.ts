import type { JournalCategory } from "@/types/journal";

export interface JournalCategoryDefinition {
  category: JournalCategory;
  slug: string;
  description: string;
}

export const journalCategories = [
  {
    category: "Engineering",
    slug: "engineering",
    description:
      "Software quality, maintainability, documentation, and the foundations of engineering practice.",
  },
  {
    category: "Architecture",
    slug: "architecture",
    description:
      "Boundaries, complexity, modularity, and the structures that allow software to evolve.",
  },
  {
    category: "Development",
    slug: "development",
    description:
      "Developer tooling, workflows, build systems, testing, and the mechanics of shipping software.",
  },
  {
    category: "Design",
    slug: "design",
    description:
      "Interfaces, design systems, APIs, and the decisions that make software coherent.",
  },
  {
    category: "Infrastructure",
    slug: "infrastructure",
    description:
      "Platforms, abstractions, shared capabilities, and infrastructure that compounds over time.",
  },
  {
    category: "Distributed Systems",
    slug: "distributed-systems",
    description:
      "Coordination, consistency, failure, state, time, and computation across machines.",
  },
  {
    category: "Platform Engineering",
    slug: "platform-engineering",
    description:
      "Internal platforms, developer experience, self-service, and reducing organizational complexity.",
  },
  {
    category: "Product Engineering",
    slug: "product-engineering",
    description:
      "Reliability, iteration, technical trade-offs, and engineering software as a product.",
  },
  {
    category: "Engineering Leadership",
    slug: "engineering-leadership",
    description:
      "Technical judgment, ownership, feedback, culture, and engineering organizations.",
  },
  {
    category: "AI",
    slug: "ai",
    description:
      "Artificial intelligence, agents, collaborative intelligence, and the changing shape of software.",
  },
  {
    category: "Systems",
    slug: "systems",
    description:
      "System behavior, constraints, interfaces, and reasoning about software as interconnected parts.",
  },
  {
    category: "Philosophy",
    slug: "philosophy",
    description:
      "Lea[118;1:3urning, building, curiosity, judgment, and the principles behind engineering practice.",
  },
  {
    category: "Career",
    slug: "career",
    description:
      "Craft, reputation, learning, opportunity, and building an engineering career over time.",
  },
] as const satisfies readonly JournalCategoryDefinition[];
