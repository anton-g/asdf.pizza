const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const episode = path.resolve(`./src/templates/episode.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const episodes = result.data.allMarkdownRemark.edges

  episodes.forEach((ep, index) => {
    const previous =
      index === episodes.length - 1 ? null : episodes[index + 1].node
    const next = index === 0 ? null : episodes[index - 1].node

    createPage({
      path: ep.node.fields.slug,
      component: episode,
      context: {
        slug: ep.node.fields.slug,
        previous,
        next
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
