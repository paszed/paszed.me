CONTRIBUTING.md

Architecture

- Feature-first architecture
- Content lives in /content
- Business logic lives in /lib
- UI lives in /components

Components

- Prefer composition
- No duplicated UI
- Keep components under 200 LOC

Styling

- Use design tokens
- Never hardcode colors
- Prefer Card/Panel over custom wrappers

Content

- All articles are typed
- Projects use the Project interface

Testing

pnpm check
must pass before merge
