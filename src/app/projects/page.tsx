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
import { ProjectCard } from "@/features/projects/components/project-card";

export default function ProjectsPage() {
  return (
    <Page>
      <Section>
        <Stack gap="2xl">
          <SectionHeader
            level={1}
            eyebrow="Projects"
            title="Software platforms and engineering case studies."
            description="A collection of software platforms exploring developer experience, AI systems, software architecture, and long-term maintainability."
          />

          {projects.length > 0 ? (
            <Grid gap="lg">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                />
              ))}
            </Grid>
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
