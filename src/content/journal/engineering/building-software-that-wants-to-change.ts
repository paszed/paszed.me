import type { JournalEntry } from "@/types/journal";

const buildingSoftwareThatWantsToChange: JournalEntry = {
  slug: "building-software-that-wants-to-change",

  title: "Building Software That Wants to Change",

  description:
    "Requirements evolve, products mature and understanding deepens. Good software is not designed to resist change—it is designed to embrace it.",

  category: "Engineering",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 14,

  tags: [
    "Engineering",
    "Architecture",
    "Maintainability",
    "Software Design",
    "Evolution",
  ],

  sections: [
    {
      title: "The Only Constant Is Change",

      content: `
Software projects almost never fail because nothing changes.

They fail because everything does.

Requirements evolve.

Customers discover new needs.

Businesses enter new markets.

Regulations appear.

Technologies improve.

Assumptions that seemed obvious six months ago quietly become outdated.

Yet many software systems are built as though the first version of reality will remain the last.

It is an understandable mistake.

When engineers begin implementing a system, today's requirements feel concrete.

Deadlines encourage certainty.

Specifications appear complete.

Architectures are designed around what is currently known.

The problem is not that engineers misunderstand today's requirements.

The problem is believing today's understanding is permanent.

It never is.

Every successful product eventually teaches its creators something they did not know when development began.

Users behave differently than expected.

Operational constraints emerge.

Entire workflows prove unnecessary while overlooked edge cases become central to the product.

None of these discoveries represent failure.

They represent learning.

Software should be built with the expectation that learning will continue long after the first release.

Engineering is not the pursuit of perfect prediction.

It is the discipline of making future adaptation inexpensive.
`,
    },

    {
      title: "Requirements Are Discoveries, Not Instructions",

      content: `
Many teams speak about requirements as though they arrive fully formed.

A document appears.

Engineers implement it.

The software is complete.

Reality is rarely so cooperative.

Requirements are discovered.

Not delivered.

The first conversation reveals only part of the problem.

The second conversation uncovers assumptions nobody noticed.

The first prototype exposes gaps that specifications never mentioned.

Real users interact with the product in ways no planning session could have anticipated.

Each iteration improves understanding.

That means requirements are not evidence that the project has become unstable.

They are evidence that knowledge has increased.

Good engineering welcomes this process.

Bad engineering fights it.

Systems designed around rigid assumptions eventually become expensive to modify because every new discovery feels like an exception.

Sys[118;1:3utems designed for evolution expect those discoveries from the beginning.

Instead of asking,

"How do we prevent requirements from changing?"

they ask,

"How do we make change inexpensive when it inevitably arrives?"

That is a profoundly different engineering mindset.
`,
    },

    {
      title: "Software Is Never Finished",

      content: `
One of the most misleading words in software development is "finished."

Applications are released.

Versions are shipped.

Milestones are completed.

But software itself is rarely finished.

It continues evolving for as long as people continue depending on it.

Features are refined.

Performance improves.

Security vulnerabilities are addressed.

Infrastructure changes.

Entire business models shift around systems that once appeared complete.

Treating software as a finished product encourages decisions optimized for the present.

Treating software as an evolving system encourages decisions optimized for longevity.

This distinction influences almost everything.

Naming.

Architecture.

Documentation.

Testing.

Interfaces.

Maintainability stops being an optional quality.

It becomes one of the primary characteristics of good engineering.

Software that survives does not survive because it avoided change.

It survives because change never stopped being possible.
`,
    },

        {
      title: "Stable Boundaries, Flexible Implementations",

      content: `
One of the most valuable characteristics of good software is stability.

Not stable implementation.

Stable boundaries.

These are very different ideas.

Implementation should evolve continuously.

Algorithms improve.

Databases change.

Frameworks are replaced.

Infrastructure is modernized.

These changes are healthy.

Boundaries, however, should change far less frequently.

A well-defined interface allows the implementation behind it to evolve without forcing the rest of the system to evolve alongside it.

That is the true value of abstraction.

Not hiding complexity.

Protecting the rest of the system from unnecessary change.

When boundaries are weak, every modification spreads throughout the codebase.

A small feature suddenly requires changes across unrelated modules.

A new database forces updates in business logic.

A deployment decision leaks into application code.

These are symptoms of unstable boundaries.

Healthy systems isolate change.

They acknowledge that implementation will continue evolving while ensuring those changes remain local rather than contagious.

The goal is not to prevent change.

It is to control where change happens.
`,
    },

    {
      title: "Design for Adaptation, Not Prediction",

      content: `
One of the easiest traps in software engineering is attempting to predict the future.

"What if we need multiple regions?"

"What if we support one hundred million users?"

"What if we eventually migrate to another database?"

These questions sound responsible.

Sometimes they are.

More often they encourage engineers to optimize for futures that never arrive.

Entire architectures become more complicated because they were designed around hypothetical requirements instead of real ones.

Ironically, these predictions often reduce adaptability rather than increase it.

Software becomes filled with abstractions that nobody currently needs.

Interfaces become generic before specific requirements exist.

Flexibility turns into uncertainty.

Good engineering accepts that the future cannot be predicted perfectly.

Instead of optimizing for one imagined future, it optimizes for the ability to respond to many possible futures.

The question changes.

Instead of asking,

"What will happen?"

the engineer asks,

"If our assumptions are wrong, how difficult will it be to change?"

That question produces remarkably different systems.

Less speculation.

More resilience.

Less architecture built around imagination.

More architecture built around learning.
`,
    },

    {
      title: "Coupling Determines How Easily Software Evolves",

      content: `
Software rarely becomes difficult to change because individual components are poorly written.

It becomes difficult because too many components depend upon one another.

Hidden coupling quietly spreads throughout a system.

A small change inside one module unexpectedly breaks another.

Business rules become duplicated across multiple services.

Infrastructure decisions leak into application logic.

Teams become afraid to modify code because every deployment feels unpredictable.

This is one of the clearest indicators that software has become resistant to change.

Loose coupling is not valuable because it looks elegant in architecture diagrams.

It is valuable because it limits the consequences of change.

A modification remains local.

Responsibility remains clear.

Understanding remains manageable.

Every unnecessary dependency increases the number of places that must change together.

Every unnecessary connection reduces the independence of the system.

Software evolves most effectively when its components can evolve independently.

That independence is one of architecture's greatest responsibilities.
`,
    },

        {
      title: "Good Software Expects to Be Wrong",

      content: `
One of the defining characteristics of experienced engineers is humility.

Not uncertainty about their abilities.

Humility toward their assumptions.

Every design decision is made using incomplete information.

Requirements are still evolving.

Users have not yet interacted with the product.

Operational realities remain unknown.

Future growth is impossible to measure precisely.

Under those conditions, assuming every decision is permanently correct is unrealistic.

Good software reflects this reality.

It does not assume its first implementation will be its final implementation.

It assumes new information will arrive.

It assumes priorities will change.

It assumes engineers five years from now will understand parts of the domain better than today's team ever could.

This mindset changes the purpose of architecture.

Architecture stops being a monument to today's understanding.

It becomes a framework that allows tomorrow's understanding to replace it.

The strongest engineering decisions are not the ones that prove themselves right forever.

They are the ones that remain inexpensive to revise when reality proves them incomplete.

Software built around certainty becomes fragile.

Software built around learning becomes resilient.
`,
    },

    {
      title: "Architecture Is Continuous",

      content: `
Many projects treat architecture as an early project phase.

A few diagrams are created.

A handful of technical decisions are made.

Development begins.

Architecture is considered complete.

Real software does not work this way.

Architecture evolves every time an engineer introduces a dependency.

Every time a module changes responsibility.

Every time a boundary is redrawn.

Every time a service is extracted.

Every pull request influences the future shape of the system.

Architecture is not something engineers finish before writing code.

It is something they continuously practice while writing code.

This perspective carries an important responsibility.

Small decisions deserve the same level of thought as large ones.

Few systems become difficult because of a single catastrophic architectural mistake.

Most become difficult because hundreds of seemingly insignificant decisions slowly point the software in different directions.

Engineering requires paying attention to those decisions long after the first release.

Architecture is not frozen.

Neither is software.

Neither should the engineer's thinking be.
`,
    },

    {
      title: "Conclusion",

      content: `
Every software system tells a story.

Not only about the problem it solves.

About the assumptions made while solving it.

Some systems tell the story of engineers who believed the future could be predicted.

Others tell the story of engineers who accepted that understanding would continue to evolve.

The second story is usually the more successful one.

Requirements change.

Businesses change.

Technology changes.

Teams change.

Those changes are not interruptions to software development.

They are software development.

The purpose of engineering is not to build systems that never change.

It is to build systems that continue changing without losing their clarity.

The software that survives for years is rarely the software that guessed the future correctly.

It is the software that made adapting to the future an expected part of its design.

Engineering is not about resisting change.

It is about making change feel natural.

The best software does not merely tolerate evolution.

It quietly invites it.
`,
    },
  ],
};

export default buildingSoftwareThatWantsToChange;

