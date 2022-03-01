/* eslint-disable */
import api from 'api';

function forgotPasswordService(params: object): Promise<any> {
  return api.post('/auth/change-password', params);
}

function userProfilService(id: number): Promise<any> {
  return api.get(`/users/${id}`);
}

function createUserProfilService(params: any): Promise<any> {
  return api.put(`/users/`, params);
}

function updateUserProfilService(id: number, params: any): Promise<any> {
  return api.put(`/users/${id}`, params);
}

function getUsersService(): Promise<any> {
  return api.get('/auth/users');
}

export {
  getUsersService,
  forgotPasswordService,
  createUserProfilService,
  userProfilService,
  updateUserProfilService,
};
