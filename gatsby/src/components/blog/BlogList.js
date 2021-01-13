import React from 'react'
import BlogCard from './BlogCard'

export default function BlogList ({posts}) {
  console.log('BlogList', posts)
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      <li className='test' />
    </div>
  )
}
