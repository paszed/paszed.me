import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/shared/project-card";
import {
  Button,
  Section,
  SectionHeader,
  Stack,
} from "@/components/ui";
import { home } from "@/content";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            title={home.featuredProjects.title}
            description={home.featuredProjects.description}
            actions={
              <Link href="/projects">
                <Button>View All Projects</Button>
              </Link>
            }
          />

          <div className="grid gap-8 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                {...project}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
