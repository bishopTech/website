import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/sanity/graphql-error-list'
import SEO from '../components/sanity/seo'
import {toPlainText} from '../lib/helpers'
import PortableText from '../components/sanity/portableText'
import Img from 'gatsby-image'
import Layout from '../components/layout/Layout'
import BackgroundImage from 'gatsby-background-image'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
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
      title
      categories {
        title
        id
      }
      slug {
        current
      }
#      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage.asset.fluid} />}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      <div className='relative py-16 overflow-hidden bg-white'>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div className='relative h-full mx-auto text-lg max-w-prose' aria-hidden='true'>
            <svg className='absolute transform translate-x-32 top-12 left-full' width='404' height='384' fill='none' viewBox='0 0 404 384'>
              <defs>
                <pattern id='74b3fd99-0a6f-4271-bef2-e80eeafdf357' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
            </svg>
            <svg className='absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full' width='404' height='384' fill='none' viewBox='0 0 404 384'>
              <defs>
                <pattern id='f210dbf6-a58d-4871-961e-36d5016a0f49' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
                  <rect x='0' y='0' width='4' height='4' className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
            </svg>

          </div>
        </div>

        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto text-lg max-w-prose'>
            <h1>
              <span className='block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase'>Tag</span>
              <span className='block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl'>{post.title}</span>
            </h1>
            <div className='flex justify-center'>
              <Img fluid={post.mainImage.asset.fluid} alt={post.mainImage.alt} className='w-full mt-6 rounded-lg md:h-80' />
            </div>
          </div>

          <div className='mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo' >
            <PortableText blocks={post._rawBody} />
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default BlogPostTemplate

// Backgroung Image:
// <BackgroundImage Tag='div' className='md:py-32' fluid={image.childImageSharp.fluid} backgroundColor={`#040e18`} > <h2> test </h2> </BackgroundImage>
