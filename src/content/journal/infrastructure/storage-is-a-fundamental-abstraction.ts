import type { JournalEntry } from "@/types/journal";

const storageIsAFundamentalAbstraction: JournalEntry = {
  slug: "storage-is-a-fundamental-abstraction",

  title: "Storage Is a Fundamental Abstraction",

  description:
    "Software exists to process information, but information only becomes valuable when it survives beyond execution. Storage is the abstraction that gives software memory.",

  category: "Infrastructure",

  published: false,

  publishedAt: null,

  updatedAt: undefined,

  author: "Edvard Pasz",

  readingTimeMinutes: 14,

  tags: [
    "Infrastructure",
    "Storage",
    "Databases",
    "Architecture",
    "Distributed Systems",
  ],

  sections: [
    {
      title: "Software Needs Memory",

      content: `
Compute allows software to execute.

Storage allows software to remember.

Without storage, every application begins from nothing.

Every request becomes independent.

Every decision disappears the moment execution ends.

This is useful for certain workloads.

Most software, however, exists because information persists.

Users expect their accounts to remain available.

Businesses expect transactions to survive restarts.

Applications depend upon configuration, history and state.

Storage makes all of this possible.

It transforms computation from isolated execution into systems capable of learning, evolving and maintaining continuity.

That is why storage is one of infrastructure's most fundamental abstractions.

It gives software memory.

Everything built above it depends upon that capability.
`,
    },

    {
      title: "Persistence Creates Continuity",

      content: `
Applications are temporary.

Processes terminate.

Containers restart.

Virtual machines disappear.

Hardware eventually fails.

The information these systems manage, however, is expected to survive.

Persistence separates software from execution.

An application may restart thousands of times.

Its data should remain.

Infrastructure achieves this by treating storage as an independent capability rather than a property of compute.

Applications consume persistent storage.

They should not own it.

This separation allows systems to evolve without sacrificing continuity.

Software changes.

Data remains.

The abstraction protects what matters most while allowing everything else to adapt.
`,
    },

    {
      title: "Data Outlives Applications",

      content: `
Applications have surprisingly short lifespans.

Frameworks change.

Architectures evolve.

Entire services are replaced.

Data frequently survives every one of these transitions.

Organizations migrate applications while preserving decades of information.

New systems inherit historical records.

Business processes continue uninterrupted.

This longevity changes engineering priorities.

Applications should be designed around data rather than assuming data exists solely to support the current implementation.

Infrastructure recognizes this distinction.

Storage becomes an organizational asset rather than merely an implementation detail.

The application is temporary.

The information it manages often is not.

That reality should influence architectural decisions from the very beginning.
`,
    },

    {
      title: "Storage Is More Than Databases",

      content: `
Many engineers immediately associate storage with relational databases.

Databases are certainly one form of storage.

They are far from the only one.

Object storage preserves documents and media.

File systems organize shared information.

Message logs retain event history.

Caches temporarily preserve frequently accessed data.

Backups protect against accidental loss.

Archives preserve historical records.

Each solves a different problem.

Together they illustrate a broader principle.

Storage is not a product.

It is an abstraction representing durable information.

Different implementations exist because different workloads require different guarantees.

Infrastructure succeeds by exposing the capability while allowing implementation to evolve beneath it.
`,
    },

        {
      title: "Durability Is a Feature",

      content: `
Storage is valuable because it preserves information beyond individual failures.

Disks fail.

Machines fail.

Applications crash.

Entire datacenters occasionally become unavailable.

Users should not lose their data every time infrastructure encounters problems.

Durability is therefore one of storage's defining responsibilities.

Good infrastructure assumes failures will occur.

Replication protects against hardware loss.

Backups protect against human error.

Snapshots preserve recovery points.

Redundancy ensures important information continues existing even when individual components disappear.

These mechanisms are rarely visible to application developers.

That is precisely the point.

Storage should expose durable information rather than forcing every application to solve durability independently.

The abstraction succeeds when developers trust that information will remain available despite failures occurring beneath the surface.
`,
    },

    {
      title: "Storage Shapes Architecture",

      content: `
Few architectural decisions influence software more than storage.

The way information is organized determines how applications evolve.

Boundaries often emerge around ownership of data.

Scaling strategies frequently depend upon storage architecture.

Consistency guarantees influence user experience.

Recovery procedures depend upon persistence.

Even application interfaces are often reflections of underlying information models.

Storage therefore does far more than preserve data.

It shapes the structure of software itself.

Poor storage decisions spread complexity throughout the system.

Good storage abstractions simplify everything built above them.

Infrastructure is not merely providing capacity.

It is providing one of the primary foundations upon which software architecture is constructed.
`,
    },

    {
      title: "Data Has Gravity",

      content: `
Moving applications is often straightforward.

Moving data rarely is.

Applications can usually be rebuilt.

Containers can be recreated.

Virtual machines can be replaced.

Data accumulates over years.

It grows continuously.

Dependencies form around it.

Analytics consume it.

Business processes rely upon it.

This phenomenon is often described as data gravity.

As information grows, it increasingly attracts computation toward itself rather than the other way around.

Infrastructure must acknowledge this reality.

Storage decisions influence latency.

Availability.

Migration strategy.

Disaster recovery.

Even organizational structure.

The larger and more valuable the dataset becomes, the more carefully infrastructure must evolve around it.

Applications remain comparatively lightweight.

Data becomes the center of gravity.
`,
    },

    {
      title: "The Cost of Forgetting",

      content: `
Losing infrastructure is inconvenient.

Losing information is frequently catastrophic.

Organizations can rebuild servers.

They can redeploy applications.

They can recreate environments.

Recovering lost customer data, financial records or operational history is often impossible.

This asymmetry explains why storage deserves extraordinary attention.

Information represents accumulated knowledge.

Every transaction.

Every document.

Every event.

Every customer interaction.

Storage preserves the memory of the organization itself.

Protecting that memory is not merely an operational concern.

It is one of infrastructure's primary responsibilities.

The value of storage is ultimately measured not by capacity but by confidence.

Confidence that what matters today will still exist tomorrow.
`,
    },

        {
      title: "Storage Enables Trust",

      content: `
Infrastructure ultimately exists to create confidence.

Applications should trust that information remains available.

Users should trust that their work will not disappear.

Organizations should trust that years of accumulated knowledge remain protected.

Storage makes this trust possible.

When engineers persist information, they are making an implicit promise.

The information will remain available tomorrow.

Next week.

Next year.

Fulfilling that promise requires far more than disks.

It requires redundancy.

Verification.

Backups.

Recovery procedures.

Continuous maintenance.

Storage is therefore not simply about preserving bytes.

It is about preserving confidence.

Every reliable application depends upon the assumption that its information will survive failures beyond its control.

Infrastructure fulfills that assumption through storage.

Without that confidence, every other capability built upon the platform becomes less reliable.
`,
    },

    {
      title: "Conclusion",

      content: `
Storage is one of infrastructure's most enduring abstractions.

Compute executes.

Networks communicate.

Applications evolve.

Storage remembers.

That responsibility extends beyond technical implementation.

It preserves continuity.

Protects organizational knowledge.

Enables recovery.

Maintains trust.

Applications will continue changing.

Frameworks will continue evolving.

Hardware will continue being replaced.

The information organizations depend upon should survive all of it.

Good infrastructure treats storage as more than a technical service.

It recognizes storage as the persistent memory of the organization.

The strongest infrastructure is not measured by the speed at which it executes software.

It is measured by the confidence that nothing important is forgotten.

Storage provides that confidence.

It is the abstraction that allows software to remember.
`,
    },
  ],
};

export default storageIsAFundamentalAbstraction;
