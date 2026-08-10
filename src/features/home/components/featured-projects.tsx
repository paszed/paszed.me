import Link from "next/link";

import { work } from "@/content/work";
import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";
import { WorkCard } from "@/features/work";

interface FeaturedProjectsContent {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  emptyState: string;
  readLabel: string;
}

interface FeaturedProjectsProps {
  content: FeaturedProjectsContent;
}

export function FeaturedProjects({
  content,
}: FeaturedProjectsProps) {
  const featuredProjects = work.filter(
    (project) => project.featured,
  );

  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          {featuredProjects.length > 0 ? (
            <>
              <Grid gap="lg">
                {featuredProjects.map((project) => (
                  <WorkCard
                    key={project.slug}
                    {...project}
                    headingLevel="h3"
                    readLabel={content.readLabel}
                  />
                ))}
              </Grid>

              <Link
                href="/work"
                className="
                  w-fit
                  text-sm
                  font-medium
                  text-fg-secondary
                  transition-colors
                  duration-200
                  hover:text-fg
                "
              >
                {content.actionLabel}
                <span
                  aria-hidden="true"
                  className="ml-2"
                >
                  →
                </span>
              </Link>
            </>
          ) : (
            <div
              className="
                rounded-2xl
                border
                border-dashed
                border-border
                px-6
                py-12
                text-center
              "
            >
              <p className="text-sm text-fg-muted">
                {content.emptyState}
              </p>
            </div>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
