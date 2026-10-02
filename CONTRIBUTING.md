# Contributing

Thanks for helping improve Amblydia Web Starter.

## Scope

This repository is a small, generic foundation for business websites. Contributions should benefit most such sites and be configurable rather than hardcoded. Features such as authentication, databases, CMSs, payments and client-specific code are out of scope.

## Setup

```bash
bun install
bun dev
```

## Before opening a pull request

```bash
bun run check   # Ultracite + TypeScript
bun run build   # production build
```

- Follow the existing patterns and prefer Server Components.
- Keep accessibility, responsiveness and SEO intact.
- Avoid new dependencies unless they are clearly justified.
- Use Bun only; do not commit other lockfiles.
- If you change the Dockerfile, verify `docker build` works.

## Pull requests

Describe what changed and why, and link any related issue. Keep pull requests focused.

## Security

Do not report vulnerabilities in public issues. See [SECURITY.md](SECURITY.md).
