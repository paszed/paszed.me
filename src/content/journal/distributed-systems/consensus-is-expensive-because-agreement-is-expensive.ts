import type { JournalEntry } from "@/types/journal";

const consensusIsExpensiveBecauseAgreementIsExpensive: JournalEntry = {
  slug: "consensus-is-expensive-because-agreement-is-expensive",

  title: "Consensus Is Expensive Because Agreement Is Expensive",

  description:
    "Distributed consensus is often presented as a collection of algorithms like Paxos and Raft. Those algorithms solve a deeper problem. Agreement itself is fundamentally expensive whenever independent computers must arrive at the same conclusion under uncertainty.",

  category: "Distributed Systems",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 19,

  tags: [
    "Distributed Systems",
    "Consensus",
    "Raft",
    "Paxos",
    "Architecture",
  ],

  sections: [
    {
      title: "Agreement Is Easy Until It Isn't",

      content: `
Inside a single application, agreement feels almost effortless.

A variable changes.

Every subsequent instruction observes the same value.

The processor executes instructions in a well-defined order.

There is little ambiguity.

Distributed systems replace certainty with uncertainty.

Multiple machines possess independent views of reality.

Communication requires time.

Messages may be delayed.

Responses may never arrive.

Failures interrupt conversations before they finish.

Now a seemingly simple question becomes surprisingly difficult.

Do all participants actually agree?

Consensus exists because software occasionally requires more than individual decisions.

It requires collective agreement.

That agreement becomes dramatically more expensive once computers can no longer observe exactly the same world.
`,
    },

    {
      title: "Knowledge Is Always Incomplete",

      content: `
Every machine in a distributed system observes only part of reality.

One server has already processed the latest request.

Another has not yet received it.

A third cannot currently communicate with either of them.

Each machine makes decisions using incomplete information.

None possesses perfect knowledge.

Consensus algorithms do not eliminate this uncertainty.

They manage it.

They provide structured ways for independent participants to reach decisions despite imperfect communication.

The important realization is that consensus does not create certainty.

It creates sufficient confidence for systems to continue operating safely.

Distributed engineering frequently consists of acting responsibly despite incomplete knowledge.

Consensus formalizes that responsibility.
`,
    },

    {
      title: "Communication Dominates Consensus",

      content: `
Agreement rarely consumes significant computation.

It consumes communication.

Participants exchange messages.

Votes are collected.

Leadership changes.

Acknowledgements propagate.

Failures trigger additional communication.

Every message introduces latency.

Every additional participant increases coordination.

Every network round trip delays completion.

Consensus therefore scales differently from ordinary computation.

Adding faster processors rarely reduces the cost.

Reducing communication often does.

This explains why distributed consensus remains expensive even on extremely powerful hardware.

The challenge has never been arithmetic.

The challenge has always been reaching agreement across distance.
`,
    },

        {
      title: "Consensus Should Be Rare",

      content: `
One of the most important lessons in distributed architecture is that consensus is not something to optimize.

It is something to minimize.

Every operation requiring global agreement becomes a point of coordination.

Coordination limits scalability.

It increases latency.

It creates additional opportunities for failure.

Healthy distributed systems therefore avoid consensus whenever business requirements allow.

Independent services make independent decisions.

Local state changes remain local.

Derived information updates asynchronously.

Only operations demanding absolute correctness require coordinated agreement.

This philosophy dramatically improves system performance.

Rather than[118;1:3u accelerating consensus, architecture reduces the number of situations in which consensus becomes necessary.

The fastest consensus is frequently the one that never needed to occur.
`,
    },

    {
      title: "Leadership Simplifies Coordination",

      content: `
Many consensus algorithms introduce a leader.

Not because leadership is inherently superior.

Because it simplifies decision making.

Without coordination, multiple participants may attempt conflicting changes simultaneously.

Each believes its own information is correct.

Disagreement follows naturally.

A designated leader reduces ambiguity.

Participants know where decisions originate.

Updates occur in a predictable order.

Recovery becomes easier to reason about.

Leadership itself introduces new engineering responsibilities.

Leaders may fail.

New leaders must be elected.

Followers must detect changes.

Distributed systems therefore exchange one form of complexity for another.

They simplify agreement while accepting the operational costs of maintaining leadership.

Architecture frequently consists of choosing manageable complexity over unavoidable complexity.
`,
    },

    {
      title: "Consensus Exists for Critical State",

      content: `
Not every piece of information deserves distributed consensus.

Many systems perform perfectly well using eventual consistency.

Analytics.

Recommendations.

Caching.

Search indexes.

These capabilities tolerate temporary disagreement.

Other information does not.

Financial transactions.

Distributed locks.

Configuration management.

Cluster membership.

Leader election.

Security credentials.

Errors affecting these domains can produce severe consequences.

Consensus therefore becomes a business decision rather than merely a technical mechanism.

Architecture should reserve expensive coordination for information whose correctness genuinely justifies its cost.

Everything else benefits from greater independence.

Consensus protects the state that absolutely must remain authoritative.
`,
    },

        {
      title: "Consensus Is Ultimately About Trust",

      content: `
At its core, consensus answers a deceptively simple question.

Who should the system trust?

When every participant agrees, the answer is obvious.

The real challenge appears when they do not.

A network partition isolates part of the cluster.

Messages arrive in different orders.

Nodes restart.

Leaders disappear.

Participants observe conflicting information.

Consensus algorithms establish rules that preserve trust despite uncertainty.

They determine which decisions remain authoritative.

Which updates should wait.

Which participants may continue.

These rules are intentionally conservative.

Acting too quickly risks corruption.

Waiting too long reduces availability.

Consensus therefore balances confidence against progress.

Its purpose is not merely helping computers agree.

Its purpose is ensuring they agree without sacrificing correctness.
`,
    },

    {
      title: "Engineering Around Consensus",

      content: `
Experienced architects eventually reach an important realization.

The best distributed systems rarely depend upon consensus everywhere.

Instead, they carefully isolate it.

Critical operations receive strong coordination.

Everything else remains independent.

Business domains are separated.

Ownership becomes explicit.

Asynchronous communication replaces unnecessary synchronization.

Derived data is rebuilt rather than coordinated.

Read-heavy workloads use replicas.

Background processing removes expensive work from user-facing requests.

Every one of these decisions reduces the amount of agreement required across the system.

The result is not only greater scalability.

It is greater simplicity.

Architectures become easier to understand because consensus exists only where its cost is justified.

Good engineering acknowledges that agreement is valuable.

Great engineering recognizes where agreement is unnecessary.
`,
    },

    {
      title: "Conclusion",

      content: `
Consensus algorithms represent one of the greatest achievements in distributed computing.

Yet their true importance lies beyond their implementation.

They reveal a deeper principle.

Agreement itself is expensive.

Distance introduces latency.

Communication introduces uncertainty.

Failures interrupt coordination.

Every additional participant increases complexity.

Consensus provides a disciplined way to preserve correctness despite these realities.

It should therefore be viewed as a carefully managed resource rather than a default architectural pattern.

Healthy distributed systems coordinate only when necessary.

They decentralize whenever possible.

They reserve consensus for information whose correctness outweighs its cost.

Understanding this changes how engineers approach architecture.

The objective is not making consensus faster.

The objective is building systems that require less of it.

Distributed systems become more scalable, more resilient and easier to evolve when agreement becomes the exception rather than the rule[118;1:3u.

Consensus is expensive because agreement is expensive.

The strongest architectures respect that fact from the very beginning.
`,
    },
  ],
};

export default consensusIsExpensiveBecauseAgreementIsExpensive;
