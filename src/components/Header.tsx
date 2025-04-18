import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-semibold text-xl md:text-2xl">
          <span className={`${isScrolled ? 'text-orange-500' : 'text-orange-400'}`}>Chisanga</span>
          <span className={`${isScrolled ? 'text-gray-800' : 'text-white'} ml-1`}>Agbese</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#home" scrolled={isScrolled}>Home</Link>
          <Link href="#about" scrolled={isScrolled}>About</Link>
          <Link href="#services" scrolled={isScrolled}>Services</Link>
          <Link href="#portfolio" scrolled={isScrolled}>Portfolio</Link>
          <Link href="#testimonials" scrolled={isScrolled}>Testimonials</Link>
          <Link href="#contact" scrolled={isScrolled}>Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
            <Instagram size={20} />
          </a>
          <a href="#" className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-800 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-gray-800 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="text-gray-800 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-gray-800 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#testimonials" className="text-gray-800 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-gray-800 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;