import { IGatsbyImageData } from 'gatsby-plugin-image';

export type StaticMap = {
  staticMap: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};
