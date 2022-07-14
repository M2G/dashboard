/* eslint-disable */
import {
  all,
  fork,
  call,
  put,
  takeEvery,
  StrictEffect,
} from 'redux-saga/effects';
import {
  forgotPasswordService,
  userProfilService,
  updateUserProfilService,
  getUsersService,
  deleteUsersService,
  recoverPasswordService
} from './services';

import { AuthActionTypes } from './types';
import {
  authForgotPasswordError,
  authDeleteUserProfilSuccess,
  authDeleteUserProfilError,
  authGetUserProfilSuccess,
  authGetUserProfilError,
  authUpdateUserProfilSuccess,
  authUpdateUserProfilError,
  authRequestErrorAction,
  authGetUsersProfilSuccess,
  authGetUsersProfilError,
  authRecoverPasswordSuccess,
  authRecoverPasswordError, authForgotPasswordSuccess,
} from './actions';
import { signoutUserAction } from 'store/signout/actions';
import { history } from 'index';
import Config from '../../constants';

export interface ResponseGenerator {
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

function* request(
  api: any,
  params: any,
  extendParams: any
): Generator<StrictEffect, any, any> {

  console.log('::::::::::::::::::::::::::');

  try {
    const res = yield call(api, params, extendParams);

    console.log('--------------->');

    if (res?.status === 401) {
      return yield put(signoutUserAction({ ...res.data }));
    }
    return res as any;
  } catch (error: any) {
    return yield put(authRequestErrorAction({ ...error }));
  }
}

function* forgotPassword({ data }: any): any {
  const res: ResponseGenerator = yield call(request as any, forgotPasswordService, { ...data });
  if (res?.status === 200) {
    return yield put(authForgotPasswordSuccess({ ...res.data }));
  }

  yield put(authForgotPasswordError({ ...res.data }));
}

function* recoverPassword({ data }: any): any {
  const res: ResponseGenerator = yield call(request as any, recoverPasswordService, { ...data });

  if (res?.status === 200) {
    yield put(authRecoverPasswordSuccess({ ...res.data }));
    return yield call(history?.replace, Config.ROUTER_PATH.HOME);
  }

  yield put(authRecoverPasswordError({ ...res.data }));
}

function* getUserProfil(params: { id: unknown }): any {
  try {
    const res: ResponseGenerator = yield call(request as any, userProfilService, params?.id);
    if (res?.status === 200) {
      return yield put(authGetUserProfilSuccess({ ...res.data }));
    }
  } catch (err: any) {
    if (err?.response?.status === 401) {
    return yield put(signoutUserAction({  ...err.response.data.error }));
  }

    if (err instanceof Error) {
      return yield put(authGetUsersProfilError({ ...(err.stack as any) }));
    }

    yield put(authGetUserProfilError("An unknown error occured."));
  }
}

function* getUsersProfil(params: any): any {
  try {
  const search = params?.search ? params.search : '';
  const res = yield call(getUsersService, search);

  console.log('getUsersProfil getUsersProfil getUsersProfil', res)

    yield put(authGetUsersProfilSuccess({ search, ...res.data }));

  } catch (err: any) {

    console.log('err err err err err err err', err)

    if (err?.response?.status === 401) {
      return yield put(signoutUserAction({ ...err.response.data.error }));
    }

    if (err instanceof Error) {
      return yield put(authGetUsersProfilError({ ...(err.stack as any) }));
    }

    yield put(authGetUsersProfilError("An unknown error occured."));
  }
}

function* deleteUserProfil(params: any): any {
  const res = yield call(request as any, deleteUsersService, params?.id);
  if (res?.status === 200) {
    return yield put(authDeleteUserProfilSuccess());
  }

  if (res?.data?.response?.status === 401) {
    return yield put(signoutUserAction({ ...res.data.response.data.error }));
  }

  yield put(authDeleteUserProfilError({ ...res.data }));
}

function* updateUserProfil({ data }: any): any {

  console.log('data', data)

  const res: ResponseGenerator = yield call(request as any, updateUserProfilService, { ...data });
  if (res?.status === 200) {
    return yield put(authUpdateUserProfilSuccess());
  }

  if (res?.data?.response?.status === 401) {
    return yield put(signoutUserAction({ ...res.data.response.data.error }));
  }

  yield put(authUpdateUserProfilError({ ...res.data }));
}

/*
function* updatePassword(api, action) {
  const { params } = action;

  const res = yield call(api.updatePassword, params);

  if (res.status && res.status.toString().indexOf('20') > -1) {
    const userData = yield select(AuthSelectors.getData);
    const newUserData = {
      ...userData.user,
      auth_token: res.data.token,
    };

    console.log('newUserData', newUserData);

    Config.GLOBAL_VAR.token = res?.data?.token;
    yield call(setAuthStorage, JSON.stringify(newUserData));
    yield put(AuthActions.updatePasswordSuccess(newUserData));
    // yield put(AuthActions.toggleDrawerPassword())
  } else if (res.status && res.status === 400) {
    const error = {
      message: [res.data.message],
    };

    yield put(signinUserError({ ...error, updatePassword: true }));
  } else {
    yield put(signinUserError({ ...res.data, updatePassword: true }));
  }
}
*/

function* watchRecoverPassword() {
  yield takeEvery(AuthActionTypes.AUTH_RECOVER_PASSWORD_REQUEST, recoverPassword);
}

function* watchForgotPassword() {
  yield takeEvery(AuthActionTypes.AUTH_FORGOT_PASSWORD_REQUEST, forgotPassword);
}

function* watchUser() {
  yield takeEvery(
    AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST as any,
    getUserProfil
  );
}

function* watchUsers() {
  yield takeEvery(
    AuthActionTypes.AUTH_GET_USERS_PROFIL_REQUEST as any,
    getUsersProfil
  );
}

function* watchUpdateUser() {
  yield takeEvery(
    AuthActionTypes.AUTH_UPDATE_USER_PROFIL_REQUEST as any,
    updateUserProfil
  );
}

function* watchDeleteUser() {
  yield takeEvery(
    AuthActionTypes.AUTH_DELETE_USER_PROFIL_REQUEST as any,
    deleteUserProfil
  );
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* authSaga() {
  yield all([
    fork(watchRecoverPassword),
    fork(watchForgotPassword),
    fork(watchUsers),
    fork(watchUser),
    fork(watchUpdateUser),
    fork(watchDeleteUser),
  ]);
}

export {
  request,
  authSaga,
  forgotPassword,
  recoverPassword,
  getUserProfil,
  getUsersProfil,
  deleteUserProfil,
  updateUserProfil,
}
