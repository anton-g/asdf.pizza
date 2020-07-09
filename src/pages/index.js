import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

import pizzadean from '../images/pizzadean.gif'
import itunes from '../images/itunes.svg'
import spotify from '../images/spotify.svg'

const IndexPage = ({ data, location }) => {
  const episodes = data.allMarkdownRemark.edges

  const eps = episodes.filter(
    (e) => new Date(e.node.frontmatter.date) < new Date()
  )

  return (
    <Layout>
      <SEO title="asdf podcast 👋" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <p
          style={{
            maxWidth: 340,
            marginTop: 0,
            padding: '0 8px',
            fontSize: 14,
          }}
        >
          Som en liten parentes i cyberrymden spenderar Therése & Anton en
          halvtimme då och då med att prata ofiltrerat om kod, livet och allt
          däremellan.
        </p>
        <div style={{ minWidth: 200, padding: '0 16px', marginBottom: 16 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://podcasts.apple.com/se/podcast/asdf/id1506059489"
              style={{
                width: '170px',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '8px',
              }}
            >
              <img src={itunes}></img>
            </a>
            <a
              href="https://open.spotify.com/show/48pKe510caxiFkvxtoXJge"
              style={{
                width: '170px',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '8px',
              }}
            >
              <img src={spotify}></img>
            </a>
          </div>
          <h2 style={{ fontSize: 18 }}>avsnitt</h2>
          <ul
            style={{
              listStyle: 'none',
              fontSize: '18px',
              margin: 0,
              padding: 0,
              maxWidth: 500,
            }}
          >
            {eps.map((e, i) => (
              <li key={e.node.fields.slug}>
                <Link to={e.node.fields.slug}>
                  {eps.length - i}. {e.node.frontmatter.title}
                </Link>
                {/* <p>{e.node.frontmatter.description}</p> */}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={pizzadean}
          alt="man with pizza hands"
          style={{ maxWidth: 200, marginTop: 'auto' }}
        ></img>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
