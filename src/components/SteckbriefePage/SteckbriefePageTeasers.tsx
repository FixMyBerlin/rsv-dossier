import classNames from 'classnames';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import { textLinkClasses } from '../Links/TextLink';

type Props = {
  radschnellwege: Queries.SteckbriefeIndexQuery['radschnellwege']['nodes'];
};

export const SteckbriefePageTeasers: React.FC<Props> = ({ radschnellwege }) => {
  const steckbriefePath = (id: string) => `/steckbriefe/${id}`;

  return (
    <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-y-8 md:gap-x-8 lg:grid-cols-3">
      {radschnellwege.map((radschnellweg) => (
        <Link
          to={steckbriefePath(radschnellweg.jsonId)}
          key={radschnellweg.general.name}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <div className="flex max-h-fit overflow-hidden">
            <GatsbyImage
              image={getImage(radschnellweg.staticMap as ImageDataLike)}
              alt=""
            />
          </div>
          <div className="relative flex-1 px-6 pt-12 pb-8 md:px-8">
            <h3 className="text-xl font-medium text-slate-900 group-hover:underline">
              {Number.isNaN(parseFloat(radschnellweg.general.ref)) &&
                `${radschnellweg.general.ref}: `}
              {radschnellweg.general.name}
            </h3>
            <p className="mt-4 text-base text-slate-500 line-clamp-3 md:line-clamp-5">
              {radschnellweg.general.description}
            </p>
          </div>
          <div
            className={classNames(
              'p-6 group-hover:underline md:px-8',
              textLinkClasses
            )}
          >
            Mehr erfahren
          </div>
        </Link>
      ))}
    </div>
  );
};
