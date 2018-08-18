import { put, takeLatest } from 'redux-saga/effects';
import { setOnline } from './actions';
import { DETECT_NETWORK_STATUS } from './constants';

function* detectNetworkStatus() {
  const online =
    process.env.TARGET === 'browser' ? window.navigator.onLine : true;

  yield put(setOnline(online));
}

function* root() {
  yield takeLatest(DETECT_NETWORK_STATUS, detectNetworkStatus);
}

export default root;
