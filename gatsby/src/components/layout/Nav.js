import {Link} from 'gatsby'
import React from 'react'

export default function Nav ({transparent}) {
  if (transparent) {
    console.log(transparent)
  } else {
    console.log('Not transparent!!!')
  }

  return (
    <nav className='flex justify-between p-10 text-white bg-transparent '>
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
        className='px-8 text-gray-900 transition duration-75 transform bg-white rounded-full hover:rotate-6 hover:scale-105'
      >
        Hire Me
      </Link>
    </nav>
  )
}
