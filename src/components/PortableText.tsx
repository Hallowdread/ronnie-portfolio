import { PortableText as SanityPortableText } from "@portabletext/react"
import type { PortableTextComponents } from "@portabletext/react"
import type { TypedObject } from "@portabletext/types"

// Define custom components for different block types
const components: PortableTextComponents = {
  block: {
    // Different styles for different heading levels
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
    // Normal paragraph
    normal: ({ children }) => <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>,
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-4 italic my-4 text-gray-600">{children}</blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }) => <ul className="list-disc pl-5 mb-4 text-gray-600">{children}</ul>,
    // Numbered list
    number: ({ children }) => <ol className="list-decimal pl-5 mb-4 text-gray-600">{children}</ol>,
  },
  listItem: {
    // List items
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    // Bold text
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    // Italic text
    em: ({ children }) => <em className="italic">{children}</em>,
    // Links
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-orange-500 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

interface PortableTextProps {
  value: TypedObject | TypedObject[]
}

export const PortableText = ({ value }: PortableTextProps) => {
  if (!value) {
    return null
  }

  return <SanityPortableText value={value} components={components} />
}

export default PortableText
