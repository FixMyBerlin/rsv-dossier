const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname)

const allGeometry = {}

fs.readdirSync(directoryPath).forEach((file) => {
  if (path.extname(file) === '.json') {
    const fileNameWithoutExt = path.basename(file, '.json')
    allGeometry[fileNameWithoutExt] = require(path.join(directoryPath, file))
  }
})

module.exports = allGeometry
