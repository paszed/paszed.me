import Link from "next/link";

import { Container } from "@/components/layout/container";
import { profiles } from "@/content";
import { site } from "@/config/site";
import { Button, H2, Panel, Section } from "@/components/ui";

export function ContactCTA() {
  return (
    <Section>
      <Container>
        <Panel className="rounded-3xl p-12 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <H2>{"Let's build something great."}</H2>

            <p className="text-lg text-fg-secondary">
              {
                "Whether it's a product, developer tool, or AI project, I'm always interested in solving interesting problems."
              }
            </p>

            <div className="flex justify-center gap-4">
              <Link href={`mailto:${site.email}`}>
                <Button>Get in touch</Button>
              </Link>

              <Link
                href={profiles.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                {profiles.github.label}
              </Link>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
