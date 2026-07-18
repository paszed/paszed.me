import Link from "next/link";

import { Page } from "@/components/layout/page";
import { ProjectCard } from "@/components/shared/project-card";
import {
  Button,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/components/ui";
import { projects } from "@/content/projects";

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
            <div className="grid gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                />
              ))}
            </div>
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
                <Button>
                  Back to Home
                </Button>
              </Link>
            </Stack>
          )}
        </Stack>
      </Section>
    </Page>
  );
}
