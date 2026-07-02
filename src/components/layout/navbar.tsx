import Link from "next/link";

import { BrandLogo } from "@/brand";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigation } from "@/config/navigation";

import { Container } from "./container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur-xl dark:border-neutral-800/70 dark:bg-black/70">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <BrandLogo />

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
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
