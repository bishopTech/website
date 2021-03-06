import React from 'react'
import Layout from '../components/layout/Layout'
import {graphql} from 'gatsby'
import SEO from '../components/layout/SEO'

export const query = graphql`
  query {
    image: file(relativePath: { eq: "images/personal.JPG" }) {
      publicURL
    }
  }
`

export default function about ({data: {image}}) {
  return (
    <Layout>
      <SEO title='About' />
      <div className='overflow-hidden bg-white'>
        <div className='relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='absolute top-0 bottom-0 hidden w-screen bg-white lg:block left-3/4' />
          <div className='mx-auto text-base max-w-prose lg:max-w-none'>
            <h2 className='text-base font-semibold tracking-wide text-blue-600 uppercase'>About</h2>
            <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>Bishop Tech</h3>
          </div>
          <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <svg className='absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block' width='404' height='384' fill='none' viewBox='0 0 404 384' aria-hidden='true'>
                <defs>
                  <pattern id='de316486-4a29-4312-bdfc-fbce2132a2c1' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
                    <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width='404' height='384' fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
              </svg>
              <div className='relative mx-auto text-base max-w-prose lg:max-w-none'>
                <figure>
                  <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                    <img className='object-cover object-center rounded-lg shadow-lg' src={image.publicURL} alt='Chris looking up into the distance' width='1184' height='1376' />
                  </div>
                  <figcaption className='flex mt-3 text-sm text-gray-500'>
                    {/* herocon name camera */}
                    <svg className='flex-none w-5 h-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                      <path fillRule='evenodd' d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd' />
                    </svg>
                    <span className='ml-2'>Photograph by <a href='https://www.urroz.ca/' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Cristian Urroz</a></span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <div className='mx-auto text-base max-w-prose lg:max-w-none'>
                <p className='text-xl text-gray-500'>
                  👋 Hello and Welcome to Bishop Tech! <br />
                  My name is Chris Bishop, I'm a developer from Toronto, Canada with a passion for Cyber Security.
                </p>
              </div>
              <div className='mx-auto mt-5 text-lg prose text-gray-500 prose-blue lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <p>
                  One thing I noticed as I started learning to code is the access to educational content catered around beginners and those trying to enter the world of computer science and cyber security is hard to find.
                </p>
                <p>
                  Even more the access to affordable or free content to take you from knowing nothing to job ready is even more scarce.
                </p>
                <p>
                  So as a recent grad from Ryerson Univeristy with my Computer Science undergrad in hand I decided I wanted to make it my mission to create a site to solve this problem! That is why I created Bishop Tech. I wanted to create a personal blog to track my journey in start of my career and along the way use this platform to give back and teach anyone interested the skills I've gained or lessons I've learned. It again with the goal in mind of making learning to code and getting into the industry more accessible for anyone with an interest!
                </p>
                <p>
                  Again with the goal in mind of making learning to code and getting into the industry more accessible for anyone with an interest!
                </p>
                <p>
                  In the early part of my career I have been afforded many opportunities and already learned so much about coding and business.
                  So I can't wait to share with you all that I have learned and am excited to grow together with you as we aim to acheive our dreams in this digital world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
