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

      {/* <!-- Hero Section --> */}
      <BackgroundImage Tag='div' className='min-h-screen absolute text-white' fluid={bgImage.childImageSharp.fluid}>
        <Nav transparent />

        <div className='flex flex-col items-center justify-center md:space-x-6 mt-16 pb-32'>
          <Img fluid={image.childImageSharp.fluid} alt='Pixelated logo - Bishop tech Logo' className='w-1/2 md:w-1/4' />
          <div className='mt-8 text-center'>
            <h1 className='text-4xl  uppercase'>Join me &amp; learn to code
              <br className='hidden sm:block' /> for <strong>FREE!</strong></h1>
            {/* <h2 className='text-4xl font-light mt-6'>Follow me in my career as I pass on the lessons I learn to you</h2> */}
            <div className='mt-16 space-x-3 hidden md:block'>
              <Link to='/about' className='px-8 py-3 font-semibold duration-300 border-2 border-white bg-darkest-blue text-off-white rounded-xl hover:bg-white hover:text-darkest-blue'>Learn More</Link>
              <Link to='/blog' className='px-8 py-3 font-semibold duration-300 border-2 border-white hover:border-off-white bg-darkest-blue text-off-white rounded-xl hover:bg-white hover:text-darkest-blue'>Read Articles</Link>
            </div>
          </div>
        </div>
      </BackgroundImage>

      {/* <!-- About Section --> */}
      <div className='md:flex mx-auto'>
        <div className='py-8 w-full md:w-2/3 bg-blue-900'>
          <Img fluid={image.childImageSharp.fluid} />
        </div>
        <div className='py-32 md:flex-grow container mx-auto flex flex-col text-center border border-black' >
          <h1 className='text-4xl font-bold'>👋 Welcome to Bishop Tech!</h1>
          <h2 className='text-3xl font-light'>Created by Chris Bishop</h2>
          <div className='mt-14 container text-lg px-10'>
            <p>
              The access to education content catered around beginners and those trying to enter the world of computer science and cyber security is hard to find.
              Even more the access to affordable or free content to take you from knowing nothing to job ready is even more scarce.
            </p>
            <p className='mt-6'>
              So I created this site not only as a personal blog but as a platform for me to help make learning to code more accessible to all!
              In the early part of my career I have already learned so much about coding and business.
              So I wanted to create a site to track my personal journey and pass on any lessons I learn to you.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- What you'll learn Section --> */}

      <div className='py-32 bg-blue-900'>
        <h1 className='text-4xl text-center text-white'>What you'll learn</h1>
      </div>

      {/* <!-- Featured Posts Section --> */}

      <div className='py-32 bg-green-900'>
        <h1 className='text-4xl text-center text-white'>Featured Posts</h1>
      </div>

      {/* <!-- Contact Section --> */}
      <div className='py-32 bg-red-900'>
        <h1 className='text-4xl text-center text-white'>Get in touch!</h1>
      </div>

    </Layout>
  )
}
