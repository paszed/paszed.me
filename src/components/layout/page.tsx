import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Container } from "./container";

interface PageProps {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Page({
  title,
  description,
  children,
  className,
}: PageProps) {
  return (
    <main className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <header className="mb-12 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
            )}
          </header>

          {children}
        </div>
      </Container>
    </main>
  );
}
