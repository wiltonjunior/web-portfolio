const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Wilton Júnior`,
    description: `Portfolio de um dev`,
    author: `@gatsbyjs`,
    siteUrl: `https://wiltonjunior.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@i18n": path.join(__dirname, "src/i18n"),
        "@pages": path.join(__dirname, "src/pages"),
        "@configs": path.join(__dirname, "src/configs"),
        "@svg": path.join(__dirname, "src/assets/images/svg"),
        "@images": path.join(__dirname, "src/assets/images/img"),
        "@components": path.join(__dirname, "src/shared/components"),
        "@utils": path.join(__dirname, "src/shared/utils"),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-robots-txt'
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
