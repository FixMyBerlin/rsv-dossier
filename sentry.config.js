import * as Sentry from '@sentry/gatsby';

Sentry.init({
  dsn: process.env.GATSBY_SENTRY_DSN,
  sampleRate: 100,
});
