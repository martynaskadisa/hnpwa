import { all, fork } from 'redux-saga/effects';
import deviceSaga from './modules/device/sagas';
import postsSaga from './modules/posts/sagas';

function* rootSaga() {
  yield all([fork(deviceSaga), fork(postsSaga)]);
}

export default rootSaga;
