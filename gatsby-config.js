module.exports = {
  siteMetadata: {
    title: `asdf`,
    description: `Snart en grej.`,
    author: `@asdfpodcast`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/episodes`,
        name: `episodes`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `asdf`,
        short_name: `asdf`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/pizzadean.gif` // This path is relative to the root of the site.
      }
    }
  ]
}
