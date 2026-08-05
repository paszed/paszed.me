import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({
  children,
  className,
}: PageProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        className,
      )}
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          {children}
        </div>
      </Container>
    </section>
  );
}
