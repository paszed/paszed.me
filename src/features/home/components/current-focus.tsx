import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";
import { home } from "@/content";

import { FeatureCard } from "./feature-card";

export function CurrentFocus() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Current Focus"
            title={home.currentFocus.title}
            description="The areas I'm actively investing time in as I build software and continue growing as an engineer."
          />

          <Grid
            columns={3}
            gap="lg"
          >
            {home.currentFocus.items.map(
              (item) => (
                <FeatureCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ),
            )}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
