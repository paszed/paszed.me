import type { JournalEntry } from "@/types/journal";

const architectureOptimizesTeamsNotComputers: JournalEntry = {
  slug: "architecture-optimizes-teams-not-computers",

  title: "Architecture Optimizes Teams, Not Computers",

  description:
    "Processors execute billions of operations per second. Software projects slow down because people struggle to coordinate, not because computers struggle to compute. Great architecture reduces communication before it reduces latency.",

  category: "Architecture",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 15,

  tags: [
    "Architecture",
    "Engineering",
    "Teamwork",
    "Conway's Law",
    "Software Design",
  ],

  sections: [
    {
      title: "The Slowest Part of Every System",

      content: `
Modern computers are astonishingly fast.

Processors execute billions of instructions every second.

Networks transfer enormous amounts of data.

Storage continues becoming faster.

Frameworks improve.

Compilers improve.

Hardware improves.

Yet many software projects continue feeling slow.

Not because machines have reached their limits.

Because people have.

Most engineering delays are not caused by computation.

They are caused by communication.

One engineer waits for another team's approval.

A feature depends on knowledge that exists in only one person's head.

A pull request cannot be merged because three unrelated systems must change together.

Meetings replace implementation.

Coordination replaces progress.

The bottleneck is no longer the computer.

It is the organization building the software.

Architecture exists to improve this situation.

Not by making processors faster.

By making engineers less dependent on one another.
`,
    },

    {
      title: "Software Mirrors Organizations",

      content: `
Software rarely evolves independently of the people creating it.

Teams naturally influence architecture.

Communication patterns become dependency graphs.

Organizational boundaries become software boundaries.

Responsibilities inside the company quietly become responsibilities inside the codebase.

This observation has become known as Conway's Law.

It is less a rule than a recurring reality.

The architecture of a system often resembles the structure of the organization that produced it.

This means architecture cannot ignore people.

Designing software without considering how teams collaborate produces systems that are technically elegant yet operationally frustrating.

Healthy architecture acknowledges the human side of engineering.

It creates boundaries that match ownership.

It allows teams to make decisions independently.

It reduces the number of conversations required before meaningful work can begin.

Architecture should reflect the way people work.

Not force people to work around the architecture.
`,
    },

    {
      title: "Every Dependency Creates a Conversation",

      content: `
Technical dependencies are easy to identify.

Imports.

APIs.

Databases.

Shared libraries.

Human dependencies are more subtle.

One team owns deployment.

Another owns authentication.

A third owns billing.

A simple feature suddenly requires conversations with three different groups before implementation can even begin.

Every unnecessary dependency introduces another discussion.

Another review.

Another approval.

Another delay.

This is one of the hidden costs of poor architecture.

The software still compiles.

The system still functions.

But the organization becomes slower.

Healthy architecture minimizes unnecessary coordination.

Not because collaboration is undesirable.

Because collaboration should be intentional.

Engineers should communicate when solving meaningful problems.

Not because the architecture forces them to.
`,
    },

        {
      title: "Independent Teams Build Independent Systems",

      content: `
One of the clearest signs of healthy architecture is the ability for a team to make progress without waiting.

A feature is identified.

The responsible engineers understand the problem.

They implement the solution.

They deploy the change.

No unnecessary approvals.

No unrelated dependencies.

No organization-wide coordination.

This kind of autonomy is not created through process alone.

It is created through architecture.

When responsibilities are clearly separated, ownership becomes obvious.

Each team understands the part of the system they are responsible for.

Changes remain local.

Knowledge remains focused.

The architecture gives engineers room to move.

This does not eliminate collaboration.

It simply ensures collaboration happens because it creates value, not because the software has become tangled.

Healthy organizations scale by increasing the number of independent decisions that can happen simultaneously.

Architecture should make that possible.
`,
    },

    {
      title: "Local Decisions Compound",

      content: `
Every engineering decision carries a cost.

The question is who pays it.

In tightly coupled systems, even small decisions ripple across the organization.

Renaming a field requires multiple teams.

Changing a workflow requires synchronized deployments.

Improving one service unexpectedly affects five others.

The decision itself may be simple.

Its coordination is not.

Healthy architecture keeps decisions local.

Most improvements should affect only the engineers responsible for that area of the system.

Other teams continue working uninterrupted.

Development becomes parallel rather than sequential.

This compounding effect becomes increasingly valuable as organizations grow.

A company with five engineers may tolerate unnecessary coordination.

A company with two hundred engineers cannot.

Architecture determines whether growth multiplies productivity or multiplies meetings.
`,
    },

    {
      title: "Architecture Should Reduce Cognitive Load",

      content: `
Every engineer carries a mental model of the software they work on.

That model has limits.

No one can accurately understand every implementation detail of a large system.

Architecture should respect this reality.

Instead of requiring engineers to understand everything, it should make local understanding sufficient.

An engineer working on payments should primarily understand payments.

An engineer working on search should primarily understand search.

They should not require deep knowledge of authentication, analytics, infrastructure and notifications simply to complete ordinary work.

This reduction in required knowledge is one of architecture's greatest contributions.

It allows expertise to develop naturally.

It shortens onboarding.

It reduces mistakes.

Most importantly, it allows engineers to focus their attention where it creates the most value.

Software becomes easier to change because understanding becomes appropriately scoped.
`,
    },

        {
      title: "Great Architecture Makes Organizations Smaller",

      content: `
As software systems grow, organizations naturally grow alongside them.

More engineers.

More teams.

More products.

More responsibilities.

Growth is inevitable.

Complexity is not.

One of the hidden goals of architecture is preserving the feeling of working inside a much smaller organization.

An engineer should not need to know fifty people before shipping a feature.

A team should not require approval from half the company to improve the software they own.

Ownership should remain obvious.

Responsibilities should remain stable.

Communication should remain purposeful.

Great architecture creates the illusion that the organization is smaller than it really is.

Not by reducing people.

By reducing unnecessary interaction between them.

This is one of the reasons healthy software organizations often feel remarkably calm.

Engineers know what they own.

They know where decisions belong.

Progress happens without constant coordination.

Architecture has quietly removed friction that otherwise would have become organizational overhead.
`,
    },

    {
      title: "The Best Architecture Becomes Invisible",

      content: `
People often notice architecture only when something goes wrong.

Features become difficult to implement.

Deployments require dozens of approvals.

Every change produces unexpected regressions.

Teams become hesitant to modify existing code.

Architecture suddenly becomes a topic of discussion.

Healthy architecture produces the opposite experience.

Engineers rarely think about it.

Work flows naturally.

Ownership feels obvious.

Changes remain predictable.

New engineers become productive quickly because the structure of the software mirrors the structure of responsibility.

Nothing feels extraordinary.

That quietness is not accidental.

It is the result of years of deliberate architectural decisions that reduced complexity instead of accumulating it.

The greatest compliment an architecture can receive is not admiration.

It is invisibility.

When engineers are free to focus on solving product problems instead of navigating organizational complexity, the architecture has succeeded.
`,
    },

    {
      title: "Conclusion",

      content: `
Architecture is often evaluated through technical metrics.

Performance.

Availability.

Scalability.

Reliability.

These qualities matter.

But software is not built by processors.

It is built by people.

Every architectural decision influences how those people communicate, collaborate and make decisions.

Good architecture reduces unnecessary dependencies.

It keeps ownership local.

It limits the amount of knowledge required to contribute.

It allows teams to move independently without sacrificing coherence.

As organizations grow, these qualities become increasingly valuable.

Computers continue becoming faster.

Human attention does not.

The most effective architectures recognize this difference.

They optimize communication before computation.

They reduce coordination before latency.

They enable engineers before they enable machines.

Ultimately, architecture is not only about building software that scales.

It is about building organizations that can continue scaling alongside the software they create.
`,
    },
  ],
};

export default architectureOptimizesTeamsNotComputers;
