export const SET_IDS = 'posts/SET_IDS';
export const SET_BY_ID = 'posts/SET_BY_ID';
export const FETCH_POSTS = 'posts/FETCH_POSTS';
export const FETCH_POSTS_START = 'posts/FETCH_POSTS_START';
export const FETCH_POSTS_END = 'posts/FETCH_POSTS_END';
export const SET_STATUS = 'posts/SET_STATUS';

export enum Status {
  Idle = 'idle',
  Fetching = 'fetching',
  Error = 'error'
}
