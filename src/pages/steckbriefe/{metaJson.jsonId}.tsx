import { graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { RSVDetails } from '~/components/Steckbrief/';
import { MetaJson, StaticMap } from '~/types/index';

type Props = {
  data: {
    meta: MetaJson & StaticMap;
    geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
  };
};

const Radschnellweg: React.FC<Props> = ({ data: { meta, geometry } }) => {
  return (
    <Layout>
      <HelmetSeo
        title={meta.general.name}
        description={meta.general.description}
        image={meta.staticMap.publicURL}
      />
      <RSVDetails meta={meta} geometry={geometry} />
    </Layout>
  );
};

export default Radschnellweg;

export const query = graphql`
  query ($jsonId: String!) {
    geometry: geometryJson(name: { eq: $jsonId }) {
      type
      bbox
      name
      features {
        type
        bbox
        geometry {
          coordinates
          type
        }
        properties {
          variant
          state
          planning_phase
          length
          id_rsv
          id
          detail_level
        }
      }
    }
    meta: metaJson(jsonId: { eq: $jsonId }) {
      general {
        description
        from
        name
        ref
        to
        source
        length
      }
      references {
        website
      }
      finished
      cost
      state
      staticMap {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
