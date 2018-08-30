import { createActionCreator } from 'common/utils/redux';
import { IById } from 'common/utils/types';
import {
  FETCH_POST,
  FETCH_POSTS,
  SET_BY_ID,
  SET_PAGE,
  SET_STATUS,
  Status,
  UPDATE_IDS_BY_PAGE
} from './constants';
import { IdsByPage, IPost } from './types';

export const setPage = createActionCreator<number>(SET_PAGE);
export const setById = createActionCreator<IById<IPost>>(SET_BY_ID);
export const fetchPosts = createActionCreator<never>(FETCH_POSTS);
export const fetchPost = createActionCreator<string>(FETCH_POST);
export const setStatus = createActionCreator<Status>(SET_STATUS);
export const updateIdsByPage = createActionCreator<IdsByPage>(
  UPDATE_IDS_BY_PAGE
);
