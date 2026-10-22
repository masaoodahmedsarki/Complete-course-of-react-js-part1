
import React from 'react';
import {
  Code2,
  Palette,
  Smartphone,
  Rocket,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'We build fast, modern, and responsive websites using the latest technologies.',
    number: '01',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'We create clean, attractive, and user-friendly designs for digital products.',
    number: '02',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'We ensure your website looks perfect on mobile, tablet, and desktop.',
    number: '03',
  },
  {
    icon: Rocket,
    title: 'Digital Solutions',
    description:
      'We help businesses grow with smart digital strategies and innovative solutions.',
    number: '04',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            What We Do
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Our Professional
            <span className="text-blue-600"> Services</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-5 leading-7">
            We deliver creative and reliable digital solutions to help
            your business stand out and grow online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-7 rounded-2xl hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>

                  <span className="text-gray-300 dark:text-gray-600 text-2xl font-bold">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7 text-sm">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  Learn More
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
