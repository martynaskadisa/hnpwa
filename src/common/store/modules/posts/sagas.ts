import { getNews } from 'common/api/news';
import { IAction } from 'common/utils/redux';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { setById, setIds, setStatus } from './actions';
import { FETCH_POSTS, Status } from './constants';
import { extractIds, normalizePosts } from './transformers';

export function* fetchPosts(action: Partial<IAction<number>> = { payload: 1 }) {
  yield put(setStatus(Status.Fetching));

  const page = action.payload;

  const posts = yield call(getNews, page);
  const byId = normalizePosts(posts);
  const ids = extractIds(posts);

  yield put(setById(byId));
  yield put(setIds(ids));
  yield put(setStatus(Status.Idle));
}

function* watchFetchRequests() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default function* rootSaga() {
  if (process.env.TARGET !== 'browser') {
    return;
  }

  yield fork(watchFetchRequests);
}
