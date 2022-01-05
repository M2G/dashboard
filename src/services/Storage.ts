/* eslint-disable */
const STORAGE_KEY_AUTH = 'auth';
const STORAGE_KEY_TOKEN = 'token';
const STORAGE_KEY_USER = 'user';
const STORAGE_KEY_VISIT = 'visit';

const setAuthStorage = (authData: string) => localStorage.setItem(STORAGE_KEY_AUTH, authData);
const getAuthStorage = () => localStorage.getItem(STORAGE_KEY_AUTH);
const clearAuthStorage = () => localStorage.removeItem(STORAGE_KEY_AUTH);

const setTokenStorage = (tokenData: string) => localStorage.setItem(STORAGE_KEY_TOKEN, tokenData);
const getTokenStorage = () => localStorage.getItem(STORAGE_KEY_TOKEN);
const clearTokenStorage = () => localStorage.removeItem(STORAGE_KEY_TOKEN);

const setUserStorage = (userData: string) => localStorage.setItem(STORAGE_KEY_USER, userData);
const getUserStorage = () => localStorage.getItem(STORAGE_KEY_USER);
const clearUserStorage = () => localStorage.removeItem(STORAGE_KEY_USER);

const setVisitStorage = (visitData: string) => localStorage.setItem(STORAGE_KEY_VISIT, visitData);
const getVisitStorage = () => localStorage.getItem(STORAGE_KEY_VISIT);
const clearVisitStorage = () => localStorage.removeItem(STORAGE_KEY_VISIT);

export {
  setAuthStorage,
  getAuthStorage,
  clearAuthStorage,
  setTokenStorage,
  getTokenStorage,
  clearTokenStorage,
  setUserStorage,
  getUserStorage,
  clearUserStorage,
  setVisitStorage,
  getVisitStorage,
  clearVisitStorage,
};
