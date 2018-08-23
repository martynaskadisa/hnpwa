import { DeepPartial } from 'common/utils/types';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';
import { AppState } from './types';

const devTool =
  process.env.TARGET === 'browser' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : <T>(f: T): T => f;

const configureStore = (
  history: History,
  preloadedState?: DeepPartial<AppState>
) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, routerMiddleware(history)];
  const reducer = createReducer(history);

  const enhancedCreateStore = compose<typeof createStore>(
    applyMiddleware(...middleware),
    devTool
  )(createStore);

  const store = enhancedCreateStore(reducer, preloadedState!);

  return {
    ...store,
    runSaga: sagaMiddleware.run
  };
};

export default configureStore;
