import { AppState } from 'common/store/types';
import { all, put, select, takeEvery } from 'redux-saga/effects';
import { setBreakpoint, setOnline } from './actions';
import { getBreakpoint } from './breakpoint';
import { createBreakpointChannel, createNetworkChannel } from './channels';

function* detectBreakpoint() {
  if (process.env.TARGET !== 'browser') {
    return;
  }

  const breakpoint = getBreakpoint();
  const state: AppState = yield select();

  if (state.device.breakpoint === breakpoint) {
    return;
  }

  yield put(setBreakpoint(breakpoint));
}

function* watchBreakpointChange() {
  const breakpointChannel = createBreakpointChannel();

  yield detectBreakpoint();
  yield takeEvery(breakpointChannel, detectBreakpoint);
}

function* detectNetworkStatus() {
  const online =
    process.env.TARGET === 'browser' ? window.navigator.onLine : true;

  yield put(setOnline(online));
}

function* watchNetworkStatus() {
  const networkChannel = createNetworkChannel();

  yield detectNetworkStatus();
  yield takeEvery(networkChannel, detectNetworkStatus);
}

function* root() {
  yield all([watchNetworkStatus(), watchBreakpointChange()]);
}

export default root;
