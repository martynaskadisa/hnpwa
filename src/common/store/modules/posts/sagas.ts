import { getItem } from 'common/api/item';
import { getNews } from 'common/api/news';
import { IFeedItem, Item } from 'common/api/types';
import { AppState } from 'common/store/types';
import { IAction } from 'common/utils/redux';
import { call, fork, put, select, take } from 'redux-saga/effects';
import {
  setStatus,
  updateById,
  updateCommentIdsById,
  updateIdsByPage
} from './actions';
import { FETCH_POST, FETCH_POSTS, Status } from './constants';
import {
  extractIds,
  normalizeComments,
  normalizeItem,
  normalizePosts
} from './transformers';

export function* fetchPosts(page = 1) {
  yield put(setStatus(Status.Fetching));

  const posts: IFeedItem[] = yield call(getNews, page);
  const byId = normalizePosts(posts);
  const ids = extractIds(posts);

  yield put(updateById(byId));
  yield put(updateIdsByPage({ [page]: ids }));
  yield put(setStatus(Status.Idle));
}

export function* fetchPost(id: string) {
  const item: Item = yield call(getItem, id);
  const post = normalizeItem(item);
  const { byId, idsByItemId } = normalizeComments(item);

  yield put(updateById({ [post.id]: post, ...byId }));
  yield put(updateCommentIdsById(idsByItemId));
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

export default function* rootSaga() {
  if (process.env.TARGET !== 'browser') {
    return;
  }

  yield fork(watchFetchPostsRequests);
  yield fork(watchFetchPostRequests);
}
