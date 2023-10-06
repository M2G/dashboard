/* eslint-disable */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  deleteUsersService,
  forgotPasswordService,
  getUsersService,
  recoverPasswordService,
  updateUserProfilService,
  userProfilService,
} from './services';

import ROUTER_PATH from 'constants/RouterPath';
import { history } from 'index';
import { clearAuthStorage, clearUserStorage } from 'services/storage';
import { signoutUserAction } from 'store/signout/actions';
import Config from '../../constants';
import {
  authDeleteUserProfilError,
  authDeleteUserProfilSuccess,
  authForgotPasswordError,
  authForgotPasswordSuccess,
  authGetUserProfilError,
  authGetUserProfilSuccess,
  authGetUsersProfilError,
  // authRequestErrorAction,
  authGetUsersProfilSuccess,
  authRecoverPasswordError,
  authRecoverPasswordSuccess,
  authUpdateUserProfilError,
  authUpdateUserProfilSuccess,
} from './actions';
import { AuthActionTypes } from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function forwardTo(history: { push: Function }, location: string) {
  return history.push({ pathname: location });
}

function* getUserProfil(params: { id }): any {
  try {
    const res: ResponseGenerator = yield call(userProfilService, params?.id);

    yield put(authGetUserProfilSuccess({ ...res.data }));
  } catch (err) {
    if (err?.response?.status === 401) {
      yield clearAuthStorage();
      yield clearUserStorage();
      yield call(forwardTo, history, ROUTER_PATH.SIGNIN);
      return yield put(signoutUserAction({ ...err.response.data.error }));
    }

    if (err instanceof Error) {
      return yield put(authGetUsersProfilError({ ...(err.stack as any) }));
    }

    yield put(authGetUserProfilError('An unknown error occured.'));
  }
}

function* getUsersProfil({ filters, page, pageSize }): any {
  try {
    const res = yield call(getUsersService, { filters, page, pageSize });
    yield put(authGetUsersProfilSuccess({ filters, ...res.data }));
  } catch (err) {
    if (err?.response?.status === 401) {
      yield clearAuthStorage();
      yield clearUserStorage();
      yield call(forwardTo, history, ROUTER_PATH.SIGNIN);
      return yield put(signoutUserAction({ ...err.response.data.error }));
    }

    if (err instanceof Error) {
      return yield put(authGetUsersProfilError({ ...(err.stack as any) }));
    }

    yield put(authGetUsersProfilError('An unknown error occured.'));
  }
}
function* watchUser() {
  yield takeEvery(AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST as any, getUserProfil);
}

function* watchUsers() {
  yield takeEvery(AuthActionTypes.AUTH_GET_USERS_PROFIL_REQUEST as any, getUsersProfil);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* authSaga() {
  yield all([fork(watchUsers), fork(watchUser)]);
}

export { authSaga, getUserProfil, getUsersProfil };
