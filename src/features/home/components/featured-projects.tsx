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
import { home } from "@/content";
import { ProjectCard } from "@/features/projects";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Selected Work"
            title={home.featuredProjects.title}
            description={home.featuredProjects.description}
            actions={
              <Link href="/projects">
                <Button>
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
