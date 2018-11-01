import { RouteNameWithPosts } from 'common/routes';
import { createActionCreator } from 'common/utils/redux';
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
import { ById, CommentIdsById, IdsByPage, VisibilityById } from './types';

export const setPage = createActionCreator<{
  key: RouteNameWithPosts;
  value: number;
}>(SET_PAGE);
export const setById = createActionCreator<ById>(SET_BY_ID);
export const updateById = createActionCreator<ById>(UPDATE_BY_ID);
export const fetchPosts = createActionCreator<RouteNameWithPosts>(FETCH_POSTS);
export const fetchPost = createActionCreator<string>(FETCH_POST);
export const setStatus = createActionCreator<{
  key: RouteNameWithPosts;
  value: Status;
}>(SET_STATUS);
export const updateIdsByPage = createActionCreator<{
  key: RouteNameWithPosts;
  value: IdsByPage;
}>(UPDATE_IDS_BY_PAGE);
export const updateCommentIdsById = createActionCreator<CommentIdsById>(
  UPDATE_COMMENT_IDS_BY_ID
);
export const updateVisibilityById = createActionCreator<VisibilityById>(
  UPDATE_VISIBILITY_BY_ID
);
export const toggleVisibilityById = createActionCreator<string>(
  TOGGLE_VISIBILITY_BY_ID
);
