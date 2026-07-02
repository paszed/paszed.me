import Link from "next/link";

import { SocialIcon } from "@/components/icons/social-icon";

interface FooterItem {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  items: readonly FooterItem[];
  showIcons?: boolean;
}

export function FooterSection({
  title,
  items,
  showIcons = false,
}: FooterSectionProps) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        {title}
      </h4>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group inline-flex items-center gap-3 text-neutral-600 transition-colors duration-200 hover:text-green-500 dark:text-neutral-400"
            >
              {showIcons && (
                <span className="flex h-4 w-4 items-center justify-center">
                  <SocialIcon
                    name={item.label}
                    className="h-3.5 w-3.5 opacity-80 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </span>
              )}

              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
