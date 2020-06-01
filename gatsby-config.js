const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Wilton Júnior`,
    description: `Apresentação do curriculo por meio de um portfolio interativo | Wilton Júnior`,
    author: `Wilton Junior`,
    siteUrl: `https://wiltonjunior.dev`,
    social: [
      {
        name: "github",
        url: "https://github.com/wiltonjunior",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#407BFF`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168116200-1",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wilton Júnior`,
        short_name: `Wilton Júnior`,
        start_url: `/`,
        background_color: `#407BFF`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
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
        background_color: `#ffffff`,
        theme_color: `#407BFF`,
        display: `standalone`,
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
