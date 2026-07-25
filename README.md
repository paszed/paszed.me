# paszed.me

> **A personal engineering platform for technical writing, software projects, and long-term knowledge.**

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8)
![pnpm](https://img.shields.io/badge/pnpm-10-F69220)
![CI](https://github.com/paszed/paszed.me/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/Coverage-100%25-success)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Live

**https://paszed.me**

---

## Overview

**paszed.me** is my personal engineering platform.

It combines technical writing, project documentation, engineering case studies, and long-term knowledge into a single application.

Rather than functioning as a static portfolio, the site is designed as a continuously evolving software project in its own right: with explicit architecture, reusable systems, automated verification, accessibility standards, structured content, and production-grade engineering practices.

The platform focuses on subjects including:

- Software engineering
- Software architecture
- Platform engineering
- AI systems
- Developer experience
- Developer tooling
- Modern web development

---

## Architecture

The application follows a feature-first architecture with explicit boundaries between routing, interface components, content, application capabilities, infrastructure, and shared utilities.

```text
src/
├── app/
├── brand/
├── components/
├── config/
├── content/
├── features/
├── hooks/
├── lib/
├── providers/
├── services/
├── styles/
└── types/
```

The architecture is designed around several principles:

- Features own feature-specific behavior
- Shared components remain domain-independent
- Content remains separate from presentation
- Infrastructure concerns remain isolated
- Dependencies flow through intentional boundaries
- Public APIs are explicit
- Cross-feature coupling is minimized

Architectural constraints are validated automatically rather than relying entirely on convention.

See `ARCHITECTURE.md` for the complete architectural model.

---

## Platform Capabilities

### Content

The site includes infrastructure for:

- Technical articles
- Engineering journals
- Project case studies
- Structured content
- Typed metadata
- Reading-time calculation
- Content navigation
- RSS generation

Content infrastructure is designed to evolve independently from the presentation layer.

### SEO and Discovery

Search-engine and machine-readable discovery are treated as platform capabilities.

The site supports:

- Metadata generation
- Canonical metadata
- Open Graph metadata
- Twitter Cards
- Dynamic Open Graph images
- XML sitemap
- `robots.txt`
- `llms.txt`
- RSS
- Structured data

Structured data includes:

- Person
- Organization
- WebSite
- BlogPosting
- SoftwareSourceCode
- BreadcrumbList

Schema generation is implemented as reusable typed infrastructure rather than embedded directly into individual pages.

### Interface

The interface is built from reusable primitives and application patterns with support for:

- Responsive layouts
- Light and dark themes
- Reading progress
- Accessible interactions
- Motion
- Consistent typography
- Shared design tokens
- Reusable layout primitives

The application increasingly consumes the same design-system philosophy used throughout the broader ecosystem.

### Accessibility

Accessibility is part of the engineering pipeline rather than a final manual review.

The project uses:

- Semantic HTML
- Keyboard-accessible interaction
- Automated axe testing
- Playwright accessibility coverage
- Lighthouse accessibility verification
- Accessible component primitives

### Performance

Performance is continuously measured rather than treated as a one-time optimization exercise.

Current Lighthouse results:

| Category | Desktop | Mobile |
| --- | ---: | ---: |
| Performance | 99 | 97 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

Performance characteristics will continue to be measured as the content and interface layers expand.

---

## Engineering Quality

The repository uses an automated verification pipeline covering correctness, architecture, accessibility, dependencies, and production behavior.

```text
Source
  │
  ▼
Lint
  │
  ▼
Typecheck
  │
  ▼
Unit Tests
  │
  ▼
Coverage
  │
  ▼
Production Build
  │
  ▼
End-to-End Tests
  │
  ▼
Accessibility
  │
  ▼
Dependency Analysis
  │
  ▼
Architecture Validation
```

The current quality system includes:

- Strict TypeScript
- ESLint
- Vitest
- 100% automated test coverage
- Playwright
- axe-core
- Lighthouse CI
- Knip
- Dependency Cruiser
- pnpm dependency validation
- GitHub Actions
- CodeQL
- Dependabot

The complete local verification pipeline is exposed through:

```bash
pnpm check
```

A change should be able to pass the same engineering checks locally that protect the repository in CI.

---

## Testing

Testing is divided across multiple levels.

### Unit and Integration

Vitest verifies application logic, utilities, components, content infrastructure, and shared capabilities.

Coverage is enforced at:

```text
100%
```

### End-to-End

Playwright validates critical application behavior in a production-like browser environment.

### Accessibility

Automated axe checks detect common accessibility regressions as part of browser-level testing.

### Architecture

Dependency Cruiser validates architectural boundaries and detects prohibited dependency relationships.

### Dependency Health

Knip and pnpm tooling detect unused code, unused dependencies, and dependency inconsistencies.

---

## Technology

### Application

- Next.js 16
- React 19
- React Compiler
- TypeScript
- Tailwind CSS v4
- Motion

### Interface

- Lucide React
- React Icons
- next-themes

### Engineering

- pnpm
- ESLint
- Vitest
- Playwright
- axe-core
- Lighthouse CI
- Knip
- Dependency Cruiser

### Automation and Security

- GitHub Actions
- CodeQL
- Dependabot

---

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Run the complete verification pipeline:

```bash
pnpm check
```

Individual checks are also available:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:coverage
pnpm build
pnpm e2e
pnpm analyze
```

---

## Engineering Principles

The project follows a small set of durable engineering principles:

- Build software that can evolve
- Prefer composition over duplication
- Keep architecture explicit
- Keep content separate from presentation
- Automate enforceable standards
- Treat accessibility as architecture
- Treat developer experience as part of the system
- Prefer predictable abstractions
- Optimize for maintainability
- Measure rather than assume

---

## Ecosystem

`paszed.me` is an application within a broader collection of composable engineering infrastructure.

```text
Engineering Environment
        │
        ▼
Shared Infrastructure
        │
        ▼
Reusable Capabilities
        │
        ▼
     paszed.me
```

The application provides a concrete environment in which shared architectural ideas and infrastructure can be exercised against real product requirements.

Relevant ecosystem capabilities include:

- **engineering** — Engineering standards and architectural principles
- **bootstrapper** — Project scaffolding and development automation
- **design-system** — Shared interface architecture
- **content-engine** — Structured content and publishing infrastructure
- **search** — Search, retrieval, ranking, and discovery
- **observability** — Shared telemetry and diagnostics
- **testkit** — Reusable testing infrastructure

The application remains independently deployable while reusable capabilities can progressively move behind explicit shared boundaries.

---

## Roadmap

The foundational engineering infrastructure is largely established.

Current work is increasingly focused on the product surface and content experience.

### Content Experience

- Dedicated article pages
- Improved article discovery
- Article browsing and filtering
- Long-form technical writing
- Additional engineering case studies
- Rich interactive article components
- Improved content navigation

### Search

- Full-text search
- Pagefind integration
- Search interface
- Search analytics
- Improved content discovery

### Internationalization

- Internationalized routing
- Localized metadata
- Translated interface content
- Localized article infrastructure
- Language-aware SEO

### Interface Polish

- Refined transitions
- Intentional entrance animations
- Section-level motion
- Improved loading states
- Navigation polish
- Responsive refinements
- Additional interaction details

Motion should support hierarchy and orientation rather than exist for decoration.

### Platform

- Privacy-friendly analytics
- Content analytics
- Expanded structured data
- Additional content tooling
- Continued performance monitoring
- Continued accessibility validation

---

## Status

🚧 **Active development.**

The core architecture, quality infrastructure, testing system, SEO foundation, content model, and application shell are established.

Current development is focused on expanding the content experience, internationalization, search, article discovery, and V2 interface polish while maintaining the existing engineering quality bar.

---

## License

Released under the **MIT License**.

See `LICENSE` for details.
