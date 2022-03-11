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
  //forgotPasswordService,
  userProfilService,
  updateUserProfilService,
  getUsersService,
} from './services';

import { AuthActionTypes } from './types';
import {
  //authForgotPasswordErrorAction,
  authGetUserProfilSuccess,
  authGetUserProfilError,
  //  authForgotPasswordAction,
  authUpdateUserProfilSuccess,
  authUpdateUserProfilError,
  authRequestErrorAction,
  authGetUsersProfilSuccess,
} from './actions';
import { signoutUserAction } from 'store/signout/actions';
import { history } from 'index';
//import Config from '../../constants';

function* request(
  api: any,
  params: unknown,
  extendParams: unknown
): Generator<StrictEffect, any, any> {
  try {
    const res = yield call(api, params, extendParams);
    if (res?.status === 401) {
      return yield put(signoutUserAction({ ...res.data }));
    }
    return res;
  } catch (error: any) {
    return yield put(authRequestErrorAction({ ...error }));
  }
}

function* forgotPassword({ data }: any) {
  /*
  const res = yield call(forgotPasswordService, { email: data?.login });

  if (res?.status === 200) {
    yield call(data?.history?.replace, Config.ROUTER_PATH.RESET_PASSWORD);
  } else {
    yield put(authForgotPasswordErrorAction({ ...res.data }));
  }*/
}

function* getUserProfil(params: { id: unknown }) {
  //@ts-ignore
  const res = yield call(request, userProfilService, params?.id);
  if (res?.status === 200) {
    yield put(authGetUserProfilSuccess({ ...res.data }));
  } else {
    yield put(signoutUserAction({ ...res.data }));
    yield put(authGetUserProfilError(res.data));
  }
}

function* getUsersProfil(params: any): any {
  console.log('getUsersProfil getUsersProfil', params);
  const res = yield call(request as any, getUsersService, params?.search);

  console.log('getUsersProfil getUsersProfil res res res', res);

  const args = params?.search ? params.search : {};

  if (res?.status === 200) {
    yield put(authGetUsersProfilSuccess({ args, ...res.data }));
  } else {
    yield put(signoutUserAction({ ...res.data }));
    yield put(authGetUserProfilError(res.data));
  }
}

// @ts-ignore
function* updateUserProfil({ user }) {
  const path = user?.path;
  delete user?.history;
  delete user?.path;

  // @ts-ignore
  const res = yield call(request, updateUserProfilService, user?._id, user);
  if (res?.status && res?.status === 200) {
    yield put(authUpdateUserProfilSuccess({ ...res.data }));
    if (history && path) {
      yield call(history.replace, path);
    }
  } else {
    yield put(signoutUserAction({ ...res.data }));
    yield put(authUpdateUserProfilError({ ...res.data }));
  }
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

function* recoverPassword(api, action) {
  const { params } = action;
  const res = yield call(api.recoverPassword, params);

  if (res.status && res.status === 202) {
    history.replace('/');
  } else if (res.status && res.status === 422) {
    const error = res.data.map((item) => ({
      [item.field]: item.message,
    }));

    yield put(
      signinUserError({
        error,
        recoverPassword: true,
      }),
    );
  } else {
    yield put(
      signinUserError({
        ...res.data,
        recoverPassword: true,
      }),
    );
  }
}*/

// @ts-ignore
function forwardTo(history: { push: Function }, location: string) {
  return history.push({
    pathname: location,
    state: {
      message: 'Signin Success',
    },
  });
}

function* watchAuth() {
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

// We can also use `fork()` here to split our saga into multiple watchers.
function* authSaga() {
  yield all([
    fork(watchAuth),
    fork(watchUsers),
    fork(watchUser),
    fork(watchUpdateUser),
  ]);
}

export default authSaga;
