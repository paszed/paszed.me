# Design System

The design system is the foundation of the UI for **paszed.me**.

It provides a shared language for building interfaces through reusable primitives, layout abstractions, typography, and composable patterns. The goal is consistency, readability, and long-term maintainability—not creating components for the sake of abstraction.

---

## Philosophy

- Compose instead of duplicate.
- Prefer semantic components over anonymous layout.
- Improve existing primitives before creating new ones.
- A component must earn its place.

The design system should grow because the application needs it, not because it might be useful one day.

---

## Architecture

```text
design-system/
├── constants      # Design tokens and shared values
├── hooks          # UI-specific hooks
├── layout         # Spatial layout primitives
├── motion         # Animation primitives
├── navigation     # Navigation components
├── patterns       # Composed UI patterns
├── primitives     # Atomic building blocks
├── providers      # React providers
├── typography     # Text components
├── types          # Shared TypeScript types
├── utils          # Shared utilities
└── index.ts       # Public API
```

---

## Layer Responsibilities

### Primitives

The smallest reusable UI building blocks.

Examples:

- Button
- Card
- Badge
- Divider
- Surface

Primitives should not know about application features.

---

### Layout

Components that express structure instead of styling.

Examples:

- Stack
- Inline
- Cluster
- Grid
- Section
- Container

Prefer these over anonymous `<div>` elements with layout utility classes.

---

### Typography

Reusable text components.

Examples:

- Heading
- Text
- Eyebrow
- Prose
- Code

Typography should define hierarchy consistently across the application.

---

### Patterns

Reusable compositions of primitives.

Examples:

- Hero
- SectionHeader
- EmptyState
- Timeline
- PropertyList

Patterns compose primitives but never contain feature-specific business logic.

---

### Navigation

Application navigation components.

Examples:

- Navbar
- Footer
- MobileMenu

---

## Design Principles

When adding UI:

1. Reuse an existing primitive.
2. Improve the primitive if necessary.
3. Create a pattern if multiple primitives are repeatedly composed together.
4. Create a new primitive only if the abstraction is broadly reusable.

---

## Layout First

Prefer expressive layout components:

```tsx
<Stack gap="xl">
  <SectionHeader />
  <Grid columns={2}>
    <ProjectCard />
  </Grid>
</Stack>
```

instead of:

```tsx
<div className="flex flex-col gap-8">
  <div className="grid md:grid-cols-2 gap-6">
```

The goal is to communicate intent rather than implementation.

---

## Public API

Every directory exposes its public surface through an `index.ts` file.

Consumers should import from the public API whenever possible rather than individual implementation files.

---

## Evolution

The directory structure is considered stable.

Future work should focus on improving existing components and migrating the application to use the design system rather than introducing new architectural layers.
