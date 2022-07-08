import api from 'api';
import {
  forgotPasswordService,
  recoverPasswordService,
  getUsersService,
  createUserProfilService,
  userProfilService,
  updateUserProfilService,
  deleteUsersService,
} from './services';

jest.mock('api');

describe('forgotPasswordService', () => {
  const data = {
    data: {
      email: 'test@test.com',
    },
  };

  it('fetches successfully data from an API', async () => {
    api.post.mockImplementationOnce(async () => Promise.resolve(data.data));

    const result = await forgotPasswordService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith("/auth/forgot-password", data.data);
    expect(result).toEqual(data.data);
  });

  it('fetches erroneously data from an API', async () => {
    const message = "Network Error";
    api.get.mockRejectedValueOnce(new Error(message));

    // when
    const result = await forgotPasswordService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith("/auth/forgot-password", data.data);
    expect(result).toEqual(undefined);
  });
});
describe('recoverPasswordService', () => {
  const data = {
    data: {
      new_password: 'test',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im0ucGllcnJlbG91aXNAaG90bWFpbC5mciIsInBhc3N3b3JkIjoiJDJiJDEwJEh6bGVCYlQ5dVlkMmNVZnlXZWlOMmVoYUg3aGtUbHlXWWFFYy5qWG13WDJtZHNxM2JkV00uIiwiaWF0IjoxNjU1MDgxMTA3LCJleHAiOjE2NTUwODQ3MDcsImF1ZCI6W10sInN1YiI6Im0ucGllcnJlbG91aXNAaG90bWFpbC5mciJ9.HEntwrdjY4jxGpHSVfDC2-RzK6pYT6aD2HNGxyb5Qzo',
      verify_password: 'test',
    },
  };

  it('fetches successfully data from an API', async () => {
    api.post.mockImplementationOnce(async () => Promise.resolve(data.data));

    const result = await recoverPasswordService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith("/auth/reset-password", data.data);
    expect(result).toEqual(data.data);
  });

  it('fetches erroneously data from an API', async () => {
    const message = "Network Error";
    api.get.mockRejectedValueOnce(new Error(message));

    // when
    const result = await recoverPasswordService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith("/auth/reset-password", data.data);
    expect(result).toEqual(undefined);
  });
});
describe('userProfilService', () => {
  const data = {
      id: '6296a5676ebd83dd427a609b',
  };

  it('fetches successfully data from an API', async () => {
    api.get.mockImplementationOnce(async () => Promise.resolve(data.id));

    const result = await userProfilService(data.id);

    // then
    expect(api.get).toHaveBeenCalledWith(`/users/${data.id}`);
    expect(result).toEqual(data.id);
  });

  it('fetches erroneously data from an API', async () => {
    const message = "Network Error";
    api.get.mockRejectedValueOnce(new Error(message));

    // when
    const result = await userProfilService(data.id);

    // then
    expect(api.get).toHaveBeenCalledWith(`/users/${data.id}`);
    expect(result).toEqual(undefined);
  });
});
describe('createUserProfilService', () => {
  const data = {
    data: {
      first_name: "test",
      last_name: "test",
      username: "test",
    },
  };

  it('fetches successfully data from an API', async () => {
    api.post.mockImplementationOnce(async () => Promise.resolve(data.data));

    const result = await createUserProfilService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith("/users/", data.data);
    expect(result).toEqual(data.data);
  });

  it('fetches erroneously data from an API', async () => {
    const message = "Network Error";
    api.post.mockRejectedValueOnce(new Error(message));

    // when
    const result = await createUserProfilService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith("/users/", data.data);
    expect(result).toEqual(undefined);
  });
});
