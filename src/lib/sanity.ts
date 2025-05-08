import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

// Create a Sanity client
export const client = createClient({
  projectId: "z9mmxfnn", // Your project ID from sanity.config.ts
  dataset: "production",
  useCdn: true, // Set to false if you want to ensure fresh data
  apiVersion: "2023-05-03", // Use a current date
})

// Set up the image URL builder
const builder = imageUrlBuilder(client)

// Helper function to get image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper function to get portable text
export function getPortableText(blocks: any) {
  if (!blocks) return ""

  // Simple conversion of portable text to plain text
  // For more complex rendering, consider using @portabletext/react
  return blocks
    .map((block: any) => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map((child: any) => child.text).join("")
    })
    .join("\n\n")
}
