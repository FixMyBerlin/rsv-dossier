# Data source

https://github.com/ohrie/radschnellwege/blob/main/rsv-germany.geojson

# TODOs

- [ ] Use the GeoJSON instead of the YAML file
      _OR_ use rename the GeoJSON to JSON and try using that data.

# Resources

- Good article setting up the "File System Route API"
  https://meaganwaller.com/render-dynamic-pages-gatsby-file-system-route-api-yaml

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
