import React from 'react'
import { Link } from 'gatsby'

import './navigation.scss'

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
