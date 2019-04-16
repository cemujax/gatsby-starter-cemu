import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import TagList from '../components/tag/TagList'

const Post = ({ data }) => {
  const post = data.markdownRemark
  const html = post.html
  const { title, date, tags } = post.frontmatter
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <TagList tags={tags || []} />
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(fields: { slug: { eq: $pathSlug } }) {
      id
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD HH:MM")
        category
        tags
      }
    }
  }
`

export default Post
