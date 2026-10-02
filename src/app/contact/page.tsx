import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/sections/contact";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  description: "Get in touch with us. Send a message and we'll reply soon.",
  path: "/contact",
  title: "Contact",
});

export default function ContactPage() {
  return (
    <>
      <Contact headingAs="h1" />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
