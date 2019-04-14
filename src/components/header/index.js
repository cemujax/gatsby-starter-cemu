import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './index.scss'

export const Header = ({ siteTitle, github }) => (
  <header
    style={{
      position: 'relative',
      background: `linear-gradient(50deg,#291e95,#1D8CD1)`,
      width: '100%',
    }}
    className="header"
  >
    <nav>
      <ul>
        <li>
          <Link to="/">{siteTitle}</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <a href={github}>GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}
