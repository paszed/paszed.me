import Link from "next/link";

import {
  Button,
  Grid,
  Page,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/features/projects";
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
    category: "engineering-environment",
    title: "Engineering Environment",
    description:
      "Development tooling, standards, workflows, and infrastructure that shape how software is built.",
  },
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
  return (
    <Page>
      <Section>
        <Stack gap="2xl">
          <SectionHeader
            level={1}
            eyebrow="Projects"
            title="Software platforms and engineering case studies."
            description="A collection of interconnected projects spanning developer infrastructure, reusable platform capabilities, AI systems, and applications."
          />

          {projects.length > 0 ? (
            <Stack gap="2xl">
              {projectCategories.map(
                ({ category, title, description }) => {
                  const categoryProjects =
                    getProjectsByCategory(category);

                  if (categoryProjects.length === 0) {
                    return null;
                  }

                  return (
                    <Stack
                      key={category}
                      gap="xl"
                    >
                      <SectionHeader
                        title={title}
                        description={description}
                      />

                      <Grid gap="lg">
                        {categoryProjects.map((project) => (
                          <ProjectCard
                            key={project.slug}
                            {...project}
                          />
                        ))}
                      </Grid>
                    </Stack>
                  );
                },
              )}
            </Stack>
          ) : (
            <Stack
              gap="lg"
              className="items-start"
            >
              <Text
                muted
                className="max-w-2xl"
              >
                Projects will be published here as they are documented.
              </Text>

              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
            </Stack>
          )}
        </Stack>
      </Section>
    </Page>
  );
}
