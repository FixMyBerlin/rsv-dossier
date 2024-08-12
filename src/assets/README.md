# SVGs

The Astro Docs suggest to use SVGs with `<img>` or `<Image>` but but we want to style with tw/css.
We can not import SVGs as components (yet: https://github.com/withastro/roadmap/discussions/667) in Astro or in React components.
That is why we convert our SVGs in tsx files.

When you added or updated a svg file in the src/assets/svg folder run `node src/assets/svgToTsx.js`

We need to keep all SVG assets in the src/assets/svg folder.
