// This file is a collection of helper functions for manually fixing our data e.g. add missing values or renaming keys

/* eslint-disable */
const fs = require('fs');
const turf = require('@turf/turf');

// calculate the length for all geometries with unknown length
export const calcMissingLength = (fc) => {
  fc.features.forEach((f) => {
    if (!f.properties.length) {
      f.properties.length = turf.length(f) * 1000;
    }
  });
  return fc;
};

// rename `name` to `id`
export const name2id2 = (fc) => {
  const { name, ...copy } = fc;
  return { id: name, ...copy };
};

// apply `f` on nested property defined through `path`
export const applyNested = (obj, path, f) => {
  let attr = obj;
  for (let i = 0; i < path.length - 1; i++) {
    attr = attr[path[i]];
  }
  const leafKey = path[path.length - 1];
  attr[leafKey] = f(attr[leafKey]);
  return obj;
};

// apply `f` to all geometries
export const processGeometries = (f) => {
  fs.readdirSync('src/radschnellwege/geometry/').forEach((file_path) => {
    const data = JSON.parse(fs.readFileSync(file_path));
    fs.writeFileSync(file_path, JSON.stringify(f(data)));
  });
};

// apply `f` to all meta data
export const processMeta = (f) => {
  const file_path = 'src/radschnellwege/meta/meta.json';
  const data = JSON.parse(fs.readFileSync(file_path));
  fs.writeFileSync(file_path, JSON.stringify(data.map(f)));
};
