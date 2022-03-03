/* eslint-disable */
import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import {
  forgotPasswordService,
  userProfilService,
  updateUserProfilService,
  getUsersService,
} from './services';

import { AuthActionTypes } from './types';
import {
  authForgotPasswordErrorAction,
  authGetUserProfilSuccess,
  authGetUserProfilError,
  //  authForgotPasswordAction,
  authUpdateUserProfilSuccess,
  authUpdateUserProfilError,
  authRequestErrorAction,
  authGetUsersProfilSuccess,
} from './actions';
import { signoutUserAction } from '../signout/actions';
import { history } from 'index';
import Config from '../../constants';

function* request(api: any, params: unknown, extendParams: unknown) {
  try {
    // @ts-ignore
    const res = yield call(api, params, extendParams);
    if (res?.status && res?.status === 401) {
      // @ts-ignore
      return yield put(signoutUserAction({ ...res.data }));
    }
    return res;
  } catch (error) {
    // @ts-ignore
    return yield put(authRequestErrorAction({ ...error }));
  }
}

//@ts-ignore

/*
const tokenHasExpired = ({ expires_in, created_at }: {
  expires_in: number,
  created_at: number,
}) => {
  const MILLISECONDS_IN_MINUTE = 1000 * 60;

  // set refreshBuffer to 10 minutes
  // so the token is refreshed before expiry
  const refreshBuffer = MILLISECONDS_IN_MINUTE * 10;

  // expiry time
  // multiplied by 1000 as server time are return in seconds, not milliseconds
  const expires_at = new Date((created_at + expires_in) * 1000).getTime();
  // the current time
  const now = new Date().getTime();
  // when we want the token to be refreshed
  const refresh_at = expires_at - refreshBuffer;

  return now >= refresh_at;
};

function* RefreshLoop() {
  const maxRetries = 5;
  let retries = 0;

  while (true) {
    const { expires_in, created_at, refresh_token } = yield select(getAuth);

    // if the token has expired, refresh it
    if (
      expires_in !== null &&
      created_at !== null &&
      tokenHasExpired({ expires_in, created_at })
    ) {
      const refreshed = yield call(RefreshToken, refresh_token);

      // if the refresh succeeded set the retires to 0
      // if the refresh failed, log a failure
      if (refreshed) {
        // if the token has been refreshed, and their had been retries
        // let the user know everything is okay
        if (retries > 0) {
          // @TODO add hook
        }
        retries = 0;
      } else {
        retries = retries + 1;
      }

      if (retries > 0 && retries < maxRetries) {
        // @TODO add hook
      }

      if (retries === maxRetries) {
        // @TODO add hook
      }
    }

    // check again in 5 seconds
    // this will also replay failed refresh attempts
    yield delay(5000);
  }
}

  function* Authorize(action) {
    try {
      const { onSuccess, payload } = action;

      const params = {
        ...payload,
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
      };

      const { data: token } = yield call(axios.post, OAUTH_URL, params);
      yield put(authLogin(token));

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      const { onError } = action;

      if (onError) {
        onError(error.response ? error.response.data : error);
      }

      if (error.response) {
        yield put(authLoginError(error.response.data));
      } else {
        yield put(authLoginError(error));
      }
    }
  }

   function* Authentication(): Generator<*, *, *> {
    while (true) {
      const { loggedIn } = yield select(getAuth);
      var authorizeTask = null;

      // if the users is logged in, we can skip over this bit
      if (!loggedIn) {
        // wait for a user to request to login
        // or any custom login actions
        const actions = yield race({
          login: take(AUTH_LOGIN_REQUEST),
          ...loginActions,
        });

        if (actions.login) {
          // in the background, run a task to log them in
          authorizeTask = yield fork(Authorize, actions.login);
        }
      } else {
        // dispatch an action so we know the user is back into an
        // authenticated state
        yield put(authRestore());
      }

      // wait for...
      // the user to logout (AUTH_LOGOUT_REQUEST)
      // OR an error to occur during login (AUTH_LOGIN_ERROR)
      // OR the user to become unauthorized (AUTH_INVALID_ERROR)
      // but while they are logged in, begin the refresh token loop
      const actions = yield race({
        logout: take(AUTH_LOGOUT_REQUEST),
        loginError: take(AUTH_LOGIN_ERROR),
        unauthorized: take(AUTH_INVALID_ERROR),
        refresh: call(RefreshLoop),
      });

      // cancel the authorizeTask task if it's running and exists
      if (authorizeTask !== null) {
        yield cancel(authorizeTask);
      }

      // finally log the user out
      yield put(authLogout());
    }
  }


*/

function* forgotPassword({ user }: any) {
  // @ts-ignore
  const res = yield call(forgotPasswordService, { email: user?.login });

  if (res.status && res.status === 200) {
    yield call(user?.history?.replace, Config.ROUTER_PATH.RESET_PASSWORD);
  } else {
    yield put(authForgotPasswordErrorAction({ ...res.data }));
  }
}

function* getUserProfil(params: { id: unknown }) {
  //@ts-ignore
  const res = yield call(request, userProfilService, params?.id);
  if (res?.status && res?.status === 200) {
    yield put(authGetUserProfilSuccess({ ...res.data }));
  } else {
    yield put(signoutUserAction({ ...res.data }));
    yield put(authGetUserProfilError(res.data));
  }
}

function* getUsersProfil() {
  console.log('--------> getUsersProfil');

  //@ts-ignore
  const res = yield call(request, getUsersService);
  if (res?.status && res?.status === 200) {
    yield put(authGetUsersProfilSuccess({ ...res.data }));
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
