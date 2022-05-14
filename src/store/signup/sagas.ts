/* eslint-disable */
import { all, fork, call, put, take, StrictEffect } from 'redux-saga/effects';
import signupUserService from './services';
import { SignupActionTypes } from './types';
import { signupUserSuccess, signupUserError } from './actions';
import { signupSuccess } from '../../actions';

function* authorize({
                      email,
                      password,
                      redirect,
                    }: {
  email: string;
  password: string;
  redirect: boolean;
}): Generator<StrictEffect, any, any> {

  console.log('redirect redirect redirect', redirect)

  try {
    const response = yield call(signupUserService, { email, password });
    if (response?.status === 200) {
      yield put(signupUserSuccess(response));
      yield put(signupSuccess());
      // if (redirect) yield call(forwardTo, history, ROUTER_PATH.SIGNIN);
    } else {
      yield put(signupUserError({ error: response?.data }));
    }
  } catch (e: any) {
    yield put(signupUserError({ error: e.message }));
  }
}

function* watchSignup(): any {
  while (true) {
    const { user } = yield take(SignupActionTypes.SIGNUP_USER_REQUEST);

    console.log('user user user', user);

    yield call(authorize, user);
  }
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* signupSaga() {
  yield all([fork(watchSignup)]);
}

export default signupSaga;
