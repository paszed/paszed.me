paszed.me on  main via  v26.4.0 on ☁️   took 16s
❯ cat README.md
# paszed.me

> My personal website, engineering journal, and digital home.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Overview

This repository contains the source code for **paszed.me**.

The goal is to build more than a traditional portfolio. This project serves as:

- Personal website
- Engineering journal
- Project showcase
- Technical blog
- Experimentation platform

Everything is built with a strong emphasis on maintainability, scalability, and developer experience.

---

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- next-themes
- ESLint
- pnpm

---

## Project Structure

```
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
└── types
```

### Philosophy

```
app
    ↓
features
    ↓
content
```

- **app** handles routing.
- **features** contain reusable UI and business logic.
- **content** contains structured data.
- **components** provide shared UI primitives.

---

## Features

### Home

- Hero
- Current Focus
- Philosophy
- Contact CTA

### Projects

- Dynamic routing
- Typed content
- SEO metadata
- Gallery support
- Technology badges
- Status metadata

### About

- Personal introduction
- Story
- Engineering philosophy

### Uses

- Hardware
- Development tools
- AI tools
- Design tools

### Now

A snapshot of what I'm currently building and learning.

### Blog

Foundation for future engineering articles.

---

## Development

Install dependencies

```bash
pnpm install
```

Start the development server

```bash
pnpm dev
```

Run linting

```bash
pnpm lint
```

Build for production

```bash
pnpm build
```

---

## Design Principles

This project follows a few simple principles.

- Build reusable components.
- Prefer composition over duplication.
- Keep content separate from presentation.
- Ship small improvements continuously.
- Favor simplicity over unnecessary abstraction.

---

## Roadmap

- [x] Core architecture
- [x] Theme system
- [x] Design system
- [x] Project pages
- [x] About page
- [x] Uses page
- [x] Now page
- [x] Blog foundation
- [ ] Real project case studies
- [ ] MDX blog
- [ ] Search
- [ ] RSS feed
- [ ] Dynamic Open Graph images
- [ ] Analytics

---

## License

MIT

---

Built with ❤️ by **Edvard Pasz**.
