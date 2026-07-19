import Link from "next/link";

import {
  Button,
  Container,
  Heading,
  Section,
  Stack,
  Text,
  TextLink,
} from "@/design-system";

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

            <Heading as="h2">
  Let&apos;s build something meaningful.
</Heading>
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
