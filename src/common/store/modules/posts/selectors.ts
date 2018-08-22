import { AppState } from 'common/store/types';

export const getPostById = (state: AppState, { id }: { id: string }) =>
  state.posts.byId[id];
