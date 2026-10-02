import "server-only";

/**
 * Server-only environment variables. Importing this file from a Client
 * Component fails the build, so secrets can never leak to the browser.
 *
 * Add new server variables here and validate them in one place.
 */

function parseBoolean(value: string | undefined): boolean {
  return value === "true" || value === "1";
}

export function getServerEnv() {
  return {
    /** Set to `true` on staging/preview deployments to serve `Disallow: /`. */
    disallowIndexing: parseBoolean(process.env.DISALLOW_INDEXING),
  };
}
