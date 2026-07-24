import type { JournalEntry } from "@/types/journal";

const distributedSystemsBeginWhereSingleMachinesEnd: JournalEntry = {
  slug: "distributed-systems-begin-where-single-machines-end",

  title: "Distributed Systems Begin Where Single Machines End",

  description:
    "Software becomes fundamentally different once it runs on multiple machines. Problems that barely exist inside a single process become defining architectural concerns. Distributed systems are not larger applications—they are a different class of engineering.",

  category: "Distributed Systems",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 18,

  tags: [
    "Distributed Systems",
    "Architecture",
    "Scalability",
    "Software Engineering",
    "Systems Design",
  ],

  sections: [
    {
      title: "A Computer Is an Honest Environment",

      content: `
Writing software for a single machine feels predictable.

Memory is local.

Function calls are effectively instantaneous.

Time progresses consistently.

Failure is relatively simple.

When something goes wrong, the process usually crashes, throws an exception or returns an error.

Engineers gradually become accustomed to this environment.

Many assumptions quietly develop.

Data is immediately available.

Communication is reliable.

Latency is almost invisible.

Operations occur in an expected order.

These assumptions hold remarkably well inside one computer.

They stop holding the moment software begins communicating across a network.

That transition changes everything.

Distributed systems are difficult not because they contain more code.

They are difficult because many assumptions software engineers naturally rely upon are no longer guaranteed.

Engineering begins by understanding which assumptions have disappeared.
`,
    },

    {
      title: "The Network Is Part of the Computer",

      content: `
A distributed system is often described as multiple computers working together.

A more useful perspective is that the network itself becomes another component of the system.

Unlike memory, networks introduce uncertainty.

Messages may arrive late.

They may arrive twice.

They may never arrive.

Connections disappear unexpectedly.

Latency fluctuates.

Bandwidth changes.

Entire regions become temporarily unavailable.

Software can no longer assume communication succeeds simply because code requested it.

Every interaction becomes probabilistic rather than deterministic.

Engineers therefore stop asking,

"Does this function work?"

They begin asking,

"What happens if this message never arrives?"

That question appears repeatedly throughout distributed systems engineering.

The network is no longer an implementation detail.

It becomes one of the primary architectural constraints.
`,
    },

    {
      title: "Distance Creates New Physics",

      content: `
Inside a single process, operations are measured in nanoseconds.

Across a network they are measured in milliseconds.

Across continents they may require hundreds of milliseconds.

Those differences appear small.

They fundamentally reshape software design.

One unnecessary database query becomes noticeable.

Sequential requests become expensive.

Repeated communication dominates execution time.

Latency becomes one of the defining characteristics of distributed software.

Unlike processor speed, latency cannot simply be optimized away.

The speed of light itself establishes practical limits.

Engineers therefore redesign systems around minimizing communication rather than merely accelerating computation.

Performance becomes an architectural problem.

Not an algorithmic one.

Distance introduces a new engineering reality.

Time itself becomes part of system design.
`,
    },

        {
      title: "Failure Stops Being Exceptional",

      content: `
One of the defining characteristics of distributed systems is that failure becomes ordinary.

Servers restart.

Containers are replaced.

Network links disappear.

Storage becomes temporarily unavailable.

Cloud providers experience regional outages.

None of these events represent extraordinary circumstances.

They are expected operating conditions.

This changes engineering philosophy.

Software should not merely tolerate failure.

It should anticipate it.

Retries become normal.

Timeouts become essential.

Circuit breakers prevent cascading failures.

Health checks continuously evaluate system state.

Recovery becomes part of the architecture rather than an afterthought.

Distributed systems are successful not because they avoid failure.

They are successful because failure rarely surprises them.
`,
    },

    {
      title: "Coordination Is Expensive",

      content: `
Many engineering problems appear simple until multiple machines must agree.

Who owns this resource?

Which operation happened first?

Has this payment already been processed?

Which copy of the data is correct?

Agreement requires communication.

Communication requires time.

Time introduces uncertainty.

The more coordination a system requires, the slower and more fragile it tends to become.

Healthy distributed architectures therefore minimize coordination whenever possible.

Independent services make independent decisions.

Shared state becomes intentional rather than accidental.

Synchronization happens only where business requirements truly demand it.

Reducing coordination often improves scalability more than increasing hardware.

Engineering maturity frequently consists of discovering where agreement is actually necessary—and where it is not.
`,
    },

    {
      title: "Observability Becomes Essential",

      content: `
Understanding a distributed system cannot rely on intuition.

A single request may pass through dozens of services.

Background workers continue processing long after the original request completes.

Messages travel asynchronously.

Failures appear far from their original cause.

Without visibility, engineers investigate symptoms rather than causes.

Logs become structured.

Metrics become continuous.

Tracing connects requests across service boundaries.

Dashboards reveal system health in real time.

Observability evolves from operational convenience into architectural necessity.

Distributed systems cannot be managed through guesswork.

Understanding requires evidence.

The larger the system becomes, the more valuable observability becomes.

Visibility is one of the foundational capabilities of every successful distributed architecture.
`,
    },

        {
      title: "Scale Is a Consequence, Not the Goal",

      content: `
Distributed systems are frequently associated with enormous technology companies.

Billions of requests.

Millions of users.

Thousands of servers.

While distributed architectures certainly enable scale, scale itself is rarely the primary motivation.

The real motivation is managing complexity.

As applications grow, responsibilities naturally separate.

Independent teams require independent deployment.

Different workloads require different infrastructure.

Availability requirements differ between services.

Business domains evolve at different speeds.

Distribution allows these concerns to evolve independently.

Scaling then becomes a natural consequence of good architectural boundaries.

Organizations that distribute software simply because they expect rapid growth often discover they have introduced unnecessary operational complexity.

Engineering maturity means recognizing when distribution solves a real problem—and when a single application remains the better solution.
`,
    },

    {
      title: "Every Distributed System Is a Collection of Trade-offs",

      content: `
There is no perfect distributed architecture.

Every design decision exchanges one property for another.

Replication improves availability while introducing synchronization challenges.

Caching reduces latency while increasing the possibility of stale data.

Asynchronous messaging improves resilience while sacrificing immediate consistency.

Microservices improve autonomy while increasing operational complexity.

Centralized databases simplify coordination while limiting scalability.

Decentralized systems improve independence while making global reasoning more difficult.

Engineering therefore shifts away from searching for universally correct solutions.

Instead, engineers evaluate which compromises best support the requirements of the system being built.

Distributed systems reward thoughtful trade-offs far more than technical cleverness.

Architecture becomes the discipline of choosing which problems an organization is willing to accept.
`,
    },

    {
      title: "Conclusion",

      content: `
Distributed systems mark a turning point in software engineering.

Once software extends beyond a single machine, certainty disappears.

Communication becomes unreliable.

Time becomes observable.

Failure becomes routine.

Coordination becomes expensive.

Visibility becomes indispensable.

The assumptions that guided software inside a single process no longer apply.

New principles replace them.

Design for failure.

Minimize coordination.

Expect latency.

Observe everything.

Accept trade-offs deliberately.

These ideas form the foundation of every reliable distributed system, regardless of programming language, infrastructure provider or architectural style.

The technologies surrounding distributed systems will continue evolving.

The underlying principles will not.

Understanding these principles allows engineers to reason about systems far beyond today's frameworks or cloud platforms.

Distributed systems begin where single machines end.

Everything that follows builds upon that realization.
`,
    },
  ],
};

export default distributedSystemsBeginWhereSingleMachinesEnd;
