import React from 'react';
import { CameraIcon } from '@heroicons/react/solid';

type Props = {
  title: string;
  image: JSX.Element;
  imageCredits?: string;
  caption?: string;
  children: JSX.Element;
  mutedText?: string;
};

export const TextWithImage: React.FC<Props> = ({
  image,
  children,
  title,
  imageCredits = '',
  caption = '',
  mutedText,
}) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
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
        <div className="mt-5 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative ">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="max-h-full max-w-[500px] overflow-hidden rounded-lg object-cover object-center shadow-lg">
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
