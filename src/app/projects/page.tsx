import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiHtml5, SiCss3, SiNextdotjs } from 'react-icons/si';
import Image from 'next/image';

interface PropType {
  title: string;
  desc: string;
  img: string;
  tags: { name: string; icon: JSX.Element }[];
}

const ListOfProject: PropType[] = [
  {
    title: "React Dashboard",
    desc: "A responsive admin dashboard built with React and TailwindCSS, offering real-time analytics and custom widgets.",
    img: "ReactDashboard.jpg",
    tags: [
      { name: "React", icon: <FaReact className="inline-block text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="inline-block text-yellow-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="inline-block text-teal-500" /> },
    ],
  },
  {
    title: "Real Estate App",
    desc: "A full-stack real estate web application allowing users to search for properties and contact agents. Built using the MERN stack.",
    img: "RealState.jpeg",
    tags: [
      { name: "Node.js", icon: <FaNodeJs className="inline-block text-green-500" /> },
      { name: "Express", icon: <FaNodeJs className="inline-block text-gray-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="inline-block text-green-600" /> },
      { name: "React", icon: <FaReact className="inline-block text-blue-500" /> },
    ],
  },
  {
    title: "Sign Up and Login System",
    desc: "A secure sign-up and login system with user authentication and form validation, built with Node.js and MongoDB.",
    img: "SignUpLogin.jpeg",
    tags: [
      { name: "Node.js", icon: <FaNodeJs className="inline-block text-green-500" /> },
      { name: "Express", icon: <FaNodeJs className="inline-block text-gray-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="inline-block text-green-600" /> },
      { name: "React", icon: <FaReact className="inline-block text-blue-500" /> },
    ],
  },
  {
    title: "React Chat Only Frontend Website",
    desc: "A web application for real-time chat functionalities, built with React and styled using TailwindCSS.",
    img: "Capture.png",
    tags: [
      { name: "React", icon: <FaReact className="inline-block text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="inline-block text-yellow-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="inline-block text-teal-500" /> },
    ],
  },
  {
    title: "Sahara Travel Services",
    desc: "Experience camel rides and explore the beauty of the Sahara Desert with our unique travel services.",
    img: "Websitehtmlcss.png",
    tags: [
      { name: "Next.js", icon: <SiNextdotjs className="inline-block text-black" /> },
      { name: "HTML", icon: <SiHtml5 className="inline-block text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="inline-block text-blue-400" /> },
    ],
  }
];

const Projects: React.FC = () => {
  return (
    <div className="p-6 h-vh">
      <h1 className="text-4xl font-bold text-center text-white font-serif mb-7">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4 mb-5">
        {ListOfProject.map((project, index) => (
          <a key={index} href="">
            <div className="bg-white m-4 shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  className="object-cover"
                  src={`/${project.img}`}
                  alt={project.title}
                  layout="fill"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-500">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                  {project.tags.map((tags) => (
                    <div key={tags.name} className="flex gap-2 items-center">
                      <span>{tags.icon}</span>
                      <span>{tags.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 sm:py-10">
        <div className="container mx-auto px-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
            <div className="text-xl font-bold">Ayesha Muttalib</div>
            <div className="flex justify-center sm:justify-end space-x-6 mt-4 sm:mt-0">
              <a
                href="https://github.com/ayesha-muttalib123"
                target="_blank"
                className="text-gray-300 hover:text-white transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayesha-muttalib"
                target="_blank"
                className="text-gray-300 hover:text-white transition-all"
              >
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
};

export default Projects;
