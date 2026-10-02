# Amblydia Web Starter

Amblydia Web Starter is the open-source foundation Amblydia uses when building modern business and corporate websites. Clone it, change the config, content and styling, and ship — without rebuilding navigation, SEO, accessibility, forms, error handling, Docker or CI every time.

It is deliberately small. It is **not** a SaaS, dashboard, CMS or authentication starter.

## Stack

- [Next.js](https://nextjs.org) (App Router, React Server Components) and React
- TypeScript (strict)
- [Bun](https://bun.sh) for packages and scripts
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com)
- [HugeIcons](https://hugeicons.com)
- [Ultracite](https://www.ultracite.ai) (Biome) for linting and formatting
- [Geist](https://vercel.com/font) via `next/font`

## Requirements

- [Bun](https://bun.sh) 1.3 or newer
- [Docker](https://www.docker.com) (only to build the production image)

## Installation

```bash
git clone https://github.com/amblydia/web-starter.git my-project
cd my-project
bun install
bun dev
```

Open <http://localhost:3000>. Optionally copy `.env.example` to `.env.local`.

| Command | What it does |
| --- | --- |
| `bun dev` | Start the development server |
| `bun run build` | Production build |
| `bun start` | Serve the production build |
| `bun run check` | Ultracite lint/format check plus `tsc --noEmit` |
| `bun run format` | Auto-fix lint and formatting issues |

## Project structure

```text
src/
├── app/              Routes: layout, pages, error/not-found/loading, sitemap,
│                     robots, OG image, /api/health, contact Server Action
├── components/
│   ├── ui/           shadcn/ui components (Base UI) and the shared <Icon />
│   ├── layout/       Container, Section, Header, MobileNav, Footer
│   └── sections/     Hero, Features, Content, CallToAction, Contact
├── config/           site.ts (company details) and navigation.ts
├── lib/              env, metadata, structured data, contact validation/transport
└── styles/           globals.css (design tokens)
```

## Customization

- **Site config** — edit `src/config/site.ts`: name, description, email, phone, address, socials. Components and metadata read from it.
- **Site URL** — set `NEXT_PUBLIC_SITE_URL` (used for canonical URLs, sitemap, Open Graph, structured data).
- **Navigation** — edit `src/config/navigation.ts`. The header, mobile menu and footer all use it. Add legal links there once the pages exist.
- **Colors and radius** — edit the CSS variables in `:root` in `src/styles/globals.css` (shadcn tokens, OKLCH).
- **Typography** — fonts are set in `src/app/layout.tsx`; the heading scale is in `globals.css`. To use another font, swap the font import and the `--font-sans` variable.
- **Metadata** — global defaults live in `src/app/layout.tsx`. Pages call `createMetadata({ title, description, path, image })` from `src/lib/metadata.ts` to override only what they need. A default social image is generated in `src/app/opengraph-image.tsx`.
- **Structured data** — `src/lib/structured-data.ts` has Organization, WebSite and BreadcrumbList helpers; render them with `<JsonLd />`. Add LocalBusiness, Service, etc. in the same file.
- **Content** — edit the components in `src/components/sections/` and compose pages from them. Add routes to the `routes` list in `src/app/sitemap.ts`.
- **Icons** — use `<Icon icon={...} size="sm | md | lg | xl" />` with icons from `@hugeicons/core-free-icons`.

### Contact form

The form validates on the server (`src/lib/contact/validation.ts`), includes a honeypot, a minimum-fill-time check and input length limits, and submits through a Server Action (`src/app/contact/actions.ts`).

No email provider is wired up. Messages go through the `ContactTransport` interface in `src/lib/contact/transport.ts`; by default nothing is delivered. Implement `send` with Resend, SMTP or another provider and return it from `getContactTransport()`. Add rate limiting or CAPTCHA per project when needed.

## Environment variables

| Variable | Scope | Required | Description |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public, **build time** | No (defaults to `https://example.com`) | Canonical site URL |
| `DISALLOW_INDEXING` | Server, runtime | No | `true` serves `Disallow: /` in robots.txt (use on staging) |

Never commit real secrets. Server-only values belong in `src/lib/env-server.ts`, which cannot be imported from Client Components.

## Docker

```bash
docker build -t amblydia-web-starter \
  --build-arg NEXT_PUBLIC_SITE_URL=https://example.com .
docker run --rm -p 3000:3000 amblydia-web-starter
```

The Dockerfile is multi-stage: Bun installs and builds, and a small Node Alpine image runs the Next.js `standalone` output as a non-root user. It includes a health check against `/api/health`.

## Deployment (Coolify)

The image works with any Docker platform. For [Coolify](https://coolify.io):

- **Build method:** Dockerfile (or pull a prebuilt image from your registry)
- **Container port:** `3000`
- **Health check path:** `/api/health` (returns `{"status":"ok"}`)
- **Build arguments:** `NEXT_PUBLIC_SITE_URL`
- **Runtime variables:** none required; optionally `DISALLOW_INDEXING=true` on staging

Put the app behind your CDN/proxy with HTTPS. No domains, IPs or credentials are hardcoded.

## CI

`.github/workflows/ci.yml` reuses the shared `docker-pr.yml` workflow from [`Amblydia/github-actions`](https://github.com/Amblydia/github-actions). The `checks` stage of the Dockerfile runs `bun install --frozen-lockfile` and `bun run check` (Ultracite and TypeScript), then the production image build runs `bun run build`. The starter does not deploy automatically.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Security issues: [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE)
