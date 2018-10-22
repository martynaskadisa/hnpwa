import request from 'common/utils/request';
import { API_BASE_URL } from './constants';
import { IFeedItem } from './types';

export type Feed = 'news' | 'newest' | 'ask' | 'show' | 'jobs';

export const getFeed = (feed: Feed, page: number = 1): Promise<IFeedItem[]> =>
  request(`${API_BASE_URL}/${feed}/${page}.json`).then(req => req.json());
