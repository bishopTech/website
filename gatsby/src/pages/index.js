import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {graphql, Link} from 'gatsby'

import '../styles/global.css'
import Layout from '../components/layout/Layout'
import Nav from '../components/layout/Nav'

import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVuejs} from '@fortawesome/free-brands-svg-icons'

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

  downIcon: file(relativePath: { eq: "images/icons/BT - GE - Arrow Down - LG.svg" }) {
    publicURL
  }
}
`

export default function index ({data: {post, image, bgImage, downIcon}}) {
  console.log(image)
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

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

            <div className='mt-28 flex justify-center'>
              <ScrollLink to='about' smooth duration={700}>
                <img src={downIcon.publicURL} alt='Down Arrow Icon' className='h-8 animate-bounce text-center' />
              </ScrollLink>
            </div>

          </div>
        </div>
      </BackgroundImage>

      {/* <!-- About Section --> */}
      <div className='md:flex mx-auto' id='about'>
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

      {/* <FontAwesomeIcon icon={faVuejs} size={'6x'} color={'#fff'} /> */}
      <FontAwesomeIcon icon={faVuejs} size={'6x'} className='text-gray-900 hover:text-green-500' onClick={scrollToTop} />
      <div className='p-10 bg-blue-900 rounded bottom-0 left-0 rotate-180'>
        <img src={downIcon.publicURL} alt='Down Arrow Icon' className='h-8 animate-bounce text-center rotate-180 ' onClick={scrollToTop} />
      </div>
    </Layout>
  )
}
