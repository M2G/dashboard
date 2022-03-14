/* eslint-disable */
import { all, fork, call, put, take, StrictEffect } from 'redux-saga/effects';
import { BrowserHistory } from 'history';
import signupUserService from './services';
import { SignupActionTypes } from './types';
import { signupUserSuccess, signupUserError } from './actions';
import { signupSuccess } from '../../actions';
import { history } from 'index';
import ROUTER_PATH from 'constants/RouterPath';

function* authorize(user: {
  email: string;
  password: string;
}): Generator<StrictEffect, any, any> {
  try {
    const response = yield call(signupUserService, user);
    if (response?.status === 200) {
      yield put(signupUserSuccess(response));
      yield put(signupSuccess());
      yield call(forwardTo, history, ROUTER_PATH.SIGNIN);
    } else {
      yield put(signupUserError({ error: response?.data }));
    }
  } catch (e: any) {
    yield put(signupUserError({ error: e.message }));
  }
}

function forwardTo(history: BrowserHistory, url: any) {
  return history.push(url);
}

function* watchSignup(): any {
  while (true) {
    const { user } = yield take(SignupActionTypes.SIGNUP_USER_REQUEST);
    yield call(authorize, user);
  }
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* signupSaga() {
  yield all([fork(watchSignup)]);
}

export default signupSaga;
