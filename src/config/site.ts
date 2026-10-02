import { publicEnv } from "@/lib/env";

type SocialPlatform = "facebook" | "github" | "instagram" | "linkedin" | "x";

/**
 * Central site configuration. Change these values for each client project —
 * components and metadata read from here instead of hardcoding company details.
 */
export const siteConfig = {
  address: undefined as string | undefined,
  description:
    "A clear, one-sentence description of what this company does and who it helps.",
  email: "hello@example.com",
  locale: "en_US",
  name: "Company Name",
  openGraph: {
    imageAlt: "Company Name",
  },
  // Optional contact details. Remove or leave undefined to hide them.
  phone: undefined as string | undefined,
  shortName: "Company",
  /** Full URLs. Platforms left out are not shown. */
  socials: {} as Partial<Record<SocialPlatform, string>>,
  url: publicEnv.siteUrl,
} as const;

export type SiteConfig = typeof siteConfig;
export type { SocialPlatform };
