import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { H1, H2 } from "./heading";

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  centered?: boolean;
  className?: string;
  level?: 1 | 2;
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  actions,
  centered = false,
  className,
  level = 2,
}: SectionHeaderProps) {
  const Heading = level === 1 ? H1 : H2;

  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        !centered &&
          "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className,
      )}
    >
      <div
        className={cn(
          "space-y-5",
          centered ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {eyebrow && (
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {eyebrow}
          </p>
        )}

        <Heading>{title}</Heading>

        {description && (
          <p className="max-w-2xl font-serif text-xl leading-9 text-fg-secondary">
            {description}
          </p>
        )}
      </div>

      {!centered && actions && (
        <div className="shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
}
