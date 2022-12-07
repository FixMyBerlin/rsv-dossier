import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { SteckbriefePage } from '~/components/SteckbriefePage';

type Props = {
  location: PageProps['location'];
} & PageProps<Queries.SteckbriefeIndexQuery>;

const SteckbriefeIndex: React.FC<Props> = ({
  location,
  data: {
    radschnellwege: { nodes: _radschnellwege },
  },
}) => {
  return (
    <Layout location={location}>
      <HelmetSeo
        title="Steckbriefe"
        description="Die einzelnen Radschnellverbindungen in den verschiedenen Bundesländern in Deutschland."
      />
      <SteckbriefePage
        radschnellwege={_radschnellwege}
        currentFilter="Alle anzeigen"
      />
    </Layout>
  );
};

export default SteckbriefeIndex;

export const query = graphql`
  query SteckbriefeIndex {
    radschnellwege: allMetaJson {
      nodes {
        general {
          ref
          name
          description
        }
        jsonId
        staticMap {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
