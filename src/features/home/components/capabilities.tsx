import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";

import { FeatureCard } from "./feature-card";

interface CapabilityItem {
  title: string;
  description: string;
}

interface CapabilitiesContent {
  title: string;
  description: string;
  items: readonly CapabilityItem[];
}

interface CapabilitiesProps {
  content: CapabilitiesContent;
}

export function Capabilities({
  content,
}: CapabilitiesProps) {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Services"
            title={content.title}
            description={content.description}
          />

          <Grid
            columns={3}
            gap="lg"
          >
            {content.items.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
