import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadata {
  description?: string;
  /** Absolute or root-relative image URL. Falls back to the generated default. */
  image?: string;
  noIndex?: boolean;
  /** Path of the page, e.g. "/contact". Used for the canonical URL. */
  path?: string;
  /** Page title. The root layout template appends the site name. */
  title?: string;
}

/**
 * Builds page metadata that overrides only what a page needs to change.
 * Anything not set here is inherited from the root layout.
 */
export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex,
}: PageMetadata = {}): Metadata {
  const images = image
    ? [{ alt: title ?? siteConfig.name, url: image }]
    : undefined;

  return {
    ...(title && { title }),
    ...(description && { description }),
    alternates: { canonical: path },
    openGraph: {
      url: path,
      ...(title && { title }),
      ...(description && { description }),
      ...(images && { images }),
    },
    twitter: {
      ...(title && { title }),
      ...(description && { description }),
      ...(images && { images }),
    },
    ...(noIndex && { robots: { follow: false, index: false } }),
  };
}
