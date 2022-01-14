module.exports = {
  siteMetadata: {
    siteURL: 'https://radschnellverbindungen.info',
  },

  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)

  // TailwindCSS needs PostCSS, https://tailwindcss.com/docs/guides/gatsby
  plugins: [
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-transformer-yaml',
    //   options: {
    //     typeName: ({ node }) => {
    //       const name = node.sourceInstanceName
    //       if (name === 'radschnellwege') {
    //         return 'Radschnellweg'
    //       }
    //       return name
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({ node }) => {
          const name = node.sourceInstanceName;
          if (name === 'radschnellwege') {
            return 'Radschnellweg';
          }
          return name;
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/radschnellwege',
        name: 'radschnellwege',
      },
    },
  ],
};
