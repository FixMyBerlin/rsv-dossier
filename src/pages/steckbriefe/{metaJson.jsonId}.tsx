import { graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { RSVDetails } from '~/components/Steckbrief/';
import { MetaJson, StaticMap } from '~/types/index';
import { domain } from '~/utils';

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
        image={`${domain()}${meta.staticMap.publicURL}`}
      />
      <RSVDetails meta={meta} geometry={geometry} />
    </Layout>
  );
};

export default Radschnellweg;

export const query = graphql`
  query ($jsonId: String!) {
    geometry: geometryJson(jsonId: { eq: $jsonId }) {
      type
      bbox
      id: jsonId
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
