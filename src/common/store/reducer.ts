import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import device from './modules/device/reducer';
import posts from './modules/posts/reducer';
import response from './modules/response/reducer';

const createReducer = (history: History) =>
  connectRouter(history)(
    combineReducers({
      device,
      posts,
      response
    })
  );

export default createReducer;
