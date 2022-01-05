/* eslint-disable */
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Config from './config';

const { NODE_ENV } = process.env;
const api = axios.create({
  // base URL is read from the "constructor"
  baseURL: 'https://sso.stayinshape.fit',
  // here are some default headers
  headers: {
    'Content-Type': 'application/json',
  },
  // 20 second timeout...
  timeout: 20000,

  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    const { token } = Config.GLOBAL_VAR;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return data;
  }],
});

// This sets the mock adapter on the default instance
const mock = new MockAdapter(api);

/*
api.addAsyncRequestTransform((request) => async () => {
  const { token } = Config.GLOBAL_VAR;
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }
});

});
*/

const myInterceptor = api.interceptors.response.use(
  (response) => response,
  (error) => {
    /*
     * @see https://github.com/axios/axios#interceptors
     * https://github.com/axios/axios/issues/2321
     * https://stackoverflow.com/questions/57251719/acquiring-a-new-token-with-axios-interceptors
     * https://stackoverflow.com/questions/51646853/automating-access-token-refreshing-via-interceptors-in-axios
     */

    console.log('interceptors', error?.response);

    api.interceptors.response.eject(myInterceptor);
    NODE_ENV === 'development' ? alert(JSON.stringify(error?.response)) : '';
    return Promise.reject(error);
  },
);

export { api, mock };
