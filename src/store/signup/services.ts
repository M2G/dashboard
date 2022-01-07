/* eslint-disable */
//@ts-ignore
import faker from 'faker';
import api from '../../api';

function signupUserService(params: any){
  return api.post('/auth/sign-up', params);
}

export default signupUserService;
