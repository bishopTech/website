import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

function About (props) {
  const {personalImage} = useStaticQuery(graphql`
    query {
      personalImage: file(relativePath: { eq: "images/personal.JPG" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

  `)

  return (
    <>
      <div className='md:flex mx-auto' id='about'>
        <BackgroundImage Tag='div' fluid={personalImage.childImageSharp.fluid} className='hidden md:block w-full md:w-2/3' />

        <div className='py-32 md:flex-grow container mx-auto flex flex-col text-center' >
          <h1 className='text-4xl font-bold'>👋 Welcome to Bishop Tech!</h1>
          <h2 className='text-3xl font-light'>Created by Chris Bishop</h2>
          <Img fluid={personalImage.childImageSharp.fluid} className='md:hidden h-96 mx-8 mt-8 rounded-lg' />

          <div className='mt-10 md:mt-14 container text-lg px-10'>
            <p>
              Access to educational content catered towards beginners and those trying to enter the world of computer science and cyber security is hard to find. Even more so, accessing affordable or free content to take you from first laying your hand on a keyboard to becoming job ready is even more scarce. Seems to be a bit like finding a pot of gold at the end of the rainbow. Well, I hope that today you just found your pot of gold! 🌈💰
            </p>
            <p className='mt-6'>
              I created this site as a platform for me to help make learning to code more accessible to all! In the early part of my career I have already learned so much about coding, and some tricks of the trade for business as well. So I wanted to create a site to track my personal journey, and pass on any lessons I learn to you. So welcome!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
