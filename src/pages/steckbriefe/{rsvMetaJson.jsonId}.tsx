import { graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { RSVDetails } from '~/components/Layout/Section/RSVDetails';

const Radschnellweg = ({ data: { meta, geometries } }) => {
  console.log(meta, geometries);
  return (
    <Layout>
      <HelmetSeo title={meta.general.name} description="TODO" image="TODO" />
      <RSVDetails meta={meta} geometries={geometries} />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <textarea className="mt-20 h-60 w-full">
              {JSON.stringify(meta) + JSON.stringify(geometries)}
            </textarea>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Radschnellweg;

export const query = graphql`
  query ($jsonId: String!) {
    geometries: allRsvGeoJson(
      filter: { properties: { id_rsv: { eq: $jsonId } } }
    ) {
      nodes {
        id
        type
        geometry {
          type
          coordinates
        }
        properties {
          id_rsv
          id_segment
          length
          planning_phase
          status
          variants
          detail_level
        }
      }
    }
    meta: rsvMetaJson(jsonId: { eq: $jsonId }) {
      general {
        description
        from
        name
        ref
        slug
        to
      }
      references {
        website
      }
      finished
      cost
      state
    }
  }
`;
