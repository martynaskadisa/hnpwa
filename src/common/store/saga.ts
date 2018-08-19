import { all, fork } from 'redux-saga/effects';
import deviceSaga from './modules/device/sagas';

function* rootSaga() {
  yield all([fork(deviceSaga)]);
}

export default rootSaga;
