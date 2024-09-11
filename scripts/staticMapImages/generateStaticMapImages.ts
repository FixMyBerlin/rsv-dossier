import type { GeometrySchema } from 'data/schema/geometry.schema'
import type { Feature } from 'maplibre-gl'

const pkg = require('@googlemaps/polyline-codec')
const turf = require('@turf/turf')
const fs = require('fs')
const path = require('path')
const { segmentColor } = require('./mapColors.js')
const { maptilerBaseUrl, maptilerKey } = require('./mapTiler.const.js')
const { encode } = pkg
const { simplify } = turf

const outputDir = path.resolve('public/rsv-map-images')
const geometryDir = path.resolve('src/content/geometries')

// from rsv-dossier/src/utils/staticmap.ts
// @ts-expect-error
const buildPaths = ({ properties, geometry: { coordinates } }: Feature) => {
  const paint = { width: 5, stroke: segmentColor(properties) }
  // @ts-expect-error
  const paintArr = Object.keys(paint).map((key) => `${key}:${paint[key]}`)

  // flip the coordinate order for encoding
  return (
    coordinates
      // @ts-expect-error
      .map((linestring) => encode(linestring.map((position) => [...position].reverse())))
      // @ts-expect-error
      .map((polyline) => [...paintArr, `enc:${polyline}`].join('|'))
  )
}

type StaticMapRequestParams = {
  features: GeometrySchema['features']
  bbox: GeometrySchema['bbox']
}

const staticMapRequest = (
  { features, bbox }: StaticMapRequestParams,
  [width, height]: [number, number],
) => {
  const dims = `${width / 2}x${height / 2}@2x.png`

  // URL and Keys: ~/utils/mapTiler.const.ts
  const url = new URL(`${maptilerBaseUrl}/static/${bbox.toString()}/${dims}`)
  url.searchParams.append('key', maptilerKey)
  url.searchParams.append('attribution', '0')
  features.forEach((feature) => {
    // @ts-expect-error
    buildPaths(feature).forEach((path: string) => {
      url.searchParams.append('path', path)
    })
  })
  return url
}

const processFile = async (file: string, geometryDir: string, outputDir: string) => {
  try {
    const filePath = path.resolve(geometryDir, file)
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    // filter out discarded route variants
    const filteredData = {
      ...data,
      features: data.features.filter((feature: Feature) => !feature.properties.discarded),
    }

    // generate static map from geometry
    let url = staticMapRequest(filteredData, [1920, 1920]).toString()
    let tolerance = 0.000001

    // console.log({ data })

    // respect the MapTiler URL limit
    while (url.length > 8192) {
      const simplified = simplify(filteredData, { tolerance, highQuality: true })
      url = staticMapRequest(simplified, [1920, 1920]).toString()
      tolerance *= 2
    }

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Write the buffer to a file
    const outputFilePath = path.resolve(outputDir, `${filteredData.id}.png`)
    fs.writeFileSync(outputFilePath, buffer)

    console.log(`Image saved to ${outputFilePath}`)
    return true
  } catch (error) {
    console.error(`Error processing file ${file}:`, error)
    return false
  }
}

const processFiles = async () => {
  const files = fs.readdirSync(geometryDir)

  // const results = await processFile(files[0], geometryDir, outputDir)
  const results = await Promise.all(
    files.map((file: string) => processFile(file, geometryDir, outputDir)),
  )
  const count = results.length
  console.log(`${count} images (from ${files.length} geometry files) have been saved`)
}

processFiles()
