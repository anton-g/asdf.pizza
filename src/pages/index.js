import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

import pizzadean from '../images/pizzadean.gif'

const IndexPage = ({ data, location }) => {
  const episodes = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="👋" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <div style={{ minWidth: 200 }}>
          <h2 style={{ fontSize: 18 }}>avsnitt</h2>
          <ul
            style={{
              listStyle: 'none',
              fontSize: '18px',
              margin: 0,
              padding: 0
            }}
          >
            {episodes.map((e) => (
              <li key={e.node.fields.slug}>
                <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
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
