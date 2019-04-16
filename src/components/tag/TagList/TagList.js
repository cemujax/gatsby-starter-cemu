import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './TagList.scss'

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags &&
        tags.map(tag => {
          const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1)
          return (
            <Link key={tag} to={`/tags/${tag}`}>
              <span>{upperTag}</span>
            </Link>
          )
        })}
    </div>
  )
}

TagList.propTypes = {
  tags: PropTypes.array,
}

export default TagList
