import { createClient } from "@sanity/client"

// Create a preview client with the same configuration as the regular client
// but with preview mode enabled
export const previewClient = createClient({
  projectId: "z9mmxfnn",
  dataset: "production",
  useCdn: false, // We need to disable the CDN to get fresh content
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_TOKEN, // You'll need to set this up in your environment variables
  perspective: "previewDrafts", // This enables viewing draft content
})

// Helper function to determine which client to use
export function getClient(preview = false) {
  return preview
    ? previewClient
    : createClient({
        projectId: "z9mmxfnn",
        dataset: "production",
        useCdn: true,
        apiVersion: "2023-05-03",
      })
}
