import React from 'react';
import { ExternalLink } from '~/components/ExternalLink/ExternalLink';
import { FooterNewsletter, FooterSocialIcons } from '.';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { footerLinks } from './FooterLinks/footerLinks.const';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 z-0" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterLinks title="Angebote" linkList={footerLinks.content} />
              <FooterLinks
                title="Formales"
                linkList={footerLinks.formal}
                className="mt-12 md:mt-0"
              />
            </div>
          </div>
          <FooterNewsletter />
        </div>
        <div className="mt-8 border-t border-green-900 pt-8 md:flex md:items-center md:justify-between">
          <FooterSocialIcons />
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            Entstanden mit Unterstützung von{' '}
            <ExternalLink href="https://www.fixmycity.de" newWindow>
              FixMyCity.de
            </ExternalLink>
          </p>
        </div>
      </div>
    </footer>
  );
};
