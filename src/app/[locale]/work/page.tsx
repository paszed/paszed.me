import type { Metadata } from "next";

import {
  Grid,
  Page,
  PageHeader,
  Section,
  Stack,
  Text,
} from "@/design-system";
import { work } from "@/content/work";
import { WorkCard } from "@/features/work";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface ProjectsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  const content = getDictionary(locale);

  return {
    title: content.work.title,
    description: content.work.description,
  };
}

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  const featuredProjects = work.filter(
    (project) => project.featured,
  );

  return (
    <Page>
      <Stack className="space-y-16 sm:space-y-20">
        <PageHeader
          title={content.work.title}
        >
          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.work.description}
          </Text>
        </PageHeader>

        {featuredProjects.length > 0 && (
          <Section>
            <Stack gap="xl">
              <Stack gap="sm">
                <Text
                  size="sm"
                  muted
                  className="uppercase tracking-[0.3em]"
                >
                  {content.work.selectedWork}
                </Text>

                <Text
                  muted
                  className="max-w-2xl leading-relaxed"
                >
                  {
                    content.work
                      .selectedDescription
                  }
                </Text>
              </Stack>

              <Grid gap="lg">
                {featuredProjects.map((project) => (
                  <WorkCard
                    key={project.slug}
                    {...project}
                    headingLevel="h2"
                    readLabel={
                      content.work.card
                        .readLabel
                    }
                  />
                ))}
              </Grid>
            </Stack>
          </Section>
        )}

        <Section>
          <Stack gap="xl">
            <Stack gap="sm">
              <Text
                size="sm"
                muted
                className="uppercase tracking-[0.3em]"
              >
                {content.work.allProjects}
              </Text>

              <Text
                muted
                className="max-w-2xl leading-relaxed"
              >
                {content.work.portfolio}
              </Text>
            </Stack>

            <Grid gap="lg">
              {work.map((project) => (
                <WorkCard
                  key={project.slug}
                  {...project}
                  headingLevel="h2"
                  readLabel={
                    content.work.card
                      .readLabel
                  }
                />
              ))}
            </Grid>
          </Stack>
        </Section>
      </Stack>
    </Page>
  );
}
