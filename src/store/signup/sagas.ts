/* eslint-disable */
import { all, fork, call, put, take } from 'redux-saga/effects';
import signupUserService from './services';
import { SignupActionTypes } from './types';
import { signupUserSuccess, signupUserError } from './actions';
import { signupSuccess } from '../../actions';
import { setUserStorage } from '../../services/Storage';

function* watchSignup() {
  while (true) {
    const { user } = yield take(SignupActionTypes.SIGNUP_USER_REQUEST);
    yield call(authorize, user);
  }
}

function* authorize(user: { history: any; path: any; password: any; }) {
  const history = user?.history;
  const path = user?.path;
  delete user?.history;
  delete user?.path;

  try {
    // @ts-ignore
    const response = yield call(signupUserService, user);

    console.log('response :::', response);

    if (response?.ok) {
      // @ts-ignore
      const signinSuccessResponse = yield put(signupUserSuccess(response));

      if (signinSuccessResponse) {

        const newUserData = { ...response?.data, password: user?.password };

        console.log('newUserData', newUserData);

        yield put(signupSuccess());
        yield call(setUserStorage, JSON.stringify(newUserData));
        yield call(forwardTo, history, path);
      }
    } else {
      yield put(signupUserError({ error: response?.data }));
    }
  } catch (e) {
    // @ts-ignore
    yield put(signupUserError({ error: e.message }));
  }
}

function forwardTo(history: any[], location: any) {
  history.push(location);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* signupSaga() {
  yield all([fork(watchSignup)]);
}

export default signupSaga;
