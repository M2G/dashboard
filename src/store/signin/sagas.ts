/* eslint-disable */
// @see https://github.com/diegohaz/redux-saga-social-login/blob/master/src/store/social/sagas.js
// @see https://github.com/redux-saga/redux-saga/issues/14
import { all, fork, call, put, take } from 'redux-saga/effects';
import signinService from './services';
import { SigninActionTypes } from './types';
import { signinUserSuccess, signinUserError } from './actions';
import { signinSuccess } from '../../actions';
import { setAuthStorage, setTokenStorage } from '../../services/Storage';
import Config from '../../constants';
import ROUTER_PATH from '../../constants/RouterPath';

// @ts-ignore
function* authorize({ username, password, history }): any {
  try {
    const response = yield call(signinService, { username, password });

    console.log('token', response)

    if (response?.status === 200) {
      const signinSuccessResponse = yield put(signinUserSuccess(response));
      if (signinSuccessResponse) {
        Config.GLOBAL_VAR.token = response?.data?.token;
        yield call(setAuthStorage, response?.data?.token);
        yield call(setTokenStorage,
          JSON.stringify(
            JSON.parse(
              window?.atob(response?.data?.token?.split('.')?.[1])
            )));

        yield put(signinSuccess());
        yield call(forwardTo, history, ROUTER_PATH.HOME);
      }
    } else {
      yield put(signinUserError({ errors: response?.data }));
    }
  } catch (e) {
    // @ts-ignore
    yield put(signinUserError({ errors: e?.message }));
  }
}

function* watchSignin(): any {
  while (true) {
    const request = yield take(SigninActionTypes.SIGNIN_USER_REQUEST);
    const { username, password, history } = request?.service;
    yield call(authorize, { username, password, history });
  }
}

function forwardTo(history: { push: Function }, location: string) {
  return history.push({ pathname: location });
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* signinSaga(): any {
  yield all([
    fork(watchSignin),
  ]);
}

export default signinSaga;
