/* eslint-disable */
import api from 'api2';

function getConcertService(id: string): Promise<any> {
  return api.get(`/concerts/${id}`);
}

function getConcertsService({ filters, page, pageSize }): Promise<any> {
  return api.get('/concerts?page=1&pageSize=5');

  /*return api.get(
    `/concerts${
      filters
        ? `?filters=${filters}&page=${page}&pageSize=${pageSize}`
        : `?page=${page}&pageSize=${pageSize}`
    }`,
  );*/
}

export { getConcertsService, getConcertService };
