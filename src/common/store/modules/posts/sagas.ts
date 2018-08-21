import { fork, put, take } from 'redux-saga/effects';
import { fetchPostsEnd, fetchPostsStart } from './actions';
import { FETCH_POSTS } from './constants';

function* fetchPosts() {
  yield take(FETCH_POSTS);
  yield put(fetchPostsStart());
  yield put(fetchPostsEnd());
}

export default function* rootSaga() {
  yield fork(fetchPosts);
}
