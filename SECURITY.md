# Security Policy

Thank you for helping improve the security of **paszed.me**.

## Supported Versions

Security updates are provided for the latest version on the `main` branch.

| Version | Supported |
| -------- | --------- |
| Latest (`main`) | ✅ |

---

# Reporting a Vulnerability

If you discover a security vulnerability, please **do not** disclose it publicly before it has been reviewed.

Instead, contact:

- GitHub Issues (for non-sensitive reports)
- GitHub Security Advisories (preferred for sensitive vulnerabilities)

Please include:

- Description of the issue
- Steps to reproduce
- Potential impact
- Suggested mitigation (if known)

---

# Security Practices

This project follows several security best practices:

- Strict TypeScript
- ESLint
- Automated unit tests
- End-to-end testing with Playwright
- Dependency auditing
- Dependency deduplication
- Continuous Integration
- Secure HTTP headers where applicable
- No runtime evaluation (`eval`)
- No `dangerouslySetInnerHTML` except for trusted JSON-LD generation
- No secrets committed to the repository

---

# Dependency Auditing

Security dependencies are regularly checked using:

```bash
pnpm audit
```

Package versions are reviewed using:

```bash
pnpm outdated
```

Dependency duplication is monitored using:

```bash
pnpm dedupe --check
```

---

# Current Known Issue

At the time of writing, `pnpm audit` reports the following advisory:

- **Package:** `postcss`
- **Severity:** Moderate
- **Advisory:** GHSA-qx2v-qp2m-jg93

This originates from:

```
next -> postcss
```

The project itself already uses a patched PostCSS version through Tailwind CSS and Vite, but the version bundled with Next.js is currently older.

Verification:

```bash
pnpm why postcss
```

Current dependency tree:

```
next
└── postcss 8.4.x
```

This issue cannot be resolved within this repository and will be resolved once Next.js updates its dependency.

---

# Release Checklist

Before every release, the following command should complete successfully:

```bash
pnpm check
```

This verifies:

- ESLint
- TypeScript
- Unit tests
- Coverage
- Production build
- End-to-end tests
- Dependency deduplication

Security audits are performed separately:

```bash
pnpm audit
```

---

# Security Philosophy

The goal of this project is to maintain a secure, maintainable, and transparent codebase.

Security is treated as an ongoing engineering practice rather than a one-time audit.
