"use client"

import { usePreview } from "../context/PreviewContext"

const PreviewBanner = () => {
  const { isPreview, setIsPreview } = usePreview()

  if (!isPreview) return null

  const exitPreview = () => {
    // Remove preview from session storage
    sessionStorage.removeItem("sanity-preview")
    setIsPreview(false)

    // Remove preview parameter from URL
    const url = new URL(window.location.href)
    url.searchParams.delete("preview")
    window.history.replaceState({}, document.title, url.toString())
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-600 text-white py-2 px-4 z-50 flex justify-between items-center">
      <p className="text-sm font-medium">Preview Mode: You're viewing draft content</p>
      <button
        onClick={exitPreview}
        className="bg-white text-orange-600 px-3 py-1 rounded text-sm font-medium hover:bg-orange-100 transition-colors"
      >
        Exit Preview
      </button>
    </div>
  )
}

export default PreviewBanner
