import Link from "next/link";

import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";

function Hero() {
  return (
    <Section aria-labelledby="hero-heading" className="pt-20 md:pt-32">
      <div className="max-w-3xl space-y-6">
        <p className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
          Welcome
        </p>
        <h1 id="hero-heading">A clear headline that explains what you do</h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          One or two sentences that describe the value you offer and who it is
          for. Replace this placeholder with your own message.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Link className={buttonVariants({ size: "lg" })} href="/contact">
            Get in touch
          </Link>
          <Link
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href="/#services"
          >
            Our services
          </Link>
        </div>
      </div>
    </Section>
  );
}

export { Hero };
