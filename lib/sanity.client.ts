import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_READ_TOKEN;

/** Whether Sanity env vars are configured. */
export const isSanityConfigured = Boolean(projectId);

/** Pre-configured read-only client. Returns null when env vars are missing. */
export function getSanityClient(): SanityClient | null {
  if (!projectId) return null;

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token,
    perspective: "published", // never fetch drafts in production
  });
}
