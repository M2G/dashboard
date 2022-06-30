import { authReducer } from './reducers';

describe('todos reducer', () => {
  it('should handle initial state', () => {
   expect(
        authReducer(undefined, { data: [], errors: {}, type: '' }),
     ).toEqual({ data: [], errors: undefined, loading: false});
  });

  it('should handle AUTH_GET_USER_PROFIL_REQUEST', () => {
    expect(
      authReducer(
        { data: [], errors: undefined, loading: false },
        { type: 'AUTH_GET_USER_PROFIL_SUCCESS' },
      ),
    )
      .toEqual({
        data: [],
        errors: undefined,
        loading: false,
      });
  });

  it('should handle AUTH_GET_USERS_PROFIL_REQUEST', () => {
    expect(
      authReducer(
        { data: [], errors: undefined, loading: false },
        { type: 'AUTH_GET_USERS_PROFIL_REQUEST' },
      ),
    )
      .toEqual({
        data: [],
        errors: undefined,
        loading: false,
      });
  });

  it('should handle AUTH_GET_USER_PROFIL_SUCCESS', () => {
    const data = [
      {
        _id: "62bb94deb0f09b1a1803ce3e",
        created_at: "2022-06-28T23:55:10.120Z",
        email: "foucauld@soundcast.fm",
        first_name: "test",
        last_name: "test",
        modified_at: "2022-06-28T23:55:23.421Z",
      },
    ];

    expect(
      authReducer(
{ data: [], errors: undefined, loading: false },
        { data, type: 'AUTH_GET_USER_PROFIL_SUCCESS' },
      ),
      )
      .toEqual({
        data: [],
      errors: undefined,
      loading: false,
    });
  });
});
