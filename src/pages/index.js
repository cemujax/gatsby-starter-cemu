import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import { Layout } from '../layout'
import PostList from '../components/post/PostList'

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>Welcome to My site.</p>
      <PostList posts={edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`

export default IndexPage
