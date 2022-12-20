import classNames from 'classnames';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import { textLinkClasses } from '../Links/TextLink';
import { StateIcons } from '../StateIcons';

type Props = {
  radschnellwege: Queries.SteckbriefeIndexQuery['allMetaJson']['radschnellwege'];
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
          <div className="flex h-72 overflow-hidden">
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
          <div className="flex flex-row place-content-between p-6 md:px-8">
            <div
              className={classNames('group-hover:underline ', textLinkClasses)}
            >
              Mehr erfahren
            </div>
            <div className="h-6 w-6 text-pastel-gray">
              {StateIcons[radschnellweg.state].icon}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
