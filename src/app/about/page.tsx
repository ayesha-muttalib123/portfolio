import React from 'react';
import Image from 'next/image';
import Reviews from '@/components/reviews';

function About() {
  return (
    <div className='h-lvh w-full relative'>
      <Image
        src='/About.jpg'
        alt='About Me'
        layout='responsive'
        width={1200}
        height={800}
        className='object-cover duration-700  transform scale-100 hover:scale-105 opacity-90'
      />
      <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black via-transparent to-black'>
        <div className='max-w-3xl text-center text-white p-8'>
          <h1 className='text-5xl font-bold mb-6 tracking-wide font-serif'>About Me</h1>
          <p className='text-lg mb-6 leading-relaxed'>
            Hi! I’m Ayesha Muttalib, a passionate web developer with a keen interest in creating dynamic and responsive web applications. 
            With experience in both frontend and backend technologies, I enjoy bringing ideas to life through code.
          </p>
          <h2 className='text-3xl font-semibold mb-4 font-mono'>My Skills</h2>
       
          <ol className='grid grid-cols-2 gap-4 font-semibold p-3  border-t border-b rounded-t-xl  rounded-b-xl text-lg'>
            <li>Frontend Development: React.js, Next.js, Tailwind CSS</li>
            <li>Backend Development: Node.js, Express.js, MongoDB</li>
            <li>Full-Stack Development: MERN Stack</li>
            <li>Authentication & Security: JWT, Form Validation</li>
            <li>Version Control: Git, GitHub</li>
            <li>Responsive Design & Problem Solving</li>
            <li>Continuous Learning & Adaptability</li>
            <li>Soft Skills: Communication, Collaboration</li>
          </ol>
   
          <p className='mt-8 text-lg'>
            I believe in the power of technology to solve real-world problems, and I'm always eager to learn new tools 
            and techniques to enhance my skills. Let’s connect and create something amazing together!
          </p>
        </div>
      </div>

      <Reviews/>
    </div>
  );
}

export default About;
