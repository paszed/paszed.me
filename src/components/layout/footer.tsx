import { BrandLogo } from "@/brand/components/logo";
import { Container } from "@/components/layout/container";
import { FooterSection } from "@/components/layout/footer-section";
import { footer } from "@/content/footer";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <BrandLogo />

            <p className="max-w-sm leading-7 text-neutral-600 dark:text-neutral-400">
              Building developer tools, AI applications, and modern web
              products.
            </p>

            <p className="text-sm font-medium text-green-500">
              Build. Learn. Ship.
            </p>
          </div>

          <FooterSection
            title="Navigation"
            items={footer.navigation}
          />

          <FooterSection
            title="Connect"
            items={footer.connect}
            showIcons
          />

          <FooterSection
            title="Developer"
            items={footer.developer}
            showIcons
          />
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-200 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between dark:border-neutral-800 dark:text-neutral-500">
          <p>© {year} {site.owner}. All rights reserved.</p>

          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
