import type { JournalEntry } from "@/types/journal";

const goodApisFeelInevitable: JournalEntry = {
  slug: "good-apis-feel-inevitable",

  title: "Good APIs Feel Inevitable",

  description:
    "The best APIs rarely surprise their users. They communicate intent clearly, guide correct usage naturally and make the obvious solution the correct one.",

  category: "Design",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 15,

  tags: [
    "Software Design",
    "API Design",
    "Engineering",
    "Developer Experience",
    "Architecture",
  ],

  sections: [
    {
      title: "Every API Is a Conversation",

      content: `
Software rarely exists in isolation.

Modules communicate.

Services exchange information.

Libraries expose functionality.

Applications interact with external systems.

Every one of these interactions happens through an interface.

An API is therefore more than a collection of functions.

It is a conversation between the engineers who designed the system and those who will eventually use it.

Like every conversation, its quality depends on clarity.

A confusing API forces users to constantly ask questions.

What does this parameter mean?

When should this method be called?

What happens if it fails?

A clear API answers those questions before they are ever asked.

It communicates expectations through its structure.

Understanding becomes almost effortless.

The interface begins teaching itself.

That is one of the defining characteristics of good design.

It reduces explanation by increasing clarity.
`,
    },

    {
      title: "Good APIs Guide Correct Behavior",

      content: `
The purpose of an interface is not simply to expose functionality.

It is to guide correct usage.

A well-designed API makes the desired path feel natural.

The incorrect path feels unusual.

This reduces mistakes without requiring extensive documentation.

Instead of preventing every possible misuse through warnings, the design itself encourages better decisions.

Engineers often describe this as making the right thing easy.

That description is incomplete.

The stronger goal is making the right thing feel obvious.

When software naturally encourages correct behavior, engineers spend less time remembering rules and more time solving problems.

Good APIs quietly shape habits.

Over time, those habits become engineering culture.
`,
    },

    {
      title: "Every Parameter Adds Cognitive Load",

      content: `
Interfaces grow gradually.

A new feature requires another option.

A configuration object gains another property.

An additional boolean appears.

Nothing seems particularly concerning.

Eventually using the API requires understanding dozens of combinations.

Each parameter introduces another decision.

Each decision increases cognitive load.

Most complexity is not computational.

It is mental.

Engineers should therefore treat every exposed option as a cost.

An interface with fewer meaningful decisions is often significantly easier to understand than one with unlimited flexibility.

Good APIs do not expose every possibility.

They expose the possibilities that users actually need.

Simplicity is achieved not by hiding functionality.

It is achieved by reducing unnecessary decisions.
`,
    },

        {
      title: "Consistency Creates Confidence",

      content: `
One of the defining characteristics of an excellent API is consistency.

Once engineers learn one part of the interface, they should be able to predict the rest.

Methods follow similar naming conventions.

Errors behave similarly.

Return values are predictable.

Objects expose familiar patterns.

This consistency dramatically reduces the effort required to learn a system.

Instead of memorizing individual functions, engineers begin understanding the philosophy behind the interface.

Every correct prediction reinforces confidence.

Every unexpected behavior weakens it.

Consistency is therefore not simply aesthetic.

It determines whether engineers trust the software.

Trust changes how quickly people build.

It changes how confidently they refactor.

It changes how willingly they adopt an API across larger systems.

Reliable patterns create reliable expectations.

Reliable expectations create reliable engineering.
`,
    },

    {
      title: "Hide Complexity, Don't Ignore It",

      content: `
Good APIs often appear remarkably simple.

That simplicity can be misleading.

The underlying implementation may involve validation, caching, retries, transactions, authentication and network communication.

Users rarely need to understand those details.

An interface exists precisely because complexity belongs behind it.

This does not mean pretending complexity does not exist.

It means placing it where it naturally belongs.

An API should expose concepts.

Implementation should remain an implementation detail.

When internal mechanics leak into the interface, users inherit problems they should never have needed to solve.

Good abstractions absorb complexity.

Poor abstractions distribute it.

The most elegant interfaces often protect engineers from thousands of implementation decisions they never even realize were made.
`,
    },

    {
      title: "The Best Documentation Is Predictability",

      content: `
Documentation remains valuable.

Examples accelerate learning.

Reference material answers uncommon questions.

None of these should compensate for poor design.

An API that constantly requires explanation is communicating that its structure failed to communicate intent.

The strongest interfaces reduce documentation naturally.

Names become obvious.

Relationships become intuitive.

Behavior follows expectations.

Documentation shifts from explaining how to use the API toward explaining why certain design decisions exist.

This distinction matters.

Engineers should reach for documentation to deepen understanding.

Not simply to avoid mistakes.

When predictability increases, documentation becomes reinforcement rather than rescue.

That is the hallmark of thoughtful API design.
`,
    },

        {
      title: "Great APIs Make Incorrect Usage Difficult",

      content: `
An interface should not rely solely on its users making perfect decisions.

Good design anticipates mistakes.

It recognizes that engineers work under deadlines, switch between projects and occasionally misunderstand assumptions.

Rather than expecting flawless usage, the interface should make incorrect usage increasingly difficult.

Clear method names discourage misuse.

Strong types eliminate invalid combinations.

Sensible defaults reduce unnecessary configuration.

Related concepts remain grouped together.

Dangerous operations require deliberate intent.

These design decisions quietly reduce the number of mistakes that reach production.

They do not eliminate errors entirely.

They simply make correctness the path of least resistance.

An API succeeds not because nobody can misuse it.

It succeeds because most engineers naturally use it correctly without having to think about it.
`,
    },

    {
      title: "Interfaces Should Age Gracefully",

      content: `
Every successful API survives longer than its original implementation.

Features are added.

Requirements evolve.

Performance improves.

Entire subsystems may eventually be replaced.

The interface should remain remarkably stable throughout these changes.

This requires restraint.

Exposing implementation details often feels convenient during initial development.

Later those decisions become permanent commitments.

Every public method becomes a promise.

Every parameter becomes an expectation.

Every return type becomes part of someone else's software.

Good API design therefore considers not only today's requirements but tomorrow's flexibility.

Stable interfaces allow implementations to evolve freely behind them.

The less an API reveals about its internals, the more freedom its maintainers retain in the future.

Longevity is rarely accidental.

It is designed.
`,
    },

    {
      title: "Conclusion",

      content: `
Every interface teaches.

It teaches engineers how a system expects to be used.

It communicates responsibility.

It establishes expectations.

It influences confidence.

The best APIs rarely impress through cleverness.

They impress through inevitability.

After learning them, engineers struggle to imagine how they could reasonably have been designed differently.

The names feel natural.

The relationships feel consistent.

The boundaries feel obvious.

Good APIs reduce decisions.

They reduce surprises.

They reduce explanation.

Most importantly, they allow engineers to focus on solving business problems instead of deciphering interfaces.

That is the highest compliment an API can receive.

Not that it is powerful.

Not that it is flexible.

But that it quietly disappears.

The interface becomes invisible because understanding it no longer requires effort.

When software reaches that point, design has done its job.
`,
    },
  ],
};

export default goodApisFeelInevitable;
