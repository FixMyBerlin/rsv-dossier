export type MetaJson = {
  finished: string;
  state: string;
  cost: string;
  general: {
    name: string;
    description: string;
    to: string;
    from: string;
    ref: string;
    source: string;
  };
  references: {
    website: string;
  };
};
