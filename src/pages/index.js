import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../layout'
import PostList from '../components/post/PostList'

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `${siteMetadata.title}`,
          `${siteMetadata.author}`,
          `${siteMetadata.description}`,
        ]}
      />
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
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { ne: null } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            category
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
