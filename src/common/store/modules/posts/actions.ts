import { createActionCreator } from 'common/utils/redux';
import { IById } from 'common/utils/types';
import {
  FETCH_POSTS,
  SET_BY_ID,
  SET_IDS,
  SET_STATUS,
  Status
} from './constants';
import { IPost } from './types';

export const setById = createActionCreator<IById<IPost>>(SET_BY_ID);
export const setIds = createActionCreator<string[]>(SET_IDS);
export const fetchPosts = createActionCreator<never>(FETCH_POSTS);
export const setStatus = createActionCreator<Status>(SET_STATUS);
