import type { JournalEntry } from "@/types/journal";

const measuringWhatMatters: JournalEntry = {
  slug: "measuring-what-matters",

  title: "Measuring What Matters",

  description:
    "Engineering teams naturally measure what is easy to count. Successful product teams measure what improves outcomes. The distinction determines whether metrics guide better decisions or merely create the illusion of progress.",

  category: "Product Engineering",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 16,

  tags: [
    "Product Engineering",
    "Metrics",
    "Engineering",
    "Decision Making",
    "Product Strategy",
  ],

  sections: [
    {
      title: "Everything Can Be Measured",

      content: `
Modern software produces enormous amounts of information.

Deployments.

Commits.

Pull requests.

Build times.

API requests.

Session lengths.

Conversion rates.

Latency.

Error counts.

Dashboards quickly fill with charts.

Numbers create confidence because they appear objective.

Yet measurement alone provides very little value.

The important question is never,

"What can we measure?"

It is,

"What should influence our decisions?"

Those are rarely the same thing.

A metric only becomes valuable when it changes behavior in a beneficial way.

Otherwise it is simply information without direction.

Engineering succeeds not because it collects more numbers.

It succeeds because it learns from the right ones.
`,
    },

    {
      title: "Activity Is Not Progress",

      content: `
Engineering organizations naturally generate activity.

Features are implemented.

Bugs are resolved.

Meetings are held.

Tickets move across boards.

Releases are deployed.

All of these are visible.

None of them necessarily represent progress.

A product with twice as many features is not automatically twice as valuable.

A team that closes twice as many tickets is not automatically twice as effective.

Progress is measured by improved outcomes.

Are users accomplishing their goals more easily?

Has reliability improved?

Has onboarding become simpler?

Has support volume decreased?

Activity describes effort.

Progress describes impact.

Healthy organizations learn to distinguish between the two.
`,
    },

    {
      title: "Good Metrics Influence Decisions",

      content: `
The purpose of a metric is not reporting.

It is decision making.

A useful metric changes priorities.

It reveals hidden problems.

It validates assumptions.

It encourages better investments.

If a number never influences what the team does next, its practical value is limited.

Good metrics therefore remain closely connected to action.

Every dashboard should answer an important question.

Every trend should suggest a possible response.

Every measurement should help reduce uncertainty.

Otherwise teams risk optimizing reports rather than products.

Numbers are valuable only when they improve judgment.
`,
    },

        {
      title: "Beware of Proxy Metrics",

      content: `
Not everything that matters can be measured directly.

As a result, teams often rely on proxy metrics.

Page views become a proxy for engagement.

Downloads become a proxy for adoption.

Commits become a proxy for productivity.

Revenue becomes a proxy for customer satisfaction.

Proxy metrics are not inherently wrong.

They become dangerous when they replace the outcome they were intended to approximate.

An increase in page views may indicate interest.

It may also indicate confusion.

More commits may represent meaningful progress.

They may also represent unnecessary churn.

Good product teams continually ask whether the metric still reflects the reality they care about.

When the proxy and the outcome diverge, the metric should change.

Engineering should never mistake what is easy to count for what is actually important.
`,
    },

    {
      title: "Metrics Shape Behavior",

      content: `
People naturally optimize for whatever is measured.

If engineers are rewarded for closing tickets, tickets will be closed.

If success is measured by deployment frequency, deployments will become more frequent.

If page views define success, interfaces will encourage more clicks.

This is neither good nor bad.

It is simply human behavior.

Choosing metrics therefore means choosing incentives.

Every measurement quietly communicates what the organization values.

Poorly chosen metrics create unintended consequences.

Well-designed metrics align individual decisions with the long-term success of the product.

This is why selecting metrics deserves as much care as selecting architecture.

Both influence how the system evolves.

One shapes the software.

The other shapes the people building it.
`,
    },

    {
      title: "Qualitative Feedback Completes the Picture",

      content: `
Not every meaningful insight appears on a dashboard.

A frustrated support conversation.

A usability interview.

A customer email.

An unexpected workflow observed during testing.

These experiences often reveal problems long before quantitative metrics detect them.

Numbers explain what happened.

Conversations often explain why.

Healthy product teams combine both.

Analytics identify patterns.

People provide context.

Neither is sufficient alone.

Engineering decisions become significantly stronger when objective measurements are paired with direct observation of real users solving real problems.

The product exists for people.

Understanding those people should never become secondary to understanding charts.
`,
    },

        {
      title: "The Best Metrics Disappear Into Decisions",

      content: `
Healthy engineering organizations rarely obsess over metrics themselves.

They obsess over understanding.

A reliability metric leads to infrastructure improvements.

A retention metric inspires a better onboarding experience.

A support metric simplifies a confusing workflow.

The metric has fulfilled its purpose.

It guided a better decision.

This is the ideal relationship with measurement.

Metrics should not become products of their own.

They should quietly support better engineering judgment.

The strongest teams eventually stop talking about numbers in isolation.

They begin talking about what those numbers reveal about customers, systems and products.

The measurement becomes invisible because it has already influenced the next decision.

That is its highest purpose.

Good metrics do not simply describe reality.

They improve it.
`,
    },

    {
      title: "Measure Trends, Not Moments",

      content: `
Individual measurements can be misleading.

A single outage temporarily increases error rates.

A successful marketing campaign dramatically changes traffic.

A large customer onboarded this week alters revenue.

None of these events necessarily represent a lasting change.

Product engineering therefore benefits from observing trends rather than isolated moments.

Patterns reveal whether improvements persist.

Direction often matters more than absolute values.

A steadily improving onboarding experience is usually more meaningful than one exceptional week.

Likewise, a gradual decline in customer satisfaction deserves attention long before it becomes a crisis.

Healthy teams learn to recognize movement rather than snapshots.

Products evolve over time.

Measurements should reflect that same perspective.
`,
    },

    {
      title: "Conclusion",

      content: `
Measurement is not an end in itself.

It is a tool for learning.

Every meaningful metric reduces uncertainty.

It helps teams understand whether they are moving closer to the outcomes they value.

The most effective engineering organizations resist the temptation to measure everything.

Instead, they identify the few signals that genuinely influence better decisions.

They distinguish activity from impact.

They question proxy metrics.

They balance quantitative evidence with qualitative understanding.

Most importantly, they remember that metrics exist to serve people rather than replace them.

Behind every chart is a customer attempting to accomplish something meaningful.

Behind every percentage is an experience.

Behind every trend is a product gradually becoming better or worse.

Engineering succeeds when measurement strengthens understanding instead of replacing judgment.

The purpose of measuring what matters is not collecting better numbers.

It is building better products.
`,
    },
  ],
};

export default measuringWhatMatters;
