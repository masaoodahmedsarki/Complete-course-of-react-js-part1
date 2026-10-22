
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
   
<section className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white min-h-[85vh] flex items-center transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Welcome to Our Website
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight dark:text-white">
            Build Your
            <span className="text-blue-600"> Digital Future</span>
            With Us
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8 max-w-lg dark:text-white">
            We create modern, responsive, and user-friendly websites
            to help your business grow in the digital world.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
              <ArrowRight size={20} />
            </button>

            <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 dark:text-white">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">100+</h3>
              <p className="text-gray-500 mt-1 dark:text-white">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">50+</h3>
              <p className="text-gray-500 mt-1 dark:text-white">Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">5+</h3>
              <p className="text-gray-500 mt-1 dark:text-white">Years</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
            alt="Modern workspace"
            className="w-full h-[350px] md:h-[500px] object-cover rounded-2xl shadow-xl"
          />

          <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">
              Creative Solutions
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Ideas into reality
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
