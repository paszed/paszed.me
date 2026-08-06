import {
  Grid,
  Heading,
  Page,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/features/projects";

export default function ProjectsPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <Page className="space-y-20">
      <SectionHeader
        level={1}
        centered
        eyebrow="Projects"
        title="Software systems, products, and engineering case studies."
        description="A collection of projects showing how I approach architecture, product development, automation, and building reliable software from the ground up."
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
                Selected Work
              </Text>

              <Heading as="h2">
                Featured projects.
              </Heading>

              <Text
                muted
                className="max-w-2xl leading-relaxed"
              >
                Projects that demonstrate technical depth, product thinking,
                and the ability to turn complex requirements into working
                software.
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
        <Stack gap="xl">
          <Stack gap="sm">
            <Text
              size="sm"
              muted
              className="uppercase tracking-[0.3em]"
            >
              All Projects
            </Text>

            <Heading as="h2">
              Engineering portfolio.
            </Heading>

            <Text
              muted
              className="max-w-2xl leading-relaxed"
            >
              A collection of applications, tools, and systems built around
              solving real technical problems.
            </Text>
          </Stack>

          <Grid gap="lg">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                {...project}
              />
            ))}
          </Grid>
        </Stack>
      </Section>
    </Page>
  );
}
