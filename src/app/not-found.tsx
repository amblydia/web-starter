import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section aria-labelledby="not-found-heading" size="narrow">
      <div className="space-y-4 py-8 text-center">
        <p className="font-medium text-muted-foreground text-sm">404</p>
        <h1 id="not-found-heading">Page not found</h1>
        <p className="text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <Link className={buttonVariants({ size: "lg" })} href="/">
            Back to home
          </Link>
          <Link
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href="/contact"
          >
            Contact us
          </Link>
        </div>
      </div>
    </Section>
  );
}
