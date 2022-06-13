/* eslint-disable */
import api from 'api';

function forgotPasswordService(params: object): Promise<any> {
  console.log('params', params);
  return api.post('/auth/forgot-password', params);
}

function recoverPasswordService(params: object): Promise<any> {
  console.log('params', params);
  return api.post('/auth/reset-password', params);
}

function userProfilService(id: number): Promise<any> {
  return api.get(`/users/${id}`);
}

function createUserProfilService(params: any): Promise<any> {
  return api.put(`/users/`, params);
}

function updateUserProfilService({ _id, ...params }: any): Promise<any> {
  return api.put(`/auth/users/${_id}`, params);
}

function getUsersService(data: string): Promise<any> {
  return api.get(`/auth/users${data ? `?search=${data}` : ''}`);
}

function deleteUsersService(id: string): Promise<any> {
  return api.delete(`/auth/users/${id}`);
}

export {
  forgotPasswordService,
  recoverPasswordService,
  getUsersService,
  createUserProfilService,
  userProfilService,
  updateUserProfilService,
  deleteUsersService,
};
