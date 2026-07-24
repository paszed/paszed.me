import type { JournalEntry } from "@/types/journal";

const interfacesArePromises: JournalEntry = {
  slug: "interfaces-are-promises",

  title: "Interfaces Are Promises",

  description:
    "Interfaces do more than define how software communicates. They establish promises that allow systems to evolve without forcing every consumer to change alongside them.",

  category: "Architecture",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 14,

  tags: [
    "Architecture",
    "Interfaces",
    "API Design",
    "Software Design",
    "Maintainability",
  ],

  sections: [
    {
      title: "Every Dependency Begins With Trust",

      content: `
Every software system is built upon trust.

Not trust between people.

Trust between components.

Whenever one module calls another, it assumes certain behavior.

It assumes a response will have a particular structure.

It assumes errors will be handled consistently.

It assumes the rules governing that interaction will remain stable tomorrow just as they are today.

Those assumptions are rarely written down.

Instead, they become embedded within interfaces.

That is why interfaces matter.

They are not simply collections of methods or endpoints.

They represent promises.

Promises that other parts of the system are allowed to rely upon.

Without those promises, software becomes fragile.

Every implementation detail suddenly becomes everyone's concern.

Every internal refactor becomes a breaking change.

Every improvement carries unnecessary risk.

Stable systems begin by establishing relationships built on trust.

Interfaces are how software expresses that trust.
`,
    },

    {
      title: "An Interface Is Not an Implementation",

      content: `
One of the easiest mistakes in software design is allowing implementation details to become part of an interface.

A database schema leaks into an API.

A framework-specific object becomes publicly exposed.

Internal validation rules become external requirements.

At first, these decisions seem harmless.

After all, the implementation already exists.

Why not expose it directly?

Because implementations evolve.

Interfaces should not.

An implementation answers the question,

"How does this work today?"

An interface answers a different question,

"What can other parts of the system safely depend upon?"

Those questions should rarely produce identical answers.

The implementation belongs to today's engineer.

The interface belongs to every future engineer who depends upon it.

Architecture protects that distinction.
`,
    },

    {
      title: "Good Interfaces Make Change Invisible",

      content: `
The greatest compliment an interface can receive is silence.

No migration guide.

No emergency deployment.

No broken consumers.

No unexpected regressions.

Internally, everything may have changed.

Algorithms improve.

Queries become faster.

Infrastructure is replaced.

Entire services are rewritten.

None of that should matter to the consumer.

From the outside, the promise remains intact.

That is the purpose of a well-designed interface.

It absorbs internal change so the rest of the system does not have to.

Interfaces are not barriers to progress.

They are the mechanisms that make progress safe.
`,
    },

        {
      title: "Promises Must Outlive Implementations",

      content: `
Software rarely remains unchanged for long.

Databases are migrated.

Frameworks are upgraded.

Business rules evolve.

Entire services are replaced.

These changes are signs of a healthy system.

What should remain stable is the promise made to everyone depending upon that system.

An interface should survive implementation changes.

If replacing a database forces every consumer to rewrite their code, the database was never truly hidden behind an interface.

If switching frameworks changes the public behavior of a component, the framework quietly became part of the contract.

That is not abstraction.

It is accidental exposure.

Healthy interfaces separate what consumers need from how the provider currently achieves it.

This separation gives engineers freedom.

Freedom to improve performance.

Freedom to simplify implementation.

Freedom to replace technologies entirely.

The stronger the promise, the greater that freedom becomes.

Architecture is not about freezing implementation.

It is about preserving confidence while implementation continues evolving.
`,
    },

    {
      title: "Breaking a Promise Should Be Rare",

      content: `
Every interface represents an agreement between two parts of a system.

Like every agreement, it should be changed carefully.

Breaking an interface is sometimes necessary.

Products evolve.

Requirements change.

Mistakes are corrected.

But breaking a promise should feel significant.

Not routine.

Healthy engineering cultures develop respect for interfaces.

Engineers think carefully before changing public behavior.

Compatibility becomes a design concern rather than an afterthought.

Versioning exists because promises occasionally need to evolve.

Deprecation exists because consumers deserve time to adapt.

Documentation exists because promises should be understood before they are changed.

None of these practices exist to slow development.

They exist because stability creates trust.

Trust allows independent teams to move quickly without constantly coordinating every implementation detail.

Promises are valuable precisely because they are dependable.
`,
    },

    {
      title: "Interfaces Reduce Knowledge",

      content: `
One of the greatest benefits of an interface is not encapsulation.

It is ignorance.

Productive ignorance.

Consumers should not need to understand internal algorithms.

They should not need to know database schemas.

They should not care whether information is cached, queried or computed.

Every detail hidden behind an interface becomes one less concept another engineer must carry.

This reduction in required knowledge compounds as systems grow.

Instead of understanding everything, engineers understand only the promises that matter to their work.

Local reasoning becomes possible.

Teams become more independent.

Systems become easier to modify because fewer people must understand each individual change.

The interface protects implementation.

Just as importantly, it protects engineers from unnecessary complexity.
`,
    },

        {
      title: "A Promise Defines Responsibility",

      content: `
Interfaces do more than describe communication.

They define responsibility.

Every interface answers an important architectural question.

"What is this component responsible for providing?"

Notice what it does not answer.

It does not describe how the responsibility is fulfilled.

Only that it will be fulfilled.

This distinction is subtle, yet fundamental.

When interfaces begin exposing implementation details, responsibility becomes blurred.

Consumers start depending upon behavior that was never intended to be part of the contract.

Eventually the implementation becomes impossible to change without creating unintended consequences elsewhere.

Clear interfaces prevent this.

They establish a stable responsibility while allowing the implementation behind that responsibility to evolve freely.

Architecture depends upon this separation.

Responsibilities remain stable.

Implementations remain flexible.

The two should never be confused.
`,
    },

    {
      title: "The Best Interfaces Feel Obvious",

      content: `
One sign of an immature interface is constant explanation.

Engineers repeatedly ask how it should be used.

Consumers accidentally misuse it.

Documentation becomes filled with exceptions and warnings.

These are usually symptoms of unclear design rather than careless users.

Great interfaces rarely require lengthy explanation.

Their purpose is obvious.

Their behavior is predictable.

Their responsibilities remain focused.

Every operation feels like it naturally belongs.

This simplicity is rarely achieved by accident.

It emerges through revision.

Methods are removed.

Responsibilities are narrowed.

Names become more precise.

Capabilities become easier to understand.

Like architecture itself, good interfaces are usually the result of deliberate subtraction rather than continuous addition.

The fewer assumptions consumers must make, the stronger the interface becomes.
`,
    },

    {
      title: "Conclusion",

      content: `
Software systems grow through collaboration.

Not only collaboration between engineers.

Collaboration between components.

Interfaces make that collaboration possible.

They establish trust.

They preserve stability.

They reduce the amount of knowledge required to understand a system.

They allow implementations to improve without forcing every consumer to improve alongside them.

Without interfaces, every internal decision becomes an external dependency.

Without stable promises, every refactor becomes a source of uncertainty.

Architecture is often described through patterns and diagrams.

Yet one of its greatest achievements is much quieter.

It creates reliable agreements between independent parts of a system.

Those agreements allow software to evolve without losing coherence.

An interface is more than a technical construct.

It is a promise.

The stronger that promise, the more confidently the rest of the system can continue moving forward.
`,
    },
  ],
};

export default interfacesArePromises;
