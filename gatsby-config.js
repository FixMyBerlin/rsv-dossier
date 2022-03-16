module.exports = {
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
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/radschnellwege/metadata',
        name: 'rsv_meta',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/radschnellwege/geojson',
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
  ],
};
