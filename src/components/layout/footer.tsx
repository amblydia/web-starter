import {
  Facebook01Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { navigation } from "@/config/navigation";
import { type SocialPlatform, siteConfig } from "@/config/site";

const socialLinks: Record<
  SocialPlatform,
  { label: string; icon: React.ComponentProps<typeof Icon>["icon"] }
> = {
  facebook: { icon: Facebook01Icon, label: "Facebook" },
  github: { icon: GithubIcon, label: "GitHub" },
  instagram: { icon: InstagramIcon, label: "Instagram" },
  linkedin: { icon: Linkedin01Icon, label: "LinkedIn" },
  x: { icon: NewTwitterIcon, label: "X" },
};

const footerLinkClass =
  "rounded-sm text-muted-foreground text-sm outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50";

function Footer() {
  const socials = Object.entries(siteConfig.socials) as [
    SocialPlatform,
    string,
  ][];

  return (
    <footer className="border-t bg-muted/30">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-semibold text-lg">{siteConfig.name}</p>
          <p className="max-w-xs text-muted-foreground text-sm">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 font-semibold text-sm">Navigate</h2>
          <ul className="space-y-2">
            {navigation.footer.map((item) => (
              <li key={item.href}>
                <Link className={footerLinkClass} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-semibold text-sm">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className={footerLinkClass}
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.phone ? (
              <li>
                <a
                  className={footerLinkClass}
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                >
                  {siteConfig.phone}
                </a>
              </li>
            ) : null}
            {siteConfig.address ? (
              <li className="text-muted-foreground">{siteConfig.address}</li>
            ) : null}
          </ul>
          {socials.length > 0 ? (
            <ul className="mt-4 flex gap-3">
              {socials.map(([platform, url]) => (
                <li key={platform}>
                  <a
                    className={`${footerLinkClass} inline-flex p-1`}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={socialLinks[platform].icon} />
                    <span className="sr-only">
                      {socialLinks[platform].label} (opens in a new tab)
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>

      <div className="border-t">
        <Container className="flex flex-col gap-3 py-6 text-muted-foreground text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          {navigation.legal.length > 0 ? (
            <nav aria-label="Legal">
              <ul className="flex gap-4">
                {navigation.legal.map((item) => (
                  <li key={item.href}>
                    <Link className={footerLinkClass} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </Container>
      </div>
    </footer>
  );
}

export { Footer };
