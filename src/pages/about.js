import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import SEO from '../components/seo'

const AboutPage = ({ data }) => {
  const { siteMetadata } = data.site

  return (
    <Layout>
      <SEO title="About" keywords={['about', 'github']} />
      <h1>About </h1>
      <p>About {siteMetadata.title}</p>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default AboutPage
