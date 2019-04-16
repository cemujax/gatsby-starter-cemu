import React from 'react'

import SEO from '../components/seo'
import Layout from '../layout'
import TagList from '../components/tag/TagList'

const TagsPage = ({ pageContext }) => {
  const { tags } = pageContext
  return (
    <Layout>
      <SEO title="tags" keywords={tags} />
      <h2>All Tags</h2>
      <TagList tags={tags} />
    </Layout>
  )
}

export default TagsPage
