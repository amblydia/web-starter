import type { MetadataRoute } from "next";

import { getServerEnv } from "@/lib/env-server";
import { absoluteUrl } from "@/lib/structured-data";

// Read at request time so staging deployments can set DISALLOW_INDEXING
// at runtime without rebuilding the image.
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  if (getServerEnv().disallowIndexing) {
    return { rules: { disallow: "/", userAgent: "*" } };
  }

  return {
    rules: { allow: "/", disallow: "/api/", userAgent: "*" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
