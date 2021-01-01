import {Link} from 'gatsby'
import React from 'react'

export default function Nav () {
  return (
    <nav className='flex justify-between p-10 text-white bg-blue-900 '>
      <Link
        to='/'
        className='text-blue-50 animate-bounce'
      >
        Home
      </Link>
      <Link
        to='/about'
        className='transition duration-75 transform hover:text-gray-200 hover:scale-105'>
        About
      </Link>
      <Link
        to='/blog'
        className='transition duration-75 transform hover:bg-red-600 hover:scale-105'
      >
        Blog
      </Link>
      <Link
        to='/resume'
        className='transition duration-75 transform hover:rotate-6 hover:scale-105'
      >
        Resume
      </Link>
      <Link
        to='/hire'
        className='transition duration-75 transform hover:rotate-6 hover:scale-105'
      >
        Hire Me
      </Link>
    </nav>
  )
}
