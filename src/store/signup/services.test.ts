import api from 'api';
import signupUserService from './services';

jest.mock('api');

describe('signupUserService', () => {
  const data = {
    data: {
      email: 'test',
      password: 'test',
    },
  };

  it('fetches successfully data from an API', async () => {
    api.post.mockImplementationOnce(async () => Promise.resolve(data.data));

    const result = await signupUserService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith(`/auth/register`, data.data);
    expect(result).toEqual(data.data);
  });

  it('fetches erroneously data from an API', async () => {
    const message = "Network Error";
    api.get.mockRejectedValueOnce(new Error(message));

    // when
    const result = await signupUserService(data.data);

    // then
    expect(api.post).toHaveBeenCalledWith(`/auth/register`, data.data);
    expect(result).toEqual(undefined);
  });
});
