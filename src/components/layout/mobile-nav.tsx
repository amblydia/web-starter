"use client";

import { Menu01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Mobile menu built on the Sheet (Base UI Dialog), which provides the focus
 * trap, Escape to close, scroll locking and correct dialog semantics.
 */
function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close after navigating to another page.
  // biome-ignore lint/correctness/useExhaustiveDependencies: close whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger
        render={
          <Button
            aria-label="Open menu"
            className="md:hidden"
            size="icon-lg"
            variant="ghost"
          />
        }
      >
        <Icon icon={Menu01Icon} size="lg" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{siteConfig.shortName}</SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {navigation.main.map((item) => (
            <NavLink
              className="rounded-md px-3 py-3 font-medium text-base outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-[current=page]:bg-muted"
              href={item.href}
              key={item.href}
              onClick={close}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {navigation.cta ? (
          <div className="mt-auto p-4">
            <Link
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
              href={navigation.cta.href}
              onClick={close}
            >
              {navigation.cta.label}
            </Link>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
