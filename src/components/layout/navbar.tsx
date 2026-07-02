import Link from "next/link";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";

import { Container } from "./container";

export function Navbar() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
