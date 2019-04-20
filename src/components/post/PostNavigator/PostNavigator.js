import React from 'react'
import { Link } from 'gatsby'

import './PostNavigator.scss'

const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <div className="post-navigator">
      <ul>
        <li>
          {previous && (
            <Link to={previous.fields.slug}>
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug}> {next.frontmatter.title} →</Link>
          )}
        </li>
      </ul>
    </div>
  )
}

export default PostNavigator
