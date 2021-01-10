import {Link, StaticQuery, graphql} from 'gatsby'
import React from 'react'
// import Img from 'gatsby-image'


// Create a static query for image 
// export default function NavImage(props) {
//   return (
//     <StaticQuery
//   )
// }

export default function Nav ({transparent}, data) {
  if (transparent) {
    console.log(transparent)
  } else {
    console.log('Not transparent!!!')
  }

  console.log('Data:', data)

  return (
    <nav className={`flex justify-between p-10 text-white ${transparent ? 'bg-transparent' : 'bg-darkest-blue border-b-2 border-dark-blue'} `}>
      <Link
        to='/'
        className='text-blue-50'
      >
        {/* <Img fluid='' /> */}
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
    </nav>)
}
