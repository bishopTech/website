import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {graphql, Link} from 'gatsby'

import '../styles/global.css'
import Layout from '../components/layout/Layout'
import Nav from '../components/layout/Nav'

export const query = graphql`
query {
  image: file(relativePath: { eq: "images/bishopTechLogoIcon.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  bgImage: file(relativePath: { eq: "images/bishopTechbg1080.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default function index ({data: {post, image, bgImage}}) {
  console.log(image)
  return (
    <Layout transparent nav={false}>
      <BackgroundImage Tag='div' className='min-h-screen absolute text-white' fluid={bgImage.childImageSharp.fluid}>
        <Nav transparent />

        <div className='flex flex-col items-center justify-center md:space-x-6'>
          <Img fluid={image.childImageSharp.fluid} alt='Pixelated logo - Bishop tech Logo' className='w-1/2 md:w-1/4' />
          <div className='mt-6 text-center'>
            <h1 className='text-4xl font-bold'>👋 Welcome to Bishop Tech!</h1>
            <h2 className='text-2xl font-light'>Created by Chris Bishop</h2>
            <p className='mt-4 text-lg'>This site has a mission to help make learning tech accessible for everyone!</p>
            <div className='mt-8 space-x-3'>
              <Link to='/about' className='px-8 py-3 font-semibold duration-300 border-2 border-white bg-darkest-blue text-off-white rounded-xl hover:bg-white hover:text-darkest-blue'>Learn More</Link>
              <Link to='/blog' className='px-8 py-3 font-semibold duration-300 border-2 border-white hover:border-off-white bg-darkest-blue text-off-white rounded-xl hover:bg-white hover:text-darkest-blue'>Read Articles</Link>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
