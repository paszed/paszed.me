import type { JournalEntry } from "@/types/journal";

const cohesionBeforeCoupling: JournalEntry = {
  slug: "cohesion-before-coupling",

  title: "Cohesion Before Coupling",

  description:
    "Software becomes easier to understand when related responsibilities stay together. Before deciding how components should communicate, decide what naturally belongs together.",

  category: "Architecture",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 14,

  tags: [
    "Architecture",
    "Software Design",
    "Cohesion",
    "Coupling",
    "Maintainability",
  ],

  sections: [
    {
      title: "Most Engineers Start With the Wrong Question",

      content: `
Discussions about software architecture frequently begin with communication.

How should these services interact?

Should this module depend on that one?

Should we use events?

Should we expose an API?

These are important questions.

They simply are not the first questions.

Before deciding how software communicates, we should first decide what belongs together.

That question determines almost every architectural decision that follows.

If responsibilities are grouped naturally, communication becomes simpler.

If responsibilities are scattered arbitrarily, no amount of clever architecture can compensate for the confusion.

Architecture begins with organization.

Communication comes afterwards.

This is why cohesion deserves far more attention than it usually receives.

Coupling determines how components relate to one another.

Cohesion determines whether those components made sense in the first place.
`,
    },

    {
      title: "Things That Change Together Belong Together",

      content: `
One of the simplest ways to recognize good cohesion is to observe change.

When two pieces of logic almost always change together, they probably belong together.

When they rarely change together, separating them often produces a healthier design.

This sounds almost obvious.

Yet many systems are organized according to technical categories rather than evolving responsibilities.

Validation exists in one place.

Business rules somewhere else.

Formatting inside another utility.

Persistence in another layer.

A single product change now requires modifications across half the application.

The software has become organized around implementation.

Not around behavior.

Healthy cohesion follows behavior.

Responsibilities that evolve together remain together.

That alignment makes future change remarkably predictable.
`,
    },

    {
      title: "A Component Should Tell One Story",

      content: `
Imagine opening a file for the first time.

As you read through it, a question naturally forms.

"What is this responsible for?"

Good components answer immediately.

Every function contributes to the same purpose.

Every dependency supports that purpose.

Every piece of state belongs to that purpose.

The component tells one coherent story.

Poor cohesion tells several stories at once.

Authentication.

Logging.

Validation.

Formatting.

Persistence.

Notifications.

None of these responsibilities are individually wrong.

Together they create uncertainty.

The reader spends more time understanding why these concerns exist together than understanding the problem being solved.

That uncertainty compounds throughout the entire codebase.

Good cohesion reduces cognitive effort because every component has a single narrative.
`,
    },

        {
      title: "High Cohesion Reduces Complexity",

      content: `
One of the greatest misconceptions in software engineering is that complexity comes from size.

Large systems can remain understandable.

Small systems can become chaotic.

The difference is rarely measured in lines of code.

It is measured in cohesion.

A cohesive component has a clear reason to exist.

Its responsibilities reinforce one another.

Its behavior feels internally consistent.

Because of this, engineers can build an accurate mental model quickly.

Low cohesion forces the opposite experience.

Every new function introduces another concept.

Every new dependency raises another question.

Understanding becomes slower because the component no longer represents one idea.

It represents many.

Complexity is not only created by the number of moving parts.

It is created by how unrelated those parts become.

High cohesion keeps related concepts close together.

That closeness reduces the amount of thinking required to safely modify the system.
`,
    },

    {
      title: "Coupling Is Easier to Solve After Cohesion",

      content: `
Many architectural discussions focus on reducing coupling.

Loose coupling is valuable.

Independent components are easier to evolve.

Stable interfaces reduce unnecessary dependencies.

These principles matter.

But coupling should not be optimized before cohesion.

Separating poorly organized responsibilities simply creates multiple poorly organized components.

Nothing meaningful has improved.

The communication between components may become cleaner while the components themselves remain confused.

Healthy architecture follows a different sequence.

First establish what naturally belongs together.

Only then decide how those groups should communicate.

Cohesion gives components their identity.

Coupling defines their relationships.

Relationships cannot be healthy if the participants lack clear identities themselves.

Architecture begins by defining responsibility.

Only afterwards does it define collaboration.
`,
    },

    {
      title: "Splitting Software Too Early Creates New Problems",

      content: `
Modern software development often celebrates decomposition.

Extract another service.

Create another package.

Move another responsibility into its own module.

Sometimes these decisions are correct.

Sometimes they simply relocate confusion.

Every boundary introduces communication.

Every component introduces coordination.

Every abstraction introduces another concept engineers must understand.

Breaking software apart should not be treated as progress by itself.

The goal is not to maximize the number of components.

The goal is to maximize clarity.

If separating a responsibility makes the software easier to understand, the boundary was valuable.

If separation merely creates additional complexity, the architecture has become more complicated without becoming better.

Good cohesion acts as a safeguard against unnecessary decomposition.

It reminds engineers that software should first make sense internally before it is divided externally.
`,
    },

        {
      title: "Cohesion Is Maintained Through Discipline",

      content: `
Cohesion is not something a project achieves once.

It is something it continuously preserves.

Every new feature presents another opportunity to weaken the system.

A helper function is added because it feels convenient.

A business rule is duplicated because extracting it appears unnecessary.

A component quietly accepts one more responsibility because "it is already here."

None of these decisions appear significant.

Collectively they redefine the architecture.

Good engineers constantly ask themselves a simple question.

"Does this belong here?"

That question is remarkably powerful.

It prevents convenience from replacing clarity.

It protects responsibilities from gradually expanding beyond their original purpose.

Healthy cohesion is rarely the result of extraordinary design.

It is usually the result of ordinary discipline applied consistently over time.

Software becomes coherent because engineers repeatedly choose clarity over convenience.

That discipline compounds just as surely as complexity does.
`,
    },

    {
      title: "Good Cohesion Feels Natural",

      content: `
One of the strongest indicators of good architecture is the absence of surprise.

A new engineer opens a component and immediately understands why it exists.

A feature request arrives and its destination feels obvious.

A bug report points toward a specific area of the system instead of requiring an investigation across unrelated modules.

Nothing feels arbitrary.

This experience is difficult to measure.

Yet experienced engineers recognize it almost instantly.

The software feels natural.

Responsibilities align with expectations.

Dependencies make sense.

Changes follow predictable paths.

Good cohesion creates this feeling.

Not because every component is perfectly designed.

But because every component has a purpose that remains focused over time.

Architecture succeeds when understanding becomes intuitive rather than analytical.
`,
    },

    {
      title: "Conclusion",

      content: `
Software architecture is often discussed in terms of communication.

Interfaces.

Dependencies.

Networks.

Services.

Those conversations are important.

But they begin too late.

Before software communicates effectively, it must first understand itself.

Responsibilities that naturally belong together should remain together.

Components should tell one story.

Their purpose should be obvious.

Their boundaries should reflect how the software actually evolves.

Only after cohesion has been established does coupling become meaningful.

Healthy relationships require healthy identities.

The same is true in software.

Architecture does not begin by connecting components.

It begins by defining them.

When cohesion comes first, communication becomes simpler.

Boundaries become clearer.

Change becomes more predictable.

And the system becomes easier to understand long after its original authors have moved on.

Great architecture is not built by separating everything.

It is built by keeping the right things together.
`,
    },
  ],
};

export default cohesionBeforeCoupling;
