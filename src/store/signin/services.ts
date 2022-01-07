import api from '../../api';

function signinService(params: any) {
  return api.post('/auth/sign-in', params);
}

export default signinService;

