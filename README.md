<div align="center">
  <img src="src/images/logo-rsv-info.svg" height="80" />
  <h1 align="center">Radschnellverbindungen.info</h1>
  <!-- Deployment status -->
  <a href="https://app.netlify.com/sites/fixmyrsv/deploys"><img src="https://api.netlify.com/api/v1/badges/7ac0f9fe-a196-4ef9-b372-2e4bbe53c074/deploy-status" alt="Netlify deployment status" /></a>
  <!--  -->
</div>

This site show's general information about Radschnellverbindungen (cycle highways) in Germany and specific about specific highways which are planned or build.

## Developing

If you found any bugs feel free to create an issue.

## Data

You find the geometry and meta information about the highways under [`./src/radschnellwege/`](./src/radschnellwege/). There is one file for all highways in [`meta/`](./src/radschnellwege/meta) folder containing the meta information. In the [`geometry/`](./src/radschnellwege/geometry) folder, every cycle highway has one individual file. In [`./data/schema/`](./data/schema/)you'll find the schema for the json files. It enables the validation of the files via gatsby.

### Getting Started

For starting developing, the following steps could be helpful for getting started:

- Use or nvm to install Node.js: `nvm use`
- Install dependenices: `npm install`
- Start gatsby develop service: `npm start`
- Use `npm run` to see a list of commands
- Use `npm run build && npx serve public` to test the build

We use husky to ensure commits don't include linting issues. If you use nvm, as suggested here, you should create a `~/.huskyrc`. See [docs](https://typicode.github.io/husky/#/?id=command-not-found)

Setup your `.env.development` file, for which you can use `.env.defaults` as a start.

For production you will also need a `.env.production` file. Otherwise the modules using the env variables, will not work.

### Gatsby KnowHow

- Internal links with `<Link>`, external Links with our own `<ExternalLink>` (which uses `<a>`).
  More https://www.gatsbyjs.com/docs/linking-between-pages/

- About `location`
  https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/#4-pass-history-location-and-match-props-to-layout
  https://css-tricks.com/how-to-the-get-current-page-url-in-gatsby/

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for more information.
It contains dependencies which have different Licenses, see [`package.json`](./package.json).

## Thanks

- This page is based on `gatsby-starter-ts` by João Pedro Schmitz, https://github.com/jpedroschmitz/gatsby-starter-ts (License: MIT)
