import Image from "next/image";

import { Section } from "@/components/layout/section";

function Content() {
  return (
    <Section aria-labelledby="about-heading" id="about">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 id="about-heading">About us</h2>
          <p className="text-lg text-muted-foreground">
            Use this section to tell your story: who you are, what you believe
            in and what makes your approach different.
          </p>
          <p className="text-muted-foreground">
            Keep paragraphs short and scannable. Pair the text with an image
            that matches the brand — this one is a neutral placeholder.
          </p>
        </div>
        <Image
          alt="Placeholder illustration"
          className="h-auto w-full rounded-xl border"
          height={600}
          sizes="(min-width: 1024px) 560px, 100vw"
          src="/images/placeholder.svg"
          width={800}
        />
      </div>
    </Section>
  );
}

export { Content };
