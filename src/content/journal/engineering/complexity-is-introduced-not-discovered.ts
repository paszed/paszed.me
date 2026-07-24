import type { JournalEntry } from "@/types/journal";

const complexityIsIntroducedNotDiscovered: JournalEntry = {
  slug: "complexity-is-introduced-not-discovered",

  title: "Complexity Is Introduced, Not Discovered",

  description:
    "Software rarely becomes difficult because of a single catastrophic decision. Complexity emerges through thousands of small engineering choices that appear reasonable in isolation.",

  category: "Engineering",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 14,

  tags: [
    "Engineering",
    "Architecture",
    "Complexity",
    "Maintainability",
    "Software Design",
  ],

  sections: [
    {
      title: "Complexity Never Arrives Overnight",

      content: `
Every engineer has heard the same sentence.

"This codebase has become a mess."

It usually arrives months or years after the project began.

Nobody remembers the exact moment everything became difficult.

There is no commit titled "Introduce unnecessary complexity."

No pull request announces that the software has officially become hard to understand.

Instead, complexity arrives so gradually that it becomes almost invisible.

The first version of the application feels refreshingly simple.

One service.

One database.

A handful of modules.

Everyone understands how everything works.

Then the project grows.

A feature requires another abstraction.

A new customer introduces another edge case.

A dependency promises to solve a recurring problem.

A second service is extracted.

Configuration files multiply.

None of these decisions appear dangerous on their own.

In fact, most of them are entirely reasonable.

That is what makes complexity so deceptive.

Software rarely collapses because of one terrible decision.

It becomes difficult because hundreds of good intentions slowly accumulate into something nobody fully understands anymore.

Complexity is not discovered hidden inside software.

It is introduced, one decision at a time.

Recognizing that distinction fundamentally changes the role of an engineer.

If complexity simply appeared as systems grew, there would be very little we could do about it.

But if engineers introduce complexity through decisions, they also have the ability—and the responsibility—to prevent unnecessary complexity before it becomes permanent.
`,
    },

    {
      title: "Every Decision Leaves a Trace",

      content: `
A software system is more than its source code.

It is a historical record of engineering decisions.

Every directory exists because someone believed it improved organization.

Every abstraction exists because someone wanted to eliminate duplication.

Every dependency exists because someone believed maintaining external software would be cheaper than building it internally.

Every architectural layer exists because someone expected the system to grow in a particular direction.

Those decisions are rarely irrational.

At the moment they are made, they often represent the best information available.

The problem is that software does not preserve only the benefits of those decisions.

It preserves their costs as well.

Every dependency must eventually be updated.

Every abstraction must eventually be understood.

Every configuration option must eventually be maintained.

Every architectural boundary must eventually be respected.

Engineering decisions do not disappear after they have been implemented.

They continue charging interest for as long as the software exists.

Experienced engineers learn to think beyond the immediate benefit of a decision.

Instead of asking,

"What problem does this solve today?"

they also ask,

"What responsibilities does this create tomorrow?"

That second question is often far more important.

Complexity is rarely expensive when it is introduced.

It becomes expensive every day afterwards.
`,
    },

    {
      title: "The Seduction of Cleverness",

      content: `
Software engineering rewards intelligence.

Unfortunately, intelligence and cleverness are not the same thing.

Most engineers have encountered code that is undeniably impressive.

Elegant generics.

Advanced type systems.

Deep inheritance hierarchies.

Metaprogramming.

Recursive abstractions.

Frameworks built on top of frameworks.

Reading the implementation feels like watching an exceptionally talented engineer solve a difficult puzzle.

Maintaining it feels entirely different.

Clever solutions often optimize for the satisfaction of creating them rather than the experience of inheriting them.

The engineer who writes the abstraction understands every assumption behind it.

The engineer reading it six months later sees only complexity.

The greatest compliment software can receive is not,

"I've never seen anyone solve it this way."

It is,

"I understood it immediately."

That is far more difficult to achieve.

Simplicity requires restraint.

Cleverness often requires only creativity.

Engineering should optimize for understanding long after the excitement of implementation has disappeared.
`,
    },

        {
      title: "Every Abstraction Has a Cost",

      content: `
Abstraction is one of the most powerful tools available to software engineers.

It allows duplication to disappear.

It creates reusable building blocks.

It enables systems to evolve without constantly rewriting the same ideas.

Because of these benefits, abstractions are often celebrated as inherently good.

They are not.

Every abstraction removes one kind of complexity while introducing another.

A helper function removes repeated code but introduces another concept that must be understood.

A shared library eliminates duplication but creates another dependency between projects.

An interface improves flexibility but requires future engineers to understand another layer of indirection.

None of these costs are reasons to avoid abstractions.

They are reasons to introduce them deliberately.

One of the most common mistakes in software development is abstracting too early.

Patterns emerge after repetition.

They rarely emerge after a single implementation.

An abstraction created before the problem is fully understood often becomes more complicated than the code it replaced.

Instead of simplifying the system, it simply hides complexity behind another layer.

Good abstractions reduce the amount of thinking required.

Poor abstractions merely relocate that thinking somewhere else.

The goal of engineering is not to maximize abstraction.

It is to maximize clarity.
`,
    },

    {
      title: "Dependencies Are Design Decisions",

      content: `
Adding a dependency is one of the easiest decisions an engineer can make.

A single command downloads thousands of lines of software written by someone else.

Minutes later, a difficult problem appears solved.

It feels almost free.

It never is.

Every dependency becomes part of your system whether you wrote it or not.

Its release schedule becomes part of your release schedule.

Its security vulnerabilities become your security vulnerabilities.

Its breaking changes eventually become your breaking changes.

When an external library stops being maintained, your engineering team inherits a decision they never made.

None of this suggests that dependencies should be avoided.

Modern software would be impossible without them.

The lesson is simply that every dependency should be treated as an architectural decision rather than a convenience.

The cheapest dependency is not always the smallest.

Nor is it the most popular.

It is the dependency whose long-term cost is justified by the value it continues to provide.

Engineers often spend days discussing databases while adding dozens of libraries without hesitation.

In reality, every dependency deserves the same level of consideration.

Each one changes the shape of the system.

Each one influences its future.
`,
    },

    {
      title: "Architecture Cannot Remove Complexity",

      content: `
There is a comforting belief that good architecture eliminates complexity.

It does not.

Some complexity is unavoidable.

A financial system is inherently more complicated than a personal portfolio tracker.

A distributed platform naturally contains more moving parts than a simple command-line application.

Engineering cannot remove the complexity that belongs to the problem itself.

What engineering can do is prevent additional complexity from being introduced unnecessarily.

That distinction matters.

There is domain complexity.

Then there is accidental complexity.

Domain complexity exists because reality demands it.

Accidental complexity exists because engineers created it.

Good architecture accepts the first while constantly reducing the second.

It organizes complexity instead of pretending it does not exist.

Clear boundaries.

Predictable interfaces.

Consistent naming.

Simple ownership.

These choices do not make difficult problems easy.

They make difficult problems understandable.

That is one of the highest goals of engineering.

Not removing complexity entirely.

Making it manageable.
`,
    },


        {
      title: "Simplicity Requires Discipline",

      content: `
There is a common misconception that simple software is the result of simple problems.

In reality, simple software is often the result of extraordinarily disciplined engineering.

Every engineer enjoys building.

Adding another feature feels productive.

Another service appears to improve scalability.

Another abstraction promises flexibility.

Another configuration option makes the system more adaptable.

Saying "yes" is easy.

Engineering often requires saying "no."

No to a feature whose value is uncertain.

No to an abstraction that solves tomorrow's hypothetical problem.

No to another dependency that saves an hour today but creates years of maintenance.

No to premature optimization.

Discipline is rarely visible in the finished product.

Users never notice the features that were intentionally never built.

Engineers rarely celebrate the dependencies they chose not to introduce.

Architecture diagrams never show the unnecessary services that were deliberately avoided.

Yet these decisions shape a system just as much as the code that exists.

Some of the best engineering work leaves no visible trace.

It appears as simplicity.

That simplicity is not the absence of effort.

It is the result of countless decisions to resist unnecessary complexity.
`,
    },

    {
      title: "Complexity Compounds",

      content: `
Complexity behaves much like compound interest.

Small decisions accumulate.

One additional abstraction appears insignificant.

One more dependency feels harmless.

One extra deployment step seems acceptable.

One exception to an architectural rule appears justified.

None of these decisions threatens a project on its own.

Together, they slowly change the character of the system.

Eventually new engineers require weeks instead of days to become productive.

Simple bug fixes require understanding half the application.

Deployments become stressful because nobody fully understands every interaction.

Features take longer to implement than anyone expected.

The software did not suddenly become more difficult.

It simply reached the point where accumulated complexity became impossible to ignore.

Removing complexity is significantly harder than introducing it.

Adding another layer usually takes hours.

Removing it safely may take months.

This is why experienced engineers protect simplicity so carefully.

They understand that complexity grows naturally unless someone actively prevents it.

Simplicity is not the default outcome of software development.

It is something that must be continuously defended.
`,
    },

    {
      title: "Conclusion",

      content: `
Engineers often speak about complexity as though it were an unavoidable consequence of growth.

There is some truth to that.

Real problems are often complex.

Growing systems inevitably contain more moving parts than small ones.

But much of the complexity found in software is not inherited from the problem.

It is inherited from previous engineering decisions.

Every abstraction.

Every dependency.

Every architectural layer.

Every configuration file.

Every exception to an otherwise simple rule.

Each one represents a choice.

Some of those choices are essential.

Many are worthwhile.

Some are simply unnecessary.

Engineering is not the pursuit of clever solutions.

It is the discipline of making deliberate decisions whose long-term benefits outweigh their long-term costs.

The best engineers are not those who build the most sophisticated systems.

They are the ones who leave behind systems that remain understandable years after the excitement of building them has faded.

Complexity is not something waiting to be discovered inside software.

It is something introduced, intentionally or unintentionally, by the pe[118;1:3uople who build it.

The same engineers who introduce unnecessary complexity also possess the ability to prevent it.

That responsibility is one of the defining characteristics of engineering.
`,
    },
  ],
};

export default complexityIsIntroducedNotDiscovered;
