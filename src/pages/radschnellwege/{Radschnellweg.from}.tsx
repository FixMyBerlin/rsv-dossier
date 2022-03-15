import { graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { RSVDetails } from '~/components/Layout/Section/RSVDetails';

const Radschnellweg = ({ data: { radschnellweg } }) => {
  return (
    <Layout padding={false}>
      <HelmetSeo
        title={`Radschnellwege ${radschnellweg.from} - ${radschnellweg.to}`}
        description="TODO"
        image="TODO"
      />
      <RSVDetails radschnellweg={radschnellweg} />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
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
    radschnellweg(id: { eq: $id }) {
      from
      to
      accuracy
      pilot_study
      state
      website
      coordinates
      length
      finished
      ref
      via
    }
  }
`;
