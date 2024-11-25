import { div } from 'framer-motion/client';
import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa'; // Importing icons

function ContactMe() {
  return (
<div>
<div className="min-h-screen flex items-center justify-center bg-red-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Me</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          I would love to hear from you! You can reach out via any of the following:
        </p>
       
        <div className="flex justify-around mt-6">
        
          <a
            href="https://www.linkedin.com/in/ayesha-muttalib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-2xl"
          >
            <FaLinkedin />
          </a>
         
          <a
            href="mailto:ayeshamutallib007@gmail.com"
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            <FaEnvelope />
          </a>
          
          <a
            href="tel:+923019326154"
            className="text-green-500 hover:text-green-700 text-2xl"
          >
            <FaPhone />
          </a>
          
          <a
            href="https://github.com/ayesha-muttalib123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 text-2xl"
          >
            <FaGithub />
          </a>
        </div>

    
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
        
      </div>
      
    </div>
      <footer className="bg-gray-800 text-white py-8 sm:py-10 ">
      <div className="container mx-auto px-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
          <div className="text-xl font-bold">Ayesha Muttalib</div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-6 mt-4 sm:mt-0">
            <a href="https://github.com/ayesha-muttalib123" target="_blank" className="text-gray-300 hover:text-white transition-all">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ayesha-muttalib" target="_blank" className="text-gray-300 hover:text-white transition-all">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ayesha Muttalib. All Rights Reserved.</p>
          <p className="text-xs">Built with <span className="text-red-500">❤</span> using React, Next.js, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
</div>
    
  );
}

export default ContactMe;
