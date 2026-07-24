import Link from "next/link";

import { Text } from "@/design-system";
import { site } from "@/config/site";

export function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to the homepage"
      className="group inline-flex items-center font-mono text-lg font-semibold tracking-tight"
    >
      <Text
        as="span"
        className="transition-colors group-hover:text-accent"
      >
        {site.brand}
      </Text>

      <Text
        as="span"
        className="ml-0.5 animate-pulse text-accent"
      >
        _
      </Text>
    </Link>
  );
}
