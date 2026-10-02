import Link from "next/link";

import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function CallToAction() {
  return (
    <Section aria-labelledby="cta-heading" size="narrow" variant="primary">
      <div className="space-y-4 text-center">
        <h2 id="cta-heading">Ready to get started?</h2>
        <p className="text-lg text-primary-foreground/80">
          A short, friendly line that encourages visitors to take the next step.
        </p>
        <Link
          className={cn(
            buttonVariants({ size: "lg", variant: "secondary" }),
            "mt-2"
          )}
          href="/contact"
        >
          Contact us
        </Link>
      </div>
    </Section>
  );
}

export { CallToAction };
