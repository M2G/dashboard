/* eslint-disable */
import api from '../../api';

function forgotPasswordService(params: object): Promise<any> {
  return api.post('https://sso.stayinshape.fit/auth/change-password', params);
}

function userProfilService(id: number): Promise<any> {
  return api.get(`/users/${id}`);
}

function updateUserProfilService(id: number, params: any): Promise<any> {
 return api.put(`/users/${id}`, params);
}

export {
  forgotPasswordService,
  userProfilService,
  updateUserProfilService
};
