import { describe, expect, it } from "vitest";

import { site } from "@/config/site";
import type { Project } from "@/types/project";

import {
  createBreadcrumbSchema,
  createMetadata,
  createOrganizationSchema,
  createPersonSchema,
  createProjectSchema,
  createWebsiteSchema,
} from "./index";

describe("SEO", () => {
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
    it("creates localized metadata using its defaults", () => {
      const metadata = createMetadata({
        title: "Home",
        description: "Alapworks home",
        locale: "en",
      });

      expect(metadata).toEqual({
        title: "Home",
        description: "Alapworks home",
        alternates: {
          canonical: `${site.url}/en`,
          languages: {
            en: `${site.url}/en`,
            de: `${site.url}/de`,
            hu: `${site.url}/hu`,
          },
        },
        openGraph: {
          type: "website",
          url: `${site.url}/en`,
          siteName: site.name,
          title: "Home",
          description: "Alapworks home",
          locale: "en_US",
          images: [
            {
              url: `${site.url}${site.ogImage}`,
              width: 1200,
              height: 630,
              alt: "Home",
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: "Home",
          description: "Alapworks home",
          images: [
            `${site.url}${site.ogImage}`,
          ],
        },
      });
    });

    it("supports custom localized metadata options", () => {
      const metadata = createMetadata({
        title: "Article",
        description: "Article description",
        locale: "de",
        path: "/journal/article",
        image: "/custom-og.png",
        type: "article",
      });

      expect(metadata).toMatchObject({
        alternates: {
          canonical:
            `${site.url}/de/journal/article`,
          languages: {
            en:
              `${site.url}/en/journal/article`,
            de:
              `${site.url}/de/journal/article`,
            hu:
              `${site.url}/hu/journal/article`,
          },
        },
        openGraph: {
          type: "article",
          url:
            `${site.url}/de/journal/article`,
          locale: "de_DE",
          images: [
            {
              url:
                `${site.url}/custom-og.png`,
            },
          ],
        },
        twitter: {
          images: [
            `${site.url}/custom-og.png`,
          ],
        },
      });
    });

    it("supports absolute image URLs", () => {
      const image =
        "https://example.com/custom-og.png";

      const metadata = createMetadata({
        title: "External Image",
        description:
          "Metadata with external image",
        locale: "hu",
        image,
      });

      expect(metadata).toMatchObject({
        openGraph: {
          url: `${site.url}/hu`,
          locale: "hu_HU",
          images: [
            {
              url: image,
            },
          ],
        },
        twitter: {
          images: [image],
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
    it("creates person structured data from explicit person data", () => {
      const person = {
        name: "Edvard Pasz",
        url: "https://paszed.me",
        email: "edvard@paszed.me",
        image: "https://paszed.me/avatar.png",
        sameAs: [
          "https://github.com/paszed",
          "https://linkedin.com/in/paszed",
          "https://x.com/paszed",
        ],
        jobTitle: "Software Engineer",
        knowsAbout: [
          "Software Engineering",
          "Artificial Intelligence",
          "TypeScript",
          "Next.js",
          "React",
        ],
      };

      const schema = createPersonSchema(person);

      expect(schema).toEqual({
        "@context": "https://schema.org",
        "@type": "Person",
        name: person.name,
        url: person.url,
        email: person.email,
        image: person.image,
        sameAs: person.sameAs,
        jobTitle: person.jobTitle,
        knowsAbout: person.knowsAbout,
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

    it("supports a person with only required data", () => {
      const person = {
        name: "Tom",
      };

      expect(
        createPersonSchema(person),
      ).toEqual({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Tom",
      });
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
          href:
            "https://github.com/example/project",
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

    it("recognizes live demo and repository link labels", () => {
      const project = createProject([
        {
          label: "Live Demo",
          href: "https://demo.example.com",
        },
        {
          label: "Repository",
          href:
            "https://example.com/repository",
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

    it("recognizes a demo link label", () => {
      const project = createProject([
        {
          label: "Demo",
          href: "https://demo.example.com",
        },
      ]);

      expect(
        createProjectSchema(project),
      ).toMatchObject({
        url: "https://demo.example.com",
        sameAs: "https://demo.example.com",
      });
    });

    it("recognizes website labels case-insensitively", () => {
      const project = createProject([
        {
          label: "WEBSITE",
          href: "https://example.com",
        },
      ]);

      expect(
        createProjectSchema(project),
      ).toMatchObject({
        url: "https://example.com",
        sameAs: "https://example.com",
      });
    });

    it("falls back to the localized project URL when links are absent", () => {
      const project = createProject([]);

      const schema =
        createProjectSchema(project);

      expect(schema).toMatchObject({
        url:
          `${site.url}/en/projects/bootstrapper`,
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
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      });
    });
  });
});
