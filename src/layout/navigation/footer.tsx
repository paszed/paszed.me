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
    <footer className="mt-20 border-t border-border sm:mt-24">
      <Container>
        <div
          className="
            grid
            gap-10
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_repeat(4,1fr)]
            lg:gap-8
            lg:py-16
          "
        >
          <Stack gap="sm">
            <BrandLogo />

            <Text
              size="sm"
              muted
              className="max-w-xs leading-6"
            >
              Building developer tools, AI applications, and modern web
              products.
            </Text>

            <Text
              size="xs"
              className="font-medium uppercase tracking-[0.2em] text-accent"
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
            gap-3
            border-t
            border-border
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <Text
            size="xs"
            muted
          >
            © {year} {site.owner}. All rights reserved.
          </Text>

          <Text
            size="xs"
            muted
          >
            Built with Next.js, TypeScript & Tailwind CSS.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
