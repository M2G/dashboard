/* eslint-disable */
import { Reducer } from 'redux';
import { AuthActionTypes, AuthState } from './types';

// Type-safe initialState!
//@ts-ignore
export const initialState: AuthState = {
  data: [],
  errors: undefined,
  loading: false,
};
//@ts-ignore
const reducer: Reducer<AuthState> = (
  state = initialState,
  action,
) => {
  //@ts-ignore
  const { user: { data = {} } = {}, type } = action || {};
  switch (type) {
    case AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST:
      return { ...state, loading: true };
    case AuthActionTypes.AUTH_UPDATE_USER_PROFIL_REQUEST:
      return { ...state, loading: true, user: action?.user };
    case AuthActionTypes.AUTH_UPDATE_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case AuthActionTypes.AUTH_RECOVER_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case AuthActionTypes.AUTH_FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true };

    case AuthActionTypes.AUTH_GET_USER_PROFIL_SUCCESS:
      return { ...state, loading: false, user: action?.user  };
    case AuthActionTypes.AUTH_UPDATE_USER_PROFIL_SUCCESS:
      return { ...state, loading: false, user: action?.user };
    case AuthActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS:
      return { ...state, loading: false, data: data };
    case AuthActionTypes.AUTH_RECOVER_PASSWORD_SUCCESS:
      return { ...state, loading: false, data: data };
    case AuthActionTypes.AUTH_FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, data: data };

    case AuthActionTypes.AUTH_GET_USER_PROFIL_ERROR:
      return { ...state, loading: false, errors: action };
    case AuthActionTypes.AUTH_UPDATE_USER_PROFIL_ERROR:
      return { ...state, loading: false, errors: data };
    case AuthActionTypes.AUTH_UPDATE_PASSWORD_ERROR:
      return { ...state, loading: false, errors: data };
    case AuthActionTypes.AUTH_RECOVER_PASSWORD_ERROR:
      return { ...state, loading: false, errors: data };
    case AuthActionTypes.AUTH_FORGOT_PASSWORD_ERROR:
      return { ...state, loading: false, errors: data };
    case AuthActionTypes.AUTH_REQUEST_ERROR:
      return { ...state, loading: false, errors: action };

    default:
      return state;
  }
};

/*
 * Instead of using default export, we use named exports. That way we can group these exports
 * inside the `index.js` folder.
 */
export { reducer as authReducer };
