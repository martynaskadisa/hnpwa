import request from 'common/utils/request';
import { API_BASE_URL } from './constants';
import { IFeedItem } from './types';

export const getNews = (page: number = 1): Promise<IFeedItem[]> =>
  request(`${API_BASE_URL}/news/${page}.json`).then(req => req.json());
