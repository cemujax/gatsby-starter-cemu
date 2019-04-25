import React from 'react'
import { Link } from 'gatsby'

import PostHeader from '../PostHeader'
import './PostList.scss'

const PostItem = ({ id, path, title, body, date, category }) => {
  return (
    <div className="post-item" key={id}>
      <Link className="post-item-link" to={path} aria-label={title}>
        <PostHeader title={title} date={date} category={category} />
        <p className="body">{body}</p>
      </Link>
    </div>
  )
}

const PostList = ({ posts }) => {
  const postList = posts.map(post => {
    const {
      id,
      excerpt: body,
      fields: { slug },
    } = post.node
    const { title, date, category, tags } = post.node.frontmatter
    return (
      <PostItem
        id={id}
        key={id}
        path={slug}
        title={title}
        body={body}
        date={date}
        category={category}
        tags={tags}
      />
    )
  })
  return <div className="post-list">{postList}</div>
}

export default PostList
