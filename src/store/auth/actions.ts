/* eslint-disable */
import { AuthActionTypes } from './types';

const authUpdateUserProfilAction = (data: any) => {
  console.log('authUpdateUserProfilAction', data);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_REQUEST,
    data,
  };
};

const authGetUserProfilAction = (data: any) => {
  console.log('authUpdateUserProfilAction', data);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST,
    data,
  };
};

const authGetUsersProfilAction = (args?: any) => {
  console.log('authGetUsersProfilAction', args);
  return {
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_REQUEST,
    ...args,
  };
};

const authUpdatePasswordAction = (data: any) => {
  console.log('authUpdatePasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_REQUEST,
    data,
  };
};

const authRecoverPasswordAction = (data: any) => {
  console.log('authRecoverPasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_REQUEST,
    data,
  };
};

const authForgotPasswordAction = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_REQUEST,
    data,
  };
};

const authForgotPasswordErrorAction = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_ERROR,
    data,
  };
};

const authUpdateUserProfilSuccess = (data: any) => {
  console.log('authUpdateUserProfilAction', data);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_SUCCESS,
    data,
  };
};

const authUpdateUserProfilError = (data: any) => {
  console.log('authUpdateUserProfilError', data);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_ERROR,
    data,
  };
};

const authGetUsersProfilSuccess = ({ data, ...args }: any) => {
  console.log('authGetUsersProfilSuccess', data, args);
  return {
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_SUCCESS,
    data,
    ...args,
  };
};

const authGetUserProfilSuccess = (data: any) => {
  console.log('authUpdateUserProfilAction', data);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_SUCCESS,
    data,
  };
};

const authGetUserProfilError = (data: any) => {
  console.log('authGetUserProfilError', data);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_ERROR,
    data,
  };
};

const authUpdatePasswordSuccess = (data: any) => {
  console.log('authUpdatePasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS,
    data,
  };
};

const authRecoverPasswordSuccess = (data: any) => {
  console.log('authRecoverPasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_SUCCESS,
    data,
  };
};

const authForgotPasswordSuccess = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_SUCCESS,
    data,
  };
};

const authRequestErrorAction = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    type: AuthActionTypes.AUTH_REQUEST_ERROR,
    data,
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
  authGetUsersProfilSuccess,
  authForgotPasswordErrorAction,
  authGetUserProfilError,
  authRequestErrorAction,
  authUpdateUserProfilError,
};
