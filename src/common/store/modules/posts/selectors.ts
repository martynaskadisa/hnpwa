import { RouteNameWithPosts } from 'common/routes';
import { AppState } from 'common/store/types';
import { createSelector } from 'reselect';
import { IPost } from './types';

export const getById = (
  state: AppState,
  { id }: { id: string }
): IPost | undefined => state.posts.byId[id];

interface IOwnPropsWithRoute {
  route: RouteNameWithPosts;
}

export const getIds = createSelector(
  (state: AppState, { route }: IOwnPropsWithRoute) =>
    state.posts.dataByRoute[route].idsByPage,
  (state: AppState, { route }: IOwnPropsWithRoute) =>
    state.posts.dataByRoute[route].page,
  (idsByPage, page) => idsByPage[page] || []
);

export const getNextPage = (state: AppState, { route }: IOwnPropsWithRoute) =>
  state.posts.dataByRoute[route].page + 1;
export const getPrevPage = (state: AppState, { route }: IOwnPropsWithRoute) =>
  state.posts.dataByRoute[route].page > 1
    ? state.posts.dataByRoute[route].page - 1
    : null;

export const getPageLength = createSelector(
  (state: AppState, { route }: IOwnPropsWithRoute) =>
    state.posts.dataByRoute[route].idsByPage,
  (state: AppState, { route }: IOwnPropsWithRoute) =>
    state.posts.dataByRoute[route].page,
  (idsByPage, page) => (idsByPage[page] ? idsByPage[page].length : 0)
);

export const getVisibility = (state: AppState, { id }: { id: string }) =>
  state.posts.visibilityById[id];
