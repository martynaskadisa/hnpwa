import { AppState } from 'common/store/types';
import { createSelector } from 'reselect';
import { IPost } from './types';

interface IProps {
  id: string;
}

export const getPostById = (
  state: AppState,
  { id }: IProps
): IPost | undefined => state.posts.byId[id];

export const getIds = createSelector(
  (state: AppState) => state.posts.idsByPage,
  (state: AppState) => state.posts.page,
  (idsByPage, page) => idsByPage[page] || []
);

export const getNextPage = (state: AppState) => state.posts.page + 1;
export const getPrevPage = (state: AppState) =>
  state.posts.page > 1 ? state.posts.page - 1 : null;
