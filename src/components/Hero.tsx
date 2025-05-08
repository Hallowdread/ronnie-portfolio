import type React from "react"
import { ArrowDownCircle } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fadeInUp">
          <span className="block">Chisanga Agbenu Agbese</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-light text-white mb-8 opacity-0 animate-fadeInUp animation-delay-300">
          Social Media Manager | Content Creator | Graphic Designer
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 opacity-0 animate-fadeInUp animation-delay-600">
          Transforming brands with creative strategies, compelling content, and eye-catching designs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeInUp animation-delay-900">
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 bg-white text-orange-600 font-medium rounded-full hover:bg-orange-50 transition-colors shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ArrowDownCircle size={32} />
        </a>
      </div>
    </section>
  )
}

export default Hero
