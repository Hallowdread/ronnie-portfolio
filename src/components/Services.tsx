import React from 'react';
import { Share2, Lightbulb, Layout, BarChart, Image, Brush } from 'lucide-react';

const services = [
  {
    icon: <Share2 className="text-orange-500" size={32} />,
    title: "Social Media Management",
    description: "Complete management of social media accounts including content planning, posting, and community engagement to grow your online presence."
  },
  {
    icon: <Lightbulb className="text-orange-500" size={32} />,
    title: "Content Strategy",
    description: "Development of comprehensive content strategies that align with your brand goals and resonate with your target audience."
  },
  {
    icon: <Layout className="text-orange-500" size={32} />,
    title: "Content Creation",
    description: "Creation of engaging, high-quality content including posts, captions, stories, and reels that drive engagement and conversions."
  },
  {
    icon: <BarChart className="text-orange-500" size={32} />,
    title: "Analytics & Reporting",
    description: "Detailed analysis of social media performance with regular reports to track growth and optimize strategies for better results."
  },
  {
    icon: <Image className="text-orange-500" size={32} />,
    title: "Graphic Design",
    description: "Design of visually appealing graphics including posts, banners, logos, and other visual assets that enhance your brand identity."
  },
  {
    icon: <Brush className="text-orange-500" size={32} />,
    title: "Brand Identity",
    description: "Development and refinement of brand identity elements to ensure consistency across all digital platforms and materials."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help elevate your brand's online presence and connect with your audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
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
  );
};

export default Services;