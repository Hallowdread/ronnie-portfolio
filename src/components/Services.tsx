"use client"

import { useEffect, useState } from "react"
import { Share2, Lightbulb, Layout, BarChart, ImageIcon, Brush } from "lucide-react"
import { client } from "../lib/sanity"

// Define the icon mapping
const iconMap: Record<string, JSX.Element> = {
  Share2: <Share2 className="text-orange-500" size={32} />,
  Lightbulb: <Lightbulb className="text-orange-500" size={32} />,
  Layout: <Layout className="text-orange-500" size={32} />,
  BarChart: <BarChart className="text-orange-500" size={32} />,
  ImageIcon: <ImageIcon className="text-orange-500" size={32} />,
  Brush: <Brush className="text-orange-500" size={32} />,
}

// Default services as fallback
const defaultServices = [
  {
    icon: "Share2",
    title: "Social Media Management",
    description:
      "Complete management of social media accounts including content planning, posting, and community engagement to grow your online presence.",
  },
  {
    icon: "Lightbulb",
    title: "Content Strategy",
    description:
      "Development of comprehensive content strategies that align with your brand goals and resonate with your target audience.",
  },
  {
    icon: "Layout",
    title: "Content Creation",
    description:
      "Creation of engaging, high-quality content including posts, captions, stories, and reels that drive engagement and conversions.",
  },
  {
    icon: "BarChart",
    title: "Analytics & Reporting",
    description:
      "Detailed analysis of social media performance with regular reports to track growth and optimize strategies for better results.",
  },
  {
    icon: "Image",
    title: "Graphic Design",
    description:
      "Design of visually appealing graphics including posts, banners, logos, and other visual assets that enhance your brand identity.",
  },
  {
    icon: "Brush",
    title: "Brand Identity",
    description:
      "Development and refinement of brand identity elements to ensure consistency across all digital platforms and materials.",
  },
]

interface ServiceItem {
  _id: string
  title: string
  icon: string
  description: string
  order: number
}

const Services = () => {
  const [services, setServices] = useState<ServiceItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "service"] | order(order asc)
        `)

        if (data && data.length > 0) {
          setServices(data)
        } else {
          // Convert default services to match the expected format
          setServices(
            defaultServices.map((service, index) => ({
              _id: `default-${index}`,
              title: service.title,
              icon: service.icon,
              description: service.description,
              order: index,
            })),
          )
        }
      } catch (error) {
        console.error("Error fetching services:", error)
        // Use default services on error
        setServices(
          defaultServices.map((service, index) => ({
            _id: `default-${index}`,
            title: service.title,
            icon: service.icon,
            description: service.description,
            order: index,
          })),
        )
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return (
    <section id="services" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help elevate your brand's online presence and connect with your
            audience effectively.
          </p>
        </div>

        {loading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-8 rounded-lg shadow-md animate-pulse">
                <div className="w-8 h-8 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {iconMap[service.icon] || <Lightbulb className="text-orange-500" size={32} />}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-md"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
