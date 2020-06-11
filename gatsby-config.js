require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ryusou Blog`,
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
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        filename: `./types/graphql-types.d.ts`,
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: 'ryusou-mtkh',
        endpoint: 'posts',
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: 'ryusou-mtkh',
        endpoint: 'works',
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: 'ryusou-mtkh',
        endpoint: 'tags',
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: 'ryusou-mtkh',
        endpoint: 'skills',
        query: {
          limit: 100,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-imgix',
      options: {
        domain: 'https://images.microcms-assets.io',
        fields: [
          {
            nodeType: 'MicrocmsSkills',
            fieldName: 'featuredImage',
            getUrl: (node) => node.image.url,
          },
          {
            nodeType: 'MicrocmsWorks',
            fieldName: 'featuredImage',
            getUrl: (node) => node.image.url,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
  ],
};
