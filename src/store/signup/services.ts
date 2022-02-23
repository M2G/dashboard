/* eslint-disable */
import api from '../../api';

function signupUserService(params: any) {
  return api.post('/auth/sign-up', params);
}

export default signupUserService;
