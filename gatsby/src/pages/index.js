import React from 'react'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

import '../styles/global.css'
import Layout from '../components/layout/Layout'
import Nav from '../components/layout/Nav'

export const query = graphql`
query {
  post: sanityPost(_id: {eq: "a72a6c41-4371-4cb9-94b6-10526c8c7cff"}) {
    mainImage {
      _key
      _type
      caption
      alt
      asset {
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
        }
      } 
    }
  }

  image: file(relativePath: { eq: "images/bishopTechLogoIcon.png" }) {
          childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
  }
}
`

export default function index ({data: {post, image}}) {
  console.log(image)
  return (
    <div className='text-white'>
      <div className='min-h-full hero'>
        <Nav />
        <div className='container items-center justify-center md:space-x-6'>
          <Img fluid={image.childImageSharp.fluid} alt='Pixelated logo - Bishop tech Logo' className='w-1/2 md:w-1/4' />
          <div>
            <h1 className='text-4xl font-bold'>Welcome to Bishop Tech!</h1>
            <h2 className='text-2xl font-semibold'>My name is Chris Bishop</h2>
            <p className=''>Making a tech more accessible for everyone!</p>
          </div>
        </div>
      </div>
      <div className='container py-5 mx-auto'>
        <p>test</p>
      </div>
      <p className='text-white bg-blue-500'>Testing Home Page</p>
      <div className='div'>
        <Img fluid={post.mainImage.asset.fluid} alt='testing out post image' />
        <Img fluid={image.childImageSharp.fluid} alt='Bishop Tech BG' outerWrapperClassName='gatsby-image-wrapper' />
      </div>
    </div>
  )
}
