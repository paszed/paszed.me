import type { JournalEntry } from "@/types/journal";

const whyGreatEngineersNeedGreatFeedback: JournalEntry = {
  slug: "why-great-engineers-need-great-feedback",

  title: "Why Great Engineers Need Great Feedback",

  description:
    "Engineering excellence is rarely achieved in isolation. High-performing engineers improve because they receive timely, honest and actionable feedback from teammates, users, production systems and the organization itself.",

  category: "Engineering Leadership",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 17,

  tags: [
    "Engineering Leadership",
    "Feedback",
    "Software Engineering",
    "Teams",
    "Continuous Improvement",
  ],

  sections: [
    {
      title: "Feedback Makes Improvement Possible",

      content: `
Engineering is fundamentally an iterative discipline.

We design.

We build.

We observe.

We improve.

Without feedback, this cycle breaks.

Engineers continue making the same assumptions because nothing challenges them.

Products drift away from user needs.

Architecture slowly deteriorates.

Technical decisions become habits rather than deliberate choices.

Feedback reconnects engineering with reality.

It reveals where expectations differ from outcomes.

It exposes blind spots.

It validates successful ideas.

Improvement begins the moment assumptions meet evidence.

Great engineers actively seek that moment instead of avoiding it.
`,
    },

    {
      title: "Fast Feedback Creates Fast Learning",

      content: `
Time weakens feedback.

A bug discovered six months later teaches less than one discovered six minutes later.

A design review held after implementation creates less value than one held during planning.

Customers reporting confusing workflows weeks after release represent slower learning than observing usability before launch.

Healthy engineering organizations shorten these loops.

Continuous integration.

Automated testing.

Peer reviews.

Observability.

User research.

Each exists for the same reason.

To reduce the distance between action and understanding.

Organizations that learn quickly rarely possess magical insight.

They simply receive useful feedback sooner than everyone else.
`,
    },

    {
      title: "Code Reviews Are Conversations",

      content: `
Code reviews are often misunderstood as approval gates.

Their real purpose is shared understanding.

A review explains reasoning.

Questions assumptions.

Identifies opportunities.

Shares knowledge.

Protects consistency.

The best reviews leave both engineers stronger than before.

The author improves the implementation.

The reviewer gains deeper understanding of the system.

Neither person "wins."

The codebase wins.

Healthy engineering cultures therefore optimize reviews for learning rather than judgment.

Approval is merely the final outcome.

Learning is the lasting value.
`,
    },

        {
      title: "The Best Feedback Is Specific",

      content: `
Feedback loses value when it remains vague.

"This could be better."

"I don't like this."

"This feels wrong."

These observations identify discomfort without creating understanding.

Useful feedback explains why.

Which assumption created the issue?

Which principle was violated?

What alternative should be considered?

Specific feedback transforms opinion into actionable improvement.

It respects the engineer by providing enough context to reason independently.

Healthy engineering organizations build a shared language around quality.

Discussions focus on readability.

Maintainability.

Reliability.

Performance.

Consistency.

The conversation becomes objective rather than personal.

Specificity turns feedback into learning instead of criticism.
`,
    },

    {
      title: "Feedback Should Flow in Every Direction",

      content: `
Leadership should provide feedback.

Peers should provide feedback.

Junior engineers should provide feedback.

Senior engineers should receive feedback.

Customers constantly provide feedback through their behavior.

Production systems provide feedback through telemetry.

Every level of the organization both teaches and learns.

When feedback moves only downward, organizations become slower.

Leadership loses visibility.

Problems remain hidden.

Ideas remain unexplored.

Healthy engineering cultures normalize respectful disagreement regardless of title.

The quality of an idea should matter more than the seniority of the person presenting it.

Learning accelerates when information flows freely instead of hierarchically.
`,
    },

    {
      title: "Receiving Feedback Is an Engineering Skill",

      content: `
Giving feedback requires practice.

Receiving it requires maturity.

Engineers naturally become attached to their work.

Architectures represent thought.

Code represents effort.

Designs represent judgment.

Feedback can therefore feel personal.

Professional growth begins when engineers separate themselves from their implementations.

The objective is not defending previous decisions.

It is discovering better ones.

Strong engineers ask clarifying questions.

Seek understanding before responding.

Remain curious when challenged.

Change their minds when presented with stronger evidence.

Receiving feedback gracefully demonstrates confidence rather than weakness.

The willingness to improve consistently outweighs the desire to appear correct.
`,
    },

        {
      title: "Feedback Creates Better Organizations",

      content: `
Feedback is often discussed as though it benefits only individuals.

Its greatest impact is organizational.

One thoughtful code review improves future reviews.

One honest retrospective improves future incidents.

One customer interview influences future product decisions.

One architectural discussion shapes future designs.

Learning spreads.

Standards become clearer.

Decision making improves.

Culture gradually evolves.

Organizations therefore should treat feedback as infrastructure rather than conversation.

Like testing or observability, it continuously strengthens the engineering system.

Healthy organizations become better not because they avoid mistakes.

They become better because information consistently reaches the people capable of acting upon it.

Feedback transforms isolated experiences into collective progress.
`,
    },

    {
      title: "Silence Is the Most Dangerous Feedback",

      content: `
Many engineering organizations fear criticism.

They should fear silence instead.

Silence hides confusion.

Silence conceals disagreement.

Silence delays improvement.

Customers who quietly abandon a product rarely explain why.

Engineers who stop raising concerns often stop believing their concerns matter.

Leaders who stop receiving difficult feedback gradually lose touch with reality.

Healthy organizations actively search for silence.

Which teams rarely participate?

Which customers suddenly disappeared?

Which metrics quietly declined?

Which assumptions have gone unchallenged?

Absence of feedback should never be interpreted as evidence that everything is working well.

More often, it indicates that valuable information has stopped flowing.

Leadership's responsibility is ensuring that voice is never replaced by silence.
`,
    },

    {
      title: "Conclusion",

      content: `
Engineering improves through feedback in exactly the same way products improve through iteration.

Ideas meet evidence.

Assumptions meet reality.

Individuals become stronger.

Teams become wiser.

Organizations become more capable.

Feedback is therefore far more than performance evaluation.

It is one of the primary mechanisms through which engineering organizations learn.

Fast feedback accelerates learning.

Specific feedback improves decisions.

Honest feedback builds trust.

Shared feedback strengthens culture.

The greatest engineers actively seek opportunities to improve rather than opportunities to appear correct.

The greatest engineering organizations do the same.

Every conversation.

Every review.

Every incident.

Every deployment.

Every customer interaction.

Each contains information capable of making tomorrow's engineering better than today's.

Feedback is not a sign that something is wrong.

It is evidence that improvement remains possible.

The strongest engineering cultures never stop listening because they never stop learning.
`,
    },
  ],
};

export default whyGreatEngineersNeedGreatFeedback;
