import React from 'react';
import { CameraIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

type Props = {
  title: string;
  image: JSX.Element;
  imageCredits?: string;
  caption?: string;
  children: JSX.Element;
  mutedText?: string;
  noImageDropShadow?: boolean;
};

export const TextWithImage: React.FC<Props> = ({
  image,
  children,
  title,
  imageCredits = '',
  caption = '',
  mutedText,
  noImageDropShadow = false,
}) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none ">
          <div>
            {caption && (
              <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-400">
                {caption}
              </h2>
            )}
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h3>
          </div>
        </div>
        <div className="mt-5 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
          <div className="relative ">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div
                  className={classNames(
                    { 'shadow-lg': noImageDropShadow },
                    'max-h-full overflow-hidden rounded-lg object-cover object-center'
                  )}
                >
                  {image}
                </div>
                {imageCredits && (
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">{imageCredits}</span>
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <div className="text-lg text-gray-500">{children}</div>
            </div>
            {mutedText && (
              <p className="prose prose-emerald mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                {mutedText}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
