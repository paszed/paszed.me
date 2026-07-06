import { Container } from "@/components/layout/container";
import {
  Card,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/components/ui";
import { home } from "@/content";

export function CurrentFocus() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Current"
            title={home.currentFocus.title}
            description="What I'm actively building, learning, and exploring right now."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {home.currentFocus.items.map((item) => (
              <Card
                key={item.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <Stack gap="sm">
                  <h3 className="text-lg font-semibold text-fg">
                    {item.title}
                  </h3>

                  <Text muted>
                    {item.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
