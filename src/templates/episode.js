import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import spotify from '../images/spotify.svg'
import itunes from '../images/itunes.svg'

const EpisodeTemplate = ({ data, pageContext, location }) => {
  const episode = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={siteTitle + ' - ' + episode.frontmatter.title}
        description={episode.frontmatter.description || episode.excerpt}
      />
      <article style={{ maxWidth: 600, padding: '0 16px' }}>
        <header>
          <h1>{episode.frontmatter.title}</h1>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <p style={{ margin: 0, marginRight: 8 }}>
              {episode.frontmatter.date}
            </p>
            {episode.frontmatter.spotifyId && (
              <a
                href={`https://open.spotify.com/episode/${episode.frontmatter.spotifyId}`}
                style={{
                  height: '25px',
                  width: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  marginRight: 8,
                }}
              >
                <img style={{ width: '100%' }} src={spotify}></img>
              </a>
            )}
            {episode.frontmatter.itunesId && (
              <a
                href={`https://podcasts.apple.com/se/podcast/asdf/id1506059489?i=${episode.frontmatter.itunesId}`}
                style={{
                  height: '25px',
                  width: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img style={{ width: '100%' }} src={itunes}></img>
              </a>
            )}
          </div>
        </header>
        <section>
          <iframe
            src={`https://pinecast.com/player/${episode.frontmatter.pinecastId}?theme=slim`}
            seamless
            height="20"
            style={{ border: 0 }}
            className="pinecast-embed"
            frameBorder="0"
            width="100%"
          ></iframe>
          <div dangerouslySetInnerHTML={{ __html: episode.html }} />
        </section>
      </article>

      {/* <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default EpisodeTemplate

export const pageQuery = graphql`
  query EpisodeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        pinecastId
        spotifyId
        itunesId
      }
    }
  }
`
