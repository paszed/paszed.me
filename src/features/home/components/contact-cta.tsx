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

import { site } from "@/config/site";
import { profiles } from "@/content";

export function ContactCTA() {
  return (
    <Section>
      <Container>
        <Surface className="rounded-3xl border p-6 text-center sm:p-10 lg:p-12">
          <Measure
            size="2xl"
            className="mx-auto"
          >
            <Stack
              gap="lg"
              className="items-center"
            >
              <Heading as="h2">
                Have a software problem to solve?
              </Heading>

              <Text
                size="lg"
                muted
                className="leading-relaxed"
              >
                I help founders and teams design, build, and improve reliable
                software — from new applications and internal tools to
                automation workflows and AI integrations.
              </Text>

              <Cluster
                gap="md"
                className="justify-center"
              >
                <Link href={`mailto:${site.email}`}>
                  <Button>
                    Start a conversation
                  </Button>
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
