import { BrandLogo } from "@/brand";
import { site } from "@/config/site";
import { footer } from "@/content/footer";
import {
  Container,
  Stack,
  Text,
} from "@/design-system";

import { FooterSection } from "./footer-section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <Container>
        <div
          className="
            grid
            gap-12
            py-16
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_repeat(4,1fr)]
          "
        >
          <Stack gap="sm">
            <BrandLogo />

            <Text
              muted
              className="max-w-sm leading-7"
            >
              Building developer tools, AI applications, and modern web
              products.
            </Text>

            <Text
              size="sm"
              className="font-medium text-accent"
            >
              Build. Learn. Ship.
            </Text>
          </Stack>

          <FooterSection
            title="Navigation"
            items={footer.navigation}
          />

          <FooterSection
            title="Resources"
            items={footer.resources}
          />

          <FooterSection
            title="Developer"
            items={footer.developer}
            showIcons
          />

          <FooterSection
            title="Contact"
            items={footer.contact}
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
            py-6
            text-sm
            text-fg-secondary
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <Text
            size="sm"
            muted
          >
            © {year} {site.owner}. All rights reserved.
          </Text>

          <Text
            size="sm"
            muted
          >
            Built with Next.js, TypeScript & Tailwind CSS.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
