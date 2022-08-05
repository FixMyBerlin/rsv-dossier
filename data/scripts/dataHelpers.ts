// This file is a collection of helper functions for manually fixing our data e.g. add missing values or renaming keys
import { writeFileSync, readdirSync, readFileSync } from 'fs';
import { length } from '@turf/turf';

type GeoType<T = GeoJSON.GeoJsonProperties> = GeoJSON.FeatureCollection<
  GeoJSON.MultiLineString,
  T
> & { id: any };

// calculate the length (m) for all geometries with unknown length
export const calcMissingLength = (fc: GeoType<{ length?: any }>) => {
  fc.features.map((ml) => {
    if (!ml.properties.length) {
      return { ...ml, length: length(ml) * 1000 };
    }
    return ml;
  });
  return fc;
};

export const renameAttribute = (
  x: { id: any } & object,
  key: string,
  newKey: string
) => {
  const { ...copy } = x;
  if (!(newKey in copy)) {
    if (!copy[key]) {
      throw new Error(`key ${key} not found on ${x.id}`);
    }
    copy[newKey] = copy[key];
    delete copy[key];
  }
  return copy;
};

// apply `f` on nested property defined through `path`
export const applyNested = (
  obj: object,
  path: string[],
  f: (x: object) => object
) => {
  let attr = obj;
  for (let i = 0; i < path.length - 1; i += 1) {
    attr = attr[path[i]];
  }
  const leafKey = path[path.length - 1];
  attr[leafKey] = f(attr[leafKey]);
  return obj;
};

// apply `f` to all geometries
export const processGeometries = (
  f: (fc: GeoType) => GeoType,
  path = 'src/radschnellwege/geometry/',
  filter: (x: string) => boolean = () => true
) => {
  readdirSync(path).forEach((fileName) => {
    const filePath = `${path}${fileName}`;
    if (filter(fileName)) {
      const data: GeoType = JSON.parse(readFileSync(filePath).toString());
      writeFileSync(filePath, JSON.stringify(f(data)));
    }
  });
};

// apply `f` to all meta data
export const processMeta = (
  f: (x: object) => object,
  filePath = 'src/radschnellwege/meta/meta.json'
) => {
  const data = JSON.parse(readFileSync(filePath).toString());
  writeFileSync(filePath, JSON.stringify(data.map(f)));
};
