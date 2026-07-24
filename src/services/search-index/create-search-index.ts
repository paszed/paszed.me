import { projects } from "@/content";
import { getPublishedArticles } from "@/lib/journal";

import type { SearchItem } from "@/features/search/types";

export function createSearchIndex(): SearchItem[] {
  const articles: SearchItem[] =
    getPublishedArticles().map((article) => ({
      id: article.slug,
      title: article.title,
      description: article.description,
      href: `/journal/${article.slug}`,
      category: "Article",
      keywords: article.tags,
    }));

  const projectItems: SearchItem[] =
    projects.map((project) => ({
      id: project.slug,
      title: project.title,
      description: project.summary,
      href: `/projects/${project.slug}`,
      category: "Project",
      keywords: project.technologies.map(
        (technology) => technology.name,
      ),
    }));

  const pages: SearchItem[] = [
    {
      id: "about",
      title: "About",
      description: "Learn more about Edvard Pasz.",
      href: "/about",
      category: "Page",
      keywords: ["about", "bio", "engineering"],
    },
    {
      id: "uses",
      title: "Uses",
      description: "Tools, hardware and software.",
      href: "/uses",
      category: "Page",
      keywords: ["tools", "setup", "gear"],
    },
    {
      id: "now",
      title: "Now",
      description: "What I'm currently working on.",
      href: "/now",
      category: "Page",
      keywords: ["current", "focus", "now"],
    },
  ];

  return [
    ...articles,
    ...projectItems,
    ...pages,
  ];
}
