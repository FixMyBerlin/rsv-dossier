import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { TextLink } from '~/components/Links';

export const RsvGrid: React.FC<
  Pick<Queries.SteckbriefeIndexQuery, 'radschnellwege'>
> = ({ radschnellwege }) => {
  return (
    <div className="grid grid-cols-1 gap-y-20  md:grid-cols-2 md:gap-y-8 md:gap-x-8 lg:grid-cols-3">
      {radschnellwege.nodes.map((radschnellweg) => (
        <div
          key={radschnellweg.general.name}
          className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <div className="flex max-h-fit overflow-hidden">
            <Link to={`./${radschnellweg.jsonId}`}>
              <GatsbyImage
                image={getImage(radschnellweg.staticMap as ImageDataLike)}
                alt={radschnellweg.general.name}
              />
            </Link>
          </div>
          <div className="relative flex-1 px-6 pt-12 pb-8 md:px-8">
            <TextLink to={`./${radschnellweg.jsonId}`}>
              <h3 className="text-xl font-medium text-slate-900">
                {Number.isNaN(parseFloat(radschnellweg.general.ref)) &&
                  `${radschnellweg.general.ref}: `}
                {radschnellweg.general.name}
              </h3>
            </TextLink>
            <p className="mt-4 text-base text-slate-500 line-clamp-3 md:line-clamp-5">
              {radschnellweg.general.description}
            </p>
          </div>
          <div className="p-6 md:px-8">
            <TextLink to={`./${radschnellweg.jsonId}`}>Mehr erfahren</TextLink>
          </div>
        </div>
      ))}
    </div>
  );
};
