import type { HTMLAttributes } from "react";

import { CardGrid } from "../patterns";

export type FeatureGridProps =
  HTMLAttributes<HTMLDivElement>;

export function FeatureGrid(
  props: FeatureGridProps,
) {
  return <CardGrid {...props} />;
}
