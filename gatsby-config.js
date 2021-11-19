module.exports = {
  siteMetadata: {
    title: `gatsby-theme-jim-starter`,
    description: `jim devSiteStarter`,
    author: `@jamiejohnsonkc`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Roboto: 100,300,400,700,900',
            'Roboto Slab: 300, 400, 700, 900',
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        name: 'svg',
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-theme-ui`,
<<<<<<< HEAD
    `gatsby-theme-nav-fulloverlay`,
=======
>>>>>>> 9b00277552e7c548858336731720a4add1504472
    `gatsby-theme-jim-components`,
    `gatsby-theme-jim-theme-ui`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    // `gatsby-plugin-transition-link`,
  ],
}
