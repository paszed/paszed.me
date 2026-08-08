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
import { getDictionary } from "@/i18n/get-dictionary";
import { getArchivedProjects } from "@/features/archive";
import { ProjectCard } from "@/features/projects";

export default function ArchivePage() {
  const projects = getArchivedProjects();
  const content = getDictionary("en");

  return (
    <Page>
      <Section>
        <Stack gap="xl">
          <SectionHeader
            title="Archive"
          />

          {projects.length > 0 ? (
            <Grid gap="lg">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  readLabel={
                    content.projects.card.readLabel
                  }
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
                <Button>
                  View Projects
                </Button>
              </Link>
            </Stack>
          )}
        </Stack>
      </Section>
    </Page>
  );
}
