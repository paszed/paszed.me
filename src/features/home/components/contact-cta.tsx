import Link from "next/link";

import {
  Button,
  Cluster,
  Container,
  Heading,
  Measure,
  Section,
  Stack,
  Surface,
  Text,
  TextLink,
} from "@/design-system";

import { profiles } from "@/content";
import { site } from "@/config/site";

export function ContactCTA() {
  return (
    <Section>
      <Container>
        <Surface className="rounded-3xl border p-12 text-center">
          <Measure size="2xl" className="mx-auto">
            <Stack gap="lg" className="items-center">
              <Heading as="h2">
                Let&apos;s build something meaningful.
              </Heading>

              <Text size="lg" muted>
                Whether you&apos;re building developer tools, AI-powered
                software, or scalable systems, I&apos;d be happy to connect,
                exchange ideas, or explore potential collaborations.
              </Text>

              <Cluster gap="md" className="justify-center">
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
              </Cluster>
            </Stack>
          </Measure>
        </Surface>
      </Container>
    </Section>
  );
}
