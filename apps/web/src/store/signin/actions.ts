import { SigninActionTypes } from './types';

const signinUserPrepare = (user: any, options: any) => ({
  options,
  type: SigninActionTypes.SIGNIN_USER_PREPARE,
  user,
});

const signinUserAction = (user: any) => ({
  type: SigninActionTypes.SIGNIN_USER_REQUEST,
  user,
});

const signinUserSuccess = (data) => ({
  type: SigninActionTypes.SIGNIN_USER_SUCCESS,
  ...data,
});

const signinUserError = (errors: any) => ({
  errors,
  type: SigninActionTypes.SIGNIN_USER_ERROR,
});

export {
  signinUserAction,
  signinUserSuccess,
  signinUserError,
  signinUserPrepare,
};
