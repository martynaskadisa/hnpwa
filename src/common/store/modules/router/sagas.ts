import { routes } from 'common/routes';
import { fetchPosts } from 'common/store/modules/posts/sagas';
import { setStatusCode } from 'common/store/modules/response/actions';
import { NOT_FOUND } from 'common/store/modules/response/status-codes';
import { AppState } from 'common/store/types';
import { LOCATION_CHANGE, RouterAction } from 'connected-react-router';
import { call, fork, put, select, takeEvery } from 'redux-saga/effects';

function* handleRouteChange(action: RouterAction) {
  yield put({ type: 'listening-to-route-change', payload: action });
}

function* watchRouteChanges() {
  yield takeEvery(LOCATION_CHANGE, handleRouteChange);
}

function* applyHomeRouteEffects() {
  yield call(fetchPosts);
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
