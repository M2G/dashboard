/* eslint-disable */
import { AuthActionTypes } from './types';

function authUpdateUserProfilAction(user: any) {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_REQUEST,
    user,
  };
}

function authGetUserProfilAction(user: any) {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST,
    ...user,
  };
}

function authUpdatePasswordAction(user: any) {
  console.log('authUpdatePasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_REQUEST,
    user,
  };
}

function authRecoverPasswordAction(user: any) {
  console.log('authRecoverPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_REQUEST,
    user,
  };
}

function authForgotPasswordAction(user: any) {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_REQUEST,
    user,
  };
}

function authForgotPasswordErrorAction(user: any) {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_ERROR,
    user,
  };
}

function authUpdateUserProfilSuccess(user: any) {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_SUCCESS,
    user,
  };
}

function authUpdateUserProfilError(user: any) {
  console.log('authUpdateUserProfilError', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_ERROR,
    user,
  };
}

function authGetUserProfilSuccess(user: any) {
  console.log('authUpdateUserProfilAction', user);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_SUCCESS,
    user,
  };
}

function authGetUserProfilError(user: any) {
  console.log('authGetUserProfilError', user);
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_ERROR,
    ...user,
  };
}

function authUpdatePasswordSuccess(user: any) {
  console.log('authUpdatePasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS,
    user,
  };
}

function authRecoverPasswordSuccess(user: any) {
  console.log('authRecoverPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_SUCCESS,
    user,
  };
}

function authForgotPasswordSuccess(user: any) {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_SUCCESS,
    user,
  };
}

function authRequestErrorAction(user: any) {
  console.log('authForgotPasswordAction', user);
  return {
    type: AuthActionTypes.AUTH_REQUEST_ERROR,
    user,
  };
}


export {
  authGetUserProfilAction,
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
