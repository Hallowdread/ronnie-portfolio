import type React from "react"
import { Heart, Instagram, Linkedin } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-orange-400">Chisanga</span> Agbese
            </h2>
            <p className="text-gray-400 mt-2">Social Media Manager | Content Creator | Graphic Designer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/lifeof.nu?igsh=MXZiMXJoeXZsZ21rNg=="
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Chisanga Agbenu Agbese. All rights reserved.
            </p>

            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="mx-1 text-orange-500" size={14} /> for creative professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
