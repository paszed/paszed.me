import { Container } from "@/components/layout/container";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function NowPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-8">
          <H1>Now</H1>

          <p>What I&apos;m currently focused on and actively building.</p>
        </div>
      </Container>
    </Section>
  );
}
