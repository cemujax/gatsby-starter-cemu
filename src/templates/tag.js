import React from 'react'

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
      <div>
        <div>
          Tag:{`${tagName}`} - {posts.length} posts
        </div>
        <div>
          <PostList posts={posts} />
        </div>
      </div>
    </Layout>
  )
}

export default Tag
