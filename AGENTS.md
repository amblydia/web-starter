# AGENTS.md — web-starter

This supplements the parent Amblydia workspace instructions. Those still apply.

`web-starter` is Amblydia's generic, open-source foundation for business and corporate websites. Future client sites start from it.

## Rules

- Keep this project **generic**. No client branding, content, business logic or integrations.
- Use **Bun** (`bun install`, `bun dev`, `bun run check`, `bun run build`). Never add npm/Yarn/pnpm lockfiles.
- Use **TypeScript** (strict). No `any`, no suppressed errors.
- Use the Next.js **App Router**. Prefer **Server Components**; keep Client Component boundaries small.
- Use **shadcn/ui with Base UI** (no Radix). Check existing components in `src/components/` before creating new ones.
- Use **HugeIcons** through `<Icon />` (`src/components/ui/icon.tsx`). No Lucide.
- Use **Ultracite** (`bun run check` / `bun run format`).
- Keep company details in `src/config/site.ts` and navigation in `src/config/navigation.ts`; do not hardcode them in components.
- Maintain **accessibility** (semantic HTML, keyboard, focus states, labels, heading order, reduced motion), **responsive behavior**, **SEO fundamentals** and **Docker compatibility** (`output: "standalone"`).
- Validate all input on the server. Never expose secrets to the client; server-only env goes in `src/lib/env-server.ts`.

## Do not add

Authentication, a database, a CMS, payments, e-commerce, i18n, animation libraries, analytics, or anything that turns this into a SaaS boilerplate — unless explicitly requested. Only add features that benefit most business websites and can be configured rather than hardcoded.

## Before finishing

Run `bun run check` and `bun run build`. For Dockerfile changes, build the image (`docker build -t amblydia-web-starter .`).
