# paszed.me

> Personal website, engineering journal, and long-term software project.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8)
![pnpm](https://img.shields.io/badge/pnpm-10-F69220)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Live

🌐 **https://paszed.me**

> Screenshot coming soon.

---

# About

**paszed.me** is my personal engineering platform.

It combines a portfolio, engineering journal, project showcase, and long-term knowledge base into a single website focused on thoughtful software engineering.

Rather than showcasing finished work alone, the site documents the process of building software—from architecture decisions and developer tooling to practical AI and long-term system design.

---

# Features

- Engineering journal
- Project case studies
- Feature-based architecture
- Typed content system
- Reusable design system
- Responsive layout
- Light & dark mode
- Reading progress indicator
- SEO-ready pages
- Structured metadata
- XML sitemap
- robots.txt
- Automated testing foundation
- GitHub Actions ready

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
- ESLint
- Vitest
- Vercel

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
├── styles
└── types
```

The project follows a feature-oriented architecture where routing, presentation, domain logic, and structured content remain clearly separated.

For a more detailed overview, see **ARCHITECTURE.md**.

---

# Development

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

Individual commands:

```bash
pnpm lint
pnpm test
pnpm build
```

---

# Engineering Principles

This project follows a few simple principles:

- Build software intended to last.
- Keep content separate from presentation.
- Prefer composition over duplication.
- Optimize for maintainability.
- Ship continuously.
- Choose clarity over unnecessary complexity.

---

# Roadmap

## Completed

- ✅ Design system
- ✅ Feature-based architecture
- ✅ Typed content model
- ✅ Project platform
- ✅ Engineering journal
- ✅ Reading progress
- ✅ Responsive design
- ✅ Theme support
- ✅ SEO foundation
- ✅ Testing foundation

## Planned

- 🔍 Search
- 📰 RSS feed
- 🖼️ Dynamic Open Graph images
- 📊 Analytics
- ✨ Enhanced article components

---

# Deployment

The site is automatically deployed through **Vercel**.

Every change merged into `main` is verified before deployment.

---

# License

Released under the **MIT License**.

See the **LICENSE** file for details.

---

## Author

**Edvard Pasz**

🌐 https://paszed.me
