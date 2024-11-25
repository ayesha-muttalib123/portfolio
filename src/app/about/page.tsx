import React from 'react';
import Image from 'next/image';
import Reviews from '@/components/reviews';

function About() {
  return (
    <div className="h-screen w-full relative mt-20 flex flex-col">
      {/* Background Image Section */}
      <div className="relative w-full h-[60vh] sm:h-[50vh]">
        <Image
          src="/About.jpg"
          alt="About Me"
          layout="fill"
          objectFit="cover"
          className="object-cover opacity-90 duration-700 transform scale-100 hover:scale-105"
        />
        <div className="absolute  inset-0 flex items-center justify-center bg-gradient-to-b from-black via-transparent to-black">
          <div className="max-w-3xl text-center text-white p-4 sm:p-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wide font-serif">About Me</h1>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              Hi! I am Ayesha Muttalib, a passionate web developer with a keen interest in creating dynamic and responsive web applications.
              With experience in both frontend and backend technologies, I enjoy bringing ideas to life through code.
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 font-mono">My Skills</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold p-3 border-t border-b rounded-t-xl rounded-b-xl text-sm sm:text-lg">
              <li className="skill-item animate__animated animate__fadeIn animate__delay-1s">Frontend Development: React.js, Next.js, Tailwind CSS</li>
              <li className="skill-item animate__animated animate__fadeIn animate__delay-2s">Backend Development: Node.js, Express.js, MongoDB</li>
              <li className="skill-item animate__animated animate__fadeIn animate__delay-3s">Full-Stack Development: MERN Stack</li>
              <li className="skill-item animate__animated animate__fadeIn animate__delay-4s">Authentication & Security: JWT, Form Validation</li>
              <li className="skill-item animate__animated animate__fadeIn animate__delay-5s">Version Control: Git, GitHub</li>
              <li className="skill-item animate__animated animate__fadeIn animate__delay-6s">Responsive Design & Problem Solving</li>
              <li className="skill-item animate__animated animate__fadeIn animate__delay-7s">Continuous Learning & Adaptability</li>
              <li className="skill-item animate__animated animate__fadeIn animate__delay-8s">Soft Skills: Communication, Collaboration</li>
            </ol>
          
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex-1 bg-gray-100 py-8 sm:py-10 mt-10">
        <Reviews />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 sm:py-10 mt-10">
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

export default About;
