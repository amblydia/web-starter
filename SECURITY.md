# Security Policy

## Reporting a vulnerability

Please do not open a public issue for security problems. Report them privately using GitHub's [private vulnerability reporting](https://github.com/amblydia/web-starter/security/advisories/new) for this repository.

Include a description, steps to reproduce and the potential impact. We will acknowledge your report and keep you updated as we investigate.

## Supported versions

Only the latest version on the `main` branch is supported.

## Notes for projects built from this starter

- Never commit secrets. Use `.env.example` to document variables and keep real values in your hosting platform.
- Keep server-only configuration in `src/lib/env-server.ts`.
- Review the default security headers in `next.config.ts` and adapt them (for example, add a Content-Security-Policy) to match each project.
- The contact form includes basic anti-spam measures only. Add rate limiting or CAPTCHA if a site needs it.
