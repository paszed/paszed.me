import type { JournalEntry } from "@/types/journal";

const everyDistributedSystemNeedsBackpressure: JournalEntry = {
  slug: "every-distributed-system-needs-backpressure",

  title: "Every Distributed System Needs Backpressure",

  description:
    "Scalable systems are often measured by how much work they can accept. Healthy systems are equally defined by how effectively they refuse work they cannot safely process. Backpressure is the mechanism that protects systems from overwhelming themselves.",

  category: "Distributed Systems",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 19,

  tags: [
    "Distributed Systems",
    "Backpressure",
    "Scalability",
    "Reliability",
    "Architecture",
  ],

  sections: [
    {
      title: "Unlimited Growth Is an Illusion",

      content: `
Every system has limits.

Processors execute only so many instructions.

Memory stores only so much state.

Networks transmit only so much data.

Disks persist only so many writes.

Human operators can respond to only so many incidents.

Distributed systems do not escape these limits.

They merely distribute them.

Yet many architectures behave as though capacity is infinite.

Requests continue arriving.

Messages continue entering queues.

Producers continue publishing events.

Consumers struggle to keep pace.

Eventually latency rises.

Memory fills.

Timeouts increase.

Failures spread.

The problem is rarely the initial increase in demand.

The problem is the absence of a mechanism that acknowledges the system has reached its limits.

Healthy distributed systems do not pretend capacity is endless.

They communicate when enough is enough.
`,
    },

    {
      title: "Fast Producers Can Destroy Healthy Consumers",

      content: `
Independent services almost never operate at identical speeds.

One service may produce thousands of events every second.

Another processes hundreds.

A third depends on an external API that responds unpredictably.

Without flow control, producers overwhelm consumers.

Queues grow faster than they shrink.

Memory usage increases.

Retry storms begin.

Eventually the consumer spends more time recovering than processing useful work.

The producer is functioning perfectly.

The consumer is functioning correctly.

The architecture between them is failing.

Scalability requires balancing production with consumption.

Backpressure provides that balance.

It allows slower components to communicate their capacity before overload becomes failure.
`,
    },

    {
      title: "Backpressure Is Communication",

      content: `
Backpressure is often misunderstood as a performance optimization.

It is fundamentally a communication protocol.

A downstream component communicates that it cannot safely accept additional work.

The upstream component responds by slowing production.

Nothing has broken.

The system is behaving responsibly.

This principle appears throughout computing.

TCP reduces transmission rates during congestion.

Streaming frameworks regulate demand.

Queues absorb bursts before consumers recover.

Rate limiters restrict incoming requests.

Load balancers distribute traffic.

Each mechanism expresses the same architectural idea.

Healthy systems continuously communicate capacity.

Ignoring capacity does not improve throughput.

It merely postpones failure.
`,
    },

        {
      title: "Delaying Work Is Better Than Losing It",

      content: `
When demand exceeds capacity, every system must make a decision.

Accept more work.

Delay work.

Reject work.

Or silently fail.

Only one of these options consistently produces reliable systems.

Delaying work gives the system an opportunity to recover.

Queues grow temporarily.

Consumers gradually reduce the backlog.

Users may experience increased latency.

The work itself remains safe.

This is often preferable to immediate failure.

Of course, delays cannot continue indefinitely.

Every queue has limits.

Every backlog eventually becomes a problem.

Backpressure acknowledges this progression explicitly.

It prefers controlled degradation over uncontrolled collapse.

Distributed systems survive heavy load not because they avoid pressure, but because they decide how to absorb it.
`,
    },

    {
      title: "Load Shedding Is Sometimes the Correct Decision",

      content: `
Not every request should be accepted.

When a system has reached its safe operating limits, refusing additional work may be the most responsible action.

This idea initially feels counterintuitive.

Rejecting requests appears like failure.

In reality, indiscriminately accepting every request often guarantees failure for everyone.

Load shedding protects the work already in progress.

Critical operations continue.

Recovery remains possible.

Latency remains bounded instead of increasing without limit.

Users receive fast, explicit feedback rather than indefinite waiting.

Well-designed systems recognize that availability without stability has little value.

Sometimes protecting the system requires saying no.

Healthy architectures distinguish between serving every request and serving requests well.
`,
    },

    {
      title: "Backpressure Protects the Entire System",

      content: `
Overloaded components rarely fail in isolation.

A struggling database delays application servers.

Application servers exhaust connection pools.

Timeouts trigger retries.

Retries generate even more traffic.

Message queues grow.

Consumers fall behind.

Monitoring fills with alerts.

Operators intervene while every dependency experiences increasing pressure.

This cascading behavior is often the result of missing backpressure.

Capacity information failed to travel upstream.

Instead of slowing the workload, every component attempted to continue operating normally.

Backpressure interrupts this cycle.

Pressure propagates before failure does.

Each component communicates its limits early enough for surrounding systems to adapt.

The result is not merely improved performance.

It is significantly improved resilience.
`,
    },

        {
      title: "Respecting Limits Improves Scalability",

      content: `
It may seem paradoxical that slowing work can improve scalability.

Yet this principle appears throughout engineering.

A highway with unrestricted entry quickly becomes congested.

A restaurant accepts only as many guests as it can serve.

An operating system schedules processes instead of executing everything simultaneously.

Distributed systems behave no differently.

Unlimited concurrency does not produce unlimited throughput.

Past a certain point, additional work simply competes for the same finite resources.

Latency increases.

Cache efficiency decreases.

Context switching rises.

Retries multiply.

Productive work falls.

Backpressure prevents this downward spiral.

By keeping systems within sustainable operating limits, it allows useful work to continue flowing consistently instead of collapsing under uncontrolled demand.

Scalability is therefore not measured by peak capacity alone.

It is measured by sustainable capacity over time.
`,
    },

    {
      title: "Backpressure Is an Architectural Principle",

      content: `
Backpressure should never be viewed as a feature belonging only to message queues or streaming frameworks.

It exists throughout modern architecture.

Rate limiting protects public APIs.

Database connection pools regulate concurrent access.

Worker pools limit background execution.

Thread pools constrain parallel computation.

Autoscaling responds to increasing pressure.

Circuit breakers temporarily stop requests to unhealthy dependencies.

Even human operational processes employ backpressure through deployment freezes during incidents.

Every healthy system possesses mechanisms that communicate limits.

These mechanisms differ in implementation.

They embody the same principle.

No component should accept more responsibility than it can safely fulfill.

Architectures that acknowledge capacity remain predictable.

Architectures that ignore capacity eventually become unstable.
`,
    },

    {
      title: "Conclusion",

      content: `
Distributed systems are frequently evaluated by their ability to process enormous workloads.

That capability matters.

Equally important is knowing when not to accept additional work.

Every system possesses finite resources.

Every dependency reaches saturation.

Every queue eventually fills.

Every consumer has a maximum sustainable throughput.

Ignoring these realities does not create scalability.

It merely delays failure until it becomes widespread.

Backpressure transforms limits into explicit communication.

Consumers express capacity.

Producers adapt.

Traffic slows before systems collapse.

Failures remain localized instead of cascading throughout the architecture.

This principle extends far beyond any particular technology.

Whether implemented through queues, rate limiters, streaming protocols, connection pools or load shedding, the objective remains identical.

Healthy systems respect their limits.

By designing software that communicates capacity instead of hiding it, engineers build systems that remain reliable under pressure, recover gracefully from overload and continue delivering value even when demand exceeds expectations.

Backpressure is not a sign of weakness.

It is one of the clearest signs that a distributed system understands its own limits.
`,
    },
  ],
};

export default everyDistributedSystemNeedsBackpressure;
