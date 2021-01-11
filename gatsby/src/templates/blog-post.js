import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/sanity/graphql-error-list'
import SEO from '../components/sanity/seo'
import {toPlainText} from '../lib/helpers'
import Layout from '../components/layout/Layout'
import PortableText from '../components/sanity/portableText'

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
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
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
          name
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      <h1>{post.title}</h1>
      <div className='prose lg:prose-xl mx-atuo'>
        <PortableText blocks={post._rawBody} />
      </div>

    </Layout>
  )
}

export default BlogPostTemplate
