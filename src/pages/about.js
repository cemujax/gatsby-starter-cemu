import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import SEO from '../components/seo'
import Bio from '../components/bio'

const AboutPage = ({ data }) => {
  const { node: about } = data.allMarkdownRemark.edges[0]
  return (
    <Layout>
      <SEO title="About Page" pathSlug="/about" />
      <Bio />
      <div dangerouslySetInnerHTML={{ __html: about.html }} />
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD HH:MM")
          }
        }
      }
    }
  }
`
export default AboutPage
