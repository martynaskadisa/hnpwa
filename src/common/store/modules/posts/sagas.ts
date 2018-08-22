import { getNews } from 'common/api/news';
import { IAction } from 'common/utils/redux';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { fetchPostsEnd, fetchPostsStart, setById, setIds } from './actions';
import { FETCH_POSTS } from './constants';
import { extractIds, normalizePosts } from './transformers';

export function* fetchPosts(action: IAction<number>) {
  yield put(fetchPostsStart());

  const page = action.payload || 1;

  const posts = yield call(getNews, page);
  const byId = normalizePosts(posts);
  const ids = extractIds(posts);

  yield put(setById(byId));
  yield put(setIds(ids));
  yield put(fetchPostsEnd());
}

function* watchFetchRequests() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default function* rootSaga() {
  yield fork(watchFetchRequests);
}
