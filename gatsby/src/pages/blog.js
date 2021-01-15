import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/sanity/graphql-error-list'
import SEO from '../components/sanity/seo'
import Layout from '../components/layout/Layout'
import BlogCard from '../components/blog/BlogCard'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
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

          slug {
            current
          }
          categories {
            title
            id
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  // console.log(postNodes)
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className='relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Welcome to the Bishop Tech Blog
            </h2>
            <p className='max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className='grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
            {postNodes.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage
