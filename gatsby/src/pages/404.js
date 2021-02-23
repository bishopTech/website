import React from 'react'
import Layout from '../components/layout/Layout'

import SEO from '../components/layout/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>Uh oh! It doesn't look like this page exists 😱</p>
  </Layout>
)

export default NotFoundPage
