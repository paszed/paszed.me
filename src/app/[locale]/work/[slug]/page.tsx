import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  Page,
  Stack,
} from "@/design-system";
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
  createWorkSchema,
  JsonLd,
} from "@/lib/seo";
import {
  getWorkBySlug,
  getWorkSlugs,
} from "@/content/work";

type WorkPageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const work = getWorkBySlug(slug);

  if (!work) {
    return {};
  }

  return createMetadata({
    title: work.title,
    description: work.summary,
    locale,
    path: `/works/${work.slug}`,
    type: "article",
  });
}

export default async function WorkPage({
  params,
}: WorkPageProps) {
  const { locale, slug } = await params;

  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const content = getDictionary(locale);

  const sections = [
    {
      title: content.works.sections.problem,
      items: work.problem,
    },
    {
      title: content.works.sections.principles,
      items: work.principles,
    },
    {
      title: content.works.sections.capabilities,
      items: work.capabilities,
    },
    {
      title: content.works.sections.engineering,
      items: work.engineering,
    },
    {
      title: content.works.sections.challenges,
      items: work.challenges,
    },
    {
      title: content.works.sections.lessons,
      items: work.lessons,
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
            name: content.navigation.work,
            path: `/${locale}/works`,
          },
          {
            name: work.title,
            path: `/${locale}/works/${work.slug}`,
          },
        ])}
      />

      <JsonLd
        data={createWorkSchema(work)}
      />

      <Page>
        <Stack className="space-y-16 sm:space-y-20">
          <WorkHero
            work={work}
            labels={{
              category:
                work.category.replaceAll(
                  "-",
                  " ",
                ),
              started: String(work.started),
            }}
          />

          {work.gallery.length > 0 && (
            <WorkGallery
              work={work}
              title={
                content.works.sections.gallery
              }
              imageAlt={
                content.works.defaults
                  .workImageAlt
              }
            />
          )}

          <WorkOverview
            overview={work.overview}
            title={
              content.works.sections.overview
            }
          />

          <WorkArchitecture
            work={work}
            title={
              content.works.sections.architecture
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
            work={work}
            labels={{
              technology:
                content.works.sections
                  .technology,
              purpose:
                content.works.sections
                  .purpose,
              technologyPurpose:
                content.works.defaults
                  .technologyPurpose,
            }}
          />

          {work.roadmap.length > 0 && (
            <WorkRoadmap
              work={work}
              title={
                content.works.sections.roadmap
              }
            />
          )}

          {work.links.length > 0 && (
            <WorkLinks
              work={work}
              title={
                content.works.sections.links
              }
            />
          )}
        </Stack>
      </Page>
    </>
  );
}
