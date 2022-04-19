export type geometryJson = {
  geometry: {
    bbox: GeoJSON.BBox;
    features: Array<GeoJSON.Feature>;
  };
};

export type metaJson = {
  meta: {
    finished: string;
    state: string;
    cost: string;
    general: {
      name: string;
      description: string;
      to: string;
      from: string;
      ref: string;
    };
    references: {
      website: string;
    };
  };
};
