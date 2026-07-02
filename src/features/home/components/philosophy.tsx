import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const principles = [
  {
    title: "Build useful software",
    description: "Focus on solving real problems instead of chasing trends.",
  },
  {
    title: "Keep things simple",
    description: "Good software is easier to understand, maintain, and extend.",
  },
  {
    title: "Ship continuously",
    description:
      "Small improvements delivered consistently beat perfect ideas that never launch.",
  },
];

export function Philosophy() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <H2>Philosophy</H2>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <h3 className="font-semibold">{principle.title}</h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
