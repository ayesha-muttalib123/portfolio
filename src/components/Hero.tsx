"use client"; // This makes the component a Client Component

import React, { useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import Services from './Services';
import Link from 'next/link';


function Hero() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlePush = () => {
    router.push('/contact');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="w-full p-7 flex justify-between items-center">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/image1.jpg"
              alt="Profile Image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Ayesha Muttalib</p>
        </div>

        {/* Navbar for Large Screens */}
        <div className="hidden sm:flex">
          <Navbar />
        </div>

        {/* Sidebar Toggle Button (only on small screens) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-white p-2 bg-transparent rounded-md border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile Devices */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-gray-200 z-50 w-64 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={toggleSidebar}
            className="text-white mb-6"
            aria-label="Close Sidebar"
          >
            <AiOutlineClose size={30} />
          </button>
          <nav className="space-y-4">
          <Link href="/" onClick={toggleSidebar}>
              <div className="sidebar-item border-b border-gray-500 hover:bg-gray-700 transition-all duration-300 p-4 rounded-md">
                <span className="text-xl font-medium">Home</span>
              </div>
            </Link>
            {/* Sidebar Links */}
            <Link href="/about" onClick={toggleSidebar}>
              <div className="sidebar-item border-b border-gray-500 hover:bg-gray-700 transition-all duration-300 p-4 rounded-md">
                <span className="text-xl font-medium">About</span>
              </div>
            </Link>
            <Link href="/contact" onClick={toggleSidebar}>
              <div className="sidebar-item border-b border-gray-500 hover:bg-gray-700 transition-all duration-300 p-4 rounded-md">
                <span className="text-xl font-medium">Contact Me</span>
              </div>
            </Link>
            <Link href="/projects" onClick={toggleSidebar}>
              <div className="sidebar-item border-b border-gray-500 hover:bg-gray-700 transition-all duration-300 p-4 rounded-md">
                <span className="text-xl font-medium">Projects</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row flex-grow items-center justify-center px-4 sm:px-8 mt-12 sm:mt-0">
        {/* Hero Image */}
        <motion.img
          className="mt-10 sm:mt-0 sm:w-1/3 max-w-xs rounded-xl transition-transform duration-300 hover:scale-110"
          src="/image1.jpg"
          alt="Hero Image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Hero Text */}
        <div className="sm:ml-10 mt-10 sm:mt-0 text-center sm:text-left">
          <motion.h1
            className="text-xl sm:text-2xl font-bold text-gray-300 max-w-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Hi, I am Ayesha Muttalib, a Full Stack Developer.
            I specialize in creating dynamic and scalable web applications using Node.js, Express, React, and MongoDB. I am passionate about delivering seamless and efficient digital experiences.
            Let's connect and explore how we can collaborate to bring innovative ideas to life!
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            onClick={handlePush}
            className="bg-red-800 mt-5 p-3 rounded-lg text-white flex items-center gap-2"
            aria-label="Contact Me"
          >
            Contact Me <GoArrowUpRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-4 text-center mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ayesha Muttalib. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with <span className="text-red-600">❤</span> using Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default Hero;
