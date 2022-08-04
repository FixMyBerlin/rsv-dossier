require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    title: 'Radschnellverbindungen',
    siteUrl: 'https://radschnellverbindungen.info',
    description:
      'Informationen über Planungen von Radschnellverbindungen in Deutschland.',
  },

  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)

  // TailwindCSS needs PostCSS, https://tailwindcss.com/docs/guides/gatsby
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-image',
      options: {
        formats: [`auto`, `webp`, `avif`],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    {
      resolve: '@sentry/gatsby',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/radschnellwege/meta`,
        name: 'rsv_meta',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/radschnellwege/geometry`,
        name: 'rsv_geo',
      },
    },
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
      // https://radschnellverbindungen.info/sitemap/sitemap-index.xml // only links
      // https://radschnellverbindungen.info/sitemap/sitemap-0.xml // content
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/kontakt/', '/datenschutz/'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '5',
        matomoUrl: 'https://s.radschnellverbindungen.info',
        siteUrl: 'https://radschnellverbindungen.info',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radschnellverbindungen.info`,
        short_name: `RSV.info`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#34d399`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.svg',
        lang: 'de',
      },
    },
  ],
};
