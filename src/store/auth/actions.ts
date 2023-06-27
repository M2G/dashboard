import { AuthActionTypes } from './types';

export const authCreateUserProfilAction = (data: any) => ({
  data,
  type: AuthActionTypes.AUTH_CREATE_USER_PROFIL_REQUEST,
});

export const authUpdateUserProfilAction = (data: any) => ({
  data,
  type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_REQUEST,
});

export const authDeleteUserProfilAction = ({
  id,
}: {
  id: number;
}): { id: number; type: AuthActionTypes } => ({
  id,
  type: AuthActionTypes.AUTH_DELETE_USER_PROFIL_REQUEST,
});

export const authDeleteUserProfilSuccess = (): { type: AuthActionTypes } => ({
  type: AuthActionTypes.AUTH_DELETE_USER_PROFIL_SUCCESS,
});

export const authDeleteUserProfilError = (errors: any) => ({
  errors,
  type: AuthActionTypes.AUTH_DELETE_USER_PROFIL_ERROR,
});

export const authGetUserProfilErrorAction = (data: any) => ({
  data,
  type: AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST,
});

export const authGetUsersProfilAction = (args?: any) => ({
  type: AuthActionTypes.AUTH_GET_USERS_PROFIL_REQUEST,
  ...args,
});

export const authUpdatePasswordAction = (data: any) => {
  console.log('authUpdatePasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_REQUEST,
  };
};

export const authRecoverPasswordAction = (data: any) => {
  console.log('authRecoverPasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_REQUEST,
  };
};

export const authForgotPasswordAction = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_REQUEST,
  };
};

export const authForgotPasswordError = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_ERROR,
  };
};

export const authUpdateUserProfilSuccess = () => ({
  type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_SUCCESS,
});

export const authUpdateUserProfilError = (data: any) => {
  console.log('authUpdateUserProfilError', data);
  return {
    data,
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_ERROR,
  };
};

export const authGetUsersProfilSuccess = ({ data, ...args }: any) => {
  console.log('authGetUsersProfilSuccess', data, args);
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_SUCCESS,
    ...args,
  };
};

export const authGetUserProfilSuccess = (data: any) => {
  console.log('authUpdateUserProfilAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_SUCCESS,
  };
};

export const authGetUserProfilError = (data: any) => {
  console.log('authGetUserProfilError', data);
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_ERROR,
  };
};

export const authGetUsersProfilError = (data: any) => {
  console.log('authGetUserProfilError', data);
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_ERROR,
  };
};

export const authUpdatePasswordSuccess = (data: any) => {
  console.log('authUpdatePasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS,
  };
};

export const authRecoverPasswordSuccess = (data: any) => {
  console.log('authRecoverPasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_SUCCESS,
  };
};

export const authRecoverPasswordError = (data: any) => {
  console.log('authRecoverPasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_ERROR,
  };
};

export const authForgotPasswordSuccess = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_SUCCESS,
  };
};

export const authRequestErrorAction = (data: any) => {
  console.log('authForgotPasswordAction', data);
  return {
    data,
    type: AuthActionTypes.AUTH_REQUEST_ERROR,
  };
};
