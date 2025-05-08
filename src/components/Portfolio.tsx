"use client"

import { useState, useEffect } from "react"
import { getClient } from "../lib/sanity-preview"
import { usePreview } from "../context/PreviewContext"
import OptimizedImage from "./OptimizedImage"

const categories = ["All", "Social Media", "Content Creation", "Graphic Design"]

// Default projects as fallback
const defaultProjects = [
  {
    id: 1,
    title: "Brand Identity Refresh",
    category: "Graphic Design",
    image:
      "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "Social Media",
    image:
      "https://images.pexels.com/photos/4549416/pexels-photo-4549416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Promotional Video Series",
    category: "Content Creation",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Product Launch Strategy",
    category: "Social Media",
    image:
      "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Engagement Content Series",
    category: "Content Creation",
    image:
      "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]

interface PortfolioItem {
  _id: string
  title: string
  category: string
  image: any
  description?: string
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [projects, setProjects] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const { isPreview } = usePreview()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Use the appropriate client based on preview mode
        const sanityClient = getClient(isPreview)
        const data = await sanityClient.fetch(`
          *[_type == "portfolio"]
        `)

        if (data && data.length > 0) {
          setProjects(data)
        } else {
          // Convert default projects to match the expected format
          setProjects(
            defaultProjects.map((project) => ({
              _id: `default-${project.id}`,
              title: project.title,
              category: project.category,
              image: { url: project.image },
            })),
          )
        }
      } catch (error) {
        console.error("Error fetching portfolio projects:", error)
        // Use default projects on error
        setProjects(
          defaultProjects.map((project) => ({
            _id: `default-${project.id}`,
            title: project.title,
            category: project.category,
            image: { url: project.image },
          })),
        )
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [isPreview])

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my recent projects that showcase my skills in social media management, content
            creation, and graphic design.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {loading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-lg shadow-md h-64 animate-pulse bg-gray-200"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="relative overflow-hidden rounded-lg shadow-md group"
                onMouseEnter={() => setHoveredItem(project._id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {project.image.url ? (
                  <img
                    src={project.image.url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <OptimizedImage
                    image={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-orange-900/90 to-orange-500/70 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                    hoveredItem === project._id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-orange-100">{project.category}</p>
                  {project.description && <p className="text-orange-50 text-sm mt-2">{project.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
