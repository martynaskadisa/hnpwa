import { routes } from 'common/routes';
import { fetchPosts, setPage } from 'common/store/modules/posts/actions';
import { fetchPosts as fetchPostsSaga } from 'common/store/modules/posts/sagas';
import { setStatusCode } from 'common/store/modules/response/actions';
import { NOT_FOUND } from 'common/store/modules/response/status-codes';
import { AppState } from 'common/store/types';
import { LOCATION_CHANGE, replace } from 'connected-react-router';
import { call, fork, put, select, takeEvery } from 'redux-saga/effects';

function* watchRouteChanges() {
  yield takeEvery(LOCATION_CHANGE, applyRouteEffects);
}

function* applyHomeRouteEffects() {
  const page = 1;
  yield put(replace(routes.top.generatePath(page)));
  yield put(setPage(page));

  if (process.env.TARGET === 'browser') {
    yield put(fetchPosts());
  } else {
    yield call(fetchPostsSaga, page);
  }
}

function* applyTopRouteEffects() {
  const { router }: AppState = yield select();

  const match = routes.top.match(router.location.pathname);

  if (!match) {
    return;
  }

  const page = parseInt(match.params.page, 10);
  yield put(setPage(page));

  if (process.env.TARGET === 'browser') {
    yield put(fetchPosts());
  } else {
    yield call(fetchPostsSaga, page);
  }
}

function* applyNotFoundRouteEffects() {
  yield put(setStatusCode(NOT_FOUND));
}

function* applyRouteEffects() {
  const {
    router: {
      location: { pathname }
    }
  }: AppState = yield select();

  if (routes.home.match(pathname)) {
    return yield fork(applyHomeRouteEffects);
  }

  if (routes.top.match(pathname)) {
    return yield fork(applyTopRouteEffects);
  }

  if (routes.new.match(pathname)) {
    return;
  }

  if (routes.show.match(pathname)) {
    return;
  }

  return yield fork(applyNotFoundRouteEffects);
}

export default function* rootSaga() {
  if (process.env.TARGET === 'browser') {
    yield fork(watchRouteChanges);
  } else {
    yield fork(applyRouteEffects);
  }
}
