import { siteConfig } from "@/config/site";

type JsonLd = Record<string, unknown>;

/** Absolute URL for a site path. */
export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function organizationJsonLd(): JsonLd {
  const sameAs = Object.values(siteConfig.socials);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    email: siteConfig.email,
    name: siteConfig.name,
    url: siteConfig.url,
    ...(siteConfig.phone && { telephone: siteConfig.phone }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: siteConfig.description,
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      item: absoluteUrl(item.path),
      name: item.name,
      position: index + 1,
    })),
  };
}

// Other schemas (LocalBusiness, Service, FAQPage, ...) follow the same shape:
// add a function here that returns a JsonLd object, then render it with <JsonLd />.
