import type { JournalEntry } from "@/types/journal";

const latencyIsAFeatureOfTheSystem: JournalEntry = {
  slug: "latency-is-a-feature-of-the-system",

  title: "Latency Is a Feature of the System",

  description:
    "Latency is often treated as a performance problem to optimize away. In distributed systems it is a permanent characteristic of reality. Great architectures acknowledge latency, design around it, and use it to shape better systems.",

  category: "Distributed Systems",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 19,

  tags: [
    "Distributed Systems",
    "Latency",
    "Performance",
    "Architecture",
    "Systems Design",
  ],

  sections: [
    {
      title: "Latency Never Disappears",

      content: `
Software engineers often spend years working inside a single machine.

Function calls feel instantaneous.

Memory access is nearly free.

Data structures exist only nanoseconds away.

Eventually software expands beyond one computer.

A database moves onto another server.

A cache lives elsewhere.

Authentication becomes a separate service.

Files are stored in object storage.

Suddenly operations that once completed almost instantly require communication across a network.

Many engineers initially view this as an optimization problem.

If the system feels slow, they assume enough engineering effort can eliminate the delay.

Reality is different.

Latency is not a bug.

It is a property of distributed computing itself.

Information requires time to travel.

Networks introduce uncertainty.

Hardware introduces queues.

Routers introduce hops.

Storage introduces waiting.

Every distributed request consumes time simply because the physical world requires it.

No amount of engineering changes the speed of light.

The objective therefore is not eliminating latency.

It is designing systems that behave well despite it.
`,
    },

    {
      title: "Users Experience Time, Not Architecture",

      content: `
Architecture diagrams never appear on a user's screen.

Time does.

Users rarely know whether an application consists of one service or one thousand.

They notice something much simpler.

Did it respond immediately?

Did it feel smooth?

Did the interface hesitate?

Every millisecond contributes to perception.

Two systems may perform identical work internally while creating entirely different experiences externally.

One blocks the user after every interaction.

The other performs work asynchronously while allowing the interface to remain responsive.

The second system often feels dramatically faster despite requiring the same amount of computation.

Latency therefore extends beyond infrastructure.

It becomes part of product design.

Engineering decisions shape human perception.

Performance is experienced emotionally long before it is measured technically.
`,
    },

    {
      title: "Every Network Call Is an Architectural Decision",

      content: `
Inside a monolith, calling another function carries almost no cost.

Across a network, every request becomes meaningful.

Each request introduces latency.

Each request introduces another opportunity for failure.

Each request increases operational complexity.

Architects therefore begin treating remote communication differently from local execution.

Questions naturally emerge.

Can these requests be combined?

Should this data already exist locally?

Would caching remove unnecessary communication?

Can work occur in parallel rather than sequentially?

Distributed systems reward engineers who minimize unnecessary conversations between services.

The fastest request is frequently the one that never needed to happen.

Latency accumulates quietly.

Excellent architecture notices accumulation before users do.
`,
    },

        {
      title: "Waiting Is Contagious",

      content: `
Latency rarely exists in isolation.

One slow request delays another.

Dependent services begin waiting for each other.

Connection pools fill.

Worker threads become occupied.

Queues grow longer.

Eventually an issue affecting one component spreads throughout the system.

This phenomenon surprises many engineers.

The original slowdown may have been only a few hundred milliseconds.

Yet those milliseconds multiply across thousands of concurrent requests.

A healthy distributed system therefore protects itself.

Timeouts prevent infinite waiting.

Circuit breakers stop unhealthy dependencies from consuming resources indefinitely.

Backpressure slows incoming work before the system collapses.

Queues absorb temporary spikes.

Graceful degradation preserves core functionality even while optional features become unavailable.

Latency is dangerous because it propagates.

Engineering resilience requires preventing waiting from becoming contagious.
`,
    },

    {
      title: "Parallelism Often Beats Optimization",

      content: `
Many engineers instinctively optimize individual operations.

They make queries faster.

Compress responses.

Reduce allocations.

These improvements matter.

Yet distributed systems often benefit more from changing execution order than execution speed.

Independent requests should execute simultaneously whenever possible.

Background work should leave the critical path.

Expensive calculations should happen before users request them.

Prefetching eliminates unnecessary waiting.

Streaming delivers useful information before complete processing finishes.

Rather than asking,

"How do we make this request faster?"

Engineers increasingly ask,

"Why are these requests waiting for one another?"

Reducing sequential dependencies frequently produces larger improvements than optimizing isolated operations.

Architecture shapes latency more profoundly than implementation details.
`,
    },

    {
      title: "Consistency Has a Cost",

      content: `
Immediate consistency often requires coordination.

Coordination requires communication.

Communication introduces latency.

This relationship appears repeatedly throughout distributed systems.

Waiting for every replica to acknowledge a write increases confidence.

It also increases response time.

Verifying every dependency before responding improves correctness.

It also delays completion.

Many successful systems deliberately separate user experience from background synchronization.

Users receive immediate confirmation.

Replication continues afterward.

Indexes update asynchronously.

Caches refresh independently.

Search results eventually reflect new data.

Engineering therefore becomes an exercise in understanding which operations truly require immediate consistency and which merely appear to.

Perfect immediacy is rarely free.

It almost always arrives with additional latency.
`,
    },

        {
      title: "Latency Shapes System Boundaries",

      content: `
The boundaries between services are often discussed in terms of business domains.

That perspective is important.

Another perspective is equally valuable.

Every boundary introduces communication.

Communication introduces latency.

An architecture with too many boundaries may spend more time exchanging information than performing useful work.

Conversely, boundaries that encompass too many responsibilities become difficult to maintain and evolve.

Healthy distributed systems balance these competing forces.

Services should be sufficiently independent to evolve on their own.

They should also avoid excessive communication that fragments a single business operation into dozens of remote calls.

Architecture is therefore not simply an exercise in separating responsibilities.

It is an exercise in deciding where communication is justified.

Every service boundary carries a latency budget.

Wise architects spend that budget carefully.
`,
    },

    {
      title: "Measure Before You Optimize",

      content: `
Latency often inspires premature optimization.

Teams rewrite services.

Replace databases.

Introduce caches.

Adopt new protocols.

Only later do they discover the original bottleneck existed elsewhere.

Distributed systems are too complex to optimize through intuition alone.

Engineers require evidence.

Tracing identifies slow request paths.

Metrics reveal long-term trends.

Profiling exposes inefficient execution.

Load testing demonstrates behavior under realistic demand.

Only after understanding where time is actually spent can optimization become meaningful.

Performance engineering is fundamentally empirical.

Without measurement, optimization becomes speculation.

Successful engineering organizations optimize what exists—not what they imagine exists.
`,
    },

    {
      title: "Conclusion",

      content: `
Latency is one of the defining realities of distributed computing.

It cannot be removed.

It cannot be ignored.

It can only be understood.

Every network request consumes time.

Every dependency introduces waiting.

Every coordination point delays progress.

Rather than fighting these realities, successful architectures embrace them.

They minimize unnecessary communication.

Execute independent work concurrently.

Protect systems from cascading delays.

Measure continuously.

Optimize deliberately.

Most importantly, they recognize that users experience software through time.

Performance is not merely a technical metric.

It is part of product quality.

It influences trust.

Perceived reliability.

Satisfaction.

Engineering maturity begins when latency stops being viewed as an unfortunate implementation detail and starts being treated as a fundamental property of distributed systems.

The best architectures are not those that pretend latency does not exist.

They are those that are designed around the certainty that it always will.
`,
    },
  ],
};

export default latencyIsAFeatureOfTheSystem;
