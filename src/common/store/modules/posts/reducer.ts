import { RouteNameWithPosts } from 'common/routes';
import {
  createReducer,
  set,
  setByKey,
  update,
  updateByKey,
  updateDeep
} from 'common/utils/redux';
import { IById } from 'common/utils/types';
import { combineReducers } from 'redux';
import {
  SET_BY_ID,
  SET_PAGE,
  SET_STATUS,
  Status,
  UPDATE_BY_ID,
  UPDATE_COMMENT_IDS_BY_ID,
  UPDATE_IDS_BY_PAGE,
  UPDATE_VISIBILITY_BY_ID
} from './constants';
import { DataByRoute, IdsByPage, IPost, IRouteData, IState } from './types';

const byIdReducer = createReducer<IById<IPost>>(
  {
    [SET_BY_ID]: set,
    [UPDATE_BY_ID]: updateDeep
  },
  {}
);

const createPageReducer = (route: RouteNameWithPosts) =>
  createReducer<number>(
    {
      [SET_PAGE]: setByKey(route)
    },
    1
  );

const createStatusReducer = (route: RouteNameWithPosts) =>
  createReducer<Status>(
    {
      [SET_STATUS]: setByKey(route)
    },
    Status.Idle
  );

const createIdsByPageReducer = (route: RouteNameWithPosts) =>
  createReducer<IdsByPage>(
    {
      [UPDATE_IDS_BY_PAGE]: updateByKey(route)
    },
    {}
  );

const commentIdsByIdReducer = createReducer<Record<string, string[]>>(
  {
    [UPDATE_COMMENT_IDS_BY_ID]: update
  },
  {}
);

const visibilityByIdReducer = createReducer<Record<string, boolean>>(
  {
    [UPDATE_VISIBILITY_BY_ID]: update
  },
  {}
);

const dataByRouteReducer = combineReducers<DataByRoute>({
  top: combineReducers<IRouteData>({
    idsByPage: createIdsByPageReducer('top'),
    page: createPageReducer('top'),
    status: createStatusReducer('top')
  }),
  new: combineReducers<IRouteData>({
    idsByPage: createIdsByPageReducer('new'),
    page: createPageReducer('new'),
    status: createStatusReducer('new')
  }),
  show: combineReducers<IRouteData>({
    idsByPage: createIdsByPageReducer('show'),
    page: createPageReducer('show'),
    status: createStatusReducer('show')
  }),
  ask: combineReducers<IRouteData>({
    idsByPage: createIdsByPageReducer('ask'),
    page: createPageReducer('ask'),
    status: createStatusReducer('ask')
  }),
  jobs: combineReducers<IRouteData>({
    idsByPage: createIdsByPageReducer('jobs'),
    page: createPageReducer('jobs'),
    status: createStatusReducer('jobs')
  })
});

export default combineReducers<IState>({
  byId: byIdReducer,
  commentIdsById: commentIdsByIdReducer,
  visibilityById: visibilityByIdReducer,
  dataByRoute: dataByRouteReducer
});
