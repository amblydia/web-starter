import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const desktopLinkClass =
  "rounded-md px-3 py-2 font-medium text-muted-foreground text-sm outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 aria-[current=page]:text-foreground";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          className="rounded-md font-semibold text-lg tracking-tight outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navigation.main.map((item) => (
            <NavLink
              className={desktopLinkClass}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {navigation.cta ? (
            <Link
              className={cn(
                buttonVariants({ size: "lg" }),
                "hidden md:inline-flex"
              )}
              href={navigation.cta.href}
            >
              {navigation.cta.label}
            </Link>
          ) : null}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { Header };
