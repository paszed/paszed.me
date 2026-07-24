import type { JournalEntry } from "@/types/journal";

const designingForFailureBeforeScale: JournalEntry = {
  slug: "designing-for-failure-before-scale",

  title: "Designing for Failure Before Scale",

  description:
    "Many engineering teams prepare their systems for growth while assuming normal operation. Distributed systems demand the opposite mindset. Failure is inevitable, and resilient systems are built by assuming it from the beginning.",

  category: "Distributed Systems",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 18,

  tags: [
    "Distributed Systems",
    "Reliability",
    "Fault Tolerance",
    "Architecture",
    "Resilience",
  ],

  sections: [
    {
      title: "Failure Is the Default Condition",

      content: `
Traditional software engineering often treats failure as an unexpected event.

Applications are designed around the assumption that components behave correctly.

Databases respond.

Networks remain connected.

Storage remains available.

Servers continue running.

These assumptions are reasonable inside a single machine.

They become increasingly dangerous once software becomes distributed.

Machines fail every day.

Processes restart automatically.

Cloud infrastructure migrates workloads.

Network partitions occur.

Certificates expire.

Hardware reaches the end of its life.

Entire availability zones occasionally disappear.

None of these events represent extraordinary disasters.

They are ordinary characteristics of operating modern systems.

Distributed architecture therefore begins with a different assumption.

Failure is not exceptional.

Failure is inevitable.

The engineering challenge is no longer preventing every failure.

It is ensuring that failures remain isolated rather than catastrophic.
`,
    },

    {
      title: "Reliability Emerges From Preparation",

      content: `
Many outages reveal the same underlying weakness.

The failing component was expected to fail eventually.

The surrounding system simply wasn't prepared.

Reliable software rarely depends upon perfect infrastructure.

Instead, it assumes infrastructure will occasionally disappoint.

Dependencies become unavailable.

Requests exceed acceptable durations.

Unexpected responses appear.

Connections terminate unexpectedly.

Healthy systems continue operating despite these realities.

Fallback behavior exists.

Timeouts prevent indefinite waiting.

Retries account for temporary failures.

Critical functionality remains available even while secondary capabilities degrade.

Preparation transforms unavoidable failures into manageable incidents.

Reliability is not created during an outage.

It is designed long before one occurs.
`,
    },

    {
      title: "Every Dependency Becomes Part of Your Availability",

      content: `
Software rarely exists in isolation.

Authentication services.

Payment providers.

Object storage.

Caches.

Databases.

Messaging systems.

Third-party APIs.

Every external dependency contributes its own availability characteristics.

An application advertised as highly available cannot exceed the reliability of the systems it depends upon.

One unstable dependency can reduce confidence in an otherwise excellent platform.

Engineering teams therefore evaluate dependencies differently in distributed systems.

Not simply by features.

Not simply by cost.

But by operational behavior.

How often does it fail?

How quickly does it recover?

How predictable are its outages?

Understanding dependencies means understanding your own system.

Every external service becomes part of your architecture whether you acknowledge it or not.
`,
    },

        {
      title: "Redundancy Is Not Waste",

      content: `
Outside engineering, redundancy often sounds inefficient.

Why maintain multiple servers?

Why replicate data?

Why deploy services across multiple regions?

Distributed systems answer these questions differently.

Redundancy exists because failure is expected.

A second database replica is not idle capacity.

It is insurance.

A standby server is not unnecessary infrastructure.

It is resilience waiting for the moment it becomes essential.

The same philosophy applies throughout system design.

Multiple network paths.

Replicated message brokers.

Independent availability zones.

Redundant caches.

Duplicate monitoring systems.

Each increases cost.

Each also reduces the likelihood that a single failure becomes a complete outage.

Engineering therefore evaluates redundancy through the lens of risk rather than utilization.

Capacity that appears unused during normal operation often proves invaluable during abnormal operation.
`,
    },

    {
      title: "Graceful Degradation Preserves Trust",

      content: `
Not every feature carries equal importance.

Users may tolerate delayed recommendations.

They may accept temporarily unavailable search.

They may not tolerate losing access to their accounts.

Distributed systems recognize these differences.

Rather than failing completely, resilient applications continue providing their most valuable capabilities.

Optional features become unavailable.

Critical functionality remains accessible.

A payment platform may postpone analytics while continuing to process transactions.

A social platform may temporarily disable notifications while preserving messaging.

An online marketplace may delay image processing while allowing purchases to continue.

Graceful degradation acknowledges that partial service is often significantly better than no service at all.

Engineering resilience means deciding in advance which capabilities deserve protection under adverse conditions.

Those decisions define how users experience failure.
`,
    },

    {
      title: "Recovery Matters More Than Perfection",

      content: `
Perfect uptime is an attractive objective.

Perfect uptime is also unrealistic.

Every complex system eventually experiences unexpected behavior.

The defining characteristic of mature engineering organizations is therefore not the complete absence of incidents.

It is the speed, confidence and predictability with which incidents are resolved.

Recovery becomes a first-class engineering concern.

Deployments remain reversible.

Backups are continuously verified.

Disaster recovery procedures are rehearsed.

Runbooks document common failures.

Monitoring detects problems before users report them.

Post-incident reviews strengthen future systems.

Organizations become more resilient not because they eliminate every outage, but because each incident leaves the system stronger than before.

Reliability grows through continuous learning.
`,
    },

        {
      title: "Resilience Is an Architectural Property",

      content: `
Reliability cannot be added shortly before deployment.

It cannot be installed as another library.

It cannot be achieved through monitoring alone.

Resilience emerges from architectural decisions made throughout a system's lifetime.

Stateless services recover more easily.

Loose coupling limits the spread of failures.

Idempotent operations simplify retries.

Message queues isolate temporary outages.

Clear service boundaries prevent cascading dependencies.

These choices rarely appear dramatic when viewed individually.

Together they determine how a system behaves under stress.

Architecture reveals its true quality during failure.

A design that appears elegant during normal operation may become fragile the moment assumptions break.

Engineering therefore evaluates architecture not only by how efficiently it performs under ideal conditions, but by how predictably it behaves when conditions deteriorate.

Resilience is designed.

It is never accidental.
`,
    },

    {
      title: "Testing Failure Builds Confidence",

      content: `
Many engineering teams rigorously test features.

Far fewer rigorously test failure.

Requests succeed during development.

Databases remain available.

Infrastructure behaves exactly as expected.

Production rarely offers the same courtesy.

Resilient organizations deliberately introduce failure before reality does.

Servers are restarted.

Network latency is increased.

Dependencies are disabled.

Storage becomes temporarily unavailable.

Deployments are interrupted.

These exercises expose assumptions that ordinary testing never reveals.

The objective is not to create instability.

The objective is to understand how the system behaves when stability disappears.

Confidence comes not from believing failures will never occur.

Confidence comes from observing that the system continues functioning when they inevitably do.
`,
    },

    {
      title: "Conclusion",

      content: `
Distributed systems fundamentally change how engineers think about reliability.

Instead of assuming success, they assume interruption.

Instead of expecting perfect infrastructure, they prepare for imperfect infrastructure.

Instead of preventing every failure, they contain its consequences.

This shift influences every architectural decision.

Dependencies are evaluated by reliability as much as capability.

Redundancy becomes intentional.

Graceful degradation protects essential functionality.

Recovery procedures receive as much attention as deployment pipelines.

Failure testing becomes routine rather than exceptional.

These practices are not pessimistic.

They are realistic.

The physical world guarantees that hardware fails, networks partition and unexpected conditions emerge.

Engineering excellence lies in accepting those realities rather than resisting them.

The strongest distributed systems are not those that never experience failure.

They are the ones whose users barely notice when failure occurs.

Designing for failure is therefore not separate from designing for scale.

It is the foundation upon which scalable systems are built.

A system that cannot survive ordinary failure will never survive extraordinary growth.
`,
    },
  ],
};

export default designingForFailureBeforeScale;
