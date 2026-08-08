import Link from "next/link";

import {
  Button,
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import type { HomeFeaturedProjects } from "@/features/home/types";
import { ProjectCard } from "@/features/projects";
import { getFeaturedProjects } from "@/lib/projects";

interface FeaturedProjectsProps {
  content: HomeFeaturedProjects & {
    readLabel: string;
  };
}

export function FeaturedProjects({
  content,
}: FeaturedProjectsProps) {
  const projects = getFeaturedProjects();

  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            actions={

              <Link href="/projects">
  <Button>
    {content.actionLabel}
  </Button>
</Link>
            }
          />

          {projects.length > 0 ? (
            <Grid
              columns={2}
              gap="lg"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  readLabel={content.readLabel}
                />
              ))}
            </Grid>
          ) : (
            <Text muted>
              {content.emptyState}
            </Text>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
