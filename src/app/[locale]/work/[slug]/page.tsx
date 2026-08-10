import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getWorkBySlug,
  getWorkSlugs,
} from "@/content/work";
import { Page, Stack } from "@/design-system";
import {
  WorkArchitecture,
  WorkGallery,
  WorkHero,
  WorkLinks,
  WorkListSection,
  WorkOverview,
  WorkRoadmap,
  WorkTech,
} from "@/features/work";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  createBreadcrumbSchema,
  createMetadata,
  createProjectSchema,
  JsonLd,
} from "@/lib/seo";

interface WorkPageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getWorkBySlug(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    locale,
    path: `/work/${project.slug}`,
    type: "article",
  });
}

export default async function WorkPage({
  params,
}: WorkPageProps) {
  const { locale, slug } = await params;

  const project = getWorkBySlug(slug);

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
            name: content.navigationLabels.home,
            path: `/${locale}`,
          },
          {
            name: content.navigation.work,
            path: `/${locale}/work`,
          },
          {
            name: project.title,
            path: `/${locale}/work/${project.slug}`,
          },
        ])}
      />

      <JsonLd
        data={createProjectSchema(project)}
      />

      <Page>
        <Stack className="space-y-16 sm:space-y-20">
          <WorkHero
            project={project}
            labels={{
              category: project.category.replaceAll(
                "-",
                " ",
              ),
              started: String(project.started),
            }}
          />

          {project.gallery.length > 0 && (
            <WorkGallery
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

          <WorkOverview
            overview={project.overview}
            title={
              content.projects.sections.overview
            }
          />

          <WorkArchitecture
            project={project}
            title={
              content.projects.sections
                .architecture
            }
          />

          {sections.map(
            ({ title, items }) =>
              items.length > 0 && (
                <WorkListSection
                  key={title}
                  title={title}
                  items={items}
                />
              ),
          )}

          <WorkTech
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
            <WorkRoadmap
              project={project}
              title={
                content.projects.sections
                  .roadmap
              }
            />
          )}

          {project.links.length > 0 && (
            <WorkLinks
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
