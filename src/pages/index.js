import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout } from '../layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>Welcome to My site.</p>

      {posts.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.path}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
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
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`

export default IndexPage
