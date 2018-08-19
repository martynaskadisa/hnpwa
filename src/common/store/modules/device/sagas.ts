import { AppState } from 'common/store/types';
import { all, put, select, takeEvery } from 'redux-saga/effects';
import { setBreakpoint, setOnline } from './actions';
import { createBreakpointChannel, createNetworkChannel } from './channels';
import { Breakpoint, BREAKPOINTS } from './constants';

const matchBreakpoint = ({
  min,
  max
}: {
  min: number | null;
  max: number | null;
}): boolean => {
  if (min && max) {
    return window.matchMedia(`(min-width: ${min}px) and (max-width: ${max}px)`)
      .matches;
  }

  if (min && !max) {
    return window.matchMedia(`(min-width: ${min}px)`).matches;
  }

  if (!min && max) {
    return window.matchMedia(`(max-width: ${max}px)`).matches;
  }

  // tslint:disable-next-line:no-console
  console.error('`min` or `max` was not provided to match breakpoint', {
    min,
    max
  });

  return false;
};

const getBreakpoint = (): Breakpoint => {
  const result = BREAKPOINTS.find(point => matchBreakpoint(point));

  if (!result) {
    // tslint:disable-next-line:no-console
    console.error(
      'Failed to detect device breakpoint, fallbacking to extra small'
    );

    return Breakpoint.ExtraSmall;
  }

  return result.breakpoint;
};

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
