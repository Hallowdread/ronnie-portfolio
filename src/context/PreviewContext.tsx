"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface PreviewContextType {
  isPreview: boolean
  setIsPreview: (value: boolean) => void
}

const PreviewContext = createContext<PreviewContextType>({
  isPreview: false,
  setIsPreview: () => {},
})

export const usePreview = () => useContext(PreviewContext)

interface PreviewProviderProps {
  children: ReactNode
}

export const PreviewProvider = ({ children }: PreviewProviderProps) => {
  const [isPreview, setIsPreview] = useState(false)

  // Check for preview mode on component mount
  useEffect(() => {
    // Check if there's a preview token in the URL
    const params = new URLSearchParams(window.location.search)
    const hasPreviewToken = params.has("preview") && params.get("preview") === "true"

    if (hasPreviewToken) {
      setIsPreview(true)
      // Store preview state in session storage
      sessionStorage.setItem("sanity-preview", "true")
    } else {
      // Check if preview mode is stored in session
      const storedPreview = sessionStorage.getItem("sanity-preview") === "true"
      setIsPreview(storedPreview)
    }
  }, [])

  return <PreviewContext.Provider value={{ isPreview, setIsPreview }}>{children}</PreviewContext.Provider>
}
