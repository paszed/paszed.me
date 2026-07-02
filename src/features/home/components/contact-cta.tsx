import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { profiles } from "@/content/profiles";
import { site } from "@/config/site";

export function ContactCTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-border p-12 text-center">
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
        </div>
      </Container>
    </Section>
  );
}
