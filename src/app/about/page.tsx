import { Container } from "@/components/layout/container";
import { H1 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-8">
          <H1>About</H1>

          <p>
            I&apos;m Edvard, a software engineer building developer tools, AI
            applications, and modern web products.
          </p>

          <p>
            I enjoy creating software that&apos;s fast, maintainable, and
            enjoyable to use.
          </p>
        </div>
      </Container>
    </Section>
  );
}
