import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type { Project } from "@/types/project";

const mockedProjects: Project[] = [];

vi.mock("@/content/projects", () => ({
  get projects() {
    return mockedProjects;
  },
}));

import {
  getFeaturedProjects,
  getProjectBySlug,
  getProjects,
  getProjectSlugs,
} from "./index";

describe("projects", () => {
  beforeEach(() => {
    mockedProjects.length = 0;
  });

  describe("getProjects", () => {
    it("returns a new array", () => {
      mockedProjects.push({
        title: "Project",
        slug: "project",
        featured: false,
        started: 2025,
      } as Project);

      expect(getProjects()).not.toBe(
        mockedProjects,
      );
    });

    it("places featured projects first", () => {
      mockedProjects.push(
        {
          title: "Regular",
          slug: "regular",
          featured: false,
          started: 2025,
        } as Project,
        {
          title: "Featured",
          slug: "featured",
          featured: true,
          started: 2024,
        } as Project,
      );

      expect(
        getProjects().map(
          (project) => project.slug,
        ),
      ).toEqual([
        "featured",
        "regular",
      ]);
    });

    it("sorts projects with the same featured state by newest start first", () => {
      mockedProjects.push(
        {
          title: "Older",
          slug: "older",
          featured: false,
          started: 2024,
        } as Project,
        {
          title: "Newer",
          slug: "newer",
          featured: false,
          started: 2025,
        } as Project,
      );

      expect(
        getProjects().map(
          (project) => project.slug,
        ),
      ).toEqual([
        "newer",
        "older",
      ]);
    });

    it("sorts otherwise equal projects alphabetically by title", () => {
      mockedProjects.push(
        {
          title: "Zulu",
          slug: "zulu",
          featured: false,
          started: 2025,
        } as Project,
        {
          title: "Alpha",
          slug: "alpha",
          featured: false,
          started: 2025,
        } as Project,
      );

      expect(
        getProjects().map(
          (project) => project.title,
        ),
      ).toEqual([
        "Alpha",
        "Zulu",
      ]);
    });
  });

  describe("getFeaturedProjects", () => {
    it("returns only featured projects", () => {
      mockedProjects.push(
        {
          title: "Featured",
          slug: "featured",
          featured: true,
          started: 2025,
        } as Project,
        {
          title: "Regular",
          slug: "regular",
          featured: false,
          started: 2025,
        } as Project,
      );

      expect(
        getFeaturedProjects().map(
          (project) => project.slug,
        ),
      ).toEqual(["featured"]);
    });
  });

  describe("getProjectBySlug", () => {
    it("returns the matching project", () => {
      const project = {
        title: "Project",
        slug: "project",
        featured: false,
        started: 2025,
      } as Project;

      mockedProjects.push(project);

      expect(
        getProjectBySlug("project"),
      ).toBe(project);
    });

    it("returns undefined for an unknown slug", () => {
      expect(
        getProjectBySlug("unknown"),
      ).toBeUndefined();
    });
  });

  describe("getProjectSlugs", () => {
    it("returns all project slugs", () => {
      mockedProjects.push(
        {
          title: "Alpha",
          slug: "alpha",
          featured: false,
          started: 2025,
        } as Project,
        {
          title: "Beta",
          slug: "beta",
          featured: false,
          started: 2024,
        } as Project,
      );

      expect(getProjectSlugs()).toEqual([
        "alpha",
        "beta",
      ]);
    });
  });
});
