import type { SchemaGraph } from "@/lib/schema/builders";

/**
 * Renders JSON-LD as a plain <script> so it is present in the prerendered HTML
 * (next/script would inject it client-side). `<` is escaped so content can
 * never close the script tag early.
 */
export default function JsonLd({ data, id }: { data: SchemaGraph; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
