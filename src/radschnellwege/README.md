# Data source

Source: https://github.com/ohrie/radschnellwege/blob/main/rsv-germany.geojson

# TODOs

- [ ] Debugging warum das per JSON nicht gut klappt
- [ ] Wie kann man das GeoJSON direkt ohne Editieren nutzen?

      - Siehe auch: Wie man die File System Route API nutzt um die "Hiearchien zu springen" https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
      - Siehe auch unten zu `gatsby-transformer-geojson`

- [ ] Muss die Properties-Liste normalisiert werden? Also alle immer die gleichen Felder? GraphQL scheint das so zu brauchen, jedenfalls fehlt das `via` plötzlich.
- [ ] Paginierung einbauen für die 100+ Radschnellwege https://www.gatsbyjs.com/docs/adding-pagination/

# Resources

- Docs https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/#collection-routes
  https://www.gatsbyjs.com/docs/how-to/routing/creating-routes/#collection-routing

- Beispiele von Gatsby selbst https://github.com/gatsbyjs/gatsby/tree/master/examples/route-api

- Video Filesystem API https://www.youtube.com/watch?v=uG4Kjyhu8MM

- Limitations of teh File System Route API
  https://github.com/gatsbyjs/gatsby/discussions/26375#discussioncomment-466590

- Good article setting up the "File System Route API"
  https://meaganwaller.com/render-dynamic-pages-gatsby-file-system-route-api-yaml

- Gatsy Tutorial
  https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

- Gatsby Example Code for using the "File System Route API"
  https://github.com/gatsbyjs/gatsby/tree/master/examples/route-api

- Docs `gatsby-source-filesystem`
  https://www.npmjs.com/package/gatsby-source-filesystem

- Docs `gatsby-transformer-geojson`
  https://www.npmjs.com/package/gatsby-transformer-geojson

  - This plugin seems to be a bit outdate or not TS optimized.
  - Comparing the code with the YAML version shows a lot of similarities but some difference the usage of `getType`
    https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-yaml/src/gatsby-node.js#L59

- Docs `gatsby-transformer-json`
  https://www.npmjs.com/package/gatsby-transformer-json

- Docs `gatsby-transformer-yaml` (as a reference)
  https://www.npmjs.com/package/gatsby-transformer-yaml

- Hinweis: This is how one did this kind of integration before the file-system-route-api:
  https://javascript.plainenglish.io/sourcing-json-data-with-gatsby-source-filesystem-and-graphql-6fc7cef2a49e
