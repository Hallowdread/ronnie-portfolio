// This file would be used in a Next.js or similar environment
// For Vite/React, you would need to set up a server-side component or use a serverless function

import type { NextApiRequest, NextApiResponse } from "next"
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook"

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  // Verify the webhook signature
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string
  const body = await readBody(req) // Read the body as a string

  if (!isValidSignature(body, signature, SANITY_WEBHOOK_SECRET)) {
    return res.status(401).json({ message: "Invalid signature" })
  }

  try {
    // Trigger your build process here
    // For Vercel, you can use their Deploy Hooks
    const response = await fetch(process.env.VERCEL_DEPLOY_HOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      return res.status(200).json({ message: "Build triggered successfully" })
    } else {
      return res.status(500).json({ message: "Failed to trigger build" })
    }
  } catch (error) {
    console.error("Error triggering build:", error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

// Helper function to read the request body as a string
async function readBody(req: NextApiRequest): Promise<string> {
  const bodyPromise = new Promise<string>((resolve) => {
    let bodyString = ""
    req.on("data", (chunk) => {
      bodyString += chunk.toString()
    })
    req.on("end", () => {
      resolve(bodyString)
    })
  })

  return await bodyPromise
}
