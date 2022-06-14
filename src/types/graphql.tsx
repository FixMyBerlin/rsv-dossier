import { ImageDataLike } from 'gatsby-plugin-image';

export type StaticMap = {
  staticMap: ImageDataLike & { publicURL: string };
};
