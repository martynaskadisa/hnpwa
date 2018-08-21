import { createReducer, set } from 'common/utils/redux';
import { combineReducers } from 'redux';
import { IById } from '../../../utils/types';
import { SET_BY_ID, SET_IDS, SET_STATUS, Status } from './constants';
import { IPost, IState } from './types';

const idsReducer = createReducer<string[]>(
  {
    [SET_IDS]: set
  },
  []
);

const byIdReducer = createReducer<IById<IPost>>(
  {
    [SET_BY_ID]: set
  },
  {}
);

const statusReducer = createReducer<Status>(
  {
    [SET_STATUS]: set
  },
  Status.Idle
);

export default combineReducers<IState>({
  ids: idsReducer,
  byId: byIdReducer,
  status: statusReducer
});
