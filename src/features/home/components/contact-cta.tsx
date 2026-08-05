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
        <Surface className="rounded-3xl border p-8 text-center sm:p-12">
          <Measure
            size="2xl"
            className="mx-auto"
          >
            <Stack
              gap="lg"
              className="items-center"
            >
              <Heading as="h2">
                Need software built properly?
              </Heading>

              <Text
                size="lg"
                muted
              >
                I help turn ideas, technical challenges, and recurring
                workflows into reliable software systems — from web
                applications and internal tools to developer infrastructure
                and automation.
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
