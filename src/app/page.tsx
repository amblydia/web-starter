import { CallToAction } from "@/components/sections/call-to-action";
import { Contact } from "@/components/sections/contact";
import { Content } from "@/components/sections/content";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Content />
      <CallToAction />
      <Contact />
    </>
  );
}
