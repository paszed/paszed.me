import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const items = [
  {
    title: "Building paszed.me",
    description:
      "Designing a fast, minimal website that reflects my work and engineering philosophy.",
  },
  {
    title: "AI Engineering",
    description:
      "Exploring practical AI systems, agents, and developer tooling.",
  },
  {
    title: "Developer Experience",
    description:
      "Building reusable architecture and workflows for future products.",
  },
];

export function CurrentFocus() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <H2>Currently</H2>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
