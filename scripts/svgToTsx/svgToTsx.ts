const svgtojsx = require('svg-to-jsx')
const fs = require('fs')
const path = require('path')

const svgDir = path.resolve('src/assets/general/svg')
const tsxDir = path.resolve('src/assets/general/tsx')
const files = fs.readdirSync(svgDir)

const convertSvgToTsx = async (file: string) => {
  try {
    const svgPath = path.join(svgDir, file)
    const svgContent = fs.readFileSync(svgPath, 'utf8')
    const tsxContent = await svgtojsx(svgContent)

    let componentName = path.basename(file, '.svg').replace(/-/g, '')
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)
    const tsxFilename = `${componentName}.tsx`
    const tsxPath = path.join(tsxDir, tsxFilename)

    const componentContent = `
      export const ${componentName} = () => {
        return (
          ${tsxContent}
        );
      };
    `

    fs.writeFileSync(tsxPath, componentContent)
  } catch (error) {
    console.error(`Error converting ${file}:`, error)
  }
}

const convertAllSvgs = async () => {
  for (const file of files) {
    await convertSvgToTsx(file)
  }
}

convertAllSvgs()
