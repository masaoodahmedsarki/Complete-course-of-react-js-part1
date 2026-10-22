
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Contact Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Let's Build Something
            <span className="text-blue-600"> Great</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-5 leading-7">
            Have a project in mind? Tell us about your idea.
            We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Get in Touch
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-7 mb-8">
              Contact us to discuss your project, ask a question,
              or explore how we can help your business grow.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-500/20 text-blue-600 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    hello@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-500/20 text-blue-600 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-500/20 text-blue-600 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hyderabad, Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form design is ready! Connect a backend to send messages.');
            }}
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 md:p-8 rounded-2xl space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
