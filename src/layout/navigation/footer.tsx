import { BrandLogo } from "@/brand";
import { site } from "@/config/site";
import {
  Container,
  Stack,
  Text,
} from "@/design-system";

import { FooterSection } from "./footer-section";

interface FooterContent {
  navigation: readonly {
    label: string;
    href: string;
  }[];

  resources: readonly {
    label: string;
    href: string;
  }[];

  developer: readonly {
    label: string;
    href: string;
  }[];

  contact: readonly {
    label: string;
    href: string;
  }[];

  labels: {
    navigation: string;
    resources: string;
    developer: string;
    contact: string;
    description: string;
    tagline: string;
    copyright: string;
    builtWith: string;
  };
}

interface FooterProps {
  content: FooterContent;
}

export function Footer({
  content,
}: FooterProps) {
  const year =
    new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div>
          <Stack>
            <BrandLogo />

            <Text
              size="xs"
              muted
              className="max-w-xs leading-5"
            >
              {content.labels.description}
            </Text>

            <Text
              size="xs"
              className="font-medium uppercase tracking-[0.16em] text-accent"
            >
              {content.labels.tagline}
            </Text>
          </Stack>

          <FooterSection
            title={content.labels.navigation}
            items={content.navigation}
          />

          <FooterSection
            title={content.labels.resources}
            items={content.resources}
          />

          <FooterSection
            title={content.labels.developer}
            items={content.developer}
            showIcons
          />

          <FooterSection
            title={content.labels.contact}
            items={content.contact}
            showIcons
          />
        </div>

        <div
          className="
            flex
            flex-col
            gap-2
            border-t
            border-border
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <Text
            size="xs"
            muted
          >
            {content.labels.copyright
              .replace(
                "{year}",
                String(year),
              )
              .replace(
                "{owner}",
                site.owner,
              )}
          </Text>

          <Text
            size="xs"
            muted
          >
            {content.labels.builtWith}
          </Text>
        </div>
      </Container>
    </footer>
  );
}
