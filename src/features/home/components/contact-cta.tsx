import Link from "next/link";

import { Container } from "@/components/layout/container";
import {
  Button,
  H2,
  Section,
  Stack,
  Text,
  TextLink,
} from "@/components/ui";
import { profiles } from "@/content";
import { site } from "@/config/site";

export function ContactCTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-border p-12 text-center">
          <Stack
            gap="lg"
            className="mx-auto max-w-2xl items-center"
          >
            <H2>{"Let's build something great."}</H2>

            <Text
              size="lg"
              muted
            >
              Whether it's a product, developer tool, or AI project, I'm always
              interested in solving interesting problems.
            </Text>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`mailto:${site.email}`}>
                <Button>Get in touch</Button>
              </Link>

              <TextLink
                href={profiles.github.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profiles.github.label}
              </TextLink>
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
