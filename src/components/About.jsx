
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
            alt="Our team working together"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
          />

          <div className="absolute bottom-5 left-5 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            We Build Digital
            <span className="text-blue-600"> Experiences</span>
            That Matter
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 leading-8">
            We help businesses grow through modern web development,
            creative design, and innovative digital solutions.
            Our goal is to turn your ideas into powerful digital experiences.
          </p>

          <div className="space-y-4 mt-7">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 shrink-0" size={22} />
              <p>Modern and responsive website design</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 shrink-0" size={22} />
              <p>High-quality development solutions</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 shrink-0" size={22} />
              <p>Reliable support and collaboration</p>
            </div>
          </div>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition duration-300">
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
