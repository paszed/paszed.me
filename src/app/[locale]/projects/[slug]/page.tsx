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
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
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
    locale: Locale;
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
  const { locale, slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/${locale}/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { locale, slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = getDictionary(locale);

  const sections = [
    {
      title: content.projects.sections.problem,
      items: project.problem,
    },
    {
      title: content.projects.sections.principles,
      items: project.principles,
    },
    {
      title: content.projects.sections.capabilities,
      items: project.capabilities,
    },
    {
      title: content.projects.sections.engineering,
      items: project.engineering,
    },
    {
      title: content.projects.sections.challenges,
      items: project.challenges,
    },
    {
      title: content.projects.sections.lessons,
      items: project.lessons,
    },
  ];

  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          {
            name: content.navigation.home,
            path: `/${locale}`,
          },
          {
            name: content.navigation.projects,
            path: `/${locale}/projects`,
          },
          {
            name: project.title,
            path: `/${locale}/projects/${project.slug}`,
          },
        ])}
      />

      <JsonLd
        data={createProjectSchema(project)}
      />

      <Page>
        <Stack className="space-y-16 sm:space-y-20">
          <ProjectHero
            project={project}
            labels={{
              category:
                project.category.replaceAll(
                  "-",
                  " ",
                ),
              started: String(project.started),
            }}
          />

          {project.gallery.length > 0 && (
            <ProjectGallery
              project={project}
              title={
                content.projects.sections.gallery
              }
              imageAlt={
                content.projects.defaults
                  .projectImageAlt
              }
            />
          )}

          <ProjectOverview
            overview={project.overview}
            title={
              content.projects.sections.overview
            }
          />

          <ProjectArchitecture
            project={project}
            title={
              content.projects.sections.architecture
            }
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

          <ProjectTech
            project={project}
            labels={{
              technology:
                content.projects.sections
                  .technology,
              purpose:
                content.projects.sections
                  .purpose,
              technologyPurpose:
                content.projects.defaults
                  .technologyPurpose,
            }}
          />

          {project.roadmap.length > 0 && (
            <ProjectRoadmap
              project={project}
              title={
                content.projects.sections.roadmap
              }
            />
          )}

          {project.links.length > 0 && (
            <ProjectLinks
              project={project}
              title={
                content.projects.sections.links
              }
            />
          )}
        </Stack>
      </Page>
    </>
  );
}
