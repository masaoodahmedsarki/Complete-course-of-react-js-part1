
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Business Owner',
    image: 'https://i.pravatar.cc/150?img=12',
    review:
      'The team delivered an amazing website for our business. The design is modern, responsive, and easy to use.',
  },
  {
    name: 'Sarah Ali',
    role: 'Startup Founder',
    image: 'https://i.pravatar.cc/150?img=47',
    review:
      'Excellent communication and creative ideas. They understood our requirements and delivered a great digital experience.',
  },
  {
    name: 'Usman Malik',
    role: 'Marketing Manager',
    image: 'https://i.pravatar.cc/150?img=11',
    review:
      'Professional work, smooth collaboration, and attention to detail. I would recommend their services to other businesses.',
  },
];

const Testimonials = () => {
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            What People Say
            <span className="text-blue-600"> About Us</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-5 leading-7">
            Building strong relationships through quality work,
            creative solutions, and a great client experience.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <Quote
                size={36}
                className="text-blue-600 mb-6"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                "{item.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
