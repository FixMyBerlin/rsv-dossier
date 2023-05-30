import { graphql, PageProps } from 'gatsby';
import React, { useState } from 'react';
import classNames from 'classnames';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutSteckbrief } from '~/components/Layout/LayoutSteckbrief';
import {
  SteckbriefPage,
  SteckbriefUpdateInfo,
} from '~/components/SteckbriefPage';
import { domain } from '~/utils';

const Radschnellweg: React.FC<PageProps<Queries.SteckbriefQuery>> = ({
  data: { meta, geometry },
}) => {
  // if the ref is official (not an arbitrary number picked by us) display it in the name
  const name = Number.isNaN(parseFloat(meta.general.ref))
    ? `${meta.general.ref}: ${meta.general.name}`
    : meta.general.name;

  const [overlay, setOverlay] = useState<boolean>(false);
  const closeIfOpen = () => {
    if (overlay) {
      setOverlay(false);
    }
  };
  return (
    <div>
      <div
        aria-haspopup="dialog"
        aria-hidden="true"
        onKeyDown={closeIfOpen}
        onClick={closeIfOpen}
        className={classNames(
          overlay && 'fixed top-0 right-0 left-0 bottom-0  blur-[2px]'
        )}
      >
        {overlay && (
          <div className="fixed top-0 right-0 left-0 bottom-0 z-50 min-h-full min-w-full bg-gray-300/30" />
        )}
        <LayoutSteckbrief>
          <HelmetSeo
            title={name}
            description={meta.general.description}
            image={`${domain()}${meta.staticMap.publicURL}`}
          />
          <SteckbriefPage
            meta={meta}
            geometry={geometry}
            setOverlay={setOverlay}
          />
        </LayoutSteckbrief>
      </div>
      {overlay && <SteckbriefUpdateInfo setOverlay={setOverlay} name={name} />}
    </div>
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
        stand
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
      stakeholders {
        name
        roles
      }
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
