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
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
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
              className="group flex items-center gap-2 text-neutral-600 transition-colors hover:text-green-500 dark:text-neutral-400"
            >
              {showIcons && (
                <SocialIcon
                  name={item.label}
                  className="h-4 w-4 transition-transform group-hover:scale-110"
                />
              )}

              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
