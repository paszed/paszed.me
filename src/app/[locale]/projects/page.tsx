import type { Metadata } from "next";

import {
  Grid,
  Page,
  PageHeader,
  Section,
  Stack,
  Text,
} from "@/design-system";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/features/projects";
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
    title: content.projects.title,
    description: content.projects.description,
  };
}

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
  const { locale } = await params;

  const content = getDictionary(locale);

  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <Page>
      <Stack className="space-y-16 sm:space-y-20">
        <PageHeader
          title={content.projects.title}
        >
          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.projects.description}
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
                  {content.projects.selectedWork}
                </Text>

                <Text
                  muted
                  className="max-w-2xl leading-relaxed"
                >
                  {
                    content.projects
                      .selectedDescription
                  }
                </Text>
              </Stack>

              <Grid gap="lg">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    {...project}
                    headingLevel="h2"
                    readLabel={
                      content.projects.card
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
                {content.projects.allProjects}
              </Text>

              <Text
                muted
                className="max-w-2xl leading-relaxed"
              >
                {content.projects.portfolio}
              </Text>
            </Stack>

            <Grid gap="lg">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  headingLevel="h2"
                  readLabel={
                    content.projects.card
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
