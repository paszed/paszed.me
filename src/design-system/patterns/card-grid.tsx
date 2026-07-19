import type { HTMLAttributes } from "react";

import { Grid } from "../layout";
type CardGridProps = HTMLAttributes<HTMLDivElement>;

export function CardGrid(props: CardGridProps) {
  return (
    <Grid
      columns={2}
      gap="lg"
      {...props}
    />
  );
}
