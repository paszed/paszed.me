export interface TeamMember {
  readonly slug: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly image: string;
  readonly links: readonly {
    readonly label: string;
    readonly href: string;
  }[];
}
