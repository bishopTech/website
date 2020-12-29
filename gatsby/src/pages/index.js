import React from 'react'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

import '../styles/global.css'

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

  image: file(relativePath: { eq: "images/bishopBG.png" }) {
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
      <p>Testing Home Page</p>
      <div className='div'>
        <Img fluid={post.mainImage.asset.fluid} alt='testing out post image' />
        <Img fluid={image.childImageSharp.fluid} alt='Bishop Tech BG' outerWrapperClassName='gatsby-image-wrapper' />
      </div>
    </div>
  )
}
