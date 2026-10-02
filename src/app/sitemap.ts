import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/structured-data";

/** Add new static routes here. */
const routes = ["/", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
    url: absoluteUrl(route),
  }));
}
