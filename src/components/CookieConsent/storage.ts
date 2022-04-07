const OPTIN_KEY = 'fmc.maptiler-optin';

export const getOptInCookie = () =>
  new Date(localStorage.getItem(OPTIN_KEY) || undefined) < new Date();

export const setOptInCookie = (val: boolean) => {
  if (val) {
    localStorage.setItem(OPTIN_KEY, new Date().toDateString());
  } else {
    localStorage.setItem(OPTIN_KEY, new Date(undefined).toDateString());
  }
};
