import { Container } from "@/components/layout/container";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function UsesPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-8">
          <H1>Uses</H1>

          <p>The hardware, software, and tools I use every day.</p>
        </div>
      </Container>
    </Section>
  );
}
