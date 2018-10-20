import { getItem } from 'common/api/item';
import { getNews } from 'common/api/news';
import { IFeedItem, Item } from 'common/api/types';
import { getVisibility } from 'common/store/modules/posts/selectors';
import { AppState } from 'common/store/types';
import { IAction } from 'common/utils/redux';
import { all, call, fork, put, select, take } from 'redux-saga/effects';
import {
  setStatus,
  updateById,
  updateCommentIdsById,
  updateIdsByPage,
  updateVisibilityById
} from './actions';
import {
  FETCH_POST,
  FETCH_POSTS,
  Status,
  TOGGLE_VISIBILITY_BY_ID
} from './constants';
import {
  extractIds,
  normalizeComments,
  normalizeItem,
  normalizePosts
} from './transformers';

export function* fetchPosts(page = 1) {
  yield put(setStatus(Status.Fetching));

  try {
    const posts: IFeedItem[] = yield call(getNews, page);
    const byId = normalizePosts(posts);
    const ids = extractIds(posts);

    yield put(updateById(byId));
    yield put(updateIdsByPage({ [page]: ids }));
    yield put(setStatus(Status.Idle));
  } catch (e) {
    yield put(setStatus(Status.Error));
  }
}

export function* fetchPost(id: string) {
  const item: Item = yield call(getItem, id);
  const post = normalizeItem(item);
  const commentIdsByPostId = { [post.id]: item.comments.map(x => x.id) };
  const { byId, idsByItemId } = normalizeComments(item);
  const prevVisibilityById = yield select(
    (state: AppState) => state.posts.visibilityById
  );
  const nextVisibilityById = Object.keys(byId).reduce(
    (acc, commentId) => {
      const value = prevVisibilityById[commentId];

      if (typeof value === 'boolean') {
        acc[commentId] = value;
      } else {
        acc[commentId] = true;
      }

      return acc;
    },
    {} as Record<string, boolean>
  );

  yield put(updateById({ [post.id]: post, ...byId }));
  yield put(updateVisibilityById(nextVisibilityById));
  yield put(updateCommentIdsById({ ...commentIdsByPostId, ...idsByItemId }));
}

function* watchFetchPostRequests() {
  while (true) {
    const action: IAction<string> = yield take(FETCH_POST);

    yield call(fetchPost, action.payload!);
  }
}

function* watchFetchPostsRequests() {
  while (true) {
    yield take(FETCH_POSTS);
    const {
      posts: { page }
    }: AppState = yield select();

    yield call(fetchPosts, page);
  }
}

function* togglePostVisibility(id: string) {
  const isVisible = yield select((state: AppState) =>
    getVisibility(state, { id })
  );

  yield put(updateVisibilityById({ [id]: !isVisible }));
}

function* watchPostVisibilityToggle() {
  while (true) {
    const { payload }: IAction<string> = yield take(TOGGLE_VISIBILITY_BY_ID);

    yield call(togglePostVisibility, payload!);
  }
}

export default function* rootSaga() {
  if (process.env.TARGET !== 'browser') {
    return;
  }

  yield all([
    fork(watchFetchPostsRequests),
    fork(watchFetchPostRequests),
    fork(watchPostVisibilityToggle)
  ]);
}
