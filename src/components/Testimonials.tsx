import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Otakuconnect ',
    role: 'Marketing Director',
    company: 'Otakuconnect ',
    image: 'https://otakutv.co/assets/images/otaku-connect-logo.png',
    rating: 5,
    quote: 'Ronnie played a pivotal role in promoting Otaku Connect. Her natural talent for marketing and community engagement significantly boosted awareness of the event. She consistently went above and beyond, making a noticeable impact on our reach and visibility.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Artisan Café',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    quote: 'Working with Chisanga was a pleasure. Her graphic design work for our brand refresh was exceptional, capturing exactly what we wanted to convey to our customers.'
  },
  {
    id: 3,
    name: 'Jessica Rivera',
    role: 'CEO',
    company: 'Rivera Boutique',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    quote: 'Chisanga has an incredible talent for creating content that resonates with our audience. Our product launch campaign exceeded all expectations thanks to her creativity.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-orange-500" size={16} />
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;