import { createActionCreator } from 'common/utils/redux';
import { SET_STATUS_CODE } from './constants';

export const setStatusCode = createActionCreator<number>(SET_STATUS_CODE);
