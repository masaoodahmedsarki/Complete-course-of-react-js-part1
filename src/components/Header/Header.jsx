
import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 transition-colors duration-300 sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <h1 className="font-bold text-3xl">
          Logo
        </h1>

        <nav>
          <ul className="hidden md:flex items-center gap-7 text-lg font-semibold">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? (
            <Moon size={22} />
          ) : (
            <Sun size={22} />
          )}
        </button>

      </div>
    </header>
  );
};

export default Header;
