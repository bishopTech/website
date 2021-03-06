import {Link} from 'gatsby'
import React from 'react'
import {getBlogUrl} from '../../lib/helpers'
import Img from 'gatsby-image'
import Category from './Category'

export default function BlogCard ({post}) {
  const {excerpt, categories, title, mainImage, publishedAt, slug, series} = post
  // console.log('excerpt ', excerpt)
  console.log('props: ', series)
  let seriesTitle

  if (series[0]) {
    seriesTitle = (
      <>
        <div className='ml-3'>
          <p className='space-x-1 text-sm font-medium text-gray-900'>
            <a href='#' className='hover:underline'>
              Chris Bishop
            </a>
            <span aria-hidden='true'>
              &middot;
            </span>
            <time dateTime='2020-03-16'>
              Jan 12, 2021
            </time>
          </p>
          <div className='flex text-sm text-gray-500'>
            <span>
              {series[0].title}
            </span>
          </div>
        </div>
      </>
    )
  } else {
    seriesTitle = (
      <>
        <div className='ml-3'>
          <p className='space-x-1 text-sm font-medium text-gray-900'>
            <a href='#' className='hover:underline'>
              Chris Bishop
            </a>
          </p>
          <div className='flex text-sm text-gray-500'>
            <time dateTime='2020-03-16'>
              Jan 12, 2021
            </time>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='flex flex-col overflow-hidden transition duration-300 transform rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl'>
        <Link to={getBlogUrl(publishedAt, slug)} >
          <div className='flex-shrink-0'>
            <Img fluid={mainImage.asset.fluid} className='object-cover w-full h-48' alt={mainImage.alt} />
          </div>
        </Link>
        <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
          <div className='flex-1'>
            <p className='text-sm font-medium lg:text-xs'>
              <div className='flex space-x-2'>
                {categories.map(category => <Category category={category} />) }
              </div>
            </p>
            <Link to={getBlogUrl(publishedAt, slug)} className='block mt-2'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {title}
              </h3>
              <p className='mt-3 text-base text-gray-500'>
                {excerpt || 'Excerpt here!'}
              </p>
            </Link>
          </div>
          <div className='flex items-center mt-6'>
            <div className='flex-shrink-0'>
              <a href='#'>
                <span className='sr-only'>Chris Bishop</span>
                <img className='w-10 h-10 rounded-full' src='https://www.chrisbishop.ca/images/bishop/small-personal.JPG' alt='' />
              </a>
            </div>
            {seriesTitle}
          </div>
        </div>
      </div>
    </>
  )
}
