"use client"

import { useState, useEffect } from "react"
import { urlFor } from "../lib/sanity"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

interface OptimizedImageProps {
  image: SanityImageSource
  alt: string
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
}

const OptimizedImage = ({
  image,
  alt,
  width = 800,
  height = 600,
  className = "",
  sizes = "100vw",
  priority = false,
}: OptimizedImageProps) => {
  const [src, setSrc] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!image) {
      setError(true)
      setIsLoading(false)
      return
    }

    try {
      // Generate the image URL with Sanity's image URL builder
      const imageUrl = urlFor(image).width(width).height(height).auto("format").quality(80).url()

      setSrc(imageUrl)
      setIsLoading(false)
    } catch (err) {
      console.error("Error generating image URL:", err)
      setError(true)
      setIsLoading(false)
    }
  }, [image, width, height])

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!image) return ""

    const breakpoints = [320, 640, 768, 1024, 1280, 1536]
    return breakpoints
      .map((breakpoint) => {
        const url = urlFor(image).width(breakpoint).auto("format").quality(80).url()
        return `${url} ${breakpoint}w`
      })
      .join(", ")
  }

  if (isLoading) {
    return (
      <div
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto" }}
      />
    )
  }

  if (error || !src) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
        style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto" }}
      >
        Image not available
      </div>
    )
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      srcSet={generateSrcSet()}
      sizes={sizes}
    />
  )
}

export default OptimizedImage
