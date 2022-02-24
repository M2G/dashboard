/* eslint-disable */
import { AuthActionTypes } from './types';

const authUpdateUserProfilAction = (user: any) => {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_REQUEST,
    user,
  };
};

const authGetUserProfilAction = (user: any) => {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST,
    ...user,
  };
};

const authGetUsersProfilAction = (user: any) => {
  console.log('authGetUsersProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_REQUEST,
    ...user,
  };
};

const authUpdatePasswordAction = (user: any) => {
  console.log('authUpdatePasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_REQUEST,
    user,
  };
};

const authRecoverPasswordAction = (user: any) => {
  console.log('authRecoverPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_REQUEST,
    user,
  };
};

const authForgotPasswordAction = (user: any) => {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_REQUEST,
    user,
  };
};

const authForgotPasswordErrorAction = (user: any) => {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_ERROR,
    user,
  };
};

const authUpdateUserProfilSuccess = (user: any) => {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_SUCCESS,
    user,
  };
};

const authUpdateUserProfilError = (user: any) => {
  console.log('authUpdateUserProfilError', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_ERROR,
    user,
  };
};

const authGetUserProfilSuccess = (user: any) => {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_SUCCESS,
    user,
  };
};

const authGetUserProfilError = (user: any) => {
  console.log('authGetUserProfilError', user);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_ERROR,
    ...user,
  };
};

const authUpdatePasswordSuccess = (user: any) => {
  console.log('authUpdatePasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS,
    user,
  };
};

const authRecoverPasswordSuccess = (user: any) => {
  console.log('authRecoverPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_SUCCESS,
    user,
  };
};

const authForgotPasswordSuccess = (user: any) => {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_SUCCESS,
    user,
  };
};

const authRequestErrorAction = (user: any) => {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_REQUEST_ERROR,
    user,
  };
};

export {
  authGetUserProfilAction,
  authGetUsersProfilAction,
  authUpdateUserProfilAction,
  authUpdatePasswordAction,
  authRecoverPasswordAction,
  authForgotPasswordAction,
  authUpdateUserProfilSuccess,
  authUpdatePasswordSuccess,
  authRecoverPasswordSuccess,
  authForgotPasswordSuccess,
  authGetUserProfilSuccess,
  authForgotPasswordErrorAction,
  authGetUserProfilError,
  authRequestErrorAction,
  authUpdateUserProfilError,
};
