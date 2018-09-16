import { createReducer, set, update, updateDeep } from 'common/utils/redux';
import { combineReducers } from 'redux';
import { IById } from '../../../utils/types';
import {
  SET_BY_ID,
  SET_PAGE,
  SET_STATUS,
  Status,
  UPDATE_BY_ID,
  UPDATE_IDS_BY_PAGE
} from './constants';
import { IdsByPage, IPost, IState } from './types';

const byIdReducer = createReducer<IById<IPost>>(
  {
    [SET_BY_ID]: set,
    [UPDATE_BY_ID]: updateDeep
  },
  {}
);

const pageReducer = createReducer<number>(
  {
    [SET_PAGE]: set
  },
  1
);

const statusReducer = createReducer<Status>(
  {
    [SET_STATUS]: set
  },
  Status.Idle
);

const idsByPageReducer = createReducer<IdsByPage>(
  {
    [UPDATE_IDS_BY_PAGE]: update
  },
  {}
);

export default combineReducers<IState>({
  page: pageReducer,
  idsByPage: idsByPageReducer,
  byId: byIdReducer,
  status: statusReducer
});
