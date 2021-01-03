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

  image: file(relativePath: { eq: "images/bishopTechbg3.png" }) {
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
    <div>
      <div className='min-h-full hero'>
        <Nav />
        <button>test</button>
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
