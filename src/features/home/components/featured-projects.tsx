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
  content: HomeFeaturedProjects;
}

export function FeaturedProjects({
  content,
}: FeaturedProjectsProps) {
  const projects = getFeaturedProjects();

  return (
    <Section>
      <Container>
        <Stack gap="lg">
          <SectionHeader
            eyebrow="Selected Work"
            title={content.title}
            description={content.description}
            actions={
              <Link href="/projects">
                <Button variant="outline">
                  View All Projects
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
                />
              ))}
            </Grid>
          ) : (
            <Text muted>
              Projects are being prepared.
            </Text>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
