import type { JournalEntry } from "@/types/journal";

const computeIsAnAbstraction: JournalEntry = {
  slug: "compute-is-an-abstraction",

  title: "Compute Is an Abstraction",

  description:
    "Modern software rarely depends on individual machines. Compute has become an abstraction that allows applications to execute independently of the underlying hardware.",

  category: "Infrastructure",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 13,

  tags: [
    "Infrastructure",
    "Compute",
    "Cloud",
    "Distributed Systems",
    "Architecture",
  ],

  sections: [
    {
      title: "Applications Should Not Care Where They Run",

      content: `
Early software was inseparable from the machines that executed it.

Applications were installed on specific servers.

Their identity became tied to hostnames.

Operational procedures revolved around protecting individual machines because losing the machine often meant losing the application.

Modern infrastructure has steadily moved away from this model.

Applications increasingly execute on virtual machines.

Containers.

Serverless platforms.

Managed runtimes.

The underlying hardware continues to exist, but software interacts with an abstraction rather than a specific computer.

This distinction fundamentally changes how engineers think about infrastructure.

Applications stop depending on individual machines.

Instead, they depend upon the ability to execute computation somewhere within the platform.

That capability is what compute represents.

Not a server.

Not a processor.

Not a rack inside a datacenter.

Compute is the abstraction that provides execution without exposing unnecessary details about the hardware performing the work.
`,
    },

    {
      title: "Abstractions Remove Accidental Complexity",

      content: `
Good abstractions hide details that consumers should not need to understand.

Application developers rarely care which physical CPU executes a request.

They care that requests complete reliably.

They rarely care where memory is allocated.

They care that the application performs correctly.

Infrastructure therefore benefits from exposing compute as a capability instead of a collection of machines.

The abstraction removes accidental complexity.

Engineers spend less time managing hardware and more time solving business problems.

This does not eliminate operational responsibility.

Someone must still provision servers.

Replace failed hardware.

Monitor utilization.

Maintain capacity.

Those concerns remain essential.

The abstraction simply ensures they remain responsibilities of the platform instead of every individual application team.

That separation allows organizations to scale far more effectively.
`,
    },

    {
      title: "Elasticity Changes Software Design",

      content: `
Once compute becomes an abstraction, capacity becomes significantly easier to change.

Applications no longer need to assume a fixed number of servers.

Additional compute can often be allocated automatically.

Unused resources can disappear when demand falls.

This elasticity changes architectural thinking.

Systems become capable of responding to varying workloads without requiring permanent overprovisioning.

Design decisions increasingly focus on stateless services.

Horizontal scaling.

Fault tolerance.

Work distribution.

Rather than protecting individual machines, engineers design applications capable of surviving their disappearance.

Infrastructure encourages software to depend upon capabilities rather than hardware.

The application becomes resilient precisely because compute itself is treated as replaceable.

Failure stops being exceptional.

It becomes an expected property of the environment.
`,
    },

    {
      title: "Machines Become Implementation Details",

      content: `
Infrastructure teams still purchase hardware.

Cloud providers still operate datacenters.

Processors continue executing instructions.

None of this disappears.

What changes is the level at which most engineers operate.

Individual machines gradually become implementation details rather than architectural foundations.

This represents one of the defining shifts in modern infrastructure.

Applications are scheduled onto resources instead of permanently residing upon them.

Workloads move.

Instances are replaced.

Capacity expands and contracts.

The identity of the machine becomes less important than the availability of compute itself.

Good infrastructure intentionally creates this separation.

It encourages engineers to build systems that depend upon execution rather than location.

That distinction makes software substantially easier to operate, evolve and scale.
`,
    },

        {
      title: "Compute Should Be Disposable",

      content: `
One of the strongest indicators of mature infrastructure is the ability to replace compute without hesitation.

If replacing a server creates anxiety, the application has become coupled to its environment.

Healthy systems assume compute is temporary.

Instances are created.

Instances are terminated.

Containers are rescheduled.

Virtual machines are recreated.

None of these events should fundamentally alter the behavior of the application.

This mindset shifts engineering away from protecting machines and toward protecting systems.

State belongs in durable storage.

Configuration belongs in version control.

Identity belongs to the workload rather than the host.

When compute becomes disposable, recovery becomes dramatically simpler.

Replacing a failed machine is no longer a disaster.

It becomes routine.

Infrastructure gains resilience precisely because individual pieces no longer require special treatment.
`,
    },

    {
      title: "Scheduling Matters More Than Machines",

      content: `
Modern infrastructure is increasingly defined by scheduling rather than hardware.

Applications request resources.

The platform decides where those resources should execute.

This separation creates remarkable flexibility.

Workloads can move closer to available capacity.

Resources can be balanced automatically.

Failures can trigger rescheduling instead of manual intervention.

The engineer no longer asks,

"Which server should run this application?"

Instead, the question becomes,

"What resources does this workload require?"

The distinction appears subtle.

It is not.

The first question couples software to infrastructure.

The second describes intent.

Good infrastructure translates that intent into execution.

Scheduling therefore becomes one of the most valuable responsibilities of a modern platform.

It allows applications to remain independent of the constantly changing environment beneath them.
`,
    },

    {
      title: "Abstractions Improve Utilization",

      content: `
Dedicated hardware frequently leads to inefficient resource usage.

Some machines remain idle.

Others become overloaded.

Capacity planning becomes increasingly difficult as organizations grow.

Treating compute as a shared abstraction changes this equation.

Resources become pooled rather than isolated.

Applications consume compute when needed.

Unused capacity becomes available to other workloads.

The infrastructure begins optimizing utilization across the organization instead of within individual projects.

This improves efficiency without requiring application teams to understand the underlying mechanics.

The abstraction benefits everyone.

Infrastructure teams gain greater flexibility.

Application teams gain predictable execution.

Organizations reduce unnecessary waste while increasing overall capacity.

This is one of the quiet advantages of abstraction.

It allows the platform to solve optimization problems once instead of requiring every team to solve them independently.
`,
    },

    {
      title: "Compute Enables Higher-Level Platforms",

      content: `
Few engineers today interact directly with physical hardware.

Instead, they build on increasingly sophisticated abstractions.

Containers abstract operating systems.

Functions abstract servers.

Platforms abstract deployment.

Each layer removes operational detail while exposing higher-level capabilities.

Compute makes these abstractions possible.

Without a reliable execution layer, platform engineering becomes significantly more difficult.

Every capability built on top ultimately depends upon the platform's ability to execute workloads predictably.

This relationship explains why compute remains one of infrastructure's foundational abstractions.

It is rarely the capability engineers think about most.

Yet almost every other platform capability depends upon it.

The strongest infrastructure is built from abstractions that compose naturally.

Compute is one of the first and most important of those abstractions.
`,
    },

        {
      title: "The Best Compute Disappears",

      content: `
One of the defining characteristics of mature infrastructure is that engineers think less about compute over time.

Applications are deployed.

Resources are allocated.

Scaling occurs.

Failures are recovered.

Capacity is adjusted.

These operations continue continuously, yet application developers rarely need to understand how they happen.

This is not because compute has become less important.

It is because the abstraction has become more successful.

Infrastructure should expose capabilities rather than implementation.

An engineer should request execution.

The platform should determine where, when and how that execution occurs.

Every unnecessary operational decision imposed upon application teams reduces engineering focus.

Every responsibility assumed by the platform increases it.

The best compute platforms quietly disappear beneath the software they support.

Their success is measured not by visibility but by the absence of unnecessary complexity.
`,
    },

    {
      title: "Conclusion",

      content: `
Compute is one of infrastructure's most fundamental abstractions.

Although every application ultimately executes on physical hardware, modern engineering increasingly depends upon treating compute as a capability rather than a machine.

This abstraction separates software from the constantly changing environment beneath it.

Applications become portable.

Failures become routine.

Scaling becomes predictable.

Scheduling replaces manual placement.

Resources become shared instead of isolated.

None of these improvements are consequences of faster hardware alone.

They are consequences of better abstraction.

Infrastructure succeeds when engineers stop thinking about servers and begin thinking about software.

Compute is valuable not because it exposes machines.

It is valuable because it allows engineers to forget they exist.

The strongest infrastructure hides implementation while making capability universally available.

That is the power of abstraction.
`,
    },
  ],
};

export default computeIsAnAbstraction;
