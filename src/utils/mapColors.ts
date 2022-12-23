export const mapColors = {
  main: '#34D399',
  side: '#CBDC65',
  discarded: '#5B5C5D',
};

export const segmentColor = (
  properties: Queries.SteckbriefQuery['geometry']['features'][number]['properties']
) => {
  if (properties.discarded) return mapColors.discarded;
  if (properties.variant === 'Vorzugstrasse') return mapColors.main;
  return mapColors.side;
};
