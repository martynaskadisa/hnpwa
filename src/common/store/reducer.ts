import { combineReducers } from 'redux';
import device from './modules/device/reducer';
import posts from './modules/posts/reducer';

const reducer = combineReducers({
  device,
  posts
});

export default reducer;
