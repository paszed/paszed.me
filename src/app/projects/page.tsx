import { Container } from "@/components/layout/container";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-8">
          <H1>Projects</H1>

          <p>
            A collection of software, developer tools, and experiments I'm
            building.
          </p>
        </div>
      </Container>
    </Section>
  );
}
