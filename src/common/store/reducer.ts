import { combineReducers } from 'redux';
import device from './modules/device/reducer';

const reducer = combineReducers({
  device
});

export default reducer;
