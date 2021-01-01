import {Link} from 'gatsby'
import React from 'react'
import {getBlogUrl} from '../../lib/helpers'
import Img from 'gatsby-image'

export default function BlogCard ({post}) {
  return (
    <div className='w-full bg-white rounded-lg shadow-lg md:w-1/2'>
      <Img fluid={post.mainImage.asset.fluid} className='rounded-t-lg' alt={post.mainImage.alt} />
      <div className='p-6'>
        <h2 className='mb-2 text-2xl font-bold text-blue-900'>
          {post.title}
        </h2>
        <p className='text-gray-700'>{post.title}</p>
        <Link to={getBlogUrl(post.publishedAt, post.slug)} className='text-sm text-blue-600 underline hover:text-blue-400'>Read More</Link>
      </div>
    </div>
  )
}
