import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <nav className=" ">
    
     
        <div className='p-5  w-1/2'>
          <ul className=" flex space-x-6">
          <li className="text-white hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link href="/contact">Contact</Link>
          </li>          </ul>
      
      </div>
    </nav>
  )
}

export default Navbar




