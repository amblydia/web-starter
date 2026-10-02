interface JsonLdProps {
  data: Record<string, unknown>;
}

/** Renders a JSON-LD structured data block. `<` is escaped to prevent script injection. */
function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined; content is serialised and escaped
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}

export { JsonLd };
