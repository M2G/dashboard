/* eslint-disable */
import { AuthActionTypes } from './types';

function signinSuccess() {

  console.log("isAuthenticated")

  return {
    type: AuthActionTypes.SIGNIN_SUCCESS_GLOBAL,
    isAuthenticated: true,
  };
}

function signupSuccess() {
  return {
    type: AuthActionTypes.SIGNUP_SUCCESS_GLOBAL,
    isAuthenticated: false,
  };
}

function signoutSuccess() {
  return {
    type: AuthActionTypes.SIGNOUT_SUCCESS_GLOBAL,
    isAuthenticated: false,
  };
}

export { signinSuccess, signoutSuccess, signupSuccess };
