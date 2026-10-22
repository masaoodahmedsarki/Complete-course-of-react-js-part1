
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Logo<span className="text-blue-600">.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#our-work" className="hover:text-blue-600 transition">
            Our Work
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        <p className="text-sm text-center">
          © {new Date().getFullYear()} Logo. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
