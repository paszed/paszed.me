# Paszed UI Design System

> A minimal, opinionated design system built for paszed.me and future software projects.

---

# Philosophy

Paszed UI is not a component library.

It is a small collection of reusable primitives that express a consistent design language.

Every component should satisfy three requirements:

- Semantic
- Reusable
- Opinionated

If a component exists only to reduce a few Tailwind classes, it probably should not exist.

If it represents a recurring visual language, it belongs in Paszed UI.

---

# Principles

## 1. Semantics over utilities

Prefer

```tsx
<Text muted>
```

over

```tsx
<p className="text-fg-secondary">
```

Prefer

```tsx
<Eyebrow>
```

over

```tsx
<p className="text-xs uppercase tracking-[0.35em] text-accent">
```

Components communicate intent.

Utilities communicate implementation.

---

## 2. Composition over inheritance

Small primitives combine into larger interfaces.

Example

```
Section
└── Container
    └── Stack
        ├── Heading
        ├── Text
        └── Button
```

Avoid large "god components."

---

## 3. Editorial first

paszed.me is an editorial website.

Typography should feel deliberate.

Whitespace should breathe.

Animation should never distract.

---

## 4. Consistency beats variety

If two components look almost identical...

...they should probably use the same primitive.

---

# Typography

## Heading

Purpose

Document hierarchy.

Components

- H1
- H2
- H3

Never use raw heading utilities directly.

---

## Text

Purpose

General interface copy.

Examples

- Descriptions
- Body text
- Supporting text

API

```tsx
<Text />
<Text muted />
<Text size="sm" />
<Text size="lg" />
<Text size="lead" />
```

---

## Eyebrow

Purpose

Section labels.

Examples

- Projects
- Journal
- About
- Now

Always

- Accent
- Uppercase
- Tracked

---

## Label

Purpose

Metadata.

Examples

- Published
- Updated
- Previous
- Next
- Reading time

Always

- Small
- Muted
- Uppercase

---

## Prose

Purpose

Long-form content.

Used exclusively for articles.

---

# Layout

## Container

Controls page width.

Never use raw page margins unless necessary.

---

## Section

Defines page rhythm.

Every major page block begins with Section.

---

## Stack

Defines vertical spacing.

Preferred over repeated space-y utilities.

Spacing scale

- sm
- md
- lg
- xl
- 2xl

---

## Measure

Defines reading width.

Preferred over repeated max-w classes.

Sizes

- sm
- md
- lg
- xl
- 2xl
- 3xl
- 4xl

---

## Divider

Separates related content.

Avoid decorative horizontal rules.

---

# Surfaces

## Card

Interactive content.

Examples

- Projects
- Journal
- Link cards

Cards may lift on hover.

---

## Panel

Static information.

Examples

- Settings
- Information
- Contact
- Search

Panels remain visually calm.

---

## Badge

Compact metadata.

Never used as buttons.

---

# Actions

## Button

Primary actions.

Variants should remain minimal.

---

## TextLink

Inline navigation.

Used when a button would be visually too heavy.

---

## IconButton

Icon-only interaction.

Must always have an accessible label.

---

# Motion

Animation should support interaction.

Never animation for decoration.

Standard interaction

- transition-all
- duration-200
- ease-out

Interactive surfaces

- hover:-translate-y-1
- hover:border-accent/30
- hover:shadow-md

Text links

- transition-colors
- duration-200

Icons

- transition-transform
- duration-200

---

# Spacing

Whitespace is intentional.

Do not invent arbitrary spacing.

Preferred Stack sizes

- 4
- 6
- 8
- 10
- 12

---

# Colors

Never hardcode colors.

Always consume theme tokens.

Examples

- bg-card
- bg-surface
- text-fg
- text-fg-secondary
- text-fg-muted
- border-border
- border-border-muted
- accent

---

# Accessibility

Every component should support

- Keyboard navigation
- Focus visibility
- Screen readers
- Sufficient color contrast

Accessibility is a default.

Not an enhancement.

---

# Creating New Components

Before adding a primitive ask:

1. Does this pattern appear repeatedly?

2. Does it have semantic meaning?

3. Would I copy this into another project?

If the answer is "no" to any question...

...do not add it.

---

# Things Paszed UI intentionally avoids

No

- Box
- Flex
- Grid
- Spacer
- Center

Tailwind already solves these well.

Paszed UI exists to express design language, not replace CSS.

---

# Design Goal

The code should read like documentation.

Instead of

```tsx
<p className="text-lg leading-8 text-fg-secondary">
```

it should read

```tsx
<Text size="lg" muted>
```

Instead of

```tsx
<p className="text-xs uppercase tracking-[0.35em] text-accent">
```

it should read

```tsx
<Eyebrow>
```

The goal is not fewer lines of code.

The goal is clearer intent.

---

# Long-Term Vision

paszed.me is the reference implementation of Paszed UI.

Every future project should be able to reuse these primitives without modification.

The design system should remain:

- Small
- Stable
- Accessible
- Editorial
- Timeless
