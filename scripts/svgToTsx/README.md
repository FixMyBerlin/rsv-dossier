# About

SVGs:
The Astro Docs suggest to use SVGs with `<img>` or `<Image>` but but we want to style with tw/css.
We can not import SVGs as components (yet: https://github.com/withastro/roadmap/discussions/667) in Astro or in React components. That is why we convert our SVGs in tsx files.

## Initial Setup

1. Install [Bun](https://bun.sh/docs/installation) which we use to run our scripts.
2. We need to keep all SVG assets in the src/assets/general/svg folder.

## General process

1.  When you added or updated a svg file in the src/assets/svg folder run `npm run generateTsxFromSvg`

## What it does

1. The script generates tsx files (filename and component name equals original file name in pascal case) from the svgs in assets in the src/assets/general/tsx folder.
