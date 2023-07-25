import React from 'react';
import { ExternalLink } from '~/components/Links/ExternalLink';
import { FooterSocialIcons } from '.';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { footerLinks } from './FooterLinks/footerLinks.const';

export const Footer: React.FC = () => {
  return (
    <footer className="z-0 bg-emerald-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <FooterLinks title="Seiten" linkList={footerLinks.content} /> */}
              <FooterLinks
                title="Seiten"
                linkList={footerLinks.formal}
                className="mt-12 md:mt-0"
              />
            </div>
          </div>
          {/* <FooterNewsletter /> */}
        </div>
        <div className="mt-8 border-t border-emerald-400 pt-8 md:flex md:items-center md:justify-between">
          <FooterSocialIcons />
          <p className="mt-8 text-base text-slate-800 md:order-1 md:mt-0">
            Gebaut mit{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>{' '}
            und{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-7 w-7"
              style={{ transform: 'scaleX(-1)' }}
              viewBox="0 0 1760 757.33331"
              fill="currentColor"
            >
              <g
                fill="currentColor"
                transform="matrix(1.3333333 0 0 -1.3333333 0 757.33333)"
              >
                <path d="m729.355 567.926c-31.062 0-58.507-20.235-67.695-49.91l.004.004c-34.094-110.137-71.086-229.497-105.254-339.864h-250.719l-138.332 151.481-9.695-31.309-.137-.437-17.746-57.336c-6.058.925-12.179 1.386-18.308 1.386-66.535 0-120.473-53.937-120.473-120.468 0-66.535 53.938-120.473 120.473-120.473s120.468 53.938 120.468 120.473c0 46.293-26.527 88.492-68.246 108.562l-35.3-113.801 24.66 79.414c26.84-15.043 43.457-43.41 43.457-74.175 0-46.969-38.074-85.039-85.039-85.039s-85.039 38.07-85.039 85.039c0 46.965 38.074 85.039 85.039 85.039 2.558 0 5.117-.117 7.668-.344l-24.59-79.449c-.528-1.699-.797-3.469-.797-5.246 0-9.785 7.934-17.719 17.719-17.719 7.765 0 14.625 5.058 16.922 12.48l44.535 143.883 107.203-117.387h627.129l51.093-.007c16.84-82.485 89.399-141.723 173.583-141.723 97.843 0 177.164 79.32 177.164 177.164s-79.321 177.164-177.164 177.164c-18.649 0-37.18-2.945-54.911-8.723l-51.386 115.024 13.281 35.43h39.859v35.433l-150.652-.14c-4.852 0-8.789-3.934-8.789-8.79 0-4.062 2.789-7.597 6.742-8.542l75-17.961c-25.687-68.489-52.098-136.485-77.52-205.204h-142.136l-121.086 134.34h-.176l11.145 35.434 14.199 45.914c4.594 14.836 18.316 24.949 33.847 24.949h58.254v35.434zm288.571-153.528 36.679-82.093c-55.519-31.453-89.832-90.332-89.832-154.141h-35.433zm-359.692-27.273 188.012-208.961h-252.808l64.699 208.641zm483.704-67.23c78.277 0 141.73-63.454 141.73-141.731s-63.453-141.73-141.73-141.73c-64.626 0-121.071 43.718-137.231 106.293v.003l146.02-.14c9.863 0 17.855 7.996 17.855 17.859 0 2.496-.523 4.969-1.535 7.25l-65.496 146.321c13.109 3.898 26.711 5.875 40.387 5.875zm-72.786-20.118 54.321-121.613h-123.266c0 49.84 26.18 96.02 68.945 121.613zm-245.789-43.355h97.09l-28.246-76.371z" />
                <path d="m622.723 440.367-76.797-248.031h-233.715l-161.27 176.644c52.403 78.239 251.407 76.887 471.782 71.387" />
              </g>
            </svg>{' '}
            von{' '}
            <ExternalLink href="https://www.fixmycity.de" newWindow>
              FixMyCity.de
            </ExternalLink>
          </p>
        </div>
      </div>
    </footer>
  );
};
