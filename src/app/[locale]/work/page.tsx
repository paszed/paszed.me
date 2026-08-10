import type { Metadata } from "next";

import { work } from "@/content/work";
import {
  Page,
  PageHeader,
  Section,
  Stack,
  Text,
} from "@/design-system";
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

  const featuredProjects = work.filter(
    (project) => project.featured,
  );

  return (
    <Page>
      <Stack gap="2xl">
        <PageHeader
          title={content.projects.title}
        >
          <Text
            size="lg"
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.projects.description}
          </Text>
        </PageHeader>

        {work.length === 0 ? (
          <Section>
            <div
              className="
                rounded-2xl
                border
                border-border
                px-6
                py-16
                sm:px-10
                sm:py-20
              "
            >
              <Stack
                gap="md"
                className="max-w-2xl"
              >
                <Text
                  size="sm"
                  muted
                  className="uppercase tracking-[0.3em]"
                >
                  {content.projects.selectedWork}
                </Text>

                <Text
                  as="p"
                  size="lead"
                  className="leading-relaxed"
                >
                  {content.projects.emptyState}
                </Text>

                <Text
                  muted
                  className="max-w-xl leading-relaxed"
                >
                  {content.projects.selectedDescription}
                </Text>
              </Stack>
            </div>
          </Section>
        ) : (
          <>
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
                </Stack>
              </Section>
            )}
          </>
        )}
      </Stack>
    </Page>
  );
}
