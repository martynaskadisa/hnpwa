import request from 'common/utils/request';
import { API_BASE_URL } from './constants';
import { Item } from './types';

export const getItem = (id: string): Promise<Item[]> =>
  request(`${API_BASE_URL}/item/${id}.json`).then(req => req.json());
