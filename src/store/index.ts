/* eslint-disable */
import { all, fork } from 'redux-saga/effects';
import { combineReducers } from 'redux';

//import { authReducer } from './auth/reducers';
//import { signinReducer } from './signin/reducers';
//import { signinPlatformReducer } from './signinplatform/reducers';
//import { signupReducer } from './signup/reducers';
//import { signoutReducer } from './signout/reducers';
// import { exerciceReducer } from './exercices/reducers';
import { authGlobalReducer } from '../reducers';

//import authSaga from './auth/sagas';
//import signinSaga from './signin/sagas';
//import signinPlatformSaga from './signinplatform/sagas';
//import signupSaga from './signup/sagas';
//import signoutSaga from './signout/sagas';
//import exerciceSaga from './exercices/sagas';

//import { AuthState } from './auth/types';
//import { SigninState } from './signin/types';
//import { ExerciceState } from './exercices/types';
//import { SignupState } from './signup/types';
//import { SignoutState } from './signout/types';
//import { SigninPlatformState } from './signinplatform/types';
import { AuthGlobalState } from '../types';

// The top-level state object
export interface ApplicationState {
  //signin: SigninState;
  //signinplatform: SigninPlatformState;
  //signup: SignupState;
  //signout: SignoutState;
  //exercices: ExerciceState;
  //selected: ExerciceState;
  //auth: AuthState;
  auth_global: AuthGlobalState;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types

/*
 * Whenever an action is dispatched, Redux will update each top-level application state property
 * using the reducer with the matching name. It's important that the names match exactly, and that
 * the reducer acts on the corresponding ApplicationState property type.
 */
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types,@typescript-eslint/no-unused-vars-experimental
function rootReducer() {
  return combineReducers({
    //auth: authReducer,
    auth_global: authGlobalReducer,
    //exercices: exerciceReducer,
    //signup: signupReducer,
    //signinplatform: signinPlatformReducer,
    //signin: signinReducer,
    //signout: signoutReducer,
  });
}

/*
 * Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
 * "generator function", which you can read about here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */
function* rootSaga() {
  yield all([
    //fork(signinSaga),
    //fork(signinPlatformSaga),
    //fork(signupSaga),
    //fork(signoutSaga),
    //fork(authSaga),
    //fork(exerciceSaga)
  ]);
}
//@ts-ignore
export { rootSaga, rootReducer, ApplicationState };
