/* eslint-disable */
import { SigninActionTypes } from './types';

function signinUserPrepare(service: any, options: any) {
  console.log('signinUserPrepare', { service, options });
  return {
    type: SigninActionTypes.SIGNIN_USER_PREPARE,
    service,
    options,
  };
}

function signinUserAction(service: any) {
  console.log('loginUserAction', { service });
  return {
    type: SigninActionTypes.SIGNIN_USER_REQUEST,
    service,
  };
}
function signinUserSuccess(user: any) {
  console.log('loginUserSuccess', user);
  return {
    type: SigninActionTypes.SIGNIN_USER_SUCCESS,
    user,
  };
}
function signinUserError(errors: any) {
  console.log('loginUserError', errors);
  return {
    type: SigninActionTypes.SIGNIN_USER_ERROR,
    errors,
  };
}

export {
  signinUserAction,
  signinUserSuccess,
  signinUserError,
  signinUserPrepare,
};
