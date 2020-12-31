import {Link} from 'gatsby'
import React from 'react'

export default function Nav () {
  return (
    <nav className='bg-blue-900 p-10 flex justify-between text-white'>
      <Link
        to='/'
        className='text-blue-50 animate-bounce'
      >
        Home
      </Link>
      <Link
        to='/about'
        className='hover:text-gray-200 hover:scale-105 transform transition duration-75'>
        About
      </Link>
      <Link
        to='/blog'
        className='hover:bg-red-600 hover:scale-105 transform transition duration-75'
      >
        Blog
      </Link>
      <Link
        to='/resume'
        className='hover:rotate-6 hover:scale-105 transform transition duration-75'
      >
        Resume
      </Link>
      <Link
        to='/hire'
        className='hover:rotate-6 hover:scale-105 transform transition duration-75'
      >
        Hire Me
      </Link>
    </nav>
  )
}
