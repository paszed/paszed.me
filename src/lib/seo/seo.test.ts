import { describe, expect, it } from "vitest";

import { site } from "@/config/site";
import type { JournalEntry } from "@/types/journal";
import type { Project } from "@/types/project";

import {
  createArticleSchema,
  createBreadcrumbSchema,
  createMetadata,
  createOrganizationSchema,
  createPersonSchema,
  createProjectSchema,
  createWebsiteSchema,
} from "./index";

describe("SEO", () => {
  describe("createArticleSchema", () => {
    it("creates article structured data", () => {
      const publishedAt = new Date(
        "2026-01-15T12:00:00.000Z",
      );

      const article = {
        title: "Testing Architecture",
        description: "An article about testing.",
        author: "Edvard Pasz",
        slug: "testing-architecture",
        publishedAt,
      } as JournalEntry;

      expect(
        createArticleSchema(article),
      ).toEqual({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        author: {
          "@type": "Person",
          name: article.author,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        mainEntityOfPage:
          `${site.url}/journal/${article.slug}`,
        url:
          `${site.url}/journal/${article.slug}`,
        image: `${site.url}${site.ogImage}`,
        datePublished:
          publishedAt.toISOString(),
        inLanguage: site.language,
      });
    });

    it("supports articles without a publication date", () => {
      const article = {
        title: "Draft",
        description: "Draft article",
        author: "Edvard Pasz",
        slug: "draft",
      } as JournalEntry;

      expect(
        createArticleSchema(article),
      ).toMatchObject({
        datePublished: undefined,
      });
    });
  });

  describe("createBreadcrumbSchema", () => {
    it("creates ordered breadcrumb structured data", () => {
      expect(
        createBreadcrumbSchema([
          {
            name: "Journal",
            path: "/journal",
          },
          {
            name: "Article",
            path: "/journal/article",
          },
        ]),
      ).toEqual({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Journal",
            item: `${site.url}/journal`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Article",
            item: `${site.url}/journal/article`,
          },
        ],
      });
    });

    it("supports an empty breadcrumb list", () => {
      expect(
        createBreadcrumbSchema([]),
      ).toMatchObject({
        itemListElement: [],
      });
    });
  });

  describe("createMetadata", () => {
    it("creates metadata using its defaults", () => {
      const metadata = createMetadata({
        title: "Home",
        description: "Personal website",
      });

      expect(metadata).toEqual({
        title: "Home",
        description: "Personal website",
        alternates: {
          canonical: "/",
        },
        openGraph: {
          type: "website",
          url: site.url,
          siteName: site.name,
          title: "Home",
          description: "Personal website",
          images: [
            {
              url: site.ogImage,
              width: 1200,
              height: 630,
              alt: "Home",
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: "Home",
          description: "Personal website",
          images: [site.ogImage],
          creator: "@paszed_",
        },
      });
    });

    it("supports custom metadata options", () => {
      const metadata = createMetadata({
        title: "Article",
        description: "Article description",
        path: "/journal/article",
        image: "/custom-og.png",
        type: "article",
      });

      expect(metadata).toMatchObject({
        alternates: {
          canonical: "/journal/article",
        },
        openGraph: {
          type: "article",
          url: `${site.url}/journal/article`,
          images: [
            {
              url: "/custom-og.png",
            },
          ],
        },
        twitter: {
          images: ["/custom-og.png"],
        },
      });
    });
  });

  describe("createOrganizationSchema", () => {
    it("creates organization structured data", () => {
      expect(
        createOrganizationSchema(),
      ).toEqual({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        url: site.url,
        description: site.description,
        logo: `${site.url}${site.ogImage}`,
      });
    });
  });

  describe("createPersonSchema", () => {
    it("creates person structured data", () => {
      const schema = createPersonSchema();

      expect(schema).toMatchObject({
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.owner,
        url: site.url,
        email: site.email,
        image: `${site.url}${site.ogImage}`,
        sameAs: [
          site.social.github,
          site.social.linkedin,
          site.social.x,
        ],
        jobTitle: "Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: site.name,
        },
      });

      expect(schema.knowsAbout).toEqual(
        expect.arrayContaining([
          "Software Engineering",
          "Artificial Intelligence",
          "TypeScript",
          "Next.js",
          "React",
        ]),
      );
    });
  });

  describe("createProjectSchema", () => {
    const createProject = (
      links: Project["links"],
    ): Project => ({
      slug: "bootstrapper",
      title: "Bootstrapper",
      tagline: "Project tagline",
      summary: "Project summary",

      featured: true,
      status: "production",
      started: 2026,
      category: "engineering-environment",

      overview: [],
      problem: [],
      principles: [],

      architecture: {
        description: [],
      },

      capabilities: [],
      engineering: [],
      challenges: [],
      lessons: [],
      roadmap: [],

      technologies: [
        {
          name: "TypeScript",
        },
        {
          name: "React",
        },
      ],

      gallery: [],
      links,
    });

    it("uses the project website and repository when available", () => {
      const project = createProject([
        {
          label: "Website",
          href: "https://example.com",
        },
        {
          label: "GitHub",
          href: "https://github.com/example/project",
        },
      ]);

      const schema =
        createProjectSchema(project);

      expect(schema).toMatchObject({
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: "Bootstrapper",
        description: "Project summary",
        url: "https://example.com",
        codeRepository:
          "https://github.com/example/project",
        sameAs: "https://example.com",
        programmingLanguage: [
          "TypeScript",
          "React",
        ],
        keywords: [
          "TypeScript",
          "React",
        ],
      });
    });

    it("recognizes demo and repository link labels", () => {
      const project = createProject([
        {
          label: "Live Demo",
          href: "https://demo.example.com",
        },
        {
          label: "Repository",
          href: "https://example.com/repository",
        },
      ]);

      expect(
        createProjectSchema(project),
      ).toMatchObject({
        url: "https://demo.example.com",
        sameAs: "https://demo.example.com",
        codeRepository:
          "https://example.com/repository",
      });
    });

    it("falls back to the local project URL when links are absent", () => {
      const project = createProject([]);

      const schema =
        createProjectSchema(project);

      expect(schema).toMatchObject({
        url:
          `${site.url}/projects/bootstrapper`,
      });

      expect(schema).not.toHaveProperty(
        "codeRepository",
      );

      expect(schema).not.toHaveProperty(
        "sameAs",
      );
    });
  });

  describe("createWebsiteSchema", () => {
    it("creates website structured data", () => {
      expect(
        createWebsiteSchema(),
      ).toEqual({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: site.language,
        publisher: {
          "@type": "Person",
          name: site.owner,
        },
      });
    });
  });
});
