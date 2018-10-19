export const SET_BY_ID = 'posts/SET_BY_ID';
export const UPDATE_BY_ID = 'posts/UPDATE_BY_ID';
export const FETCH_POSTS = 'posts/FETCH_POSTS';
export const FETCH_POST = 'posts/FETCH_POST';
export const SET_STATUS = 'posts/SET_STATUS';
export const SET_PAGE = 'posts/SET_PAGE';
export const UPDATE_IDS_BY_PAGE = 'posts/UPDATE_IDS_BY_PAGE';
export const UPDATE_COMMENT_IDS_BY_ID = 'posts/UPDATE_COMMENT_IDS_BY_ID';
export const UPDATE_VISIBILITY_BY_ID = 'posts/UPDATE_VISIBILITY_BY_ID';
export const TOGGLE_VISIBILITY_BY_ID = 'posts/TOGGLE_VISIBILITY_BY_ID';

export enum Status {
  Idle = 'idle',
  Fetching = 'fetching',
  Error = 'error'
}
