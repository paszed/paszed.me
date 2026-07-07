# paszed.me

> A personal website, engineering journal, and long-term software project documenting software engineering, AI, and developer tooling.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8)
![pnpm](https://img.shields.io/badge/pnpm-10-F69220)
![Coverage](https://img.shields.io/badge/Coverage-100%25-success)
![License](https://img.shields.io/badge/License-MIT-green)

---

# Live

🌐 **https://paszed.me**

---

# About

**paszed.me** is my personal engineering platform.

It combines a portfolio, engineering journal, project showcase, and long-term knowledge base into a single website focused on thoughtful software engineering.

Rather than acting as a static portfolio, the site documents how software is designed, built, maintained, and improved over time.

Topics include:

- Software Engineering
- Software Architecture
- Artificial Intelligence
- AI Engineering
- Developer Experience
- Developer Tools
- Modern Web Development

---

# Features

- Engineering journal
- Project case studies
- Feature-first architecture
- Typed content system
- Reusable design system
- Responsive layout
- Light & dark mode
- Reading progress indicator
- RSS feed
- Dynamic Open Graph images
- Structured data (JSON-LD)
- XML sitemap
- robots.txt
- llms.txt
- SEO-first metadata
- Accessibility focused
- Lighthouse optimized
- Full test suite
- 100% test coverage
- End-to-end testing
- Type-safe codebase

---

# Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Motion
- pnpm
- next-themes
- Lucide React
- React Icons
- ESLint
- Vitest
- Playwright

---

# Architecture

```text
src
├── app
├── brand
├── components
├── config
├── content
├── features
├── hooks
├── lib
├── providers
├── services
├── styles
└── types
```

The project follows a feature-first architecture where routing, UI, content, business logic, and SEO remain cleanly separated.

For a complete overview see **ARCHITECTURE.md**.

---

# Quality

The project is continuously verified with:

- ESLint
- TypeScript
- Vitest
- 100% test coverage
- Playwright E2E
- Accessibility tests
- Production builds
- Dependency deduplication

---

# SEO

The website includes:

- Metadata generation
- Open Graph
- Twitter Cards
- JSON-LD
- Person Schema
- Organization Schema
- Website Schema
- BlogPosting Schema
- SoftwareSourceCode Schema
- Breadcrumb Schema
- RSS feed
- XML Sitemap
- robots.txt
- llms.txt

---

# Performance

Current Lighthouse scores:

| Category | Score |
|----------|------:|
| Performance | 99 Desktop / 97 Mobile |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

# Development

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Run the complete engineering verification pipeline:

```bash
pnpm check
```

The pipeline performs:

- ESLint
- TypeScript
- Coverage tests
- Production build
- Playwright end-to-end tests
- Dependency deduplication

Useful commands:

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

# Engineering Principles

- Build software that lasts.
- Prefer composition over duplication.
- Keep content separate from presentation.
- Optimize for maintainability.
- Ship continuously.
- Design systems before pages.
- Keep architecture boring and predictable.

---

# Roadmap

## Completed

- ✅ Feature-first architecture
- ✅ Design system
- ✅ Typed content layer
- ✅ Engineering journal
- ✅ Project platform
- ✅ Reading progress
- ✅ Theme support
- ✅ Responsive design
- ✅ SEO architecture
- ✅ Structured data
- ✅ RSS feed
- ✅ llms.txt
- ✅ Dynamic Open Graph images
- ✅ Lighthouse optimization
- ✅ 100% automated test coverage
- ✅ Playwright E2E testing
- ✅ Accessibility testing
- ✅ Engineering quality pipeline
- ✅ SECURITY.md

## Next

- 🔍 Configure Pagefind search indexing
- 📊 Privacy-friendly analytics
- 📝 MDX-powered articles
- 🎨 Additional article components
- 🚀 More engineering case studies
- 🤖 GitHub Actions CI
- 🛡️ CodeQL
- 📦 Dependabot
- 💡 Lighthouse CI

---

# Deployment

The site is deployed to **Namecheap** and built with **Next.js 16**.

Every change is validated locally through:

```bash
pnpm check
```

before deployment.

---

# License

Released under the **MIT License**.

See the **LICENSE** file for details.

---

# Author

**Edvard Pasz**

🌐 https://paszed.me

GitHub: https://github.com/paszed

LinkedIn: https://www.linkedin.com/in/paszed/
