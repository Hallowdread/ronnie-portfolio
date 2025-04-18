import React from 'react';
import { Award, Globe, Lightbulb } from 'lucide-react';
import profileImg from '../assets/profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Biography */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hello, I'm <span className="text-orange-500">Chisanga</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Social Media Manager, Content Creator, and Graphic Designer with a keen eye for detail and a creative mindset. My journey in the digital landscape has equipped me with the skills to help brands tell their stories in compelling ways that resonate with their audience.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With experience spanning across various industries, I specialize in developing comprehensive social media strategies, creating engaging content, and designing visually appealing graphics that help brands stand out in today's competitive digital environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 transition-transform hover:transform hover:-translate-y-1">
                <Globe className="text-orange-500 mb-2" size={32} />
                <span className="font-semibold text-gray-800">Social Media</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 transition-transform hover:transform hover:-translate-y-1">
                <Lightbulb className="text-orange-500 mb-2" size={32} />
                <span className="font-semibold text-gray-800">Content Creation</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 transition-transform hover:transform hover:-translate-y-1">
                <Award className="text-orange-500 mb-2" size={32} />
                <span className="font-semibold text-gray-800">Graphic Design</span>
              </div>
            </div>

            <a 
              href="#contact"
              className="inline-block px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-md"
            >
              Get In Touch
            </a>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-orange-100 shadow-xl">
              <img 
                src={profileImg} 
                alt="Chisanga Agbenu Agbese" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white py-3 px-6 rounded-full shadow-lg">
              <p className="font-semibold">5+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
