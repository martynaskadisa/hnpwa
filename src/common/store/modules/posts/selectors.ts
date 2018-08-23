import { AppState } from 'common/store/types';

interface IProps {
  id: string;
}

export const getPostById = (state: AppState, { id }: IProps) =>
  state.posts.byId[id];

export const getPostRankById = (
  state: AppState,
  { id }: IProps
): number | null => {
  const index = state.posts.ids.findIndex(x => x === id);

  if (index === -1) {
    return null;
  }

  return index + 1;
};
