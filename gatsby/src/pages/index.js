import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {graphql, Link} from 'gatsby'

import '../styles/global.css'
import Layout from '../components/layout/Layout'
import Nav from '../components/layout/Nav'

import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll'

import WhereToStart from '../components/home/WhereToStart'
import About from '../components/home/About'
import WhatYoullLearn from '../components/home/WhatYoullLearn'
import Hero from '../components/home/Hero'
import Contact from '../components/home/Contact'

export default function index (props) {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Layout transparent nav={false}>

      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- About Section --> */}
      <About />

      {/* <!-- What you'll learn Section --> */}
      <WhatYoullLearn />

      {/* <!-- Featured Posts Section --> */}
      <WhereToStart />

      {/* <!-- Contact Section --> */}
      <Contact />
      {/* <FontAwesomeIcon icon={faVuejs} size={'6x'} className='text-gray-900 hover:text-green-500' onClick={scrollToTop} /> */}

    </Layout>
  )
}
