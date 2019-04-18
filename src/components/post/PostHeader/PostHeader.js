import React from 'react'

import './PostHeader.scss'

const PostHeader = ({ title, date, category }) => {
  return (
    <div className="post-header">
      <p className="title">{title}</p>
      <div className="post-header-sub">
        <p className="date">{date}</p>
        {!!category && (
          <p>
            <span className="category">{category}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default PostHeader
