import { mergeDeepLeft } from 'ramda';

export interface IAction<T> {
  type: string;
  payload?: T;
}

export type Reducer<S, P> = (state: S, action: IAction<P>) => S;

export const createActionCreator = <P = any>(type: string) => (
  payload?: P
): IAction<P> => ({ type, payload });

interface IReducersMap<S> {
  [actionType: string]: Reducer<S, any>;
}

export const createReducer = <S>(
  reducersMap: IReducersMap<S>,
  defaultState: S
) => (state = defaultState, action: IAction<any>): S =>
  reducersMap.hasOwnProperty(action.type)
    ? reducersMap[action.type](state, action)
    : state;

export const set = <T>(_: any, action: IAction<T>) => action.payload;

export interface ISetByKeyActionPayload<T> {
  key: string;
  value: T;
}

export const setByKey = <S, T extends ISetByKeyActionPayload<any> = any>(
  key: string
) => (state: S, action: IAction<T>): S =>
  action.payload!.key === key ? action.payload!.value : state;

export const update = <T>(state: T, action: IAction<T>): T => ({
  ...(state as any),
  ...(action.payload as any)
});

export const updateDeep = <T, P>(state: T, action: IAction<P>): T & P =>
  mergeDeepLeft(state, action.payload!);
