/*eslint-disable*/
import { call, put } from 'redux-saga/effects';
import {
  forgotPassword,
  recoverPassword,
  getUserProfil,
  request,
  getUsersProfil,
  deleteUserProfil, updateUserProfil,
} from './sagas';
import {
  authRecoverPasswordSuccess,
  authForgotPasswordSuccess,
  authForgotPasswordError,
  authRecoverPasswordError,
  authGetUsersProfilSuccess,
  authGetUsersProfilError,
  authGetUserProfilSuccess,
  authGetUserProfilError,
  authDeleteUserProfilSuccess,
  authDeleteUserProfilError,
  authUpdateUserProfilSuccess, authUpdateUserProfilError,

} from './actions';
import {
  deleteUsersService,
  forgotPasswordService,
  getUsersService,
  recoverPasswordService, updateUserProfilService, userProfilService,
} from 'store/auth/services';

describe('Auth saga', () => {
  describe('ForgotPassword saga', () => {
    const data = {
      email: 'test@test.com',
    };

    describe('when forgotPassword success', () => {
      test('should dispatch success action', () => {
        const saga = forgotPassword({ data });
        const response = {
          status: 200,
         data: {
           email: 'test@test.com',
         }
        };

        expect(saga.next().value).toEqual(call(request as any, forgotPasswordService, data));
        expect(saga.next(response).value).toEqual(put(authForgotPasswordSuccess(response.data)));
      });
    });

    describe('when forgotPassword fail', () => {
      test('should dispatch fail action', () => {
        const saga = forgotPassword({ data });

        const responseError = {
          status: 500,
          data: {
            error: 'internal server error',
          }
        };

        expect(saga.next().value).toEqual(call(request as any, forgotPasswordService, data));
        expect(saga.next(responseError).value).toEqual(put(authForgotPasswordError(responseError.data)));
      });
    });
  });
  describe('recoverPassword saga', () => {
    const data = {
      email: 'test@test.com',
    };

    describe('when recoverPassword success', () => {
      test('should dispatch success action', () => {
        const saga = recoverPassword({ data });
        const response = {
          status: 200,
          data: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im0ucGllcnJlbG91aXNAaG90bWFpbC5mciIsInBhc3N3b3JkIjoiJDJiJDEwJEh6bGVCYlQ5dVlkMmNVZnlXZWlOMmVoYUg3aGtUbHlXWWFFYy5qWG13WDJtZHNxM2JkV00uIiwiaWF0IjoxNjU1MDgxMTA3LCJleHAiOjE2NTUwODQ3MDcsImF1ZCI6W10sInN1YiI6Im0ucGllcnJlbG91aXNAaG90bWFpbC5mciJ9.HEntwrdjY4jxGpHSVfDC2-RzK6pYT6aD2HNGxyb5Qzo',
            new_password: 'test',
            verify_password: 'test',
          }
        };

        expect(saga.next().value).toEqual(call(request as any, recoverPasswordService, data));
        expect(saga.next(response).value).toEqual(put(authRecoverPasswordSuccess(response.data)));
      });
    });

    describe('when recoverPassword fail', () => {
      test('should dispatch fail action', () => {
        const saga = recoverPassword({ data });

        const responseError = {
          status: 500,
          data: {
            error: 'internal server error',
          }
        };

        expect(saga.next().value).toEqual(call(request as any, recoverPasswordService, data));
        expect(saga.next(responseError).value).toEqual(put(authRecoverPasswordError(responseError.data)));
      });
    });
  });
  describe('getUserProfil saga', () => {
    const params = {
      id: '62aa40abce7734608ac729fa',
    };

    describe('when getUserProfil success', () => {
      test('should dispatch success action', () => {
        const saga = getUserProfil(params);
        const response = {
          status: 200,
          data: {
            "email": "test@test.com",
            "password": "$2b$10$SBPtg7lhZG2MjeVKjNJkjOk7jEdb9FGjCDviQxyG2p0fSsujRyw6a",
            "created_at": "2022-06-10T01:02:54.882Z",
            "_id": "62a2983ea7a81caa9a40c6e3",
          }
        };

        expect(saga.next().value).toEqual(call(request as any, userProfilService, params.id));
        expect(saga.next(response).value).toEqual(put(authGetUserProfilSuccess(response.data)));
      });
    });

    describe('when getUserProfil fail', () => {
      test('should dispatch fail action', () => {
        const saga = getUserProfil(params);

        const responseError = {
          status: 500,
          data: {
            error: 'internal server error',
          }
        };

        expect(saga.next().value).toEqual(call(request as any, userProfilService, params.id));
        expect(saga.next(responseError).value).toEqual(put(authGetUserProfilError(responseError.data)));
      });
    });
  });
  describe('getUsersProfil saga', () => {
    const params = {
      search: 'test',
    };

    describe('when getUsersProfil success', () => {
      test('should dispatch success action', () => {
        const saga = getUsersProfil(params);
        const response = {
          status: 200,
          data: {
            "email": "test@test.com",
            "password": "$2b$10$SBPtg7lhZG2MjeVKjNJkjOk7jEdb9FGjCDviQxyG2p0fSsujRyw6a",
            "search": "test",
            "created_at": "2022-06-10T01:02:54.882Z",
            "_id": "62a2983ea7a81caa9a40c6e3",
          }
        };

        expect(saga.next().value).toEqual(call(request as any, getUsersService, params.search));
        expect(saga.next(response).value).toEqual(put(authGetUsersProfilSuccess(response.data)));
      });
    });

    describe('when getUsersProfil fail', () => {
      test('should dispatch fail action', () => {
        const saga = getUsersProfil(params);

        const responseError = {
          status: 500,
          data: {
            error: 'internal server error',
          }
        };

        expect(saga.next().value).toEqual(call(request as any, getUsersService, params.search));
        expect(saga.next(responseError).value).toEqual(put(authGetUsersProfilError(responseError.data)));
      });
    });
  });
  describe('deleteUserProfil saga', () => {
    const params = {
      id: '62aa40abce7734608ac729fa',
    };

    describe('when deleteUserProfil success', () => {
      test('should dispatch success action', () => {
        const saga = deleteUserProfil(params);
        const response = {
          status: 200,
          data: {
            "email": "test@test.com",
            "password": "$2b$10$SBPtg7lhZG2MjeVKjNJkjOk7jEdb9FGjCDviQxyG2p0fSsujRyw6a",
            "search": "test",
            "created_at": "2022-06-10T01:02:54.882Z",
            "_id": "62a2983ea7a81caa9a40c6e3",
          }
        };

        expect(saga.next().value).toEqual(call(request as any, deleteUsersService, params.id));
        expect(saga.next(response).value).toEqual(put(authDeleteUserProfilSuccess()));
      });
    });

    describe('when deleteUserProfil fail', () => {
      test('should dispatch fail action', () => {
        const saga = deleteUserProfil(params);

        const responseError = {
          status: 500,
          data: {
            error: 'internal server error',
          }
        };

        expect(saga.next().value).toEqual(call(request as any, deleteUsersService, params.id));
        expect(saga.next(responseError).value).toEqual(put(authDeleteUserProfilError(responseError.data)));
      });
    });
  });
  describe('updateUserProfil saga', () => {
    const params = {
      id: '62aa40abce7734608ac729fa',
      first_name: "test",
      last_name: "test",
    };

    describe('when updateUserProfil success', () => {
      test('should dispatch success action', () => {
        const saga = updateUserProfil(params);
        const response = {
          status: 200,
          data: {
            "email": "test@test.com",
            "password": "$2b$10$SBPtg7lhZG2MjeVKjNJkjOk7jEdb9FGjCDviQxyG2p0fSsujRyw6a",
            "search": "test",
            "created_at": "2022-06-10T01:02:54.882Z",
            "_id": "62a2983ea7a81caa9a40c6e3",
          }
        };

        expect(saga.next().value).toEqual(call(request as any, updateUserProfilService, params));
        expect(saga.next(response).value).toEqual(put(authUpdateUserProfilSuccess()));
      });
    });

    describe('when updateUserProfil fail', () => {
      test('should dispatch fail action', () => {
        const saga = updateUserProfil(params);

        const responseError = {
          status: 500,
          data: {
            error: 'internal server error',
          }
        };

        expect(saga.next().value).toEqual(call(request as any, updateUserProfilService, params));
        expect(saga.next(responseError).value).toEqual(put(authUpdateUserProfilError(responseError.data)));
      });
    });
  });
});
