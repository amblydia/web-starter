import { Mail01Icon } from "@hugeicons/core-free-icons";

import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/layout/section";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

interface ContactProps {
  /** Use "h1" when this section is the main content of a page. */
  headingAs?: "h1" | "h2";
}

function Contact({ headingAs: Heading = "h2" }: ContactProps) {
  return (
    <Section aria-labelledby="contact-heading" id="contact">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="space-y-4 lg:col-span-2">
          <Heading id="contact-heading">Contact us</Heading>
          <p className="text-lg text-muted-foreground">
            Tell us a little about what you need and we&apos;ll get back to you.
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Icon className="text-muted-foreground" icon={Mail01Icon} />
            <a
              className="rounded-sm underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

export { Contact };
