import React from 'react'
import { Link } from 'gatsby'

import './PostList.scss'

const PostItem = ({ id, path, title, body, date, category }) => {
  return (
    <div className="post-item" key={id}>
      <Link to={path}>
        <h2>{title}</h2>
        <p className="date">{date}</p>
        <p>{body}</p>
        <p>
          <span className="category">{category}</span>
        </p>
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
