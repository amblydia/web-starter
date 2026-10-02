/**
 * Public environment variables. Safe to import from Client Components.
 *
 * NEXT_PUBLIC_* values are inlined at build time, so they must be available
 * when `next build` runs (in Docker: pass them as build args).
 * Server-only variables live in `env-server.ts`.
 */

const DEFAULT_SITE_URL = "https://example.com";

function parseSiteUrl(value: string | undefined): string {
  const raw = value?.trim() || DEFAULT_SITE_URL;

  let url: URL;
  try {
    url = new URL(raw);
  } catch (error) {
    throw new Error(
      `Invalid NEXT_PUBLIC_SITE_URL "${raw}". Use an absolute URL such as https://example.com`,
      { cause: error }
    );
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must start with http:// or https://");
  }

  // Normalise: no trailing slash so paths can be appended safely.
  return url.origin;
}

export const publicEnv = {
  siteUrl: parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
} as const;
