import React from 'react'

import SEO from '../components/seo'
import Layout from '../layout'
import PostList from '../components/post/PostList'

const Tag = ({ pageContext }) => {
  const { tagName } = pageContext
  const posts = pageContext.posts.map(post => {
    const obj = {
      node: post,
    }
    return obj
  })
  return (
    <Layout>
      <SEO title={tagName} pathSlug={`/tags/${tagName}`} />
      <div>
        <div>
          <h1>
            {tagName}({posts.length})
          </h1>
        </div>
        <div>
          <PostList posts={posts} />
        </div>
      </div>
    </Layout>
  )
}

export default Tag
