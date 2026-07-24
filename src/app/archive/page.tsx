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
import { ProjectCard } from "@/features/projects/components/project-card";
import { getArchivedProjects } from "@/features/archive";

export default function ArchivePage() {
  const projects = getArchivedProjects();

  return (
    <Page>
      <Section>
        <Stack gap="2xl">
          <SectionHeader
            level={1}
            eyebrow="Archive"
            title="Past projects and experiments."
            description="Projects that are no longer actively developed but remain part of the engineering record."
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
                There are no archived projects yet.
              </Text>

              <Link href="/projects">
                <Button>View Projects</Button>
              </Link>
            </Stack>
          )}
        </Stack>
      </Section>
    </Page>
  );
}
