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
            <H2>Let&apos;s build something meaningful.</H2>

            <Text
              size="lg"
              muted
            >
              Whether you&apos;re building developer tools, AI-powered software,
              or scalable systems, I&apos;d be happy to connect, exchange ideas,
              or explore potential collaborations.
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
                View GitHub
              </TextLink>
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
