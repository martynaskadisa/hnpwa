import { all, fork } from 'redux-saga/effects';
import deviceSaga from './modules/device/sagas';
import postsSaga from './modules/posts/sagas';
import routerSaga from './modules/router/sagas';

function* rootSaga() {
  yield all([fork(deviceSaga), fork(postsSaga), fork(routerSaga)]);
}

export default rootSaga;
