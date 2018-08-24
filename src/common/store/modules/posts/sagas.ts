import { getNews } from 'common/api/news';
import { AppState } from 'common/store/types';
import { call, fork, put, select, take } from 'redux-saga/effects';
import { setById, setStatus, updateIdsByPage } from './actions';
import { FETCH_POSTS, Status } from './constants';
import { extractIds, normalizePosts } from './transformers';

export function* fetchPosts(page = 1) {
  yield put(setStatus(Status.Fetching));

  const posts = yield call(getNews, page);
  const byId = normalizePosts(posts);
  const ids = extractIds(posts);

  yield put(setById(byId));
  yield put(updateIdsByPage({ [page]: ids }));
  yield put(setStatus(Status.Idle));
}

function* watchFetchRequests() {
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

  yield fork(watchFetchRequests);
}
