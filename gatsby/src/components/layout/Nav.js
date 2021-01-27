import {Link, useStaticQuery, graphql} from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

// Create a static query for image
export default function Nav ({transparent, nav}) {
  const {desktop, mobile} = useStaticQuery(graphql`
    query navImage {
      desktop: file(relativePath: {eq: "images/bishopTechFullLogo.png"}) {
        childImageSharp {
          fluid( maxWidth: 1000, quality: 100 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mobile: file(relativePath: {eq: "images/bishopTechLogoIcon.png"}) {
        childImageSharp {
          fluid( maxWidth: 1000, quality: 100 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

  `)

  return (
    <nav className={`flex justify-center items-center sm:justify-between p-6 text-white
    ${transparent ? 'bg-transparent relative' : 'bg-darkest-blue border-b-2 border-dark-blue'}
    text-xl`}>
      <div className='md:ml-24 ml-4'>
        <Link
          to='/'
          className='object-cover h-full hidden sm:inline'
        >
          <Img fluid={desktop.childImageSharp.fluid} className='hidden md:block md:py-8 md:px-28' imgStyle={{objectFit: 'contain'}} />
          <Img fluid={mobile.childImageSharp.fluid} className='md:hidden py-8 px-8' imgStyle={{objectFit: 'contain'}} />
        </Link>
      </div>
      <div className='space-x-12 md:mr-24 mr-4 sm:text-2xl text-xl'>
        <Link
          to='/'
          className=''>
          Home
        </Link>
        <Link
          to='/about'
          className=''>
          About
        </Link>
        <Link
          to='/blog'
          className=''
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}
