
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Modern Website',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
    number: '01',
  },
  {
    title: 'Creative Dashboard',
    category: 'UI/UX Design',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    number: '02',
  },
  {
    title: 'E-commerce Store',
    category: 'Web Application',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    number: '03',
  },
];

const OurWork = () => {
  return (
    <section
      id="our-work"
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-12">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              Our Portfolio
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Projects We've
              <span className="text-blue-600"> Created</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
              Explore some of our creative projects and digital solutions
              designed to help businesses grow.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
          >
            Start a Project
            <ArrowUpRight size={20} />
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <span className="absolute top-4 left-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.number}
                </span>
              </div>

              <div className="p-6 flex justify-between items-center gap-4">
                <div>
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <a
                  href="#contact"
                  aria-label={`Discuss ${project.title}`}
                  className="shrink-0 w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurWork;
