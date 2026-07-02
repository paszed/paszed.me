import Link from "next/link";

import { site } from "@/config/site";

import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 py-8 dark:border-neutral-800">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 sm:flex-row dark:text-neutral-400">
          <p>© {year} {site.owner}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href={site.links.x}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white"
            >
              X
            </Link>

            <Link
              href={`mailto:${site.email}`}
              className="hover:text-black dark:hover:text-white"
            >
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
