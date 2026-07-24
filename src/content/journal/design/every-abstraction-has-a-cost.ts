import type { JournalEntry } from "@/types/journal";

const everyAbstractionHasACost: JournalEntry = {
  slug: "every-abstraction-has-a-cost",

  title: "Every Abstraction Has a Cost",

  description:
    "Abstractions simplify software by hiding complexity, but they are never free. Every layer introduced removes duplication while adding indirection. Good engineers understand both sides of that trade-off.",

  category: "Design",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 15,

  tags: [
    "Software Design",
    "Architecture",
    "Abstraction",
    "Engineering",
    "Maintainability",
  ],

  sections: [
    {
      title: "The Appeal of Abstraction",

      content: `
One of the first design principles engineers learn is to avoid duplication.

If two pieces of software appear similar, extract the common behavior.

Create a helper.

Introduce a shared component.

Build an abstraction.

The motivation is sensible.

Duplicated code increases maintenance.

Fixes must be applied in multiple places.

Behavior gradually diverges.

Abstractions promise a cleaner alternative.

One implementation.

One responsibility.

One place to make future changes.

Because of these benefits, abstraction quickly becomes associated with good engineering.

Many developers begin treating it as an unquestionable improvement.

Whenever duplication appears, another abstraction follows.

Eventually the software becomes full of reusable layers.

Reusable utilities.

Reusable services.

Reusable frameworks.

Everything appears wonderfully organized.

Until somebody needs to understand it.

Abstractions solve real problems.

They also create new ones.

Understanding both is where software design begins.
`,
    },

    {
      title: "Every Layer Hides Something",

      content: `
The purpose of an abstraction is to hide complexity.

Consumers no longer need to understand every implementation detail.

They interact with a simpler interface instead.

This reduction in visible complexity is enormously valuable.

But hidden complexity does not disappear.

It merely moves.

Every abstraction creates another layer that future engineers must eventually understand.

The software may look simpler from the outside while becoming more complicated internally.

This is neither good nor bad.

It is simply the cost of abstraction.

The question therefore changes.

Instead of asking,

"Can we abstract this?"

good engineers ask,

"Is the complexity we are hiding greater than the complexity we are introducing?"

That single question prevents countless unnecessary abstractions.

The best abstractions reduce overall complexity.

The worst merely relocate it.
`,
    },

    {
      title: "Duplication Is Sometimes Honest",

      content: `
One of the most misunderstood ideas in software design is the belief that all duplication is harmful.

It is not.

Sometimes two pieces of code look similar because they currently solve similar problems.

Tomorrow those problems may evolve independently.

Abstracting them together today creates an artificial relationship.

Future changes become awkward.

The abstraction grows.

Configuration options multiply.

Special cases accumulate.

Eventually the abstraction exists only to preserve an assumption that stopped being true long ago.

A small amount of duplication would have been easier to understand.

Easier to modify.

Easier to remove.

Duplication is a cost.

Premature abstraction is often a larger one.

The purpose of design is not eliminating repetition at all costs.

It is preserving clarity while software continues evolving.
`,
    },

        {
      title: "Abstractions Should Follow Understanding",

      content: `
One of the most common mistakes in software design is introducing abstractions before understanding the problem.

An engineer sees similar code.

A shared interface appears.

A generic utility is created.

Everything feels cleaner.

For a while.

The difficulty is that similarity does not necessarily indicate sameness.

Two implementations may appear identical while solving fundamentally different problems.

Time eventually reveals those differences.

The abstraction begins growing.

New configuration options appear.

Conditional logic accumulates.

Exceptions become ordinary.

What began as simplification gradually becomes another source of complexity.

Healthy abstractions emerge after engineers understand why different implementations truly belong together.

They are discovered through experience.

Not invented through optimism.

Understanding should lead abstraction.

Never the other way around.
`,
    },

    {
      title: "Generic Software Is Often Less Useful",

      content: `
Engineers naturally admire reusable software.

Writing something once and applying it everywhere feels efficient.

Sometimes it is.

More often, generic software solves hypothetical problems rather than real ones.

Functions gain optional parameters.

Components become highly configurable.

Interfaces attempt to satisfy every possible future use case.

The result is software that appears flexible while becoming increasingly difficult to understand.

Specific software tells a clear story.

Its purpose is obvious.

Its assumptions remain visible.

Generic software frequently hides those assumptions behind configuration and indirection.

The irony is that software written for one well-defined purpose often proves easier to reuse than software intentionally designed to be reusable.

Specificity creates clarity.

Clarity creates confidence.

Confidence makes adaptation easier than premature generalization ever could.
`,
    },

    {
      title: "Abstractions Require Maintenance",

      content: `
Every abstraction becomes part of the software's long-term responsibility.

It must be documented.

Tested.

Maintained.

Reviewed.

Understood by future engineers.

Every change to its behavior must consider every consumer that depends upon it.

This responsibility is frequently underestimated.

Creating an abstraction feels like completing work.

In reality, it begins work.

The abstraction now exists for as long as the software exists.

If its purpose remains valuable, the investment pays dividends.

If its purpose disappears, the abstraction quietly becomes technical debt.

Good engineers recognize this before introducing another layer.

They ask whether the abstraction will continue earning its place years from now.

Not simply whether it removes duplication today.
`,
    },

        {
      title: "The Best Abstractions Disappear",

      content: `
One of the strongest indicators of good software design is how little attention its abstractions demand.

Consumers do not constantly think about them.

They simply solve problems.

Their purpose feels obvious.

Their behavior remains predictable.

Nothing about them appears clever.

This quietness is intentional.

A successful abstraction reduces the number of decisions engineers must make.

It eliminates repetition without introducing uncertainty.

It provides capability without exposing unnecessary complexity.

Poor abstractions behave differently.

They require documentation to explain why they exist.

They accumulate exceptions.

They become difficult to extend because every change risks breaking unrelated consumers.

Eventually engineers begin working around the abstraction instead of through it.

At that point, the abstraction has stopped simplifying the software.

It has become part of the complexity it was originally created to remove.

The best abstractions eventually become invisible.

Not because they are unimportant.

Because they fit the problem so naturally that engineers stop noticing them altogether.
`,
    },

    {
      title: "Design Is the Art of Choosing What to Hide",

      content: `
Every design decision reveals some information while hiding something else.

An abstraction hides implementation.

An interface hides complexity.

A module hides internal organization.

None of these decisions are accidental.

Software design is fundamentally the practice of deciding what future engineers should be required to understand.

Hide too little, and every implementation detail becomes public knowledge.

Hide too much, and the software becomes impossible to reason about when something goes wrong.

Good design finds balance.

It exposes responsibilities.

It conceals mechanisms.

It allows engineers to understand what matters without becoming overwhelmed by details that do not.

This balance cannot be achieved through rules alone.

It requires judgment.

Every abstraction is ultimately an editorial decision about what deserves attention and what should quietly remain behind the scenes.

That is why design is as much about restraint as invention.
`,
    },

    {
      title: "Conclusion",

      content: `
Abstraction is one of the most powerful tools available to a software engineer.

It reduces duplication.

It simplifies interfaces.

It allows systems to evolve without exposing every implementation detail.

Yet every abstraction introduces its own responsibilities.

Another layer.

Another concept.

Another promise that future engineers must understand and maintain.

The question is therefore never whether abstraction is good.

The question is whether this abstraction makes the software easier to understand than the code it replaces.

If it does, it has earned its place.

If it merely relocates complexity, the software has become more complicated despite appearing more organized.

Great software design is not measured by the number of abstractions it contains.

It is measured by how naturally those abstractions fit the problem they were created to solve.

Every abstraction has a cost.

The best engineers ensure the value always exceeds the price.
`,
    },
  ],
};

export default everyAbstractionHasACost;
