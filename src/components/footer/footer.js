import React from 'react'

import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <hr />
    <div className="rss-feed">
      <a href="/rss.xml">RSS Feed</a>
    </div>
    ©<a href="https://github.com/cemujax">cemujax</a>, Built with
    {` `}
    <a href="https://www.gatsbyjs.org/">Gatsby</a>
  </footer>
)

export default Footer
