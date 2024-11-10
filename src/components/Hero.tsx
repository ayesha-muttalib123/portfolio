"use client"; // This makes the component a Client Component

import React from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Services from '@/components/Services';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';


function Hero() {
  const router = useRouter();

  const handlePush = () => {
 
    router.push('/contact');
  };

  return (
    <div className='flex flex-col h-screen sm:m-2'>
      <div className='w-full p-7 flex justify-between items-center'>
        <div className='flex flex-col items-center'>
        <div className="relative h-10 w-10">
  <Image
    src="/image1.jpg"
    alt="Description of the image"
    layout="fill"
    className="object-cover"
  />
</div>

          <p>Ayesha Muttalib</p>
        </div>
        <Navbar />
      </div>

      <div className='flex mb-6 items-center justify-center  '>
      <motion.img
        className='mt-20 w-1/2 h-max max-w-xs rounded-xl transition-transform duration-300 hover:scale-y-125'
        src="image1.jpg"
        alt="Hero Image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 2 }}
      />
         <motion.h1
      className="mt-10 ml-10 text-2xl font-bold text-gray-300 max-w-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 2}} 
    >
  Hi, I am Ayesha Muttalib – A Full Stack Developer.
  I specialize in creating dynamic and scalable web applications using Node.js, Express, React, and MongoDB. I am passionate about delivering seamless and efficient digital experiences.
  Lets connect and explore how we can collaborate to bring innovative ideas to life!
    </motion.h1>
    <motion.button
    
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 2}} 

onClick={handlePush} // Use push method on button click
        className='bg-red-800 mt-10 p-5 m-5 rounded-lg text-white flex justify-center items-center'
      >
        Contact Me<span><GoArrowUpRight size={20}/></span>
      </motion.button>

      </div>

      <Services/>
      
    </div>
  );
}

export default Hero;
