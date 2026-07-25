import { projects } from "@/content";
import { getPublishedArticles } from "@/lib/journal";

import type { SearchItem } from "../types/search";

export function createSearchIndex(): SearchItem[] {
  const articles: SearchItem[] =
    getPublishedArticles().map((article) => ({
      id: article.slug,
      title: article.title,
      description: article.description,
      href: `/journal/${article.slug}`,
      category: "Article",
      keywords: [
        ...article.tags,
        article.category,
      ],
    }));

  const projectItems: SearchItem[] =
    projects.map((project) => ({
      id: project.slug,
      title: project.title,
      description: project.summary,
      href: `/projects/${project.slug}`,
      category: "Project",
      keywords: [
        project.category,
        project.tagline,
        ...project.technologies.map(
          (technology) => technology.name,
        ),
      ],
    }));

  const pages: SearchItem[] = [
    {
      id: "about",
      title: "About",
      description: "Learn more about Edvard Pasz.",
      href: "/about",
      category: "Page",
      keywords: [
        "about",
        "bio",
        "engineering",
      ],
    },
    {
      id: "projects",
      title: "Projects",
      description:
        "Browse software projects and engineering case studies.",
      href: "/projects",
      category: "Page",
      keywords: [
        "projects",
        "portfolio",
        "software",
        "engineering",
      ],
    },
    {
      id: "journal",
      title: "Journal",
      description:
        "Read engineering articles and technical writing.",
      href: "/journal",
      category: "Page",
      keywords: [
        "journal",
        "writing",
        "articles",
        "blog",
      ],
    },
    {
      id: "uses",
      title: "Uses",
      description: "Tools, hardware and software.",
      href: "/uses",
      category: "Page",
      keywords: [
        "tools",
        "setup",
        "gear",
      ],
    },
    {
      id: "now",
      title: "Now",
      description:
        "What I'm currently working on.",
      href: "/now",
      category: "Page",
      keywords: [
        "current",
        "focus",
        "now",
      ],
    },
    {
      id: "links",
      title: "Links",
      description:
        "Find external profiles and platforms.",
      href: "/links",
      category: "Page",
      keywords: [
        "social",
        "github",
        "contact",
      ],
    },
  ];

  return [
    ...articles,
    ...projectItems,
    ...pages,
  ];
}
