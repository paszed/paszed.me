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

interface ContactCTAContent {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

interface ContactCTAProps {
  content: ContactCTAContent;
}

export function ContactCTA({
  content,
}: ContactCTAProps) {
  return (
    <Section>
      <Container>
        <Surface>
          <Measure>
            <Stack
              gap="lg"
              className="items-center text-center"
            >
              <Heading as="h2">
                {content.title}
              </Heading>

              <Text
                size="lg"
                muted
                className="leading-relaxed"
              >
                {content.description}
              </Text>

              <Cluster
                gap="md"
                className="justify-center"
              >
                <Link href={content.primaryCta.href}>
                  <Button>
                    {content.primaryCta.label}
                  </Button>
                </Link>

                <TextLink href={content.secondaryCta.href}>
                  {content.secondaryCta.label}
                </TextLink>
              </Cluster>
            </Stack>
          </Measure>
        </Surface>
      </Container>
    </Section>
  );
}
