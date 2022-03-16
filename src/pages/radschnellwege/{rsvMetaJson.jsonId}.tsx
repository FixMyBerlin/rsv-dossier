import { graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { TextLink } from '~/components/Links/TextLink';

const Radschnellweg = ({ data }) => {
  const { radschnellweg, geometries } = data;
  return (
    <Layout>
      <HelmetSeo
        title={`Radschnellverbindung ${radschnellweg.from} &rarr; ${radschnellweg.to}`}
        description="TODO"
        image="TODO"
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-400">
              {radschnellweg.from} &rarr; {radschnellweg.to}
            </h2>
            <p>
              (<TextLink to="/radschnellwege">Zurück zur Übersicht</TextLink>)
            </p>
            <p className="mt-1 text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {radschnellweg.ref || radschnellweg.from}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-slate-500">
              Status: {radschnellweg.state}
            </p>
            <textarea className="mt-20 h-60 w-full">
              {JSON.stringify(radschnellweg)}
            </textarea>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Radschnellweg;

export const query = graphql`
  query ($id: String!) {
    geometries: allRsvGeoJson(filter: { properties: { id_rsv: { eq: $id } } }) {
      nodes {
        geometry {
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
    radschnellweg: rsvMetaJson(jsonId: { eq: $id }) {
      general {
        description
        from
        name
        ref
        slug
        to
      }
      finished
      cost
      state
    }
  }
`;
