import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  Page,
  Stack,
} from "@/design-system";
import {
  ProjectArchitecture,
  ProjectGallery,
  ProjectHero,
  ProjectLinks,
  ProjectListSection,
  ProjectOverview,
  ProjectRoadmap,
  ProjectTech,
} from "@/features/projects";
import {
  createBreadcrumbSchema,
  createMetadata,
  createProjectSchema,
  JsonLd,
} from "@/lib/seo";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    {
      title: "Problem",
      items: project.problem,
    },
    {
      title: "Principles",
      items: project.principles,
    },
    {
      title: "Capabilities",
      items: project.capabilities,
    },
    {
      title: "Engineering Decisions",
      items: project.engineering,
    },
    {
      title: "Challenges",
      items: project.challenges,
    },
    {
      title: "Lessons Learned",
      items: project.lessons,
    },
  ];

  return (
    <>
      <JsonLd
        data={createProjectSchema(project)}
      />

      <JsonLd
        data={createBreadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Projects",
            path: "/projects",
          },
          {
            name: project.title,
            path: `/projects/${project.slug}`,
          },
        ])}
      />

      <Page>
        <Stack className="space-y-16 sm:space-y-20">
          <ProjectHero project={project} />

          {project.gallery.length > 0 && (
            <ProjectGallery project={project} />
          )}

          <ProjectOverview
            overview={project.overview}
          />

          <ProjectArchitecture
            project={project}
          />

          {sections.map(
            ({ title, items }) =>
              items.length > 0 && (
                <ProjectListSection
                  key={title}
                  title={title}
                  items={items}
                />
              ),
          )}

          <ProjectTech project={project} />

          {project.roadmap.length > 0 && (
            <ProjectRoadmap project={project} />
          )}

          {project.links.length > 0 && (
            <ProjectLinks project={project} />
          )}
        </Stack>
      </Page>
    </>
  );
}
