import Link from "next/link";

import {
  Cluster,
  Grid,
  Heading,
  Page,
  Section,
  SectionHeader,
  Stack,
  StatusBadge,
  Text,
} from "@/design-system";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/features/projects";
import { PROJECT_STATUS } from "@/features/projects/lib";
import type {
  Project,
  ProjectCategory,
} from "@/types/project";

interface ProjectCategoryDefinition {
  category: ProjectCategory;
  title: string;
  description: string;
}

const projectCategories: readonly ProjectCategoryDefinition[] = [
  {
    category: "platform-infrastructure",
    title: "Platform Infrastructure",
    description:
      "Foundational services for identity, events, observability, and reliable system verification.",
  },
  {
    category: "reusable-capabilities",
    title: "Reusable Capabilities",
    description:
      "Composable systems that provide shared product and platform capabilities across applications.",
  },
  {
    category: "engineering-environment",
    title: "Engineering Environment",
    description:
      "Development tooling, standards, workflows, and infrastructure that shape how software is built.",
  },
  {
    category: "ai-orchestration",
    title: "AI & Orchestration",
    description:
      "Infrastructure for governed, distributed, and composable AI systems.",
  },
  {
    category: "applications",
    title: "Applications",
    description:
      "Software built on top of the shared engineering and platform foundations.",
  },
];

function getProjectsByCategory(
  category: ProjectCategory,
): readonly Project[] {
  return projects.filter(
    (project) => project.category === category,
  );
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  const categories = projectCategories.map((definition) => ({
    ...definition,
    projects: getProjectsByCategory(definition.category),
  }));

  return (
    <Page className="space-y-20">
      <SectionHeader
        level={1}
        centered
        eyebrow="Projects"
        title="Software platforms and engineering case studies."
        description="A collection of interconnected projects spanning developer infrastructure, reusable platform capabilities, AI systems, and applications."
      />

      {featuredProjects.length > 0 && (
        <Section>
          <Stack gap="xl">
            <Stack gap="sm">
              <Text
                size="sm"
                muted
                className="uppercase tracking-[0.3em]"
              >
                Featured
              </Text>

              <Heading as="h2">
                Selected projects.
              </Heading>

              <Text
                muted
                className="max-w-2xl leading-relaxed"
              >
                A selection of projects representing the core
                areas of the broader engineering ecosystem.
              </Text>
            </Stack>

            <Grid gap="lg">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                />
              ))}
            </Grid>
          </Stack>
        </Section>
      )}

      <Section>
        <Stack gap="2xl">
          <Stack gap="sm">
            <Text
              size="sm"
              muted
              className="uppercase tracking-[0.3em]"
            >
              Project Index
            </Text>

            <Heading as="h2">
              An index of the projects.
            </Heading>

            <Text
              muted
              className="max-w-2xl leading-relaxed"
            >
              {projects.length} projects across{" "}
              {categories.length} areas, organized by their
              role within the wider engineering ecosystem.
            </Text>
          </Stack>

          <div>
            {categories.map((category, index) => (
              <Link
                key={category.category}
                href={`#${category.category}`}
                className="group block border-t border-border py-6 last:border-b"
              >
                <div className="grid gap-3 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:items-start md:gap-6">
                  <Text
                    size="sm"
                    muted
                    className="font-mono"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>

                  <Stack
                    gap="sm"
                    className="!space-y-2"
                  >
                    <Heading
                      as="h3"
                      className="transition-colors group-hover:text-accent"
                    >
                      {category.title}
                    </Heading>

                    <Text
                      muted
                      className="max-w-2xl leading-relaxed"
                    >
                      {category.description}
                    </Text>
                  </Stack>

                  <Text
                    size="sm"
                    muted
                    className="whitespace-nowrap md:pt-1"
                  >
                    {category.projects.length}{" "}
                    {category.projects.length === 1
                      ? "project"
                      : "projects"}
                  </Text>
                </div>
              </Link>
            ))}
          </div>
        </Stack>
      </Section>

      {categories.map((category, index) => {
        if (category.projects.length === 0) {
          return null;
        }

        return (
          <Section key={category.category}>
            <div
              id={category.category}
              className="scroll-mt-24"
            >
              <Stack gap="xl">
                <div className="grid gap-4 border-b border-border pb-8 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:items-end md:gap-6">
                  <Text
                    size="sm"
                    muted
                    className="font-mono"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>

                  <Stack gap="sm">
                    <Heading as="h2">
                      {category.title}
                    </Heading>

                    <Text
                      muted
                      className="max-w-2xl leading-relaxed"
                    >
                      {category.description}
                    </Text>
                  </Stack>

                  <Text
                    size="sm"
                    muted
                    className="whitespace-nowrap"
                  >
                    {category.projects.length}{" "}
                    {category.projects.length === 1
                      ? "project"
                      : "projects"}
                  </Text>
                </div>

                <div>
                  {category.projects.map((project) => {
                    const statusConfig =
                      PROJECT_STATUS[project.status];

                    return (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block border-b border-border py-5"
                      >
                        <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
                          <Stack
                            gap="sm"
                            className="!space-y-1"
                          >
                            <Text
                              as="span"
                              className="font-medium transition-colors group-hover:text-accent"
                            >
                              {project.title}
                            </Text>

                            <Text
                              size="sm"
                              muted
                              className="max-w-2xl leading-relaxed"
                            >
                              {project.tagline}
                            </Text>
                          </Stack>

                          <Cluster
                            gap="sm"
                            className="text-fg-muted"
                          >
                            <StatusBadge
                              tone={statusConfig.tone}
                            >
                              {statusConfig.label}
                            </StatusBadge>

                            <Text
                              size="sm"
                              muted
                            >
                              {project.started}
                            </Text>
                          </Cluster>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Stack>
            </div>
          </Section>
        );
      })}
    </Page>
  );
}
