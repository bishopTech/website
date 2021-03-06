import React from 'react'

import '../styles/global.css'
import Layout from '../components/layout/Layout'

import WhereToStart from '../components/home/WhereToStart'
import About from '../components/home/About'
import WhatYoullLearn from '../components/home/WhatYoullLearn'
import Hero from '../components/home/Hero'
import Contact from '../components/home/Contact'
import SEO from '../components/layout/SEO'

export default function index (props) {
  return (
    <Layout transparent nav={false}>
      <SEO title='Home Page' />
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
