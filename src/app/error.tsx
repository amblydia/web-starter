"use client";

import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Button, buttonVariants } from "@/components/ui/button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // The error itself is intentionally not rendered: it may contain internals.
  return (
    <Section aria-labelledby="error-heading" size="narrow">
      <div className="space-y-4 py-8 text-center">
        <p className="font-medium text-muted-foreground text-sm">Error</p>
        <h1 id="error-heading">Something went wrong</h1>
        <p className="text-lg text-muted-foreground">
          An unexpected problem occurred. You can try again, or head back to the
          homepage.
        </p>
        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <Button onClick={reset} size="lg">
            Try again
          </Button>
          <Link
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    </Section>
  );
}
