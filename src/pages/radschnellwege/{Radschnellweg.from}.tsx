import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '~/components/Layout';
import { TextLink } from '~/components/Links/TextLink';

function Radschnellweg(props) {
  const radschnellweg = props.data.radschnellweg;
  console.log('TODO props: ', props);

  return (
    <Layout padding={false}>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              {radschnellweg.from} &rarr; {radschnellweg.to}
            </h2>
            <p>
              (
              <TextLink to={'/radschnellwege'}>
                {'<-'} Zurück zur Übersicht
              </TextLink>
              )
            </p>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {radschnellweg.ref || radschnellweg.from}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Status: {radschnellweg.state}
            </p>
            <textarea className="mt-20 w-full h-60">
              {JSON.stringify(radschnellweg)}
            </textarea>
          </div>
        </div>
      </div>
      <h1></h1>
    </Layout>
  );
}

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
