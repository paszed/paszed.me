import type { JournalEntry } from "@/types/journal";

const compositionOverConvenience: JournalEntry = {
  slug: "composition-over-convenience",

  title: "Composition Over Convenience",

  description:
    "Convenience often encourages software to accumulate responsibilities. Composition encourages software to remain adaptable. Great design values clear collaboration over oversized abstractions.",

  category: "Design",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 15,

  tags: [
    "Software Design",
    "Composition",
    "Engineering",
    "Architecture",
    "Maintainability",
  ],

  sections: [
    {
      title: "Convenience Is Surprisingly Expensive",

      content: `
Convenience is difficult to resist.

A function already exists.

A component already owns something similar.

A service already performs work that feels almost related.

Adding one more responsibility appears harmless.

The software continues working.

Development feels faster.

Over time, convenience quietly changes the architecture.

Small components become large ones.

Focused responsibilities become mixed responsibilities.

Simple interfaces become collections of unrelated capabilities.

Nothing dramatic happened.

The software merely became a little more convenient with every feature.

Eventually convenience becomes complexity.

The cost was simply paid gradually instead of all at once.

This is one of the reasons software often feels heavier after years of successful development.

Not because engineers made catastrophic mistakes.

Because convenience consistently won small decisions.
`,
    },

    {
      title: "Composition Begins With Small Responsibilities",

      content: `
Composition approaches software differently.

Instead of asking,

"Where can we put this?"

it asks,

"What is the smallest responsibility that naturally owns this?"

The distinction appears subtle.

Its consequences are enormous.

Small responsibilities remain understandable.

They evolve independently.

They collaborate through well-defined interfaces.

Larger behavior emerges by combining these focused pieces rather than expanding existing ones indefinitely.

Composition values relationships over accumulation.

Instead of building one increasingly capable component, it builds several components that cooperate clearly.

This produces software whose growth feels intentional rather than accidental.

Complex behavior emerges from simple parts.

Not from complicated ones.
`,
    },

    {
      title: "Growth Should Be Horizontal, Not Vertical",

      content: `
Many components grow vertically.

Every new requirement introduces another method.

Another dependency.

Another configuration option.

Another branch of logic.

The component becomes increasingly capable.

It also becomes increasingly difficult to understand.

Composition encourages horizontal growth instead.

New behavior appears through collaboration.

New responsibilities become independent participants.

Existing components remain focused on the work they already perform well.

This distinction becomes increasingly valuable as software matures.

Vertical growth concentrates knowledge.

Horizontal growth distributes it.

One produces larger components.

The other produces richer systems.

Healthy software usually prefers the latter.
`,
    },

        {
      title: "Composition Preserves Flexibility",

      content: `
One of the greatest strengths of composition is its ability to accommodate change without disturbing existing behavior.

When responsibilities remain small, they can be rearranged without being rewritten.

A validation component can participate in multiple workflows.

A pricing strategy can evolve independently of payment processing.

A notification pipeline can gain new delivery channels without changing the logic that decides when notifications should be sent.

None of these improvements require a large component to absorb another responsibility.

Instead, the system grows by combining existing capabilities in new ways.

This flexibility is not the result of clever abstractions.

It is the result of clear responsibilities.

Composition values cooperation over accumulation.

The software becomes more capable because its parts collaborate effectively, not because each part becomes increasingly complex.
`,
    },

    {
      title: "Large Components Become Decision Makers",

      content: `
As components accumulate responsibilities, they gradually become places where too many decisions are made.

Business rules.

Validation.

Persistence.

Logging.

Authorization.

Formatting.

Each new concern appears reasonable in isolation.

Together they transform the component into the center of the system.

Every feature eventually passes through it.

Every engineer eventually modifies it.

Every bug eventually risks affecting it.

This concentration of responsibility slows development.

Knowledge becomes centralized.

Changes become riskier.

Confidence declines.

Composition resists this pattern.

Instead of creating one intelligent component, it encourages many focused participants.

Each contributes a small part of the overall behavior.

No single component becomes responsible for understanding everything.

Responsibility remains distributed.

So does understanding.
`,
    },

    {
      title: "Composition Encourages Reuse Without Forcing It",

      content: `
Reusable software is often treated as something that must be designed deliberately.

Engineers attempt to predict future use cases.

Generic abstractions emerge.

Configuration grows.

Complexity follows.

Composition approaches reuse differently.

Instead of designing for hypothetical consumers, it designs clear responsibilities.

If those responsibilities prove useful elsewhere, reuse happens naturally.

If they do not, nothing has been lost.

The software remains honest about its purpose.

This distinction is important.

Software should become reusable because it is well designed.

Not because reusability became the primary design objective.

The most valuable reuse is usually discovered after solving a real problem well.

Not before.
`,
    },

        {
      title: "Good Composition Feels Invisible",

      content: `
One of the strongest indicators of well-composed software is that nobody talks about its composition.

Engineers simply solve problems.

Responsibilities feel obvious.

New behavior has a natural place to live.

Existing components remain small enough to understand without effort.

The architecture quietly guides good decisions.

Poor composition creates the opposite experience.

Every feature raises questions.

Should this responsibility be added here?

Should another parameter be introduced?

Should this existing abstraction become even more generic?

The software constantly negotiates with itself because its responsibilities were never clearly separated.

Good composition removes those conversations.

The structure itself suggests the next step.

Engineers spend less time deciding where code belongs and more time solving the problem in front of them.

That quiet guidance is one of the greatest strengths of thoughtful design.

The best composition rarely draws attention to itself.

It simply makes every future decision feel easier.
`,
    },

    {
      title: "Composition Is an Investment in Tomorrow",

      content: `
Every design decision influences engineers who have not yet joined the project.

They will inherit today's abstractions.

Today's responsibilities.

Today's boundaries.

Composition recognizes this responsibility.

Instead of optimizing only for the engineer writing the current feature, it considers the engineer reading the fifth feature built on top of it.

Clear composition reduces onboarding.

It shortens debugging sessions.

It makes refactoring less intimidating because responsibilities remain isolated.

None of these benefits appear immediately.

They accumulate.

The value of composition grows alongside the software itself.

Large systems rarely remain maintainable because of extraordinary engineering.

They remain maintainable because thousands of ordinary design decisions consistently protected clarity over convenience.

Composition is one of those decisions.

Its benefits compound quietly over years.
`,
    },

    {
      title: "Conclusion",

      content: `
Convenience is seductive.

It solves today's problem quickly.

It reduces immediate effort.

It encourages engineers to place new behavior wherever space already exists.

Composition asks for something different.

It asks engineers to protect responsibility before protecting convenience.

It values collaboration over accumulation.

It encourages software to grow by combining focused components instead of continuously expanding existing ones.

This approach rarely produces the fastest implementation.

It frequently produces the longest-lived one.

Software changes constantly.

Requirements evolve.

Teams grow.

Products mature.

Composition ensures that growth remains understandable because responsibilities continue making sense long after the original implementation has been forgotten.

Great software is rarely the result of a few remarkably capable components.

It is usually the result of many remarkably focused ones working together.

Composition is not simply a technique.

It is a philosophy of growth.

One that values clarity today without sacrificing adaptability tomorrow.
`,
    },
  ],
};

export default compositionOverConvenience;
