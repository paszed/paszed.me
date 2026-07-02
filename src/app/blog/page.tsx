import { Container } from "@/components/layout/container";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-8">
          <H1>Blog</H1>

          <p>
            Writing about software engineering, developer tools, AI, and things
            I learn while building.
          </p>
        </div>
      </Container>
    </Section>
  );
}
