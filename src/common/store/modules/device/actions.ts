import { createActionCreator } from 'common/utils/redux';
import { Breakpoint, SET_BREAKPOINT, SET_ONLINE } from './constants';

export const setOnline = createActionCreator<boolean>(SET_ONLINE);
export const setBreakpoint = createActionCreator<Breakpoint>(SET_BREAKPOINT);
