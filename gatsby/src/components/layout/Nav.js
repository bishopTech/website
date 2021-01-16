import {Link, useStaticQuery, graphql} from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

// Create a static query for image
export default function Nav ({transparent, nav}) {
  const image = useStaticQuery(graphql`
    query NavImage {
      file(relativePath: {eq: "images/bishopTechLogoIcon.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log('Data:', image.file)

  return (
    <nav className={`flex justify-between p-10 text-white
    ${transparent ? 'bg-transparent relative' : 'bg-darkest-blue border-b-2 border-dark-blue'}
    text-xl`}>
      <Link
        to='/'
        className='object-cover h-full'
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
        className='transition duration-75 transform hover:text-gray-200 hover:scale-105'
      >
        Blog
      </Link>
      <Link
        to='/resume'
        className='transition duration-75 transform hover:text-gray-200 hover:scale-105'
      >
        Resume
      </Link>
      <Link
        to='/hire'
        className='transition duration-75 transform hover:text-gray-200 hover:scale-105'
      >
        Hire Me
      </Link>
    </nav>)
}
