import type { JournalEntry } from "@/types/journal";

const engineeringBeforeCode: JournalEntry = {
  slug: "engineering-before-code",

  title: "Engineering Before Code",

  description:
    "Software quality is determined long before the first line of code is written. Engineering begins with understanding problems, defining boundaries and making deliberate decisions.",

  category: "Engineering",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 14,

  tags: [
    "Engineering",
    "Architecture",
    "Software Design",
    "Maintainability",
    "Decision Making",
  ],

  sections: [
    {
      title: "The Question We Ask Too Early",

      content: `
Every software project begins with a question.

Unfortunately, it is rarely the right one.

Within minutes of creating a new repository, the discussion turns toward technology. Which framework should we use? Which database fits our needs? Should we deploy to AWS or Cloudflare? Is this the right time to split services? Someone opens benchmark charts. Someone else begins comparing programming languages. Before long, the team is debating implementation details for a system that does not yet exist.

It feels productive.

People are making decisions. Whiteboards begin filling with diagrams. Issues appear in the backlog. The first commits land in the repository. There is movement, and movement is comforting because it creates the impression that progress is being made.

But movement is not the same as direction.

A project can move quickly toward the wrong destination.

The uncomfortable reality is that technology decisions have very little value when the underlying problem is still poorly understood. A perfectly engineered solution to the wrong problem is still a failure. Elegant architecture cannot rescue incorrect assumptions, just as clean code cannot compensate for solving something nobody actually needs.

Technology is attractive because it is familiar. Frameworks have documentation. Databases have benchmarks. Languages have passionate communities. Engineers naturally enjoy discussing tools because tools provide certainty.

Problems rarely do.

Real problems are ambiguous. They require questions before answers. They force engineers to admit uncertainty. They demand conversations with users, domain experts and stakeholders rather than documentation pages and benchmark results.

That uncertainty is uncomfortable.

It is also where engineering begins.

Long before the first function is written.

Long before folders exist.

Long before architecture diagrams become implementation.

The quality of a software system is often determined before a single line of code has been written.
`,
    },

    {
      title: "Software Begins Before Software Exists",

      content: `
Many people imagine software begins with a repository.

A new directory is created.

Git is initialized.

Dependencies are installed.

The editor opens.

Development has officially started.

In reality, none of those moments mark the beginning of a software project.

Software begins when someone identifies a problem worth solving.

Everything that follows is simply an attempt to transform an understanding of reality into something that can be executed by a computer.

That distinction appears subtle, but it fundamentally changes how engineering is approached.

If software begins with code, then writing more code feels like progress.

If software begins with understanding, then progress is measured differently.

Questions become more valuable than answers.

Observation becomes more valuable than implementation.

Understanding becomes more valuable than speed.

This explains why experienced engineers often appear slower during the early stages of a project. They ask uncomfortable questions. They challenge assumptions. They investigate edge cases before implementation has even started.

To someone watching from the outside, this can resemble hesitation.

It is the opposite.

They are reducing uncertainty before committing to decisions that may become expensive to reverse.

Every software system eventually reflects the quality of the understanding that created it.

Poor understanding produces fragile systems.

Clear understanding produces resilient ones.

Programming translates ideas into software.

Engineering determines whether those ideas deserve to become software in the first place.
`,
    },

    {
      title: "Every Line of Code Represents a Decision",

      content: `
One of the easiest mistakes to make in software development is to think of code as the product.

It is not.

Code is evidence.

Every file represents a decision that someone once made.

Why does this abstraction exist?

Someone decided duplication would become more expensive.

Why does this service exist?

Someone decided a boundary should be introduced.

Why was this dependency added?

Someone believed its benefits justified the additional maintenance cost.

Why is this folder structured this way?

Someone believed the organization would make the system easier to understand.

Repositories are not collections of files.

They are collections of decisions.

Once you begin looking at software through that lens, reading code changes completely.

You stop asking, "How does this function work?"

Instead, you begin asking, "Why was this decision made?"

Those are fundamentally different questions.

The first explains implementation.

The second explains engineering.

This is also why documentation matters so much.

Code can usually explain what the system does.

Only deliberate documentation can preserve why the system exists in its current form.

Without that context, future engineers are forced to reverse-engineer decisions from implementation details, often arriving at entirely different conclusions than the people who originally designed the system.

Good engineering leaves behind more than working software.

It leaves behind understandable decisions.
`,
    },

    {
      title: "The Cost of Starting Too Early",

      content: `
Modern software development celebrates speed.

Ship quickly.

Move fast.

Prototype immediately.

There is value in iteration, but iteration is often misunderstood.

Moving quickly is beneficial only when movement is directed toward the correct objective.

Otherwise, speed simply accelerates the accumulation of mistakes.

Almost every engineer has experienced the same project.

Development starts immediately because deadlines appear urgent.

Requirements are vague, but implementation begins anyway.

As understanding improves, the architecture changes.

Modules are reorganized.

Interfaces are rewritten.

Data models evolve.

Entire features are discarded.

Months later the team looks back and describes the project as having accumulated technical debt.

Often it wasn't technical debt at all.

It was decision debt.

The implementation faithfully reflected decisions that were made before sufficient understanding existed.

Software cannot be more stable than the assumptions it was built upon.

This is why slowing down at the beginning frequently results in faster delivery overall.

Time spent reducing uncertainty almost always saves more time than it consumes.

Engineering is one of the few disciplines where thinking before acting regularly outperforms acting before thinking.
`,
    },

        {
      title: "Complexity Is Introduced, Not Discovered",

      content: `
Software has a reputation for becoming complicated over time, as though complexity were an inevitable consequence of growth.

It is not.

Complexity is introduced.

One dependency at a time.

One abstraction at a time.

One configuration file.

One additional service.

One exception to an otherwise simple rule.

Very few engineers wake up intending to build a complicated system. Complexity emerges because each individual decision appears reasonable when viewed in isolation.

A caching layer improves performance.

A message queue increases resilience.

Another service separates responsibilities.

A new abstraction eliminates duplication.

Each decision can be justified.

The problem is that software is not experienced one decision at a time.

It is experienced as a whole.

Every additional concept increases the amount of knowledge required to understand the system. Every dependency introduces another lifecycle to manage. Every abstraction forces future engineers to understand not only what the software does, but why that particular layer exists at all.

Good engineering is not measured by how many sophisticated techniques are applied.

It is measured by how much unnecessary complexity never reaches production.

Simple software is rarely simplistic.

It is usually the result of countless decisions to reject ideas that were technically possible but practically unnecessary.

Restraint is one of the least celebrated engineering skills.

It is also one of the most valuable.
`,
    },

    {
      title: "Boundaries Determine the Future",

      content: `
Architecture is often associated with diagrams.

Boxes.

Arrows.

Layers.

Services.

While those visualizations are useful, they are not architecture itself.

Architecture is the deliberate assignment of responsibility.

Every component should answer a simple question.

What is your job?

If that question cannot be answered in a single sentence, the boundary is probably unclear.

Healthy boundaries reduce cognitive load.

An engineer should be able to work within one part of a system without mentally loading the entire application.

That is one of the greatest benefits of modular design.

Not because modules are fashionable.

Because human attention is limited.

As systems grow, communication becomes more expensive than implementation.

Clear interfaces become more valuable than clever algorithms.

Ownership becomes more valuable than optimization.

Responsibility becomes more valuable than flexibility.

The best architectures are rarely those with the most impressive diagrams.

They are the ones where engineers know exactly where a change belongs.

Confusion about ownership is one of the earliest indicators that a system's boundaries are beginning to erode.

Once boundaries disappear, complexity accelerates.

Not because the software changed.

Because understanding it became significantly more difficult.
`,
    },

    {
      title: "Documentation Preserves Decisions",

      content: `
Every engineering team eventually experiences the same moment.

Someone asks a simple question.

Why was this designed this way?

Silence follows.

Perhaps the original engineer has changed teams.

Perhaps they left the company years ago.

Perhaps they simply do not remember.

The implementation still exists.

The reasoning does not.

Source code is exceptionally good at explaining what a system does.

It is remarkably poor at explaining why.

Why was PostgreSQL chosen instead of another database?

Why was this abstraction introduced?

Why was a particular trade-off accepted?

Why does this API intentionally behave differently from the others?

Those answers rarely exist in the implementation itself.

They exist in the conversations that happened before implementation began.

Unless those conversations are preserved, future engineers are forced to reconstruct the reasoning from code alone.

Sometimes they succeed.

Often they invent explanations that were never true.

Documentation is not valuable because engineers forget syntax.

Modern IDEs, documentation websites and search engines solve that problem extremely well.

Documentation matters because decisions disappear long before code does.

Writing documentation is an investment in future understanding.

It allows the next engineer to continue thinking instead of starting over.

In that sense, documentation is not separate from engineering.

It is one of engineering's primary deliverables.
`,
    },

    {
      title: "Engineering Is the Management of Change",

      content: `
Requirements change.

Markets change.

Teams change.

Technologies change.

Software that survives is not software that successfully predicted the future.

It is software that remains adaptable when the future arrives.

This is perhaps the greatest misconception about maintainability.

Maintainability is not achieved by making software perfect.

It is achieved by making change affordable.

Every engineering decision should be evaluated through that lens.

Will this make future modifications easier?

Will another engineer understand this six months from now?

Can this evolve without forcing unrelated parts of the system to change?

Engineering is less about constructing static systems than it is about designing systems capable of continuous evolution.

The best software does not resist change.

It accommodates it.

That is why good engineers think constantly about tomorrow's problems while solving today's.

The code written today will eventually become someone else's starting point.

Good engineering respects that reality.
`,
    },


        {
      title: "Good Engineers Reduce Uncertainty",

      content: `
When people imagine software engineering, they usually imagine programming.

An engineer sits in front of an editor, writes code, runs tests and eventually deploys an application.

Programming is certainly part of the profession.

It is not the profession itself.

Engineering is the systematic reduction of uncertainty.

Before implementation begins, uncertainty exists everywhere.

Do we understand the problem?

Do we understand the users?

Have we identified the constraints?

Are our assumptions actually true?

Will this design continue to work if the system grows tenfold?

These questions cannot be answered by writing code faster.

They are answered through observation, discussion, experimentation and deliberate thinking.

Every architectural diagram reduces uncertainty.

Every design document reduces uncertainty.

Every conversation with a domain expert reduces uncertainty.

Every prototype reduces uncertainty.

Implementation is only one of many tools available to an engineer.

This explains why experienced engineers often appear calm.

They are not trying to maximize the amount of code they write.

They are trying to minimize the amount of uncertainty that remains.

Once uncertainty has been reduced sufficiently, implementation becomes remarkably straightforward.

The difficult work happened long before the first function was written.
`,
    },

    {
      title: "Programming Is the Final Step",

      content: `
Programming is often treated as the beginning of software development.

In reality, it is much closer to the end.

By the time an engineer starts implementing a solution, countless decisions have already been made.

The problem has been explored.

Requirements have been clarified.

Trade-offs have been evaluated.

Responsibilities have been assigned.

Boundaries have been established.

Risks have been identified.

Code simply gives those decisions a concrete form.

This perspective changes the way software should be evaluated.

Beautiful code built upon poor assumptions remains poor software.

Average code built upon exceptional engineering decisions often becomes an exceptional product.

The editor is not where software begins.

It is where engineering becomes visible.

Understanding precedes implementation.

Decisions precede architecture.

Architecture precedes code.

That order matters.

Whenever those stages are reversed, complexity has a habit of appearing where simplicity could have existed.
`,
    },

    {
      title: "Conclusion",

      content: `
There is a persistent belief within software development that progress begins when code is written.

It is an understandable belief.

Code is tangible.

Repositories grow.

Commits accumulate.

Applications become visible.

Thinking, questioning and understanding are far less visible, even though they are often far more important.

Every successful software system is built upon thousands of decisions that users will never see.

Some define boundaries.

Others remove unnecessary complexity.

Many exist solely to make future change easier than it would otherwise have been.

Those decisions are engineering.

Programming is simply one expression of them.

The next time a new project begins, resist the temptation to ask which framework should be used.

Instead ask a different question.

Have we understood the problem well enough to deserve writing software for it?

The answer to that question will influence the quality of the system far more than any programming language, framework or database ever could.

Software begins long before the first line of code.

The editor is simply where engineering decisions become visible.
`,
    },
  ],
};

export default engineeringBeforeCode;
