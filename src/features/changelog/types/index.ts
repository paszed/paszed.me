export type ChangelogChangeType =
  | "added"
  | "changed"
  | "fixed"
  | "removed";

export interface ChangelogChange {
  type: ChangelogChangeType;
  description: string;
}

export interface ChangelogLink {
  label: string;
  href: string;
}

export interface ChangelogEntry {
  id: string;
  title: string;
  summary: string;
  publishedAt: Date;
  changes: readonly ChangelogChange[];
  links?: readonly ChangelogLink[];
}
