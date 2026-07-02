import Link from "next/link";

import { BrandLogo } from "@/brand";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigation } from "@/config/navigation";

import { Container } from "./container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/60 dark:bg-black/60 dark:supports-[backdrop-filter]:bg-black/60">
      <Container>
        <nav className="flex h-[4.5rem] items-center justify-between">
          <BrandLogo />

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-neutral-200/70 bg-white/60 p-1 shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/60">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
