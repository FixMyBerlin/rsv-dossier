import type { GeometrySchema } from 'data/schema/geometry.schema'

export const mapColors = {
  main: '#34D399',
  side: '#CBDC65',
  discarded: '#5B5C5D',
}

export const segmentColor = (properties: GeometrySchema['features'][number]['properties']) => {
  if (properties.discarded) return mapColors.discarded
  if (properties.variant === 'Vorzugstrasse') return mapColors.main
  return mapColors.side
}
