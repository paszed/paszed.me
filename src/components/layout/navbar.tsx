import Link from "next/link";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";

import { Container } from "./container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-black/80">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-lg font-semibold tracking-tight"
          >
            <span className="text-green-500">$</span>{" "}
            {site.brand}
            <span className="animate-pulse text-green-500">_</span>
          </Link>

          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
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
