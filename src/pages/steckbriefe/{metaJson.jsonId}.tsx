import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutSteckbrief } from '~/components/Layout/LayoutSteckbrief';
import { SteckbriefPage } from '~/components/SteckbriefPage';
import { domain } from '~/utils';

const Radschnellweg: React.FC<PageProps<Queries.SteckbriefQuery>> = ({
  data: { meta, geometry },
}) => {
  const name = Number.isNaN(parseFloat(meta.general.ref))
    ? `${meta.general.ref}: ${meta.general.name}`
    : meta.general.name;

  return (
    <LayoutSteckbrief>
      <HelmetSeo
        title={name}
        description={meta.general.description}
        image={`${domain()}${meta.staticMap.publicURL}`}
      />
      <SteckbriefPage meta={meta} geometry={geometry} />
    </LayoutSteckbrief>
  );
};

export default Radschnellweg;

export const query = graphql`
  query Steckbrief($jsonId: String!) {
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
          discarded
        }
      }
    }
    meta: metaJson(jsonId: { eq: $jsonId }) {
      general {
        description
        name
        ref
        from {
          city
          federalState
        }
        to {
          city
          federalState
        }
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
