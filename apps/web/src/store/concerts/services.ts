/* eslint-disable */
import api from 'api';

function userProfilService(id: string): Promise<any> {
  return api.get(`/auth/users/${id}`);
}

function getUsersService({ filters, page, pageSize }): Promise<any> {
  return api.get(
    `/auth/users${
      filters
        ? `?filters=${filters}&page=${page}&pageSize=${pageSize}`
        : `?page=${page}&pageSize=${pageSize}`
    }`,
  );
}

export { getUsersService, userProfilService };
