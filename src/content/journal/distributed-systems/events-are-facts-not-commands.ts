import type { JournalEntry } from "@/types/journal";

const eventsAreFactsNotCommands: JournalEntry = {
  slug: "events-are-facts-not-commands",

  title: "Events Are Facts, Not Commands",

  description:
    "One of the most important distinctions in distributed systems is the difference between commands and events. Commands ask for something to happen. Events describe something that already has. Understanding that distinction leads to more loosely coupled, resilient and scalable architectures.",

  category: "Distributed Systems",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 18,

  tags: [
    "Distributed Systems",
    "Event-Driven Architecture",
    "Messaging",
    "Architecture",
    "Software Engineering",
  ],

  sections: [
    {
      title: "Software Is Constantly Communicating",

      content: `
Modern software rarely exists as one isolated application.

Services exchange messages.

Background workers perform asynchronous processing.

Notifications are delivered.

Payments are confirmed.

Inventories are updated.

Analytics consume user activity.

Communication is everywhere.

As systems become increasingly distributed, the way components communicate becomes one of the defining architectural decisions.

Unfortunately, many systems blur two fundamentally different concepts.

Requesting work.

Reporting completed work.

Although these interactions may appear similar, they represent entirely different relationships between software components.

Understanding that distinction dramatically improves architecture.

Distributed systems become easier to evolve when communication reflects intent accurately.

The distinction begins with understanding commands and events.
`,
    },

    {
      title: "Commands Express Intent",

      content: `
A command represents a request.

It asks another component to perform an action.

Create this order.

Process this payment.

Send this email.

Generate this invoice.

A command describes desired future behavior.

Nothing guarantees success.

The request may fail.

It may be rejected.

Validation may prevent execution.

Business rules may prohibit completion.

Commands therefore carry uncertainty.

They express intention rather than reality.

One component asks another component to make something happen.

Whether that request succeeds remains unknown until later.

Commands always point toward the future.
`,
    },

    {
      title: "Events Describe Reality",

      content: `
Events communicate something fundamentally different.

They describe something that has already happened.

Order created.

Payment processed.

Invoice generated.

Email delivered.

Unlike commands, events do not request work.

They announce completed facts.

Past events cannot be rejected.

They cannot fail.

The action has already occurred.

Other parts of the system may choose how to react.

Or whether to react at all.

Events therefore create a very different relationship between services.

Rather than directing behavior, they communicate knowledge.

They describe the changing state of the world.

Distributed systems often become dramatically simpler once communication focuses on reporting facts instead of issuing instructions.
`,
    },

        {
      title: "Events Create Loose Coupling",

      content: `
Commands establish direct relationships.

One service depends upon another service being available and capable of fulfilling a request.

Events change that relationship entirely.

A service publishes a fact.

It neither knows nor cares who receives it.

Multiple consumers may react.

One service updates analytics.

Another sends notifications.

A third updates search indexes.

A fourth archives historical data.

The publisher remains unchanged regardless of how many consumers exist.

This dramatically reduces coupling.

New functionality can often be introduced simply by subscribing to existing events.

Existing services require no modification.

Distributed systems become easier to evolve because communication centers on facts rather than dependencies.

Knowledge spreads naturally throughout the architecture.
`,
    },

    {
      title: "Events Cannot Be Undone",

      content: `
One subtle characteristic distinguishes events from most other messages.

They represent history.

History cannot be rewritten.

An order either was created or it was not.

A payment either succeeded or it did not.

An account either was deleted or it was not.

If a mistake occurs, software does not erase the original event.

Instead, it records another event describing what happened afterward.

Payment refunded.

Order cancelled.

Account restored.

This approach preserves an accurate record of reality.

Rather than hiding mistakes, systems acknowledge them explicitly.

Many distributed architectures become easier to reason about because every important business action becomes part of an observable history.

Events form an audit trail as well as a communication mechanism.
`,
    },

    {
      title: "Not Everything Should Be an Event",

      content: `
Event-driven architecture is powerful.

It is not universal.

Some operations require immediate responses.

Authentication.

Permission checks.

Input validation.

Inventory reservation.

These interactions often require direct communication because the caller cannot continue without an answer.

Commands remain appropriate in these situations.

Events become valuable after meaningful state changes have occurred.

Successful distributed systems therefore use both communication styles.

Commands initiate important work.

Events announce completed work.

Confusing these responsibilities often produces unnecessary complexity.

Choosing the correct communication model begins with understanding whether software is requesting action or reporting reality.
`,
    },

        {
      title: "Events Become Organizational Knowledge",

      content: `
One of the most overlooked characteristics of events is that they preserve knowledge.

Traditional request-response systems often complete work and immediately forget it.

A request arrives.

Logic executes.

A response is returned.

Only the final state remains.

Events preserve the journey.

Every important business action becomes part of the system's history.

Customer registered.

Subscription activated.

Invoice paid.

Shipment dispatched.

Each event captures a moment that actually occurred.

This historical record enables capabilities that extend far beyond communication.

Auditing becomes straightforward.

Analytics become richer.

Machine learning gains better training data.

Business intelligence improves.

Future systems can replay historical events to reconstruct state or derive entirely new insights.

Events therefore serve two purposes simultaneously.

They coordinate distributed systems today while preserving organizational knowledge for tomorrow.
`,
    },

    {
      title: "Events Encourage Evolution",

      content: `
Distributed systems inevitably change.

New services appear.

Existing services disappear.

Business requirements evolve.

Architectures built around direct dependencies often struggle with this evolution.

Every new consumer requires modifying existing integrations.

Every removed dependency risks breaking another service.

Events reduce this friction.

The publisher continues announcing facts exactly as before.

New consumers simply begin listening.

Old consumers quietly disappear.

No central coordinator requires modification.

The architecture evolves through addition rather than disruption.

This flexibility becomes increasingly valuable as organizations grow.

Large engineering teams rarely succeed because they predict every future requirement.

They succeed because their systems remain adaptable when those requirements inevitably change.

Events naturally support that adaptability.
`,
    },

    {
      title: "Conclusion",

      content: `
Commands and events may appear similar because both travel through distributed systems.

Their purpose could not be more different.

Commands express intent.

Events express reality.

Commands ask another component to perform work.

Events announce that work has already been completed.

Recognizing this distinction produces clearer architectures.

Services become less dependent upon one another.

New capabilities emerge without modifying existing systems.

Business history becomes observable.

Communication reflects reality instead of assumptions.

Distributed systems become easier to extend because knowledge flows independently of control.

This distinction extends far beyond messaging infrastructure.

It shapes how engineers model business processes, design service boundaries and reason about system behavior over time.

The strongest event-driven architectures are not built simply because messaging is fashionable.

They are built because facts deserve to remain facts.

Once something has happened, the architecture should communicate it honestly.

Everything else can build upon that truth.
`,
    },
  ],
};

export default eventsAreFactsNotCommands;
