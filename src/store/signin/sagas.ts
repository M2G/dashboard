/* eslint-disable */
// @see https://github.com/diegohaz/redux-saga-social-login/blob/master/src/store/social/sagas.js
// @see https://github.com/redux-saga/redux-saga/issues/14

import { all, fork, call, put, take, StrictEffect } from 'redux-saga/effects';
import signinService from './services';
import { SigninActionTypes } from './types';
import { signinUserSuccess, signinUserError } from './actions';
import { signinSuccess } from '../../actions';
import { setAuthStorage } from 'services/Storage';
import Config from 'constants/index';
import { history } from 'index';
import ROUTER_PATH from 'constants/RouterPath';

function* authorize({ ...params }): Generator<StrictEffect, any, any> {
  try {
    const response = yield call(signinService, params);

    console.log('response response response', response);

    if (response?.status === 200) {
      const signinSuccessResponse = yield put(signinUserSuccess(response));

      console.log('signinSuccessResponse', signinSuccessResponse);

      if (signinSuccessResponse) {
        console.log('signinSuccessResponse 2 ', signinSuccessResponse);

        const {
          data: { token },
        } = response?.data;

        console.log('token token token 2 ', token);

        Config.GLOBAL_VAR.token = token;
        yield call(setAuthStorage, token);
        yield put(signinSuccess());
        yield call(forwardTo, history, ROUTER_PATH.HOME);
      }
    } else {
      yield put(signinUserError({ errors: response?.data }));
    }
  } catch (e: any) {
    yield put(signinUserError({ errors: e?.message }));
  }
}

function* watchSignin(): any {
  while (true) {
    const request = yield take(SigninActionTypes.SIGNIN_USER_REQUEST);
    yield call(authorize, { ...request?.user });
  }
}

function forwardTo(history: { push: Function }, location: string) {
  return history.push({ pathname: location });
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* signinSaga(): any {
  yield all([fork(watchSignin)]);
}

export default signinSaga;