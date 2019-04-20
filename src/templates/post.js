import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import PostHeader from '../components/post/PostHeader'
import TagList from '../components/tag/TagList'
import PostNavigator from '../components/post-navigator'
import Bio from '../components/bio'
import { DiscussionEmbed } from 'disqus-react'

import 'prismjs/themes/prism-okaidia.css'

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const html = post.html
  const { title, date, tags } = post.frontmatter

  const { disqusShortname } = data.site.siteMetadata.comments
  const disqusConfig = {
    url: data.site.siteMetadata.siteUrl + pageContext.pathSlug,
    identifier: post.id,
    title,
  }

  return (
    <Layout>
      <PostHeader title={title} date={date} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <TagList tags={tags || []} />
      <PostNavigator pageContext={pageContext} />
      <Bio />
      {!!disqusShortname && (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        comments {
          disqusShortname
        }
      }
    }
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
