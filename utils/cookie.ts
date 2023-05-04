// resource for handling cookies taken from here:
// https://github.com/carlos-peru/next-with-api/blob/master/lib/session.js

import cookie from 'js-cookie';

export const setCookie = (key:any, value:any, option:any) => {
  if (typeof window) {
    cookie.set(key, value, option);
  }
};

export const removeCookie = (key:any) => {
  if (typeof window) {
    cookie.remove(key, {
      path: ''
    });
  } else {
    cookie.remove(key, {
      path: ''
    });
  }
};

export const getCookie = (key:any, req:any) => {
  return typeof window
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = (key:any) => {
  return cookie.get(key);
};

const getCookieFromServer = (key:any, req:any) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find((c:any) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};