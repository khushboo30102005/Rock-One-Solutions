import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";

export default defineConfig({
  name: "rock-one-solutions",
  title: "Rock One Solutions CMS",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({ structure }),
  ],
  schema: {
    types: schemaTypes,
  },
});
