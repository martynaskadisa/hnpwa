import { createActionCreator } from 'common/utils/redux';
import { IById } from 'common/utils/types';
import {
  FETCH_POST,
  FETCH_POSTS,
  SET_BY_ID,
  SET_PAGE,
  SET_STATUS,
  Status,
  TOGGLE_VISIBILITY_BY_ID,
  UPDATE_BY_ID,
  UPDATE_COMMENT_IDS_BY_ID,
  UPDATE_IDS_BY_PAGE,
  UPDATE_VISIBILITY_BY_ID
} from './constants';
import { IdsByPage, IPost } from './types';

export const setPage = createActionCreator<number>(SET_PAGE);
export const setById = createActionCreator<IById<IPost>>(SET_BY_ID);
export const updateById = createActionCreator<IById<IPost>>(UPDATE_BY_ID);
export const fetchPosts = createActionCreator<never>(FETCH_POSTS);
export const fetchPost = createActionCreator<string>(FETCH_POST);
export const setStatus = createActionCreator<Status>(SET_STATUS);
export const updateIdsByPage = createActionCreator<IdsByPage>(
  UPDATE_IDS_BY_PAGE
);
export const updateCommentIdsById = createActionCreator<
  Record<string, string[]>
>(UPDATE_COMMENT_IDS_BY_ID);
export const updateVisibilityById = createActionCreator<
  Record<string, boolean>
>(UPDATE_VISIBILITY_BY_ID);
export const toggleVisibilityById = createActionCreator<string>(
  TOGGLE_VISIBILITY_BY_ID
);
