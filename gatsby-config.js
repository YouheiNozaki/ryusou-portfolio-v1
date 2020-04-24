require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ryusou Tech Blog`,
    description: `りゅーそうの技術ブログ&ポートフォリオサイト`,
    author: `Yohei Nozaki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ` Ryusou Blog`,
        short_name: `Ryusou Blog`,
        start_url: `/`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: 'ryusou-mtkh',
        endpoint: 'posts',
      },
    },
  ],
};
