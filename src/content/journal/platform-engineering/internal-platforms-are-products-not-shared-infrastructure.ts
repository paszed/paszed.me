import type { JournalEntry } from "@/types/journal";

const internalPlatformsAreProductsNotSharedInfrastructure: JournalEntry = {
  slug: "internal-platforms-are-products-not-shared-infrastructure",

  title: "Internal Platforms Are Products, Not Shared Infrastructure",

  description:
    "Successful platform engineering begins with a change in mindset. Internal platforms are not collections of tools maintained by infrastructure teams. They are products whose users are engineers, and they should be designed, evolved and measured accordingly.",

  category: "Platform Engineering",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 20,

  tags: [
    "Platform Engineering",
    "Developer[118;1:3u Experience",
    "Internal Developer Platforms",
    "Engineering",
    "Product Thinking",
  ],

  sections: [
    {
      title: "Infrastructure Is Not the Product",

      content: `
Many organizations begin platform engineering by centralizing infrastructure.

Clusters become shared.

Deployment pipelines become standardized.

Cloud accounts become managed centrally.

Infrastructure teams provide reusable services for everyone else.

While valuable, this alone does not create a platform.

Infrastructure describes how software runs.

A platform describes how engineers interact with that infrastructure.

The distinction matters enormously.

Engineers rarely care which Kubernetes distribution powers their deployment.

They care whether deploying software is reliable, understandable and fast.

Infrastructure exists beneath the platform.

The platform exists for its users.

Confusing these two ideas often produces technically impressive systems that engineers actively avoid using.
`,
    },

    {
      title: "Engineers Are Customers",

      content: `
Every successful product begins by understanding its users.

Internal platforms should behave no differently.

Their users are software engineers.

These engineers have goals.

They face frustrations.

They lose time navigating unnecessary operational complexity.

A platform succeeds when it removes these obstacles.

This perspective fundamentally changes priorities.

Instead of asking which technologies should be adopted, platform teams begin asking different questions.

Where do engineers lose time?

Which tasks repeat across teams?

Which workflows generate the most support requests?

Which operational problems occur most frequently?

Product thinking replaces infrastructure thinking.

The platform becomes an experience rather than merely a collection of technical capabilities.
`,
    },

    {
      title: "Adoption Cannot Be Mandated",

      content: `
Organizations sometimes attempt to enforce platform adoption through policy.

Engineers must use the official deployment pipeline.

Teams must migrate to approved infrastructure.

Applications must integrate with required services.

These policies may increase compliance.

They do not guarantee satisfaction.

Developers naturally adopt tools that make their work easier.

Poor tools become obstacles regardless of organizational mandates.

Successful platforms therefore compete for adoption even inside their own companies.

If engineers voluntarily choose the platform because it saves time, improves reliability and simplifies workflows, the platform has achieved genuine product-market fit within the organization.

Adoption earned through value lasts much longer than adoption enforced through rules.
`,
    },

        {
      title: "Developer Experience Is the Product",

      content: `
Every product creates an experience.

Internal platforms are no exception.

For external software, that experience belongs to customers.

For platforms, it belongs to engineers.

Provisioning a new service should feel straightforward.

Deployments should inspire confidence.

Documentation should answer questions before they become support requests.

Error messages should explain how to recover rather than merely describing failure.

Authentication should work consistently.

Observability should appear automatically.

Every interaction shapes developer experience.

Small frustrations accumulate.

Small improvements compound.

A platform with excellent infrastructure but poor developer experience has misunderstood its own purpose.

The product is not Kubernetes.

The product is the experience of building software.
`,
    },

    {
      title: "Feedback Should Drive Evolution",

      content: `
Products improve through feedback.

Platforms should evolve the same way.

Usage patterns reveal friction.

Support requests expose confusing workflows.

Incident reviews uncover missing capabilities.

Developer interviews identify unnecessary complexity.

Platform teams should actively seek this information.

Not because engineers complain.

Because users understand the product differently than its creators.

Successful platforms evolve continuously.

Features that nobody uses should disappear.

Frequently repeated manual work should become automated.

Documentation should answer recurring questions.

Interfaces should become simpler over time.

The platform improves not by accumulating functionality, but by removing obstacles.

Feedback is therefore not operational noise.

It is product research.
`,
    },

    {
      title: "Self-Service Creates Independence",

      content: `
One of the clearest signs of a successful platform is that engineers rarely need to ask permission.

Creating a new service.

Provisioning infrastructure.

Accessing secrets.

Deploying applications.

Viewing logs.

Scaling workloads.

These activities should occur through self-service workflows whenever safely possible.

Every support ticket avoided saves time for both platform engineers and product engineers.

More importantly, self-service removes organizational bottlenecks.

Teams move independently.

Platform engineers focus on improving capabilities instead of manually executing repetitive requests.

This independence scales far better than centralized operations.

Platforms succeed when they eliminate waiting rather than simply responding to requests faster.
`,
    },

        {
      title: "A Great Platform Makes the Right Thing the Easy Thing",

      content: `
Engineers naturally choose the path of least resistance.

If secure deployments require additional manual work, they are often delayed.

If observability requires extensive configuration, some services will launch without it.

If documentation is difficult to find, engineers will ask colleagues instead.

Platforms should align convenience with good engineering practices.

The safest deployment should also be the easiest deployment.

The recommended authentication mechanism should also require the fewest steps.

Logging, monitoring and security should appear automatically rather than through optional configuration.

Good platform design removes the conflict between speed and quality.

Engineers should not have to choose between delivering quickly and building responsibly.

The platform should make responsible engineering the default experience.
`,
    },

    {
      title: "Success Is Measured by Outcomes",

      content: `
Infrastructure teams often measure success through technical metrics.

Clusters provisioned.

Deployments executed.

Servers managed.

Cloud costs reduced.

These measurements matter.

They do not fully describe platform success.

Platforms exist to improve engineering outcomes.

How quickly can a new engineer deploy their first service?

How long does provisioning infrastructure require?

How frequently do teams request platform support?

How confidently can engineers release software?

How much operational work disappears because the platform handles it automatically?

These measurements reflect user value rather than technical activity.

Healthy platform teams optimize for developer effectiveness.

Technology becomes the means rather than the objective.
`,
    },

    {
      title: "Conclusion",

      content: `
Internal platforms represent one of the most important shifts in modern software engineering.

Rather than treating infrastructure as something every team must understand independently, organizations create products that encapsulate operational expertise into reusable capabilities.

This changes the role of platform teams.

They are no longer simply infrastructure maintainers.

They become product teams whose customers happen to be engineers.

Their success depends on usability, adoption, documentation, reliability and continuous improvement.

Technology remains important.

Clusters.

Pipelines.

Cloud infrastructure.

Developer portals.

Service catalogs.

These are all valuable capabilities.

None is the product itself.

The product is the engineering experience those capabilities create.

Successful platforms earn adoption by reducing friction, enabling independence and making good engineering practices feel effortless.

Ultimately, the strongest internal platforms are remembered less for the technologies they expose than for the problems engineers no longer need to think about.

That is the hallmark of every great product, whether its users are millions of customers or the engineers inside a single organization.
`,
    },
  ],
};

export default internalPlatformsAreProductsNotSharedInfrastructure;
