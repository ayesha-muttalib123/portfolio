import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiHtml5, SiCss3, SiNextdotjs, SiExpress } from 'react-icons/si';

interface ServiceType {
  title: string;
  desc: string;
  icons: JSX.Element[];
}

const ListOfServices: ServiceType[] = [
  {
    title: "React Development",
    desc: "Building interactive and dynamic user interfaces with React for seamless, modern web experiences.",
    icons: [
      <FaReact className="text-blue-500" />,
      <SiJavascript className="text-yellow-500" />,
    ],
  },
  {
    title: "Node.js API Development",
    desc: "Developing fast and secure RESTful APIs using Node.js and Express to handle business logic and data flow.",
    icons: [
      <FaNodeJs className="text-green-500" />,
      <SiExpress className="text-gray-600" />,
    ],
  },
  {
    title: "Full-Stack (MERN) Development",
    desc: "Building complete web applications using the MERN stack (MongoDB, Express, React, Node.js) for powerful, scalable solutions.",
    icons: [
      <FaReact className="text-blue-500" />,
      <FaNodeJs className="text-green-500" />,
      <SiExpress className="text-gray-600" />,
      <SiMongodb className="text-green-600" />,
    ],
  },
  {
    title: "Next.js Development",
    desc: "Leveraging Next.js for server-side rendering, static site generation, and optimized performance for React applications.",
    icons: [
      <SiNextdotjs className="text-black" />,
      <SiJavascript className="text-yellow-500" />,
    ],
  },
  {
    title: "HTML & CSS Development",
    desc: "Creating semantic, accessible, and responsive web pages with HTML5 and CSS3, ensuring high-quality front-end design.",
    icons: [
      <SiHtml5 className="text-orange-500" />,
      <SiCss3 className="text-blue-400" />,
    ],
  },
  {
    title: "Responsive Design with Tailwind CSS",
    desc: "Implementing fully responsive, mobile-first designs with Tailwind CSS for a smooth and adaptive user interface.",
    icons: [
      <SiTailwindcss className="text-teal-500" />,
      <SiCss3 className="text-blue-400" />,
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="p-6 h-vh">
      <h1 className="text-4xl font-bold text-center text-white bg-gray-400 font-serif mb-7">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 m-4 mb-5">
        {ListOfServices.map((service, index) => (
          <div 
            key={index} // Prefer using a unique id, otherwise fall back to index
            className="bg-white text-2xl m-4 shadow-lg rounded-lg p-5 transition-transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.desc}</p>
            <div className="flex flex-wrap gap-2 text-lg text-gray-500">
              {service.icons.map((icon, idx) => (
                <span key={idx}>{icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Services;
