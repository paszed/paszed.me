import type { JournalEntry } from "@/types/journal";

const whyDistributedSystemsNeedIdempotency: JournalEntry = {
  slug: "why-distributed-systems-need-idempotency",

  title: "Why Distributed Systems Need Idempotency",

  description:
    "Distributed systems cannot assume that requests are delivered exactly once. Messages may be duplicated, retries may occur, and failures may interrupt communication. Idempotency allows systems to remain correct even when operations happen more than once.",

  category: "Distributed Systems",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 18,

  tags: [
    "Distributed Systems",
    "Idempotency",
    "Reliability",
    "Architecture",
    "Fault Tolerance",
  ],

  sections: [
    {
      title: "Exactly Once Is Usually an Illusion",

      content: `
Many engineers initially imagine distributed communication as a simple sequence.

A client sends a request.

A server receives it.

The server responds.

The interaction completes.

Reality is rarely so orderly.

The request may reach the server while the response never reaches the client.

The client cannot determine whether the request failed or whether only the response disappeared.

The safest action is often to retry.

Now the server may receive the same request twice.

Neither participant behaved incorrectly.

The network merely behaved like a network.

Distributed systems therefore avoid assuming that operations occur exactly once.

Instead, they assume requests may arrive multiple times.

Architecture begins changing the moment that assumption becomes explicit.
`,
    },

    {
      title: "Retries Improve Reliability",

      content: `
Temporary failures are common.

A database briefly becomes unavailable.

A network packet disappears.

A service restarts.

Without retries, many of these situations would unnecessarily become user-visible failures.

Retries transform transient problems into successful operations.

For this reason they appear throughout modern infrastructure.

HTTP clients retry.

Message brokers retry.

Load balancers retry.

Background workers retry.

Retries dramatically improve reliability.

They also introduce a new responsibility.

The system must behave correctly when the same operation executes again.

Reliability therefore depends not only on retrying intelligently, but on ensuring retries remain safe.
`,
    },

    {
      title: "Doing Something Twice Should Not Always Change the Result",

      content: `
Imagine submitting an online payment.

The payment service processes the transaction.

Before the confirmation reaches the customer, the connection disappears.

The customer presses the payment button again.

Without idempotency, two payments may now exist.

The software behaved exactly as instructed.

The outcome is still incorrect.

Idempotency solves this problem.

An idempotent operation produces the same final state regardless of how many times the identical request is performed.

One request.

Five retries.

Ten duplicated messages.

The outcome remains identical.

This property allows distributed systems to recover from uncertainty without introducing incorrect behavior.

Idempotency transforms retries from a source of risk into a source of resilience.
`,
    },

        {
      title: "Identity Makes Idempotency Possible",

      content: `
A distributed system cannot recognize duplicate work unless it can recognize duplicate requests.

Identity therefore becomes fundamental.

Payment providers frequently assign idempotency keys.

Message brokers assign identifiers.

Events receive globally unique IDs.

Commands carry correlation identifiers.

These identifiers allow software to answer an important question.

"Have I already processed this?"

If the answer is yes, the previous result can be returned.

No duplicate side effects occur.

No additional records are created.

No second payment is processed.

Identity transforms uncertainty into something software can reason about.

Without reliable identity, duplicate detection becomes guesswork.

With reliable identity, repeated requests become ordinary events rather than dangerous ones.
`,
    },

    {
      title: "Side Effects Require Special Care",

      content: `
Reading data is naturally idempotent.

Reading the same record twice changes nothing.

Writing data is different.

Sending an email.

Charging a credit card.

Creating an invoice.

Shipping a package.

Publishing an event.

Each produces side effects beyond the boundaries of a database.

Once these actions occur, reversing them may be difficult or impossible.

Distributed systems therefore separate decision making from execution whenever practical.

A command is validated.

Its identifier is recorded.

Only then are external side effects performed.

If the same command arrives again, the system recognizes it before repeating expensive or irreversible work.

Idempotency protects the real world from the uncertainty of distributed communication.
`,
    },

    {
      title: "At-Least-Once Delivery Depends on Idempotency",

      content: `
Many messaging systems intentionally guarantee at-least-once delivery.

This surprises engineers encountering distributed systems for the first time.

Why intentionally deliver duplicate messages?

Because losing a message is often worse than processing it twice.

If delivery is uncertain, sending the message again dramatically improves reliability.

The burden then shifts to the receiving system.

Consumers must safely process duplicate events.

This design reflects an important engineering principle.

Reliable delivery is easier to achieve than exactly-once execution.

Idempotency bridges that gap.

It allows infrastructure to prioritize delivery while allowing applications to preserve correctness.

Together they create systems that remain dependable despite unreliable communication.
`,
    },

        {
      title: "Idempotency Simplifies Recovery",

      content: `
Recovery is one of the defining characteristics of resilient distributed systems.

Servers restart.

Queues are replayed.

Background jobs resume.

Entire services recover after prolonged outages.

Without idempotency, every recovery operation carries uncertainty.

Should unfinished work be repeated?

Was this event already processed?

Will replaying the queue duplicate customer actions?

These questions complicate incident response.

Idempotent systems answer them much more simply.

Replay the messages.

Retry the requests.

Restart the workers.

Because repeated execution produces the same final state, recovery becomes predictable.

This dramatically reduces operational complexity.

Engineers spend less time determining whether retries are safe and more time restoring service.

Idempotency therefore improves not only correctness but also operational confidence.
`,
    },

    {
      title: "Idempotency Is an Architectural Principle",

      content: `
Idempotency is often introduced as an API feature.

In reality, it extends throughout an entire architecture.

HTTP endpoints accept idempotency keys.

Message consumers track processed events.

Databases enforce uniqueness where appropriate.

Workflows record completed steps.

Distributed transactions avoid repeating irreversible actions.

Each layer contributes to the same objective.

Repeated work should not produce repeated consequences.

This principle influences system boundaries, storage models, messaging infrastructure and operational procedures.

Architectures designed around idempotency naturally become easier to scale, easier to recover and easier to reason about.

Rather than treating duplicate execution as an exceptional circumstance, they recognize it as an ordinary characteristic of distributed computing.

The architecture adapts accordingly.
`,
    },

    {
      title: "Conclusion",

      content: `
Distributed systems replace certainty with probability.

Messages may be delayed.

Responses may disappear.

Requests may be retried.

Events may arrive more than once.

These realities cannot be eliminated.

They must be accommodated.

Idempotency provides one of the most powerful tools for doing so.

By ensuring that identical operations produce identical outcomes, systems remain correct despite unreliable communication.

Retries become safe.

Recovery becomes simpler.

Messaging becomes more dependable.

Failures become less disruptive.

The goal is not preventing duplicate requests.

The goal is preventing duplicate consequences.

That distinction defines resilient distributed software.

As systems grow larger, retries become more common, failures become more frequent and communication becomes more uncertain.

Idempotency scales alongside that uncertainty.

It transforms repeated execution from a liability into an expected and well-managed aspect of distributed architecture.

Reliable distributed systems are not built on the assumption that operations happen exactly once.

They are built on the certainty that they sometimes will not.
`,
    },
  ],
};

export default whyDistributedSystemsNeedIdempotency;
