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
  eyebrow: string;
  title: string;
  description: string;
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
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
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
