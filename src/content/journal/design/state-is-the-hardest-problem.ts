import type { JournalEntry } from "@/types/journal";

const stateIsTheHardestProblem: JournalEntry = {
  slug: "state-is-the-hardest-problem",

  title: "State Is the Hardest Problem",

  description:
    "Software rarely becomes difficult because of computation. It becomes difficult because information changes over time. State is where complexity accumulates, and thoughtful design determines whether that complexity remains manageable.",

  category: "Design",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 15,

  tags: [
    "Software Design",
    "State",
    "Architecture",
    "Engineering",
    "Maintainability",
  ],

  sections: [
    {
      title: "Most Software Doesn't Compute",

      content: `
When people imagine software, they often imagine algorithms.

Sorting.

Searching.

Compression.

Encryption.

Complex mathematics.

These certainly exist.

Yet the majority of modern software spends surprisingly little time performing complicated computation.

Instead, it manages state.

Users sign in.

Orders are created.

Payments become completed.

Profiles are updated.

Permissions change.

Notifications are delivered.

Every feature is ultimately concerned with information changing over time.

That is state.

And state is considerably more difficult than computation.

Algorithms usually begin with known inputs and produce predictable outputs.

State introduces history.

History introduces context.

Context introduces complexity.

The challenge is rarely calculating the correct answer.

It is understanding which version of reality currently exists.

That is why state quietly becomes one of the defining challenges of software design.
`,
    },

    {
      title: "State Carries History",

      content: `
Pure computation exists only in the present.

State carries the past forward.

An unpaid invoice behaves differently from a paid one.

A verified account behaves differently from an unverified account.

A deleted record behaves differently from one that never existed.

Every transition creates another possible reality.

Every additional state increases the number of situations engineers must understand.

Complexity grows not because the code becomes longer.

Because reality becomes richer.

Good software design acknowledges this.

It models transitions deliberately.

It avoids creating unnecessary states.

It keeps the lifecycle of information understandable.

The fewer realities engineers must reason about, the easier the software becomes to evolve.

State should reflect reality.

Not accidental implementation.
`,
    },

    {
      title: "Every Mutable Value Creates Responsibility",

      content: `
Whenever something can change, someone becomes responsible for changing it correctly.

That responsibility is rarely isolated.

Validation depends on state.

Authorization depends on state.

Caching depends on state.

Synchronization depends on state.

Persistence depends on state.

A single mutable value often influences dozens of unrelated decisions throughout a system.

This is why mutable software becomes increasingly difficult to reason about.

Every modification creates the possibility of inconsistency.

The challenge is not changing information.

The challenge is ensuring every part of the system agrees that the change occurred.

State introduces responsibility.

Design determines whether that responsibility remains understandable.
`,
    },

      {
      title: "State Should Have a Single Source of Truth",

      content: `
One of the quickest ways for complexity to emerge is allowing the same information to exist in multiple places.

A user's subscription status exists in memory.

It also exists in a cache.

It also exists in a database.

It also exists inside a session token.

Eventually one of them disagrees.

Now the engineer is no longer solving the business problem.

They are determining which version of reality is correct.

This is why experienced engineers speak about a single source of truth.

Not because duplication is inherently bad.

Because duplicated state eventually diverges.

Every copy introduces another opportunity for inconsistency.

Every inconsistency introduces another debugging session.

Good design minimizes duplicated state wherever practical.

Derived information should remain derived.

Authoritative information should remain authoritative.

The fewer competing realities a system contains, the easier it becomes to trust.
`,
    },

    {
      title: "State Changes Deserve Clear Boundaries",

      content: `
Reading information and changing information are fundamentally different operations.

Reading observes reality.

Writing creates a new one.

Because of this distinction, state changes deserve significantly more attention than state reads.

A system should make it obvious where information is allowed to change.

Business rules should surround those transitions.

Validation should happen before them.

Side effects should occur after them.

When state changes are scattered throughout a codebase, understanding behavior becomes almost impossible.

When they pass through clear boundaries, engineers gain confidence.

Every transition becomes predictable.

Every modification becomes explainable.

Software becomes easier to reason about because change itself has structure.
`,
    },

    {
      title: "Immutable Thinking Simplifies Reasoning",

      content: `
One reason immutable data has become increasingly popular is not performance.

It is comprehension.

Something that cannot change requires less mental effort to understand.

Once observed, it remains true.

Mutable state forces engineers to continually ask another question.

Has this changed since I last looked?

That question appears insignificant.

Across thousands of objects and millions of requests, it becomes exhausting.

Immutable thinking reduces that burden.

Instead of constantly modifying existing objects, software produces new representations of reality.

History remains visible.

Transitions become explicit.

Reasoning becomes simpler because engineers spend less time tracking hidden mutations and more time understanding intentional changes.

Not every system can be completely immutable.

Every system can benefit from minimizing unnecessary mutation.
`,
    },

        {
      title: "State Should Reflect Reality",

      content: `
The purpose of state is to describe reality.

Not implementation.

This distinction becomes increasingly important as software grows.

An order is not simply "processed."

It may be pending.

Paid.

Packed.

Shipped.

Delivered.

Returned.

Cancelled.

Each represents a meaningful business reality.

Designing state around these realities makes software easier to understand because the model reflects the domain rather than internal mechanics.

Problems often begin when implementation details leak into the model.

Temporary flags accumulate.

Boolean values multiply.

Engineers combine unrelated concepts into a single object because it feels convenient.

Eventually nobody can confidently explain what a particular combination of values actually means.

Good state models avoid this confusion.

Every state should describe something that exists in the real world.

If engineers can explain it without referencing the implementation, the model is usually moving in the right direction.
`,
    },

    {
      title: "Complexity Emerges From Interactions",

      content: `
Individual pieces of state are rarely difficult.

Their interactions are.

A shopping cart affects inventory.

Inventory affects purchasing.

Purchasing affects payment.

Payment affects fulfillment.

Fulfillment affects notifications.

Each system may be straightforward in isolation.

Together they form a network of dependencies.

This is where thoughtful design matters.

Responsibilities should remain localized.

State transitions should be predictable.

Communication between components should be explicit.

Complex systems rarely fail because one variable changed.

They fail because many variables changed together in ways nobody anticipated.

Managing state therefore means managing relationships.

The fewer unexpected interactions a system contains, the more confidently it can evolve.
`,
    },

    {
      title: "Conclusion",

      content: `
Software is often described as the art of solving problems.

In practice, much of software engineering is the art of managing changing information.

State defines what currently exists.

Transitions define how reality evolves.

Design determines whether those transitions remain understandable.

Great systems are not those with the most sophisticated algorithms.

They are those whose changing state remains easy to reason about.

They minimize unnecessary mutation.

They establish clear ownership.

They avoid competing sources of truth.

They model the real world instead of accidental implementation details.

As software grows, computation rarely becomes the limiting factor.

Understanding does.

Thoughtful state management protects that understanding.

It allows engineers to reason about yesterday, today and tomorrow without losing confidence in the system.

State is not simply data.

It is the story of the software over time.

Good design ensures that story remains coherent.
`,
    },
  ],
};

export default stateIsTheHardestProblem;


