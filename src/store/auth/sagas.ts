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
  try {
    const res = yield call(api, params, extendParams);
    if (res?.status === 401) {
      return yield put(signoutUserAction({ ...res.data }));
    }
    return res as any;
  } catch (error: any) {
    return yield put(authRequestErrorAction({ ...error }));
  }
}

function* forgotPassword({ data }: any) {
  console.log('forgotPassword', data)

  const res: ResponseGenerator = yield call(request as any, forgotPasswordService, { ...data });

  console.log('res res res res', res)

  if (res?.status === 200) {
    yield put(authForgotPasswordSuccess({ ...res.data }));
    return;
  }

  yield put(authForgotPasswordError({ ...res.data }));
}

function* recoverPassword({ data }: any) {
  console.log('recoverPassword', data)

  const res: ResponseGenerator = yield call(request as any, recoverPasswordService, { ...data });

  if (res?.status === 200) {
    yield put(authRecoverPasswordSuccess({ ...res.data }));
    yield call(history?.replace, Config.ROUTER_PATH.HOME);
    return;
  }
  yield put(authRecoverPasswordError({ ...res.data }));
}

function* getUserProfil(params: { id: unknown }) {
  const res: ResponseGenerator = yield call(request as any, userProfilService, params?.id);
  if (res?.status === 200) {
    yield put(authGetUserProfilSuccess({ ...res.data }));
    return;
  }
    yield put(authGetUserProfilError({ ...res.data }));
}

function* getUsersProfil(params: any): any {
  const search = params?.search ? params.search : '';
  const res = yield call(request as any, getUsersService, search);
  if (res?.status === 200) {
    yield put(authGetUsersProfilSuccess({ search, ...res.data }));
    return;
  }

  yield put(authGetUsersProfilError({ ...res.data }));
}

function* deleteUserProfil(params: any): any {
  const res = yield call(request as any, deleteUsersService, params?.id);
  if (res?.status === 200) {
    yield put(authDeleteUserProfilSuccess());
    return;
  }
  yield put(authDeleteUserProfilError({ ...res.data }));
}

function* updateUserProfil({ ...args }) {

  const res: ResponseGenerator = yield call(request as any, updateUserProfilService, { ...args });
  if (res?.status === 200) {
    yield put(authUpdateUserProfilSuccess());
    return;
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
