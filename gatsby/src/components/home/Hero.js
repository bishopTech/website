import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Nav from '../layout/Nav'
import Img from 'gatsby-image'
import {Link as ScrollLink} from 'react-scroll'
import {graphql, useStaticQuery} from 'gatsby'

function Hero (props) {
  const {image, bgImage, downIcon} = useStaticQuery(graphql`
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

    }
  `)

  return (
    <>
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
    </>
  )
}

export default Hero
