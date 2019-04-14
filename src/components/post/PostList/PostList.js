import React from 'react'
import { Link } from 'gatsby'

import './PostList.scss'

const PostItem = ({ id, path, title, body, date, tags }) => {
  return (
    <div className="post-item">
      <Link to={path}>
        <h2>{title}</h2>
        <p className="date">{date}</p>
        <p>{body}</p>
      </Link>
      <div className="tags">{tags.join(', ')}</div>
    </div>
  )
}

const PostList = ({ posts }) => {
  const postList = posts.map(post => {
    const { id, excerpt: body } = post.node
    const { path, title, date, tags } = post.node.frontmatter
    return (
      <PostItem
        id={id}
        key={id}
        path={path}
        title={title}
        body={body}
        date={date}
        tags={tags}
      />
    )
  })
  return <div className="post-list">{postList}</div>
}

export default PostList
