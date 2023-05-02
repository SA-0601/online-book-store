import sendRequest from './send-request';

const BASE_URL = '/api/admin';

export function getAll() {
  return sendRequest(`${BASE_URL}/books`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}