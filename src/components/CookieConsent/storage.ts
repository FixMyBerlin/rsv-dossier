const OPTIN_KEY = 'fmc.maptiler-optin';

export const getOptInCookie = () => {
  switch (localStorage.getItem(OPTIN_KEY)) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return null;
  }
};

export const setOptInCookie = (val: boolean) => {
  if (val == null) {
    localStorage.removeItem(OPTIN_KEY);
  }
  localStorage.setItem(OPTIN_KEY, val.toString());
};
