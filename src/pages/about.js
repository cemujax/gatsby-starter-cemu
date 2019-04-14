import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="About" keywords={['about', 'github']} />
    <h1>About </h1>
    <p>About Page</p>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
