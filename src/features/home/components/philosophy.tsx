import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";

import { FeatureCard } from "./feature-card";

interface PhilosophyItem {
  title: string;
  description: string;
}

interface PhilosophyContent {
  title: string;
  items: readonly PhilosophyItem[];
}

interface PhilosophyProps {
  content: PhilosophyContent;
}

export function Philosophy({
  content,
}: PhilosophyProps) {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Approach"
            title={content.title}
            description="How I approach building software with reliability, clarity, and long-term maintainability."
          />

          <Grid
            columns={3}
            gap="lg"
          >
            {content.items.map((principle) => (
              <FeatureCard
                key={principle.title}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
