import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {graphql, Link} from 'gatsby'

import '../styles/global.css'
import Layout from '../components/layout/Layout'
import Nav from '../components/layout/Nav'

import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVuejs, faJsSquare, faNodeJs, faReact, faPython} from '@fortawesome/free-brands-svg-icons'
import {faGem, faTint} from '@fortawesome/free-solid-svg-icons'
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
      fixed(width: 1920) {
        ...GatsbyImageSharpFixed
      }

    }
  }

  downIcon: file(relativePath: { eq: "images/icons/BT - GE - Arrow Down - LG.svg" }) {
    publicURL
  }

  personalImage: file(relativePath: { eq: "images/personal.JPG" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      fluid {
        ...GatsbyImageSharpFluid
      }
    }

  }

}
`

export default function index ({data: {post, image, bgImage, downIcon, personalImage}}) {
  console.log(personalImage)
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Layout transparent nav={false}>

      {/* <!-- Hero Section --> */}
      <BackgroundImage Tag='div' className='min-h-screen absolute text-white' fluid={bgImage.childImageSharp.fixed}>
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
        <BackgroundImage Tag='div' fluid={personalImage.childImageSharp.fluid} className='hidden md:block w-full md:w-2/3' />

        <div className='py-32 md:flex-grow container mx-auto flex flex-col text-center' >
          <h1 className='text-4xl font-bold'>👋 Welcome to Bishop Tech!</h1>
          <h2 className='text-3xl font-light'>Created by Chris Bishop</h2>
          <Img fluid={personalImage.childImageSharp.fluid} className='md:hidden h-96 mx-8 mt-8 rounded-lg' />

          <div className='mt-10 md:mt-14 container text-lg px-10'>
            <p>
              Access to educational content catered towards beginners and those trying to enter the world of computer science and cyber security is hard to find. Even more so, accessing affordable or free content to take you from first laying your hand on a keyboard to becoming job ready is even more scarce. Seems to be a bit like finding a pot of gold at the end of the rainbow. Well, I hope that today you just found your pot of gold!
            </p>
            <p className='mt-6'>
              I created this site as a platform for me to help make learning to code more accessible to all! In the early part of my career I have already learned so much about coding, and some tricks of the trade for business as well. So I wanted to create a site to track my personal journey, and pass on any lessons I learn to you. So welcome!
            </p>
            {/* <p className='mt-6' > */}
            {/*  If this is your first time looking into the world of coding I suggest you start with (…) */}
            {/* </p> */}
          </div>
        </div>
      </div>

      {/* <!-- What you'll learn Section --> */}
      <div className='bg-darkest-blue'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-white'>
            What you can expect to learn:
          </h2>
          <div className='flow-root mt-8 lg:mt-10'>
            <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-yellow-300 flex justify-center'>
                  <FontAwesomeIcon icon={faJsSquare} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Javascript</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-blue-300 flex justify-center'>
                  <FontAwesomeIcon icon={faReact} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>React</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-green-400 flex justify-center'>
                  <FontAwesomeIcon icon={faVuejs} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Vue</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-red-500 flex justify-center'>
                  <FontAwesomeIcon icon={faGem} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Ruby</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-purple-300 flex justify-center'>
                  <FontAwesomeIcon icon={faTint} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Elixir</span>
                </p>
              </div>
            </div>
          </div>
        </div>
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
