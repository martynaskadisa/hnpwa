import { createActionCreator } from 'common/utils/redux';
import { SET_ONLINE } from './constants';

export const setOnline = createActionCreator<boolean>(SET_ONLINE);
