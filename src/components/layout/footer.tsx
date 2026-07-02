import Link from "next/link";

import { site } from "@/config/site";

import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="grid gap-12 py-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight">
              {site.name}
            </h2>

            <p className="max-w-sm leading-7 text-neutral-600 dark:text-neutral-400">
              Building developer tools, AI applications, and modern web
              experiences. Documenting the journey one project at a time.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-green-500"
            >
              GitHub
            </Link>

            <Link
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-green-500"
            >
              X
            </Link>

            <Link
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-green-500"
            >
              Email
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-200 py-6 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.owner}. All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
