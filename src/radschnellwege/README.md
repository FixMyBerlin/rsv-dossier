# Data source

https://github.com/ohrie/radschnellwege/blob/main/rsv-germany.geojson

# TODOs

- [x] Use the GeoJSON instead of the YAML file
      _OR_ use rename the GeoJSON to JSON and try using that data.

NEU:

- [ ] Debugging warum das per JSON nicht gut klappt
- [ ] Wie kann man das geoJSON direkt ohne Editieren nutzen?
  Siehe auch die man die File System Route API nutzt um die Hiearchien zu springen https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
- [ ] Muss die Properties-Liste normalisiert werden? Also alle immer die gleichen Felder? GraphQL scheint das so zu brauchen, jedenfalls fehlt das `via` plötzlich.
- [ ] Paginierung einbauen für die 100+ Radschnellwege https://www.gatsbyjs.com/docs/adding-pagination/

# Resources

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
