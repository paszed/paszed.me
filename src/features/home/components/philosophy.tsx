import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";
import { home } from "@/content";

import { FeatureCard } from "./feature-card";

export function Philosophy() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Philosophy"
            title={home.philosophy.title}
            description="The principles that shape how I approach software design, engineering, and long-term maintainability."
          />

          <Grid
            columns={3}
            gap="lg"
          >
            {home.philosophy.items.map(
              (principle) => (
                <FeatureCard
                  key={principle.title}
                  title={principle.title}
                  description={
                    principle.description
                  }
                />
              ),
            )}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
