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
            eyebrow="Current Focus"
            title={home.currentFocus.title}
            description="The areas I'm actively investing time in as I build software and continue growing as an engineer."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {home.currentFocus.items.map((item) => (
              <Card
                key={item.title}
                variant="interactive"
                className="h-full"
              >
                <Stack gap="sm">
                  <h3 className="text-lg font-semibold text-fg">
                    {item.title}
                  </h3>

                  <Text muted>{item.description}</Text>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
