import { PreviewProvider } from "./context/PreviewContext"
import PreviewBanner from "./components/PreviewBanner"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./animations.css"

function App() {
  return (
    <PreviewProvider>
      <div className="font-sans">
        <PreviewBanner />
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </PreviewProvider>
  )
}

export default App
