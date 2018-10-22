import { getItem } from 'common/api/item';
import { Feed, getFeed } from 'common/api/news';
import { IFeedItem, Item } from 'common/api/types';
import { RouteNameWithPosts } from 'common/routes';
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

const feedByRoute: Record<RouteNameWithPosts, Feed> = {
  top: 'news',
  new: 'newest',
  show: 'show',
  ask: 'ask',
  jobs: 'jobs'
};

export function* fetchPosts(route: RouteNameWithPosts, page = 1) {
  yield put(setStatus({ key: route, value: Status.Fetching }));

  try {
    const posts: IFeedItem[] = yield call(getFeed, feedByRoute[route], page);
    const byId = normalizePosts(posts);
    const ids = extractIds(posts);

    yield put(updateById(byId));
    yield put(updateIdsByPage({ value: { [page]: ids }, key: route }));
    yield put(setStatus({ key: route, value: Status.Idle }));
  } catch (e) {
    yield put(setStatus({ key: route, value: Status.Error }));
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
    const { payload: route }: IAction<RouteNameWithPosts> = yield take(
      FETCH_POSTS
    );

    if (route) {
      const page: number = yield select(
        (state: AppState) => state.posts.dataByRoute[route].page
      );

      yield call(fetchPosts, route, page);
    }
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
