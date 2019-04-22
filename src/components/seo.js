import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../../static/favicon.ico'

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  pathSlug,
  datePublished,
  isPost,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            title
            description
            author
            siteUrl
            pathPrefix
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const seo = {
    title: title || site.siteMetadata.title,
    url: pathSlug
      ? site.siteMetadata.siteUrl + pathSlug
      : site.siteMetadata.siteUrl,
    author: site.siteMetadata.author,
  }

  const baseSchemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': seo.url,
      url: seo.url,
      name: seo.title,
      alternateName: seo.title || '',
    },
  ]
  const schemaOrgJSONLD = isPost
    ? [
        ...baseSchemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          '@id': seo.url,
          url: seo.url,
          name: title,
          alternateName: seo.title || '',
          headline: title,
          description: metaDescription,

          author: {
            '@type': 'Person',
            name: seo.author,
          },
          publisher: {
            '@type': 'Organization',
            name: seo.author,
          },
          isPartOf: seo.url,
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': seo.url,
          },
          datePublished: datePublished,
        },
      ]
    : baseSchemaOrgJSONLD
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },

          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            property: 'og:type',
            content: isPost ? 'posts' : 'website',
          },
          {
            property: 'og:url',
            content: seo.url,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:creator',
            content: site.siteMetadata.author,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: 'keywords',
                  content: keywords.join(', '),
                }
              : []
          )
          .concat(meta)}
        link={[
          { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
          { rel: 'icon', type: 'image/x-icon', href: `${favicon}` },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        ,
      </Helmet>
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
  isPost: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  isPost: PropTypes.bool,
}

export default SEO
