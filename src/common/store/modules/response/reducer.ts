import { createReducer, set } from 'common/utils/redux';
import { combineReducers } from 'redux';
import { SET_STATUS_CODE } from './constants';
import { OK } from './status-codes';
import { IState } from './types';

const statusCodeReducer = createReducer<number>(
  {
    [SET_STATUS_CODE]: set
  },
  OK
);

export default combineReducers<IState>({
  statusCode: statusCodeReducer
});
