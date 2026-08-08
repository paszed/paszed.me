import {
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
} from "@/design-system";

import { FeatureCard } from "./feature-card";

interface HelpItem {
  title: string;
  description: string;
}

interface HowIHelpContent {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly HelpItem[];
}

interface HowIHelpProps {
  content: HowIHelpContent;
}

export function HowIHelp({
  content,
}: HowIHelpProps) {
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
