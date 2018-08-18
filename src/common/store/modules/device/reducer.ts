import { createReducer, set } from 'common/utils/redux';
import { combineReducers } from 'redux';
import {
  SET_BREAKPOINT,
  SET_ONLINE,
  SET_SERVICE_WORKER_STATUS
} from './constants';
import { Breakpoint, IState, ServiceWorkerStatus } from './types';

const onlineReducer = createReducer<boolean>(
  {
    [SET_ONLINE]: set
  },
  false
);

const breakpointReducer = createReducer<Breakpoint>(
  {
    [SET_BREAKPOINT]: set
  },
  Breakpoint.ExtraSmall
);

const serviceWorkerStatusReducer = createReducer<ServiceWorkerStatus>(
  {
    [SET_SERVICE_WORKER_STATUS]: set
  },
  ServiceWorkerStatus.NotInstalled
);

export default combineReducers<IState>({
  online: onlineReducer,
  breakpoint: breakpointReducer,
  serviceWorkerStatus: serviceWorkerStatusReducer
});
