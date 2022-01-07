/* eslint-disable */
import { Reducer } from 'redux';
import { SignupActionTypes, SignupState } from './types';

// Type-safe initialState!
export const initialState: SignupState = {
  data: [],
  errors: undefined,
  loading: false,
  currentStep: 0,
};

const reducer: Reducer<SignupState> = (
  state = initialState,
  action,
) => {
  const { user, type } = action;
  switch (type) {
    case SignupActionTypes.SIGNUP_USER_REQUEST:
      return { ...state, loading: true, data: user };
    case SignupActionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, loading: false, data: user };
    case SignupActionTypes.SIGNUP_USER_ERROR:
      return { ...state, loading: false, errors: user };
    default:
      return state;
  }
};

/*
 * Instead of using default export, we use named exports. That way we can group these exports
 * inside the `index.js` folder.
 */
export { reducer as signupReducer };
