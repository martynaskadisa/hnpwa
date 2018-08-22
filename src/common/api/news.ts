import request from 'common/utils/request';
import { API_BASE_URL } from './constants';

export const getNews = (page: number = 1) =>
  request(`${API_BASE_URL}/news/${page}.json`).then(req => req.json());
