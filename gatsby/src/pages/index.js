import React from 'react'
import Img from 'gatsby-image'
import '../styles/global.css'
import {graphql} from 'gatsby'

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
}
`

export default function index ({data: {post}}) {
  console.log(post)
  return (
    <div>
      <p>Testing Home Page</p>
      <div className='div'>
        <Img fluid={post.mainImage.asset.fluid} />
      </div>
    </div>
  )
}
